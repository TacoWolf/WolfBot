//                      .
//                     / V\ - Awoooo~!
//                   / `  /
//                  <<   |
//                  /    |
//                /      |  _    _       _  ________       _   
//              /        | | |  | |     | |/ _| ___ \     | |   
//            /    \  \ /  | |  | | ___ | | |_| |_/ / ___ | |_ 
//           (      ) | |  | |/\| |/ _ \| |  _| ___ \/ _ \| __|
//   ________|   _/_  | |  \  /\  / (_) | | | | |_/ / (_) | |_ 
// <__________\______)\__)  \/  \/ \___/|_|_| \____/ \___/ \__|
// ---------------------------------------------------------------
// | Author: TacoWolf                                            |
// | Team: thattacoguy                                           |
// | Name: WolfBot                                               |
// | Download: https://github.com/TacoWolf/WolfBot               |
// | Version: v1.0                                               |
// | License: MIT                                                |
// | Year: 2016                                                  |
// ---------------------------------------------------------------

// Load WolfBot library
var wolfbot = require('./lib');

// Load requirements
var async = require('async');
var helpers = require(__dirname + '/helpers/');

// Declare variables
var bot = wolfbot.core.bot;
var logger = wolfbot.core.logger;
var database = wolfbot.database;
var keywordIndex = wolfbot.scripts.index();
var keywordMatch = wolfbot.scripts.match;
var keywordContext = wolfbot.scripts.context;



bot.on('ready', function(rawEvent) {
    logger('info', 'Connected to Discord!')
    logger('info', 'Servers connected to:')
    for (var key in bot.servers) {
        logger('info', bot.servers[key].name + ' - (' + bot.servers[key].id + ')');
    }
    if (process.env.DEBUG) {
        logger('info', 'Grabbing bot configuration...')
        require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));
        logger('info', bot.username + ' config successfully generated.');
    }
    logger('info', 'Updating database with new information...')
    wolfbot.database.seed(logger, bot);
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var event = {
        bot: bot,
        user: user,
        userID: userID,
        serverID: serverID,
        channelID: channelID,
        message: message,
        storage: database,
        logger: logger
    };
    var botMention = new RegExp('<@' + bot.id + '>', '')
    var serverID = bot.serverFromChannel(channelID);
    logger('chat', bot.servers[serverID].name + ' | ' + user + ' - ' + message);
    if (userID === bot.id) {
        return;
    } else {
        if (message.charAt(0) === process.env.WOLFBOT_TRIGGER) {
            event.message = message.substring(1).toLowerCase().trim();
            async.each(keywordIndex, function(keyword, callback) {
                var match = keywordMatch(keyword, event.message);
                if (!match) {
                    callback();
                } else {
                    command = keywordContext(event);
                    command(event);
                    return;
                }
            });
        } else if (botMention.test(event.message)) {
            event.message = message.replace('<@' + bot.id + '> ', '').toLowerCase().trim();
            async.each(keywordIndex, function(keyword, callback) {
                var match = keywordMatch(keyword, event.message);
                if (!match) {
                    callback();
                } else {
                    command = keywordContext(event);
                    command(event);
                    return;
                }
            });
        }
    }
});
