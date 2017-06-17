const helpers = require(`${__dirname}/../helpers/`);

function help(event) {
  let msg = '';
  if (event.pm === true) {
    msg = 'S-sorry, you can\'t do that in a PM with me. ;w;';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
  } else {
    msg = '**Hi! I\'m WolfBot!** :3 :green_heart:';
    msg += '\n\nHere\'s some stuff to help you out:\n```md\n';
    msg += '# Commands\n\n[help](You already know what this is. ;3)';
    const rawScripts = require('require-all')(`${__dirname}/../scripts`);
    const check = helpers.roleCheck(event, 'admin');
    for (const key in rawScripts) {
      const name = rawScripts[key].syntax;
      const description = rawScripts[key].description;
      const helper = `\n[${name}](${description})`;
      if (check === true) {
        msg += helper;
      } else if (key !== 'help' && rawScripts[key].hidden !== true) {
        msg += helper;
      }
    }
    msg += '```\n\nI-I hope that helped! >w<';
    msg += '\n\nI-if you find an issue with WolfBot or want to submit an idea,';
    msg += ' feel free to use WolfBot\'s GitHub issues page. ';
    msg += '<https://github.com/TacoWolf/WolfBot/issues> :3 ';
    msg += '\n Thanks! :green_heart:';
    event.bot.sendMessage({
      to: event.channelID,
      message: `Sent you a PM, <@${event.userID}>! \`^w^\``,
    });
    event.bot.sendMessage({
      to: event.userID,
      message: msg,
    });
  }
}

module.exports = {
  name: 'help',
  syntax: 'help',
  patterns: [/^help$/i],
  description: 'Get help from WolfBot! T-that\'s me. >w<',
  command: help,
};
