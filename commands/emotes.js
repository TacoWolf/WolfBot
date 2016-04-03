var helpers = require('./../helpers');
function uploadEmote(bot, channelID, file, userID, user) {
  bot.uploadFile({
    to: channelID,
    file: 'emote/' + file,
    message: '<@' + userID + '>'
  });
  helpers.statistics('emoted', user, userID, channelID, message);
}
module.exports = {
  emote_alphys: function (bot, user, userID, channelID, message) {
    file = 'alphys.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_toby: function (bot, user, userID, channelID, message) {
    file = 'dog.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_tobybone: function (bot, user, userID, channelID, message) {
    file = 'tobybone.gif';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_tobysleep: function (bot, user, userID, channelID, message) {
    file = 'tobysleep.gif';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_tobytrap: function (bot, user, userID, channelID, message) {
    file = 'tobytrap.gif';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_flowey: function (bot, user, userID, channelID, message) {
    file = 'flowey.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_floweyevil: function (bot, user, userID, channelID, message) {
    file = 'floweyevil.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_papyrusglare: function (bot, user, userID, channelID, message) {
    file = 'papyrusglare.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_papyrusshock: function (bot, user, userID, channelID, message) {
    file = 'papyrusshock.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_papyruscool: function (bot, user, userID, channelID, message) {
    file = 'papyruscool.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_sans: function (bot, user, userID, channelID, message) {
    file = 'sans.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_toriel: function (bot, user, userID, channelID, message) {
    file = 'toriel.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_torielglare: function (bot, user, userID, channelID, message) {
    file = 'toriel.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_torielcry: function (bot, user, userID, channelID, message) {
    file = 'torielsad.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_torielshock: function (bot, user, userID, channelID, message) {
    file = 'torielshock.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_undyne: function (bot, user, userID, channelID, message) {
    file = 'undynelaugh.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_blook: function (bot, user, userID, channelID, message) {
    file = 'napstablook.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_dapperblook: function (bot, user, userID, channelID, message) {
    file = 'dapperblook.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_blookchill: function (bot, user, userID, channelID, message) {
    file = 'napstablookchill.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_napsta: function (bot, user, userID, channelID, message) {
    file = 'napstablooktunes.png';
    uploadEmote(bot, channelID, file, userID, user);
  },
  emote_blookworried: function (bot, user, userID, channelID, message) {
    file = 'napstablookworried.png';
    uploadEmote(bot, channelID, file, userID, user);
  }
};