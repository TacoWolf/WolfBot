const helpers = require(`${__dirname}/../helpers/`);
const MongoClient = require('mongodb').MongoClient;

const mongourl = process.env.MONGODB_URI;

function houseMembers(event) {
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
      embed,
    });
  } else {
    const matcher = /^house member(?:s)? (g|h|r|s).*/i;
    const res = event.message.match(matcher);
    const house = res[1];
    const serverUsers = helpers.usersInServer(event);
    MongoClient.connect(mongourl, (err, db) => {
      if (err) {
        throw err;
      } else {
        const col = db.collection('users');
        col.find({ house }).toArray((er, users) => {
          const msg = `<@${event.userID}>`;
          embed.title = 'Members of **House ';
          embed.title += `${helpers.houseDetail(house)}** `;
          for (let i = 0; i < users.length; i += 1) {
            const userID = users[i].userID;
            for (let j = 0; j < serverUsers.length; j += 1) {
              if (userID === serverUsers[j]) {
                embed.description += `\n${j + 1}. **<@${userID}>**`;
              }
            }
          }
          event.bot.sendMessage({
            to: event.channelID,
            message: msg,
            embed,
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
  command: houseMembers,
};
