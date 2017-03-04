const helpers = require(`${__dirname}/../helpers/`);

function love(event) {
  const lovemsgs = [
    `I-I love you, too, <@${event.userID}>. >w< :green_heart:`,
    'I-I~... **[whine~]** ;w;',
    `T-thanks, <@${event.userID}>~... >w<`,
    `A-aw, thanks, <@${event.userID}>. I-I love you too! :3`,
    '**[blush~]** >w<',
  ];
  const msg = helpers.randomArray(lovemsgs);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
  helpers.statistics(event, 'love');
}
module.exports = {
  name: 'love',
  author: 'thattacoguy',
  syntax: 'love',
  hidden: true,
  patterns: [/love you/i],
  description: '<3',
  command: love,
};
