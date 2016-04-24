'use strict';
// Check for API token
if (!process.env.DISCORD_API_TOKEN && !process.env.DISCORD_LOGIN_EMAIL) {
  console.error('Error:  No authentication method found!');
  console.error('        Provide a DISCORD_API_TOKEN or a DISCORD_LOGIN_EMAIL');
  console.error('        to be able to connect to Discord.');
  console.error('        Exiting.');
  process.exit(1);
} else if (!process.env.WOLFBOT_TRIGGER) {
  console.error('Error:  No trigger for WolfBot found!');
  console.error('        Provide a WOLFBOT_TRIGGER to be able to properly');
  console.error('        handle messages in servers.');
  console.error('        Exiting.');
  process.exit(1);
} else if (!process.env.MONGODB_URI) {
  console.error('Error:  No database for WolfBot found!');
  console.error('        Provide a MONGODB_URI to be able to properly store');
  console.error('        data for your users.');
  console.error('        Exiting.');
  process.exit(1);
}

// Declare constants
var DiscordClient = require('discord.io');
var bot;
if (process.env.DISCORD_API_TOKEN) {
  bot = new DiscordClient({
    autorun: true,
    token: process.env.DISCORD_API_TOKEN
  });
} else {
  bot = new DiscordClient({
    autorun: true,
    email: process.env.DISCORD_LOGIN_EMAIL,
    password: process.env.DISCORD_LOGIN_PASSWORD,
  });
}

var async = require('async');

function logger(type, append) {
  var now = new Date();
  var time = {
    day: now.getDate(),
    month: (now.getMonth() + 1),
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds()
  };
  async.forEachOf(time, function(value, key, callback) {
    if (value < 10) {
      time[key] = '0' + value.toString();
      callback();
    } else {
      time[key] = value.toString();
      callback();
    }
  });
  var dateLog = '[' + time.day + '/' + time.month + '/' + time.year + ']';
  var timeLog = '[' + time.hour + ':' + time.minute + ':' + time.second + ']';
  if (!type) {
    type = 'log';
  }
  var message = dateLog + '' + timeLog + ' ' + type + ': ' + append;
  switch (type) {
    case 'log':
      console.log(message);
      break;
    case 'info':
      console.info(message);
      break;
    case 'warn':
      console.warn(message);
      break;
    case 'chat':
      console.log(message);
      break;
    default:
      console.log(message);
  }
}

module.exports = {
  bot: bot,
  logger: logger
};
