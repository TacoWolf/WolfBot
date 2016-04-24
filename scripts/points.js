'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGODB_URI;

function points(event) {
  var msg = '';
  var check = helpers.roleCheck(event, 'headmaster');
  if (check === true) {
    // jscs:disable
    var resOne = new RegExp('points (<@[0-9]*>) (\\+[0-9]*|\\-[0-9]*)', 'i');
    var resTwo = new RegExp('(<@[0-9]*>) (\\-[0-9]*|\\+?[0-9]*|a) points?', 'i'); // jshint ignore:line
    var resThree = new RegExp('(\\-[0-9]*|\\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)', 'i'); // jshint ignore:line
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
    } else if (resThree.test(event.message)) {
      res = event.message.match(resThree);
      if (res[1] === 'a') {
        amount = 1;
      } else {
        amount = parseInt(res[1]);
      }
      recipient = res[2];
    }
    MongoClient.connect(mongourl, function(err, db) {
      var col = db.collection('users');
      var user = col.findOne({ userID: event.userID });
      if (user.house) {
        if (amount < 0) {
          msg = recipient + ' has been punished with `';
          msg += amount + '` point(s) taken away from ';
          msg += user.house + ' by <@' + event.userID + '>. =w=';
        } else {
          msg = recipient + ' has been awarded with `';
          msg += amount + '` point(s) given to ';
          msg += user.house + ' by <@' + event.userID + '>. `^w^`';
        }
        helpers.points(event, user.house, amount);
      } else {
        msg = 'Uhm... I don\'t think ';
        msg += recipient + ' has sorted themselves into a house, <@';
        msg += event.userID + '>. .w.\nUse `!house set [g|h|r|s]` for that, ';
        msg += recipient + '! `^w^`';
      }
      event.bot.sendMessage({
        to: event.channelID,
        message: msg
      });
      db.close();
    });
  } else {
    msg = 'I\'m afraid you can\'t do that, <@' + event.userID + '>. .w.';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg
    });
  }

}
module.exports = {
  name: 'points',
  author: 'thattacoguy',
  syntax: 'points',
  hidden: true,
  patterns: [/points (<@[0-9]*>) (\\+[0-9]*|\\-[0-9]*)/i,
    /(<@[0-9]*>) (\\-[0-9]*|\\+?[0-9]*|a) points?/i,
    /(\\-[0-9]*|\\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)/i,
  ],
  description: '[Admin Only] Give points to users!',
  command: points
};
