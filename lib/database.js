var MongoClient = require('mongodb').MongoClient
var async = require('async');
var url = process.env.MONGOLAB_URI

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
                    for (var key in server) {
                        if (key == 'members') {
                            var members = server[key]
                            for (key in members) {
                                var user = {
                                    userID: key,
                                    name: members[key].username,
                                    avatar: 'https://cdn.discordapp.com/avatars/' + key + '/' + members[key].avatar + '.jpg',
                                    discriminator: members[key].discriminator
                                }
                                col.update({ userID: user.userID }, user, { upsert: true });
                            }
                        }
                    }
                }
                col.count(function(err, res) {
                    logger('info', 'User list updated with ' + res + ' user(s).');
                });
            });
            db.createCollection('servers', function(err, res) {
                var col = db.collection('servers');
                for (var key in bot.servers) {
                    var serverRaw = bot.servers[key];
                    var server = {
                        name: serverRaw.name,
                        serverID: serverRaw.id,
                        icon: serverRaw.icon,
                        region: serverRaw.region,
                        ownerID: serverRaw.owner_id
                    }
                    col.update({ serverID: server.serverID }, server, { upsert: true });
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
}
