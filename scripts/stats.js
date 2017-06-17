const MongoClient = require('mongodb').MongoClient;

const mongourl = process.env.MONGODB_URI;

function houseCup(event) {
  let msg = '';
  MongoClient.connect(mongourl, (err, db) => {
    if (err) {
      throw err;
    } else {
      const col = db.collection('users');
      col.find({ userID: event.userID }).limit(1).each((e, user) => {
        if (user) {
          msg = `Here's some information that I've collected about you, **${event.user}**!\n`; // jshint ignore:line
          if (user.pet) {
            msg += '\nYou\'ve pet me, uhm... `';
            msg += `${user.bark}\` time(s). >w< :green_heart:`;
          }
          if (user.bark) {
            msg += `\nYou've made me bark \`${user.bark}\` time(s). >w<`;
          }
          if (user.treat) {
            msg += '\nYou\'ve given me `';
            msg += `${user.treat}\` treat(s)! T-they were tasty. :3`;
          }
          if (user.eightball) {
            msg += '\nYou\'ve asked for 8ball\'s wisdom `';
            msg += `${user.eightball}\` time(s). Oooh~`;
          }
          if (user.emote) {
            msg += `\nYou've used the emotes \`${user.emote}\` time(s).`;
          }
          if (user.ping) {
            msg += `\nYou've pinged me \`${user.ping}\` time(s). Pong! :3`;
          }
          if (user.thanks) {
            msg += '\nYou\'ve thanked me `';
            msg += `${user.thanks}\` time(s). You're welcome~!`;
          }
          msg += '\n\nIf you wanna see these numbers grow, keep playing with me~!'; // jshint ignore:line
          event.bot.sendMessage({
            to: event.userID,
            message: msg,
          });
        }
      });
    }
  });
}
module.exports = {
  name: 'Statistics',
  syntax: 'stats',
  patterns: [/^stats/i],
  description: 'See all the houses and their rankings in the cup!',
  command: houseCup,
};
