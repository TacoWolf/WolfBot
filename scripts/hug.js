const helpers = require(`${__dirname}/../helpers/`);

function hug(event) {
  helpers.statistics(event, 'hug');
  let msg = '';
  let hugs = [];
  const res = event.message.match(/<@(?:!|&)?([0-9]*)>/i);
  if (!res) {
    hugs = [
      `_WolfBot bounds up and hugs <@${event.userID}> happily~_ :green_heart:`,
      `_WolfBot hugs <@${event.userID}> happily, wagging his tail~_ \`^w^\``,
      `_WolfBot gives <@${event.userID}> a big hug. D'aww~_
 :green_heart:`,
    ];
  } else {
    let huggedUser = '';
    huggedUser = res[1];
    if (huggedUser === event.bot.id) {
      hugs = [
        `_WolfBot tilts his head and scratches his own ear._`,
        `_WolfBot looks at himself, then nibbles at his fur and falls over trying to hug himself._ Awrrrf~`,
        `_WolfBot whines softly, then pants and rolls over, wagging his fluffy tail._`,
        `_WolfBot looks at himself, then up at <@${event.userID}>._ ...Awwr? ;w;`
      ]
    } else {
      hugs = [
        `_WolfBot gives <@${huggedUser}> a really big hug._ :green_heart:`,
        `_WolfBot hugs <@${huggedUser}> tightly!_ :green_heart:`,
        `_WolfBot hugs <@${huggedUser}> lovingly~_ :green_heart:`,
      ];
    }
  }
  msg = helpers.randomArray(hugs);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
}
module.exports = {
  name: 'hug',
  author: 'thattacoguy',
  syntax: 'hug (@someone|me)',
  patterns: [/^hug me/i,
    /^hug <@(?:!|&)?([0-9]*)>/i,
    /^give <@(?:!|&)?([0-9]*)> (a hug|hugs|a big hug)/i,
    /^give me (a hug|hugs)/i,
    /^snuggle me/i,
    /^snuggle <@.*>/i,
  ],
  description: 'Hug someone. >w<',
  command: hug,
};
