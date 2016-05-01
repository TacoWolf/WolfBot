'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;

function initDatabase(logger, bot) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    } else {
      logger('info', 'Updating collections with latest data...');
      db.createCollection('users', function() {
        var col = db.collection('users');
        for (var key in bot.servers) {
          var server = bot.servers[key];
          for (key in server) {
            if (key === 'members') {
              var members = server[key];
              for (key in members) {
                var avatarurl = 'https://cdn.discordapp.com/avatars/';
                var avatar = key + '/' + members[key].avatar;
                var user = {
                  userID: key,
                  name: members[key].username,
                  avatar: avatarurl + avatar + '.jpg',
                  discriminator: members[key].discriminator
                };
                col.updateOne({
                  userID: user.userID
                }, {
                  $set: user
                }, {
                  upsert: true
                });
              }
            }
          }
        }
        col.count(function(err, res) {
          logger('info', 'User list updated with ' + res + ' user(s).');
        });
      });
      db.createCollection('servers', function() {
        var col = db.collection('servers');
        for (var key in bot.servers) {
          var serverRaw = bot.servers[key];
          var server = {
            name: serverRaw.name,
            serverID: serverRaw.id,
            icon: serverRaw.icon,
            region: serverRaw.region,
            // jscs:disable
            ownerID: serverRaw.owner_id, // jshint ignore:line
            // jscs:enable
          };
          col.update({
            serverID: server.serverID
          }, {
            $set: server
          }, {
            upsert: true
          });
        }
        col.count(function(err, res) {
          logger('info', 'Server list updated with ' + res + ' server(s).');
        });
      });
    }
  });
}
module.exports = {
  seed: initDatabase
};
