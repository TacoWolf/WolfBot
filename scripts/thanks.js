const helpers = require(`${__dirname}/../helpers/`);

function thanks(event) {
  // jscs:disable
  const answers = [
    `You're welcome, <@${event.userID}> ! \`^w^\``,
    `I-It was nothing, <@${event.userID}>. >w<`,
    `_WolfBot whines shyly, blushing._ \nY-you're welcome, <@${event.userID}>~ >w<`, // jshint ignore:line
    `I-I'm sure you would've done the same, <@${event.userID}>! :3`,
  ];
  // jscs:enable
  const msg = helpers.randomArray(answers);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
  helpers.statistics(event, 'thanks');
}
module.exports = {
  name: 'thanks',
  syntax: 'thanks',
  hidden: true,
  patterns: [/thank(s| you)/i],
  description: 'danke',
  command: thanks,
};
