// ===========================================================
//          _
//        / \      _-'
//      _/|  \-''- _ /
// __-' { |          \
//     /             \
//     /        ^    ^}  
//     |            \ ;     
//                   ',     
//        \_         __\  _    _       _  ________       _   
//          ''-_    \.// | |  | |     | |/ _| ___ \     | |  
//            / '-____'  | |  | | ___ | | |_| |_/ / ___ | |_ 
//           /           | |/\| |/ _ \| |  _| ___ \/ _ \| __|
//         _'            \  /\  / (_) | | | | |_/ / (_) | |_ 
//       _-'              \/  \/ \___/|_|_| \____/ \___/ \__|
// ===========================================================
//                            Awoo.

// Load WolfBot library
var lib = require('./lib');

// Load requirements
var async = require('async');

// Declare variables
var bot = lib.core.bot;
var database = lib.core.storage;
var keywordIndex = lib.scripts.index();
var keywordMatch = lib.scripts.match;
var keywordContext = lib.scripts.context;

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message.charAt(0) !== process.env.WOLFBOT_TRIGGER) {
        return;
    } else {
        message = message.substring(1).toLowerCase().trim();
        async.each(keywordIndex, function(keyword, callback) {
            var match = keywordMatch(keyword, message);
            if (!match) {
                callback();
            } else {
                serverID = bot.serverFromChannel(channelID);
                event = {
                    bot: bot,
                    storage: database,
                    user: user,
                    userID: userID,
                    serverID: serverID,
                    channelID: channelID,
                    message: message
                }
                command = keywordContext(event);
                command(event);
                callback();
            }
        });
    }
});

// Start bot keepAlive server
var keepAlive = lib.keepalive.start()
