'use strict';
var helpers = require(__dirname + '/../helpers/');

function awoo(event) {
  var awoos = [
    '**[howl~]**',
    'Awoooooooooooooo~! `^w^`',
    'A-awoo~ >w<',
    'Awoo! :3',
    'Awoo! >w<'
  ];
  var msg = helpers.randomArray(awoos);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
  helpers.statistics(event, 'awoo');
}
module.exports = {
  name: 'awoo',
  author: 'thattacoguy',
  syntax: 'awoo',
  hidden: true,
  patterns: [/^awoo/i, /^howl/i, /^speak/i],
  description: 'awoooo',
  command: awoo
};
