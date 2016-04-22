'use strict';
var MongoClient = require('mongodb').MongoClient;
var mongourl = process.env.MONGOLAB_URI;

module.exports = {
  roleCheck: function(event, roleType) {
    var checker = '';
    var adminid;
    var verifier = false;
    var serverID = event.bot.servers[event.serverID];
    var roles = serverID.roles;
    var userRole = serverID.members[event.userID].roles;
    if (roleType === 'admin') {
      checker = 'wb admin';
    } else if (roleType === 'superadmin') {
      checker = 'wb superadmin';
    } else if (roleType === 'headmaster') {
      checker = 'headmaster';
    }
    for (var key in roles) {
      if (roles[key].name.toLowerCase() === checker) {
        adminid = roles[key].id;
      }
    }
    for (var i = 0; i < userRole.length; i++) {
      if (userRole[i] === adminid) {
        verifier = true;
      }
    }
    return verifier;
  },
  houseDetail: function(house) {
    var convertHouse = '';
    switch (house) {
      case 'g':
        convertHouse = 'Gryffindor';
        break;
      case 'h':
        convertHouse = 'Hufflepuff';
        break;
      case 'r':
        convertHouse = 'Ravenclaw';
        break;
      case 's':
        convertHouse = 'Slytherin';
        break;
    }
    return convertHouse;
  },
  statistics: function(event, name, value) {
    if (!value) {
      value = 1;
    }
    MongoClient.connect(mongourl, function(err, db) {
      if (err) {
        throw err;
      } else {
        var col = db.collection('users');
        var increment = {};
        increment[name] = value;
        var user = {$inc: increment};
        col.updateOne({userID: event.userID}, user);
        db.close();
      }
    });
  },
  points: function(event, house, value) {
    if (!value) {
      value = 1;
    }
    MongoClient.connect(mongourl, function(err, db) {
      if (err) {
        throw err;
      } else {
        var col = db.collection('servers');
        var increment = {};
        increment[house] = {};
        var points = {$inc: increment};
        col.updateOne({serverID: event.serverID}, points);
        db.close();
      }
    });
  },
  parameters: function(message) {
    // Check the parameters of each message
    var parameters = [];
    parameters = message.split(' ');
    return parameters;
  },
  randomArray: function(array) {
    var random = array[Math.floor(Math.random() * array.length)];
    return random;
  },
  firstToUpperCase: function(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  },
  join: function(array) {
    var output = '';
    for (var i = 0; i < array.length; i++) {
      output += array[i];
      output += ' ';
    }
    return output;
  }
};
