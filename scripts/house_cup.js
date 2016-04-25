'use strict';
var helpers = require(__dirname + '/../helpers/');
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGODB_URI;

function houseCup(event) {
  var msg = '';
  MongoClient.connect(mongourl, function(err, db) {
    if (err) {
      throw err;
    } else {
      var col = db.collection('servers');
      col.find({
        serverID: event.serverID
      }).limit(1).each(function(err, server) {
        if (server) {
          var houses = [];
          var g = {name: helpers.houseDetail('g')};
          var h = {name: helpers.houseDetail('h')};
          var r = {name: helpers.houseDetail('r')};
          var s = {name: helpers.houseDetail('s')};
          if (server.g) {
            g.points = server.g;
          } else { g.points = 0; }
          if (server.h) {
            h.points = server.h;
          } else { h.points = 0; }
          if (server.r) {
            r.points = server.r;
          } else { r.points = 0; }
          if (server.s) {
            s.points = server.s;
          } else { s.points = 0; }
          houses.push(g, h, r, s);
          houses.sort(function(a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
          });
          msg = '**HOUSE CUP RANKINGS**\n';
          msg += '1. **' + houses[0].name;
          msg += '** with **' + houses[0].points + '** points. \n';
          msg += '2. **' + houses[1].name;
          msg += '** with **' + houses[1].points + '** points. \n';
          msg += '3. **' + houses[2].name;
          msg += '** with **' + houses[2].points + '** points. \n';
          msg += '4. **' + houses[3].name;
          msg += '** with **' + houses[3].points + '** points. \n';
          event.bot.sendMessage({
            to: event.channelID,
            message: msg
          });
        }
      });
    }
  });
}
module.exports = {
  name: 'House Cup',
  author: 'thattacoguy',
  syntax: 'house cup',
  patterns: [/house cup/i],
  description: 'See all the houses and their rankings in the cup!',
  command: houseCup
};
