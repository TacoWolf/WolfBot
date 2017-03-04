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
const Discord = require('discord.io');

let bot;
if (process.env.DISCORD_API_TOKEN) {
  bot = new Discord.Client({
    autorun: true,
    token: process.env.DISCORD_API_TOKEN,
  });
} else {
  bot = new Discord.Client({
    autorun: true,
    email: process.env.DISCORD_LOGIN_EMAIL,
    password: process.env.DISCORD_LOGIN_PASSWORD,
  });
}

const async = require('async');
const fs = require('fs');

let dir = './log';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

function logger(type, append, event) {
  const now = new Date();
  const time = {
    day: now.getDate(),
    month: (now.getMonth() + 1),
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
  async.forEachOf(time, (value, key, callback) => {
    if (value < 10) {
      time[key] = `0${value.toString()}`;
      callback();
    } else {
      time[key] = value.toString();
      callback();
    }
  });
  const fancyDateLog = `[${time.day}/${time.month}/${time.year}]`;
  const dateLog = time.day + time.month + time.year;
  const timeLog = `[${time.hour}:${time.minute}:${time.second}]`;
  if (!type) {
    type = 'log';
  }
  const message = `${fancyDateLog}${timeLog} ${type}: ${append}`;
  switch (type) {
    case 'log':
      dir = `./log/log - ${dateLog}.log`;
      console.log(message);
      break;
    case 'info':
      dir = `./log/info - ${dateLog}.log`;
      console.info(message);
      break;
    case 'warn':
      dir += `./log/warn - ${dateLog}.log`;
      console.warn(message);
      break;
    case 'chat':
      if (event.pm === true) {
        dir = `./log/PM - ${event.server}`;
      } else {
        dir = `./log/${event.server} - ${dateLog}.log`;
      }
      console.log(message);
      break;
    default:
      dir = `${dateLog}.log`;
      console.log(message);
  }
  fs.appendFile(dir, `${message}\n`, (err) => {
    if (err) {
      throw err;
    }
  });
}

module.exports = {
  bot,
  logger,
};
