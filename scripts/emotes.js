'use strict';
var fs = require('fs');
var async = require('async');
var emotes = [];
var emoteList = '(';
var items = fs.readdirSync(__dirname + '/../emote/');
var emoteHelpList = '';
for (var i = 0; i < items.length; i++) {
  emotes.push(items[i]);
  var res = items[i].match(/(.*)\..*/);
  if (i !== items.length - 1) {
    emoteList += res[1] + '|';
    emoteHelpList += '`' + res[1] + '`, ';
  } else {
    emoteList += res[1] + ')';
    emoteHelpList += 'and `' + res[1] + '`';
  }
}
emoteList = new RegExp('^' + emoteList + '$', 'i');

function emoteTrigger(event) {
  if (event.message === 'emotes') {
    var msg = 'O-oh! Here\'s a list of emotes I know about! `^w^` \n';
    msg += emoteHelpList + ' are all emotes that I can post. :3';
    event.bot.sendMessage({
      to: event.userID,
      message: msg,
    });
  } else {
    var emote = event.message.match(emoteList);
    var matcher = new RegExp('^' + emote[1] + '\\..*', 'i');
    async.each(items, function(item, callback) {
      if (matcher.test(item)) {
        event.bot.uploadFile({
          to: event.channelID,
          file: __dirname + '/../emote/' + item,
          message: '<@' + event.userID + '>'
        });
        callback();
      } else {
        callback();
      }
    }, function(err) {
      if (err) {}
    });
  }
}
module.exports = {
  name: 'ping',
  author: 'thattacoguy',
  syntax: 'ping',
  patterns: [emoteList, /emotes/i],
  description: 'Ping the bot!',
  command: emoteTrigger
};
