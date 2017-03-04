const helpers = require(`${__dirname}/../helpers/`);
const request = require('request');

function itWasMe(event) {
  const rawMessage = event.message.match(/(?:me |me, )(.*)?/i);
  const message = (rawMessage) ? rawMessage[1] : 'Dio';
  request.get(`https://memegen.link/custom/_/it-was-me%2C-${message}.jpg?alt=https://i.imgur.com/pH4gb8G.jpg`, { encoding: null }, (e, r, b) => {
    if (e) {
      return console.log(e);
    }
    event.bot.uploadFile({
      to: event.channelID,
      file: b,
      filename: 'diogen.png',
      message: '',
    });
    return true;
  });
  helpers.statistics(event, 'dio');
}
module.exports = {
  name: 'dio',
  author: 'thattacoguy',
  syntax: 'dio',
  patterns: [/^it was (?:me |me, |me)(.*)?/i, /^dio$/i],
  description: 'I bet you expected a description, but...',
  command: itWasMe,
};
