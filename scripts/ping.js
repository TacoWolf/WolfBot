var helpers = require(__dirname + '/../helpers/');

function ping(event) {
    event.bot.sendMessage({
        to: event.channelID,
        message: 'Pong!'
    });
    helpers.statistics(event, 'ping');
}
module.exports = {
    name: 'ping',
    author: 'thattacoguy',
    syntax: 'ping',
    patterns: ['ping'],
    description: 'Ping the bot!',
    command: ping
}
