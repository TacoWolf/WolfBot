'use strict';
var helpers = require(__dirname + '/../helpers/');

function coin(event) {
  var coin = ['heads', 'tails'];
  var res = helpers.randomArray(coin);
  var msg = '[WolBot flips a coin for <@' + event.userID + '>]\nYou got... **' + res + '**.';
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
  helpers.statistics(event, 'coin');
}
module.exports = {
  name: 'coin',
  author: 'thattacoguy',
  syntax: 'coin',
  patterns: ['(flip a )?coin'],
  description: 'Flip a coin!',
  command: coin
};
