// Check for API token
if (!process.env.DISCORD_API_TOKEN && !process.env.DISCORD_LOGIN_EMAIL) {
    console.error('Error:  No authentication method found!');
    console.error('        Provide a DISCORD_API_TOKEN or a DISCORD_LOGIN_EMAIL\n        to be able to connect to Discord.');
    console.error('        Exiting.');
    process.exit(1);
}

// Declare constants
var DiscordClient = require('discord.io');
var url = require('url');
var bot;
var database;
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

function logger(type, append) {
    var now = new Date();
    var date = now.getDate();
    var month = (now.getMonth() + 1);
    var year = now.getFullYear();
    var hour = now.getHours();
    if (hour < 10) {
        hour = '0' + hour
    }
    var minute = now.getMinutes();
    if (minute < 10) {
        minute = '0' + minute
    }
    var second = now.getSeconds();
    if (second < 10) {
        second = '0' + second
    }
    var time = '[' + hour + ':' + minute + ':' + second + ']';
    if (!type) {
        type = 'log'
    }
    var message = time + ' ' + type + ': ' + append
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
        default:
            console.log(message);
    }
}

module.exports = {
    bot: bot,
    logger: logger
}
