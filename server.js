/*Variable area*/
var Discordbot = require('discord.io');
var config = require('./config.json');
var package = require('./package.json');
var admins = require('./admins.json');
var commands = require('./commands/index');
var helpers = require('./helpers');
var bot = new Discordbot({
  email: config.email,
  password: config.password,
  autorun: config.autorun
});
/* flairgen */
var flair = '================================================';
var flairsmall = '------------------------------------------------';
//Wolfbot start.
console.log(flair);
console.log('Loading: ' + config.name + ' v' + package.version);
console.log(flair);
/*Event area*/
bot.on('err', function (error) {
  console.log(flair);
  console.log(config.name + ' has encountered an error.');
  console.log('The error is:');
  console.log(flair);
  console.log(error);
});
bot.on('ready', function (rawEvent) {
  console.log('Connected!');
  console.log(flairsmall);
  console.log('Connected as:');
  console.log(bot.username + ' - (' + bot.id + ')');
  console.log(flairsmall);
  console.log('Servers connected to:');
  for (var key in bot.servers) {
    console.log(bot.servers[key].name + ' - (' + bot.servers[key].id + ')');
  }
  // USED FOR DEBUGGING
  /* console.log(flair);
    console.log("Grabbing bot configuration...")
    require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));
    console.log(flairsmall);
    console.log(config.name + " config successfully generated."); */
  console.log(flair);
});
bot.on('message', function (user, userID, channelID, message, rawEvent) {
  // Log message from user
  var serverID = helpers.getServerID(bot, channelID);
  console.log(flair);
  if (serverID === 'pm') {
    console.log('PRIVATE MESSAGE');
    console.log(flairsmall);
    console.log(user + ' (' + userID + ')');
    console.log('PM - (' + channelID + ')');
    console.log(flairsmall);
    console.log(message);
    console.log(flair);
  } else {
    console.log(bot.servers[serverID].name + ' (' + serverID + ')');
    console.log(flairsmall);
    console.log(user + ' (' + userID + ')');
    console.log('in channel #' + bot.servers[serverID].channels[channelID].name + ' (' + channelID + ')');
    console.log(flairsmall);
    console.log(message);
    console.log(flair);
  }
  // Check if bot sent message
  // If it's true, skip the rest of the function
  if (bot.id == userID) {
    return;
  }
  // Actually parse the message
  helpers.parameters(message);
  // require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));
  // Used for debugging
  // Makes sure message isn't undefined
  if (parameters[0] !== undefined) {
    // Checks for the trigger
    rawphrase = parameters.join(' ').replace(/([^\w\s])/g, '').toLowerCase().trim();
    if (parameters[0].charAt(0) === config.trigger) {
      // Removes the trigger
      triggered = parameters[0].substring(1).toLowerCase().trim();
      // Searches for the command in the first word
      if (commands.triggers.hasOwnProperty(triggered)) {
        // Sets the command if found
        command = commands.triggers[triggered];
        command.toRun(bot, user, userID, channelID, message, serverID);
      }
    } else if (commands.phrases.hasOwnProperty(rawphrase)) {
      // Searches for phraes
      command = commands.phrases[rawphrase];
      command.toRun(bot, user, userID, channelID, message, serverID);
    } else {
      // Checks for a mention
      for (var i = 0; i < parameters.length; i++) {
        if (parameters[i] === '<@' + bot.id + '>') {
          wb = require('./commands/wb');
          wb.mention(bot, user, userID, channelID, message, serverID);
        }
      }
    }
  }
});
bot.on('disconnected', function () {
  console.log('Bot disconnected');
  console.log(flair);
  // When bot disconnects, it will try to connect again if the following isn't commented out:
  bot.connect();
});