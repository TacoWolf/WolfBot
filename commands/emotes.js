var fs = require('fs');

module.exports = {
    emote_alphys: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/alphys.png")});
    },

    emote_toby: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/dog.png")});
    },

    emote_tobybone: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/tobybone.gif")});
    },

    emote_flowey: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/flowey.png")});
    },

    emote_floweyevil: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/floweyevil.png")});
    },

    emote_papyrusglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/papyrusglare.png")});
    },

    emote_papyrusshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/papyruswacky.png")});
    },

    emote_papyruscool: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/papyruscool.png")});
    },

    emote_sans: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/sans.png")});
    },

    emote_toriel: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/toriel.png")});
    },

    emote_torielglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/torielglare.png")});
    },

    emote_torielcry: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/torielsad.png")});
    },

    emote_torielshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/torielshock.png")});
    },

    emote_undyne: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/undynelaugh.png")});
    },

    emote_blook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/napstablook.png")});
    },

    emote_dapperblook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/dapperblook.png")});
    },

    emote_blookchill: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/napstablookchill.png")});
    },

    emote_napsta: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/napstablooktunes.png")});
    },

    emote_blookworried: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/napstablookworried.png")});
    }
}
