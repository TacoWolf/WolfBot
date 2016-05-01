'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGODB_URI;

function houseMembers(event) {
  var msg = '';
  if (event.pm === true) {
    msg = 'S-sorry, you can\'t do that in a PM with me. ;w;';
  } else {
    var matcher = /^house member(?:s)? (g|h|r|s).*/i;
    var res = event.message.match(matcher);
    var house = res[1];
    var serverUsers = helpers.usersInServer(event);
    MongoClient.connect(mongourl, function(err, db) {
      if (err) {
        throw err;
      } else {
        var col = db.collection('users');
        col.find({ house: house }).toArray(function(err, users) {
          var members = event.bot.servers[event.serverID].members;
          msg = 'Here are the members of **House ';
          msg += helpers.houseDetail(house) + '**, ';
          msg += '<@' + event.userID + '>:\n';
          for (var i = 0; i < users.length; i++) {
            var userID = users[i].userID;
            for (var j = 0; j < serverUsers.length; j++) {
              if (userID === serverUsers[j]) {
                msg += '\n> **' + members[userID].username + '**';
              }
            }
          }
          event.bot.sendMessage({
            to: event.channelID,
            message: msg
          });
          db.close();
        });
      }
    });
  }
}
module.exports = {
  name: 'house',
  author: 'thattacoguy',
  syntax: 'house members (g|h|r|s)',
  patterns: [/^house member(?:s)? (g|h|r|s).*/i],
  description: 'Check members in a house!!',
  command: houseMembers
};
