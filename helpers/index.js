const MongoClient = require('mongodb').MongoClient;

const mongourl = process.env.MONGODB_URI;

module.exports = {
  usersInServer(event) {
    const members = [];
    for (const key in event.bot.servers[event.serverID].members) {
      members.push(key);
    }
    return members;
  },
  roleCheck(event, roleType) {
    let checker = '';
    let adminid;
    let verifier = false;
    const serverID = event.bot.servers[event.serverID];
    const roles = serverID.roles;
    const userRole = serverID.members[event.userID].roles;
    if (roleType === 'headmaster') {
      checker = 'headmaster';
    } else {
      checker = 'wb admin';
    }
    for (const key in roles) {
      if (roles[key].name.toLowerCase() === checker) {
        adminid = roles[key].id;
      }
    }
    for (let i = 0; i < userRole.length; i += 1) {
      if (userRole[i] === adminid) {
        verifier = true;
      }
    }
    return verifier;
  },
  houseDetail(house) {
    let convertHouse = '';
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
      default:
        convertHouse = 'Gryffindor';
        break;
    }
    return convertHouse;
  },
  statistics(event, name, value) {
    if (!value) {
      value = 1;
    }
    MongoClient.connect(mongourl, (err, db) => {
      if (err) {
        throw err;
      } else {
        const col = db.collection('users');
        const increment = {};
        increment[name] = value;
        col.updateOne({ userID: event.userID }, { $inc: increment });
        db.close();
      }
    });
  },
  points(event, house, value) {
    if (!value) {
      value = 1;
    }
    MongoClient.connect(mongourl, (err, db) => {
      if (err) {
        throw err;
      } else {
        const col = db.collection('servers');
        const increment = {};
        increment[house] = value;
        col.updateOne({ serverID: event.serverID }, { $inc: increment });
        db.close();
      }
    });
  },
  parameters(message) {
    // Check the parameters of each message
    let parameters = [];
    parameters = message.split(' ');
    return parameters;
  },
  randomArray(array) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
  },
  firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  },
  join(array) {
    let output = '';
    for (let i = 0; i < array.length; i += 1) {
      output += array[i];
      output += ' ';
    }
    return output;
  },
};
