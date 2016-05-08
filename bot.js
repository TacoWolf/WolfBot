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
'use strict';
// Load WolfBot library
var wolfbot = require('./lib');
// Load requirements
var bark = require('./scripts/bark.js');
// Declare variables
var bot = wolfbot.core.bot;
var logger = wolfbot.core.logger;
var database = wolfbot.database;
var keepAlive = wolfbot.keepAlive;
var keywordIndex = wolfbot.scripts.index();
var keywordMatch = wolfbot.scripts.match;
var keywordContext = wolfbot.scripts.context;
bot.on('ready', function() {
  logger('info', 'Connected to Discord!');
  logger('info', 'Servers connected to:');
  for (var key in bot.servers) {
    logger('info', bot.servers[key].name + ' - (' + bot.servers[key].id + ')');
  }
  if (process.env.DEBUG) {
    logger('info', 'Grabbing bot configuration...');
    require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));
    logger('info', bot.username + ' config successfully generated.');
  }
  logger('info', 'Updating database with new information...');
  wolfbot.database.seed(logger, bot);
});

function messageCheck(event) {
  var m = true;
  for (var i = keywordIndex.length - 1; i >= 0; i--) {
    var match = keywordMatch(keywordIndex[i], event.message);
    if (match) {
      var command = keywordContext(event);
      command(event);
      m = false;
      return;
    }
  }
  if (m === true) {
    bark.command(event);
  }
}
bot.on('message', function(user, userID, channelID, message) {
  var botMention = new RegExp('(<@(\!|\&)?' + bot.id + '>)', '');
  var serverID = bot.serverFromChannel(channelID);
  var event = {
    bot: bot,
    user: user,
    userID: userID,
    serverID: serverID,
    channelID: channelID,
    message: message,
    rawMessage: message,
    storage: database,
    logger: logger,
    pm: false
  };
  var msg = '';
  if (!event.serverID) {
    msg = 'PM (' + event.channelID + ')' + ' | ' + user + ' - ' + message;
    event.pm = true;
    event.server = event.channelID;
    logger('chat', msg, event);
  } else {
    event.server = bot.servers[serverID].name;
    event.channel = bot.servers[serverID].channels[channelID].name;
    msg = event.server + ' | #' + event.channel +' | ';
    msg += user + ' - ' + message;
    logger('chat', msg, event);
  }
  if (userID === bot.id) {
    return;
  } else {
    var mentionMatcher = event.message.match(botMention);
    if (message.charAt(0) === process.env.WOLFBOT_TRIGGER) {
      event.message = message.substring(1).trim();
      messageCheck(event);
    } else if (mentionMatcher[0]) {
      msg = message.replace(mentionMatcher[0], '').trim();
      event.message = msg;
      messageCheck(event);
    }
  }
});

keepAlive.start(logger);
