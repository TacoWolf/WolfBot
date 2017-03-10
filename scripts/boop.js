'use strict';
var helpers = require(__dirname + '/../helpers/');

function boop(event) {
  var boops = [
    'N-nyeh~',
    '**[nose scrunch~]**',
    'A-awoo~ >w<',
    'Ya booped my snoot! >w>',
    'H-hey~!',
    '>~<'
  ];
  var msg = helpers.randomArray(boops);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
  helpers.statistics(event, 'boop');
}
module.exports = {
  name: 'boop',
  author: 'artsofallkinds - template via thattacoguy',
  syntax: 'boop',
  hidden: true,
  patterns: [/^boop/i, /^snoot/i],
  description: '>~<',
  command: boop
};
