'use strict';
var rawScripts = require('require-all')(__dirname + '/../scripts');
var async = require('async');

var msg = '**Hi! I\'m WolfBot!** :3 :green_heart:\n\nHere\'s some stuff to help you out:\n';

function help(event) {
  msg += '**[Commands]**\n\n`help`- You already know what this is. ;3';
  async.forEachOf(rawScripts, function(value, key, callback) {
    if (key === 'help' && !rawScripts[key].hidden) {
      callback();
    } else {
      var name = rawScripts[key].name;
      var description = rawScripts[key].description;
      var helper = '\n`' + name + '`: ' + description;
      msg += helper;
      callback();
    }
  });
  msg += '\n\nI-I hope that helped! >w<';
  msg += "\n\nI-if you find an issue with WolfBot or want to submit an idea, feel free to use WolfBot's GitHub issues page. <https://github.com/TacoWolf/WolfBot/issues> :3 \n Thanks! :green_heart:";
  event.bot.sendMessage({
    to: event.channelID,
    message: 'Send you a PM, <@' + event.userID + '>! `^w^`'
  });
  event.bot.sendMessage({
    to: event.userID,
    message: msg
  });
}

module.exports = {
  name: 'help',
  author: 'thattacoguy',
  syntax: 'help',
  patterns: ['help'],
  description: 'Get help from WolfBot! (T-that\'s me.) >w<',
  command: help
};
