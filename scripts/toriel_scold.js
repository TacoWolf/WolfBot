'use strict';
var helpers = require(__dirname + '/../helpers/');

function scold(event) {
  var myChild = [
    '"(Who _raised_ this child?)"',
    '"My child, what manners are _those?_ "',
    '"My child, those are _not_ words I would use here..."',
  ];
  var msg = helpers.randomArray(myChild);
  event.bot.uploadFile({
    to: event.channelID,
    file: __dirname + '/../emote/torielshock.png',
    message: '<@' + event.userID + '> ...\n' + msg
  });
}
module.exports = {
  name: 'scold',
  author: 'thattacoguy',
  syntax: 'fuck',
  hidden: true,
  patterns: [/^(fuck|shit|bitch|cunt)/i],
  description: '>:c',
  command: scold
};
