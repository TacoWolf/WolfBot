module.exports = {
    emote_alphys: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/alphys.png"
        });
    },

    emote_toby: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/dog.png"
        });
    },

    emote_tobybone: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/tobybone.gif"
        });
    },

    emote_tobysleep: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/tobysleep.gif"
        });
    },

    emote_tobytrap: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/tobytrap.gif"
        });
    },

    emote_flowey: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/flowey.png"
        });
    },

    emote_floweyevil: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/floweyevil.png"
        });
    },

    emote_papyrusglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/papyrusglare.png"
        });
    },

    emote_papyrusshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/papyruswacky.png"
        });
    },

    emote_papyruscool: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/papyruscool.png"
        });
    },

    emote_sans: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/sans.png"
        });
    },

    emote_toriel: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/toriel.png"
        });
    },

    emote_torielglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/torielglare.png"
        });
    },

    emote_torielcry: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/torielsad.png"
        });
    },

    emote_torielshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/torielshock.png"
        });
    },

    emote_undyne: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/undynelaugh.png"
        });
    },

    emote_blook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/napstablook.png"
        });
    },

    emote_dapperblook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/dapperblook.png"
        });
    },

    emote_blookchill: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/napstablookchill.png"
        });
    },

    emote_napsta: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/napstablooktunes.png"
        });
    },

    emote_blookworried: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        bot.uploadFile({
            to: channelID,
            file: "emote/napstablookworried.png"
        });
    }
}