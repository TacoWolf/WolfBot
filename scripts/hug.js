'use strict';
var helpers = require(__dirname + '/../helpers/');

function hug(event) {
  helpers.statistics(event, 'hug');
  var msg = '';
  var hugs = [];
  var res = event.message.match(/(<@\d*>)/i);
  if (!res) {
    // jscs:disable
    hugs = [
      '**[WolfBot bounds up and hugs __' + event.user + '__ happily~]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs __' + event.user + '__ happily, wagging his tail~]** `^w^`', // jshint ignore:line
      '**[WolfBot gives __' + event.user + '__ a big hug. D\'aww~]** :green_heart:', // jshint ignore:line
    ];
    // jscs:enable
  } else {
    var huggedUser = '';
    huggedUser = res[1];
    // jscs:disable
    hugs = [
      '**[WolfBot gives __' + huggedUser + '__ a really big hug.]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs __' + huggedUser + '__ tightly!]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs __' + huggedUser + '__ lovingly~]** :green_heart:', // jshint ignore:line
    ];
    // jscs:enable
  }
  msg = helpers.randomArray(hugs);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
}
module.exports = {
  name: 'hug',
  author: 'thattacoguy',
  syntax: 'hug [@someone|me]',
  // jscs:disable
  patterns: ['hug me', 'hug (<@.*>)', 'give (<@.*>) (a hug|hugs|a big hug)', 'give me (a hug|hugs)', 'snuggle me', 'snuggle <@.*>'], // jshint ignore:line
  // jscs:enable
  description: 'Hug someone. >w<',
  command: hug
};
