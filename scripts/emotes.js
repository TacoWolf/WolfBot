'use strict';
var fs = require('fs');
var async = require('async');
var emotes = [];
var emoteList = '(';
var items = fs.readdirSync(__dirname + '/../emote/');
for (var i = 0; i < items.length; i++) {
  emotes.push(items[i]);
  var res = items[i].match(/(.*)\..*/);
  if (i !== items.length - 1) {
    emoteList += res[1] + '|';
  } else {
    emoteList += res[1] + ')';
  }
}
emoteList = new RegExp('^' + emoteList + '$', 'i');

function emoteTrigger(event) {
  var emote = event.message.match(emoteList);
  var matcher = new RegExp('^' + emote[1] + '\\..*','i');
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
module.exports = {
  name: 'ping',
  author: 'thattacoguy',
  syntax: 'ping',
  patterns: [emoteList],
  description: 'Ping the bot!',
  command: emoteTrigger
};
