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
// | Version: v2.0                                               |
// | License: MIT                                                |
// | Year: 2016                                                  |
// ---------------------------------------------------------------


// Load WolfBot library
const wolfbot = require('./lib');
// Load requirements
const bark = require('./scripts/bark.js');
// Declare variables
const bot = wolfbot.core.bot;
const logger = wolfbot.core.logger;
const database = wolfbot.database;
const keywordIndex = wolfbot.scripts.index();
const keywordMatch = wolfbot.scripts.match;
const keywordContext = wolfbot.scripts.context;
bot.on('ready', () => {
  logger('info', 'Connected to Discord!');
  logger('info', 'Servers connected to:');
  for (const key in bot.servers) {
    logger('info', `${bot.servers[key].name} - (${bot.servers[key].id})`);
  }
  if (process.env.DEBUG) {
    logger('info', 'Grabbing bot configuration...');
    require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));
    logger('info', `${bot.username} config successfully generated.`);
  }
  logger('info', 'Updating database with new information...');
  wolfbot.database.seed(logger, bot);
});

function messageCheck(event) {
  let m = true;
  for (let i = keywordIndex.length - 1; i >= 0; i -= 1) {
    const match = keywordMatch(keywordIndex[i], event.message);
    if (match) {
      const command = keywordContext(event);
      command(event);
      m = false;
      return;
    }
  }
  if (m === true) {
    bark.command(event);
  }
}
bot.on('message', (user, userID, channelID, message) => {
  const botMention = new RegExp(`(<@(!|&)?${bot.id}>)`, '');
  const event = {
    bot,
    user,
    userID,
    serverID: '',
    channelID,
    message,
    rawMessage: message,
    storage: database,
    logger,
    pm: false,
  };
  try {
    event.serverID = bot.channels[channelID].guild_id;
  } catch (e) {
    event.serverID = userID;
    event.pm = true;
  }
  let msg = '';
  if (event.pm) {
    msg = `PM (${event.channelID}) | ${user} - ${message}`;
    event.pm = true;
    event.server = event.channelID;
    logger('chat', msg, event);
  } else {
    event.server = bot.servers[event.serverID].name;
    event.channel = bot.servers[event.serverID].channels[channelID].name;
    msg = `${event.server} | #${event.channel} | `;
    msg += `${user} - ${message}`;
    logger('chat', msg, event);
  }
  const mentionMatcher = event.message.match(botMention);
  if (mentionMatcher) {
    msg = message.replace(mentionMatcher[0], '').trim();
    event.message = msg;
    messageCheck(event);
  }
});

bot.on('disconnect', () => {
  bot.connect();
});
