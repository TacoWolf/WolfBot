const helpers = require(`${__dirname}/../helpers/`);

function treat(event) {
  helpers.statistics(event, 'treat');
  let msg = '';
  const treats = [`_WolfBot noms happily on <@${event.userID}> 's treat~_ :green_heart:`, // jshint ignore:line
    `_WolfBot grruffs and happily nibbles on <@${event.userID}> 's treat happily~_ \`^w^\``, // jshint ignore:line
    `_WolfBot yips and gently takes the treat from < @$ { event.userID } > 's hand~_
 :green_heart:`, // jshint ignore:line
  ];
  msg = helpers.randomArray(treats);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
}
module.exports = {
  name: 'treat',
  author: 'thattacoguy',
  syntax: 'treat',
  patterns: [/^(have a |take a )?treat/i],
  description: 'G-give me a treat~ >w<',
  command: treat,
};
