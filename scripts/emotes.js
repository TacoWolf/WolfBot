'use strict';
var fs = require('fs');
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

function emoteTrigger(event) {
  var res = items[i].match(/(.*)\..*/);
  console.log(res);
  event.bot.sendMessage({
    to: event.channelID,
    message: 'i got it fam'
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
