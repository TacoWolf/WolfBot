var stats = require('./stats.json');
var admins = require('./admins.json');
module.exports = {
  admin: function (userID) {
    var adminCheck = admins.admins;
    for (var i = 0; i < adminCheck.length; i++) {
      if (adminCheck[i] === userID) {
        return true;
      }
    }
  },
  superAdmin: function (userID) {
    var adminCheck = admins.superadmin;
    for (var i = 0; i < adminCheck.length; i++) {
      if (userID === adminCheck[i]) {
        return true;
      }
    }
  },
  statistics: function (item, user, userID, channelID, message, points) {
    // [eternal screaming]
    if (stats[userID] === undefined) {
      stats[userID] = {};
    }
    var appendStat = stats[userID];
    if (appendStat[item] === undefined) {
      appendStat[item] = 0;
    }
    if (points === undefined) {
      points = 1;
    }
    appendStat[item] = appendStat[item] + points;
    require('fs').writeFileSync('./stats.json', JSON.stringify(stats, null, '\t'));
  },
  parameters: function (message) {
    // Check the parameters of each message
    parameters = [];
    parameters = message.split(' ');
    return parameters;
  },
  generateCommands: function (p) {
    var fs = require('fs'), path = require('path');
    fs.readdir(p, function (err, files) {
      if (err) {
        throw err;
      }
      console.log(files);
    });
  },
  housetrans: function (house) {
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
  randomator: function (cases) {
    return Math.floor(Math.random() * cases);
  },
  randomArray: function (array) {
    random = array[Math.floor(Math.random() * array.length)];
    return random;
  },
  firstToUpperCase: function (str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  },
  getServerID: function (bot, channelID) {
    var serverlist = bot.servers;
    var serverCheck = false;
    for (var key in serverlist) {
      var serverKey = serverlist[key];
      for (key in serverKey) {
        var serverInfo = serverKey[key];
        for (key in serverInfo) {
          var serverProps = serverInfo[key];
          if (key === channelID) {
            serverCheck = true;
            var serverID = serverKey.id;
            return serverID;
          }
        }
      }
    }
    if (serverCheck === false) {
      return 'pm';
    }
  },
  join: function (array) {
    output = '';
    for (var i = 0; i < array.length; i++) {
      output += array[i];
      output += ' ';
    }
    return output;
  }
};