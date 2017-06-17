const helpers = require(`${__dirname}/../helpers/`);
const MongoClient = require('mongodb').MongoClient;

const mongourl = process.env.MONGODB_URI;

function houseCup(event) {
  const embed = {
    title: '',
    description: '',
    color: 16763432,
  };
  if (event.pm === true) {
    const msg = 'S-sorry, you can\'t do that in a PM with me. ;w;';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
  } else {
    MongoClient.connect(mongourl, (err, db) => {
      if (err) {
        throw err;
      } else {
        const col = db.collection('servers');
        col.find({
          serverID: event.serverID,
        }).limit(1).each((er, server) => {
          if (server) {
            const houses = [];
            const g = { name: helpers.houseDetail('g') };
            const h = { name: helpers.houseDetail('h') };
            const r = { name: helpers.houseDetail('r') };
            const s = { name: helpers.houseDetail('s') };
            if (server.g) {
              g.points = server.g;
            } else { g.points = 0; }
            if (server.h) {
              h.points = server.h;
            } else { h.points = 0; }
            if (server.r) {
              r.points = server.r;
            } else { r.points = 0; }
            if (server.s) {
              s.points = server.s;
            } else { s.points = 0; }
            houses.push(g, h, r, s);
            houses.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
            embed.title = '**House Cup Rankings**';
            embed.description += `1. **${houses[0].name}`;
            embed.description += `** with **${houses[0].points}** points. \n`;
            embed.description += `2. **${houses[1].name}`;
            embed.description += `** with **${houses[1].points}** points. \n`;
            embed.description += `3. **${houses[2].name}`;
            embed.description += `** with **${houses[2].points}** points. \n`;
            embed.description += `4. **${houses[3].name}`;
            embed.description += `** with **${houses[3].points}** points. \n`;
            event.bot.sendMessage({
              to: event.channelID,
              message: `<@${event.userID}>`,
              embed,
            });
          }
        });
      }
    });
  }
}
module.exports = {
  name: 'House Cup',
  syntax: 'house cup',
  patterns: [/^house cup/i],
  description: 'See all the houses and their rankings in the cup!',
  command: houseCup,
};
