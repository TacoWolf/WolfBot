

const helpers = require(`${__dirname}/../helpers/`);

function sparkle(event) {
  helpers.statistics(event, 'sparkle');
  event.bot.sendMessage({
    to: event.channelID,
    message: '`(ﾉ^w^)ﾉ` \u2764 \u2747️ \uD83D\uDC9B \uD83C\uDF1F \uD83D\uDC9A \u2B50 \uD83D\uDC99 \u2728 \uD83D\uDC9C', // jshint ignore:line
  });
}
module.exports = {
  name: 'sparkle',
  author: 'thattacoguy',
  syntax: 'sparkle',
  patterns: [/^sparkle/i],
  description: ':3',
  command: sparkle,
};
