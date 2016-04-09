var helpers = require(__dirname + '/../helpers/');
function ping(event) {
    event.bot.sendMessage({
        to: event.channelID,
        message: 'Pong!'
    });
}
module.exports = {
    name: 'ping',
    author: 'Daniel Gallegos (thattacoguy)',
    patterns: ['ping'],
    types: ['direct_message', 'direct_mention'],
    description: 'Ping the bot!',
    command: ping
}
