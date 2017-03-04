

const helpers = require(`${__dirname}/../helpers/`);

function restart(event) {
  const check = helpers.roleCheck(event, 'admin');
  let msg = '';
  if (event.pm === true) {
    msg = 'S-sorry, you can\'t do that in a PM with me. ;w;';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
  } else if (check === true) {
    event.bot.sendMessage({
      to: event.channelID,
      message: 'Restarting! Back in a bit! `^w^`',
    }, () => {
      process.exit(1);
    });
  } else {
    msg = `I'm afraid you can't do that, <@${event.userID}>. .w.`;
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
  }
}
module.exports = {
  name: 'restart',
  author: 'thattacoguy',
  syntax: 'restart',
  hidden: true,
  patterns: [/^restart$|^reboot$/i],
  description: 'Ping the bot!',
  command: restart,
};
