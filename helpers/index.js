var cache = require('memory-cache');
module.exports = {
    roleCheck: function(event) {
        var checker = '';
        var adminid;
        var verifier = false;
        var roles = event.bot.servers[event.serverID].roles;
        var userRole = event.bot.servers[event.serverID].members[event.userID].roles;
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
    statistics: function(event, item, points) {
        var userID = event.userID;
        var serverID = event.serverID;
        var db = event.storage.get(serverID) || {};
        var userData = db.userID || {};
        var userItem = userData.item || 0;
        if (!points) {
            points = 1
        }
        userItem += points
        event.storage.put(serverID,db);
    },
    parameters: function(message) {
        // Check the parameters of each message
        parameters = [];
        parameters = message.split(' ');
        return parameters;
    },
    housetrans: function(house) {
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
    randomator: function(cases) {
        return Math.floor(Math.random() * cases);
    },
    randomArray: function(array) {
        random = array[Math.floor(Math.random() * array.length)];
        return random;
    },
    firstToUpperCase: function(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    },
    join: function(array) {
        output = '';
        for (var i = 0; i < array.length; i++) {
            output += array[i];
            output += ' ';
        }
        return output;
    }
};
