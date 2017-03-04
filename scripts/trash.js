

function trash(event) {
  event.bot.uploadFile({
    to: event.channelID,
    file: `${__dirname}/../emote/alphys.png`,
    message: `<@${event.userID}>`,
  });
}
module.exports = {
  name: 'trash',
  author: 'thattacoguy',
  syntax: 'trash',
  patterns: [/anime( trash)?|trash/i],
  description: 'H-hehe...',
  command: trash,
};
