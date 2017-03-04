const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URI;

function initDatabase(logger, bot) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
    } else {
      logger('info', 'Updating collections with latest data...');
      db.createCollection('users', () => {
        const col = db.collection('users');
        for (let key in bot.servers) {
          const server = bot.servers[key];
          for (key in server) {
            if (key === 'members') {
              const members = server[key];
              for (key in members) {
                const avatarurl = 'https://cdn.discordapp.com/avatars/';
                const avatar = `${key}/${members[key].avatar}`;
                const user = {
                  userID: key,
                  name: members[key].username,
                  avatar: `${avatarurl + avatar}.jpg`,
                  discriminator: members[key].discriminator,
                };
                col.updateOne({
                  userID: user.userID,
                }, {
                  $set: user,
                }, {
                  upsert: true,
                });
              }
            }
          }
        }
        col.count((er, res) => {
          logger('info', `User list updated with ${res} user(s).`);
        });
      });
      db.createCollection('servers', () => {
        const col = db.collection('servers');
        for (const key in bot.servers) {
          const serverRaw = bot.servers[key];
          const server = {
            name: serverRaw.name,
            serverID: serverRaw.id,
            icon: serverRaw.icon,
            region: serverRaw.region,
            // jscs:disable
            ownerID: serverRaw.owner_id, // jshint ignore:line
            // jscs:enable
          };
          col.update({
            serverID: server.serverID,
          }, {
            $set: server,
          }, {
            upsert: true,
          });
        }
        col.count((e, res) => {
          logger('info', `Server list updated with ${res} server(s).`);
        });
      });
    }
  });
}
module.exports = {
  seed: initDatabase,
};
