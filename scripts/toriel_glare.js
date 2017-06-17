function glare(event) {
  event.bot.uploadFile({
    to: event.channelID,
    file: `${__dirname}/../emote/torielglare.png`,
    message: `<@${event.userID}>`,
  });
}
module.exports = {
  name: 'glare',
  syntax: 'yiff',
  hidden: true,
  patterns: [/^(yiff|kink|kinky)/i],
  description: 'I swear, my child...',
  command: glare,
};
