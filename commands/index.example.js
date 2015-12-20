var ping = require('./ping').command;

var commands = {
    '!ping': {
        name: '!ping',
        toRun: ping,
        typeOf: 'text',
        description: "Pings the bot, making him pong back.",
        hidden: false,
    }
};

module.exports = commands
