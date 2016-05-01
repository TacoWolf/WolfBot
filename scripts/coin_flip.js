'use strict';
var helpers = require(__dirname + '/../helpers/');

function coin(event) {
  var coin = ['heads', 'tails'];
  var res = helpers.randomArray(coin);
  var msg = '[WolBot flips a coin for <@';
  msg += event.userID + '>]\nYou got... **' + res + '**.';
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
  patterns: [/^(flip a )?coin/i],
  description: 'Flip a coin!',
  command: coin
};
