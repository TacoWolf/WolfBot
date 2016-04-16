'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGOLAB_URI;

function points(event) {
  var msg = '';
  var check = helpers.roleCheck(event, 'headmaster');
  if (check === true) {
    MongoClient.connect(mongourl, function(err, db) {
      var col = db.collection('users');
      var user = col.findOne({ userID: event.userID });
      if (user.house) {
        var resOne = new RegExp('points (<@[0-9]*>) (\\+[0-9]*|\\-[0-9]*)', 'i');
        var resTwo = new RegExp('(<@[0-9]*>) (\\-[0-9]*|\\+?[0-9]*|a) points?', 'i');
        var resThree = new RegExp('(\\-[0-9]*|\\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)', 'i');
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
        if (amount < 0) {
          msg = recipient + ' has been punished with `' + amount + '` point(s) taken away from ' + user.house + ' by <@' + event.userID + '>. =w=';
        } else {
          msg = recipient + ' has been awarded with `' + amount + '` point(s) given to ' + user.house + ' by <@' + event.userID + '>. `^w^`';
        }
        helpers.points(event, user.house, amount);
      } else {
        msg = 'Uhm... I don\'t think <@' + event.userID + '> has sorted themselves into a house. .w.\nUse `!sethouse (g|h|r|s)` for that! `^w^`';
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
  patterns: ['points (<@[0-9]*>) (\\+[0-9]*|\\-[0-9]*)', '(<@[0-9]*>) (\\-[0-9]*|\\+?[0-9]*|a) points?', '(\\-[0-9]*|\\+?[0-9]*|a) points? (?:to|from) (<@[0-9]*>)'],
  description: '[Admin Only] Give points to users!',
  command: points
};
