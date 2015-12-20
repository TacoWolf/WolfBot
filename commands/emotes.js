module.exports = {
    emote_alphys: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/alphys.png"]);
    },

    emote_toby: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/dog.png"]);
    },

    emote_tobybone: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/tobybone.gif"]);
    },

    emote_flowey: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/flowey.png"]);
    },

    emote_floweyevil: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/floweyevil.png"]);
    },

    emote_papyrusglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/papyrusglare.png"]);
    },

    emote_papyrusshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/papyruswacky.png"]);
    },

    emote_papyruscool: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/papyruscool.png"]);
    },

    emote_sans: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/sans.png"]);
    },

    emote_toriel: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/toriel.png"]);
    },

    emote_torielglare: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/torielglare.png"]);
    },

    emote_torielcry: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/torielsad.png"]);
    },

    emote_torielshock: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/torielshock.png"]);
    },

    emote_undyne: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/undynelaugh.png"]);
    },

    emote_blook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/napstablook.png"]);
    },

    emote_dapperblook: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/dapperblook.png"]);
    },

    emote_blookchill: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/napstablookchill.png"]);
    },

    emote_napsta: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/napstablooktunes.png"]);
    },

    emote_blookworried: function(bot, user, userID, channelID, message) {
        var helpers = require('./../helpers');
        helpers.statistics("emoted", user, userID, channelID, message);
        helpers.sendFiles(channelID, ["emote/napstablookworried.png"]);
    }
}
