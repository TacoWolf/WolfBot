'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGOLAB_URI;

function setHouse(event) {
  var msg = '';
  var house = event.message.match(/house set (g.*?|r.*?|h.*?|s.*?)/);
  if (house) {
    var userHouse = house[1].toString();
    MongoClient.connect(mongourl, function(err, db) {
      if (err) {
        throw err;
      } else {
        var col = db.collection('users');
        var houseName = '';
        col.findOne({ userID: event.userID }, function(err, user) {
          if (!user.house) {
            col.updateOne({ userID: event.userID }, { $set: { house: userHouse } });
            houseName = helpers.houseDetail(userHouse);
            msg = 'You have successfully been sorted into `' + houseName + '`, **' + event.user + '** ! `^w^`';
          } else {
            houseName = helpers.houseDetail(user.house);
            msg = 'You\'ve already been sorted into `' + houseName + '`, **' + event.user + '**. >w>';
          }
          event.bot.sendMessage({
            to: event.userID,
            message: msg
          });
          db.close();
        });
      }
    });
  }
}
module.exports = {
  name: 'Set House',
  author: 'thattacoguy',
  syntax: 'house set (g|r|h|s)',
  patterns: ['house set (g.*?|r.*?|h.*?|s.*?)'],
  description: 'Set your house for the House Cup! :o',
  command: setHouse
};
