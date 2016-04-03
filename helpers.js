var stats = require('./stats.json');
module.exports = {
  roleCheck: function (bot, serverID, userID, roleType) {
    var checker = '';
    var adminid;
    var verifier = false;
    var roles = bot.servers[serverID].roles;
    var userRole = bot.servers[serverID].members[userID].roles;
    if (roleType == 'admin') {
      checker = 'wb admin';
    } else if (roleType == 'superadmin') {
      checker = 'wb superadmin';
    } else if (roleType == 'headmaster') {
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
  statistics: function (item, userID, points) {
    if (stats[userID] === undefined) {
      stats[userID] = {};
    }
    var appendStat = stats[userID];
    if (appendStat[item] === undefined) {
      appendStat[item] = 0;
    }
    console.log(points)
    if (!points){
      points = 1
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
  getServerID: function (bot, channelID, userID) {
    var serverID = bot.serverFromChannel(channelID);
    if (serverID === undefined) {
      return 'pm';
    } else {
      return serverID;
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