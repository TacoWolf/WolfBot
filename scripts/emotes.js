const fs = require('fs');
const async = require('async');

const helpers = require(`${__dirname}/../helpers/`);
const emotes = [];
let emoteList = '(';
const items = fs.readdirSync(`${__dirname}/../emote/`);
let emoteHelpList = '';
for (let i = 0; i < items.length; i += 1) {
  emotes.push(items[i]);
  const res = items[i].match(/(.*)\..*/);
  if (i !== items.length - 1) {
    emoteList += `${res[1]}|`;
    emoteHelpList += `\`${res[1]}\`, `;
  } else {
    emoteList += `${res[1]})`;
    emoteHelpList += `and \`${res[1]}\``;
  }
}
emoteList = new RegExp(`^${emoteList}$`, 'i');

function emoteTrigger(event) {
  if (event.message === 'emotes') {
    let msg = 'O-oh! Here\'s a list of emotes I know about! `^w^` \n';
    msg += `${emoteHelpList} are all emotes that I can post. :3`;
    event.bot.sendMessage({
      to: event.userID,
      message: msg,
    });
  } else {
    const emote = event.message.match(emoteList);
    const matcher = new RegExp(`^${emote[1]}\\..*`, 'i');
    async.each(items, (item, callback) => {
      if (matcher.test(item)) {
        event.bot.uploadFile({
          to: event.channelID,
          file: `${__dirname}/../emote/${item}`,
          message: `<@${event.userID}>`,
        });
        callback();
      } else {
        callback();
      }
    });
    helpers.statistics(event, 'emote');
  }
}
module.exports = {
  name: 'emotes',
  author: 'thattacoguy',
  syntax: 'emotes',
  patterns: [emoteList, /^emotes/i],
  description: 'Get a list of emotes!',
  command: emoteTrigger,
};
