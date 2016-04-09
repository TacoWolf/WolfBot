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
        token: process.env.DISCORD_LOGIN_TOKEN
    });
} else {
    bot = new DiscordClient({
        autorun: true,
        email: process.env.DISCORD_LOGIN_EMAIL,
        password: process.env.DISCORD_LOGIN_PASSWORD,
    });
}
if (process.env.REDISCLOUD_URL) {
    var redisURL = url.parse(process.env.REDISCLOUD_URL);
    database = {
        namespace: 'botkit-example',
        host: redisURL.hostname,
        port: redisURL.port,
        auth_pass: redisURL.auth.split(":")[1]
    }
} else {
    console.warn('Warning:   REDISCLOUD_URL database URL is not defined.')
    console.log('           All information stored will be lost after\n           the bot shuts down.')
    database = require('memory-cache');
}
module.exports = {
    bot: bot,
    storage: database
}
