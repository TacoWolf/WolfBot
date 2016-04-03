var helpers = require('./../helpers');
msg = '';
function send(bot, channelID, msg) {
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = {
  mention: function (bot, user, userID, channelID, message) {
    helpers.statistics('mentions', userID);
    mentions = [
      'What? ;w;',
      '[yip?]',
      'Awrrf? ;w;',
      '[snorts awake]',
      'Yeah? :3',
      '[bark!]'
    ];
    msg = helpers.randomArray(mentions);
    send(bot, channelID, msg);
  },
  roll: function (bot, user, userID, channelID, message) {
    msg = '[rolls over happily~]';
    send(bot, channelID, msg);
  },
  wbtreat: function (bot, user, userID, channelID, message) {
    helpers.statistics('treats', userID);
    treats = [
      '[nomnomnomnom~]',
      '[nibbles up the treat happily~]',
      '[yips eagerly, wagging his tail as he stands on his hind paws, soon nibbling up the treat happily~]'
    ];
    msg = helpers.randomArray(treats);
    send(bot, channelID, msg);
  },
  bark: function (bot, user, userID, channelID, message) {
    msg = '[bark!]';
    send(bot, channelID, msg);
  },
  sandwich: function (bot, user, userID, channelID, message) {
    helpers.statistics('sandwich', userID);
    msg = 'What? Make it yourself.';
    send(bot, channelID, msg);
  },
  sudo: function (bot, user, userID, channelID, message) {
    helpers.statistics('sudosandwich', userID);
    msg = 'Okay.';
    send(bot, channelID, msg);
  },
  love: function (bot, user, userID, channelID, message) {
    helpers.statistics('love', userID);
    msg = 'I-I love you, too. >w< :green_heart:';
    send(bot, channelID, msg);
  },
  gb: function (bot, user, userID, channelID, message) {
    goodBoy = [
      '[happy pant~]',
      '[yap! yap!]',
      '[happy whine~]'
    ];
    msg = helpers.randomArray(goodBoy);
    send(bot, channelID, msg);
  }
};