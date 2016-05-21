'use strict';
var helpers = require(__dirname + '/../helpers/');
var Chance = require('chance');
var chance = new Chance;
var caption = require('caption');
var fs = require('fs');

function itWasMe(event) {
  var rawMessage = event.message.match(/(?:me |me, )(.*)?/i);
  var message = (rawMessage) ? rawMessage[1] : 'Dio';
  var fileName = chance.hash() + '.jpg';
  var cap = 'It was me, ' + message + '!';
  caption.url('https://cdn.meme.am/images/11472809.jpg', {
    caption: cap,
    outputFile: fileName
  }, function(err, filename) {
    event.bot.uploadFile({
      to: event.channelID,
      file: fileName,
      message: '<@' + event.userID + '>'
    }, function(){
      fs.unlinkSync(fileName);
    });
  });
  helpers.statistics(event, 'dio');
}
module.exports = {
  name: 'dio',
  author: 'thattacoguy',
  syntax: 'dio',
  patterns: [/^it was (?:me |me, |me)(.*)?/i, /^dio$/i],
  description: 'I bet you expected a description, but...',
  command: itWasMe
};
