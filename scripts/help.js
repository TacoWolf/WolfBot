var helpers = require(__dirname + '/../helpers/');
var rawScripts = require('require-all')(__dirname + '/../scripts');
var async = require('async');

var msg = '**Hi! I\'m WolfBot!** :3 :green_heart:\n\nHere\'s some stuff to help you out:\n```css\n';

function help(event) {
    msg += '[Commands]\n-help [help]         : You already know what this is. ;3'
    async.forEachOf(rawScripts, function(value, key, callback) {
        if (key === 'help') {
            callback();
        } else {
            var name = rawScripts[key].name;
            var command = rawScripts[key].patterns[0];
            var comName = '-' + name + ' [' + command + ']'
            for (var i = comName.length; i < 21; i++) {
                comName += ' '
            }
            var description = rawScripts[key].description;
            var helper = '\n' + comName + ': ' + description + ';';
            msg += helper
            callback();
        }
    });
    msg += '\n```\nI-I hope that helped! >w<'
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
}

module.exports = {
    name: 'help',
    author: 'thattacoguy',
    patterns: ['help'],
    description: 'Get help from WolfBot! (T-that\'s me.) >w<',
    command: help
}
