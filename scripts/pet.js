'use strict';
var helpers = require(__dirname + '/../helpers/');

function pet(event) {
  // jscs:disable
  var pets = [
    '**[whines happily, leaning into <@' + event.userID + '>\'s scritches~]**', // jshint ignore:line
    '**[murrs lovingly, nuzzling <@' + event.userID + '>\'s hand gently~]**', // jshint ignore:line
    '**[whines sweetly, blushing and leaning into <@' + event.userID + '>\'s pets~]**', // jshint ignore:line
  ];
  // jscs:enable
  var msg = helpers.randomArray(pets);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
  helpers.statistics(event, 'pet');
}
module.exports = {
  name: 'pet',
  author: 'thattacoguy',
  syntax: 'pet',
  hidden: true,
  patterns: [/pet/i],
  description: 'Pet WolfBot! :green_heart:',
  command: pet
};
