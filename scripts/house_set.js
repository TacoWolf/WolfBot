const helpers = require(`${__dirname}/../helpers/`);
const MongoClient = require('mongodb').MongoClient;

const mongourl = process.env.MONGODB_URI;

function setHouse(event) {
  let msg = '';
  const house = event.message.match(/house set (g|r|h|s).*?/);
  if (house) {
    const userHouse = house[1].toString();
    MongoClient.connect(mongourl, (err, db) => {
      if (err) {
        throw err;
      } else {
        const col = db.collection('users');
        let houseName = '';
        col.findOne({ userID: event.userID }, (er, user) => {
          if (!user.house) {
            col.updateOne({ userID: event.userID }, {
              $set: { house: userHouse },
            });
            houseName = helpers.houseDetail(userHouse);
            msg = 'You have successfully been sorted into `';
            msg += `${houseName}\`, **${event.user}** ! \`^w^\``;
          } else {
            houseName = helpers.houseDetail(user.house);
            msg = 'You\'ve already been sorted into `';
            msg += `${houseName}\`, **${event.user}**. >w>`;
          }
          event.bot.sendMessage({
            to: event.userID,
            message: msg,
          });
          db.close();
        });
      }
    });
  }
}
module.exports = {
  name: 'house set',
  author: 'thattacoguy',
  syntax: 'house set (g|r|h|s)',
  patterns: [/^house set (g|r|h|s).*?/i],
  description: 'Set your house for the House Cup! :o',
  command: setHouse,
};
