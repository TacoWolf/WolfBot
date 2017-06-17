const helpers = require(`${__dirname}/../helpers/`);

function gameSet(event) {
  const embed = {
    description: '',
    color: 10233776,
  };
  const check = helpers.roleCheck(event, 'admin');
  if (check === true) {
    const message = /^set game (?:to )?(.*)/i;
    const res = event.message.match(message);
    const game = res[1];
    event.bot.setPresence({ game: { name: game } });
    embed.description += `Game set to \`Playing ${game}\`.`;
  } else {
    embed.description += 'Permission Denied: You\'re not a WolfBot Admin!';
  }
  event.bot.sendMessage({
    to: event.channelID,
    message: `<@${event.userID}>`,
    embed,
  });
}
module.exports = {
  name: 'set game',
  syntax: 'set game to (x)',
  hidden: true,
  patterns: [/^set game (?:to )?(.*)/i],
  description: 'Sets game for WolfBot',
  command: gameSet,
};
