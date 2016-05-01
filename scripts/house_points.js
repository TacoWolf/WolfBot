'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGODB_URI;

function points(event) {
  var msg = '';
  if (event.pm === true) {
    msg = 'S-sorry, you can\'t do that in a PM with me. ;w;';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg
    });
  } else {
    var check = helpers.roleCheck(event, 'headmaster');
    if (check === true) {
      // jscs:disable
      var resOne = /points (<@[0-9]*>) (\-[0-9]*|\+?[0-9]*)/i;
      var resTwo = /(<@[0-9]*>) (\-[0-9]*|\+?[0-9]*|a) points?/i; // jshint ignore:line
      var resThree = /(\-[0-9]*|\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)/i; // jshint ignore:line
      // jscs:enable
      var recipient = '';
      var amount = 0;
      var res = [];
      if (resOne.test(event.message)) {
        res = event.message.match(resOne);
        recipient = res[1];
        amount = parseInt(res[2]);
      } else if (resTwo.test(event.message)) {
        res = event.message.match(resTwo);
        recipient = res[1];
        amount = parseInt(res[2]);
        if (res[2] === 'a') {
          amount = 1;
        }
      } else if (resThree.test(event.message)) {
        res = event.message.match(resThree);
        recipient = res[2];
        amount = parseInt(res[1]);
        if (res[1] === 'a') {
          amount = 1;
        }
      }
      MongoClient.connect(mongourl, function(err, db) {
        var col = db.collection('users');
        col.find({ userID: event.userID }).limit(1).each(function(err, user) {
          if (user) {
            if (user.house) {
              if (amount < 0) {
                msg = recipient + ' has been punished with `';
                msg += amount + '` point(s) taken away from ';
                msg += helpers.houseDetail(user.house);
                msg += ' by <@' + event.userID + '>. =w=';
              } else {
                msg = recipient + ' has been awarded with `';
                msg += amount + '` point(s) given to ';
                msg += helpers.houseDetail(user.house);
                msg += ' by <@' + event.userID + '>. `^w^`';
              }
              helpers.points(event, user.house, amount);
            } else {
              msg = 'Uhm... I don\'t think ';
              msg += recipient + ' has sorted themselves into a house, <@';
              msg += event.userID + '>. .w.\n';
              msg += 'Use `!house set [g|h|r|s]` for that, ';
              msg += recipient + '! `^w^`';
            }
            event.bot.sendMessage({
              to: event.channelID,
              message: msg
            });
            db.close();
          }
        });
      });
    } else {
      msg = 'I\'m afraid you can\'t do that, <@' + event.userID + '>. .w.';
      event.bot.sendMessage({
        to: event.channelID,
        message: msg
      });
    }
  }
}
module.exports = {
  name: 'points',
  author: 'thattacoguy',
  syntax: 'points',
  hidden: true,
  patterns: [/points (<@[0-9]*>) (\+?[0-9]*|\-[0-9]*)/i,
    /(<@[0-9]*>) (\-[0-9]*|\+?[0-9]*|a) points?/i,
    /(\-[0-9]*|\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)/i,
  ],
  description: '[Admin Only] Give points to users!',
  command: points
};
