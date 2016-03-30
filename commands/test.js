var helpers = require('./../helpers');
var request = require('request');
module.exports = {
  test: function (bot, user, userID, channelID, message) {
    console.log('This will break things.');
    var req = request.get('http://foaas.com/' + parameters[1] + '/' + parameters[2] + '/', function (err, res, json) {
      if (!err && res.statusCode === 200) {
        console.log(body);
      }
    });
  }
};