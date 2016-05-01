'use strict';
var helpers = require(__dirname + '/../helpers/');

function treat(event) {
  helpers.statistics(event, 'treat');
  var msg = '';
  var treats = ['**[WolfBot noms happily on <@' + event.userID + '> \'s treat~]** :green_heart:', // jshint ignore:line
    '**[WolfBot grruffs and happily nibbles on <@' + event.userID + '> \'s treat happily~]** `^w^`', // jshint ignore:line
    '**[WolfBot yips and gently takes the treat from <@' + event.userID + '> \'s hand~]** :green_heart:', // jshint ignore:line
  ];
  msg = helpers.randomArray(treats);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
}
module.exports = {
  name: 'treat',
  author: 'thattacoguy',
  syntax: 'treat',
  patterns: [/^treat/i],
  description: 'G-give me a treat~ >w<',
  command: treat
};
