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
      '**[WolfBot bounds up and hugs <@' + event.userID + '> happily~]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs <@' + event.userID + '> happily, wagging his tail~]** `^w^`', // jshint ignore:line
      '**[WolfBot gives <@' + event.userID + '> a big hug. D\'aww~]** :green_heart:', // jshint ignore:line
    ];
    // jscs:enable
  } else {
    var huggedUser = '';
    huggedUser = res[1];
    // jscs:disable
    hugs = [
      '**[WolfBot gives ' + huggedUser + ' a really big hug.]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs ' + huggedUser + ' tightly!]** :green_heart:', // jshint ignore:line
      '**[WolfBot hugs ' + huggedUser + ' lovingly~]** :green_heart:', // jshint ignore:line
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
  patterns: [/hug me/i,
    /hug (<@.*>)/i,
    /give (<@.*>) (a hug|hugs|a big hug)/i,
    /give me (a hug|hugs)/i,
    /snuggle me/i,
    /snuggle <@.*>/i,
  ],
  description: 'Hug someone. >w<',
  command: hug
};
