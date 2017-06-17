const helpers = require(`${__dirname}/../helpers/`);

function diceroll(event) {
  const embed = {
    title: '**[WolfBot rolls some dice.]**',
    description: '',
    color: 6592564,
  };
  const rolllog = [];
  const res = event.message.match(/roll ([0-9]*d[0-9]*)(\+[0-9]*|-[0-9]*)?/i);
  const rawDice = res[1];
  let roll = rawDice.split('d');
  if (!isNaN(parseInt(roll[0], 10)) && !isNaN(parseInt(roll[1], 10))) {
    const amount = parseInt(roll[0], 10);
    const dietype = parseInt(roll[1], 10);
    if (amount <= 100 && dietype <= 100) {
      for (let i = 0; i < amount; i += 1) {
        roll = Math.floor(Math.random() * dietype) + 1;
        rolllog.push(roll);
        if (roll === 1 && amount === 1) {
          embed.color = 12000284;
        } else if (roll === dietype && amount === 1) {
          embed.color = 16761856;
        }
      }
      embed.description += `Ooh! I rolled **${amount}d${dietype}** and I got... \n`;
      embed.description += `\`${rolllog}\`\n`;
      let total = 0;
      for (const i in rolllog) { total += rolllog[i]; }
      embed.description += `Which comes out to... \`${total}\`!`;
      if (res[2]) {
        embed.description += `\nAnd if I throw in \`${parseInt(res[2], 10)}`;
        embed.description += `\`, that comes out to \`${total + parseInt(res[2], 10)}\`.`;
      }
    }

    if (amount > 100 || dietype > 100) {
      embed.description += '...th-those are some big numbers... ;w;';
      embed.description += '\nI-I can\'t count that high... try using smaller numbers?';
    }
  } else {
    embed.description += 'Uhm... I dunno what to do. ;w;';
    embed.description += '\nMaybe try putting something in like `1d20` and trying again?';
  }
  helpers.statistics(event, 'dice');
  event.bot.sendMessage({
    to: event.channelID,
    message: `<@${event.userID}>`,
    embed,
  });
}
module.exports = {
  name: 'roll',
  syntax: 'roll (x)d(x)(+x|-x)',
  patterns: [/^roll ([0-9]*d[0-9]*)(\+[0-9]*|-[0-9]*)?/i],
  description: 'Roll some dice!',
  command: diceroll,
};
