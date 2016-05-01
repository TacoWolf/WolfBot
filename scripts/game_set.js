'use strict';
var helpers = require(__dirname + '/../helpers/');

function gameSet(event) {
  var msg = '';
  var check = helpers.roleCheck(event, 'admin');
  if (check === true) {
    var message = /^set game (?:to )?(.*)/i;
    var res = event.message.match(message);
    var game = res[1];
    event.bot.setPresence({ game: game });
    msg += 'Game set to `Playing ' + game + '`.';
  } else {
    msg += 'Permission Denied: You\'re not a WolfBot Admin!';
  }
  event.bot.sendMessage({
    to: event.userID,
    message: msg
  });
}
module.exports = {
  name: 'set game',
  author: 'thattacoguy',
  syntax: 'set game to (x)',
  hidden: true,
  patterns: [/^set game (?:to )?(.*)/i],
  description: 'Sets game for WolfBot',
  command: gameSet
};
