var stats = require('./stats.json');
var admins = require('./admins.json');

module.exports = {
    admin: function(userID) {
        var adminCheck = admins["admins"];
        for (var i = 0; i < adminCheck.length; i++) {
            if (adminCheck[i] === userID) {
                return true;
            }
        };
    },
    superAdmin: function(userID) {
        for (var i = 0; i < superadmin.length; i++) {
            if (userID === superadmin[i]) {
                return true;
            }
        };
    },
    sendMessages: function(bot, ID, messageArr, interval) {
        // Send an array of messages
        var len = messageArr.length;
        var callback;
        var resArr = [];
        typeof(arguments[2]) === 'function' ? callback = arguments[2]: callback = arguments[3];
        if (typeof(interval) !== 'number') interval = 250;

        function _sendMessages() {
            setTimeout(function() {
                if (messageArr.length > 0) {
                    bot.sendMessage({
                        to: ID,
                        message: messageArr[0]
                    }, function(res) {
                        resArr.push(res);
                    });
                    messageArr.splice(0, 1);
                    _sendMessages();
                }
            }, interval);
        }
        _sendMessages();

        var checkInt = setInterval(function() {
            if (resArr.length === len) {
                if (typeof(callback) === 'function') {
                    callback(resArr);
                }
                clearInterval(checkInt);
            }
        }, 0);
    },
    statistics: function(item, user, userID, channelID, message, points) {
        // [eternal screaming]
        if (stats[userID] === undefined) {
            stats[userID] = {};
        }
        var appendStat = stats[userID];
        if (appendStat[item] === undefined) {
            appendStat[item] = 0;
        }
        if (points === undefined) {
            points = 1
        }
        appendStat[item] = appendStat[item] + points;
        require('fs').writeFileSync('./stats.json', JSON.stringify(stats, null, '\t'));
    },
    sendFiles: function(bot, channelID, fileArr, interval) {
        // Send a file
        var len = fileArr.length;
        var callback;
        var resArr = [];
        typeof(arguments[2]) === 'function' ? callback = arguments[2]: callback = arguments[3];
        if (typeof(interval) !== 'number') interval = 500;

        function _sendFiles() {
            setTimeout(function() {
                if (fileArr.length > 0) {
                    bot.uploadFile({
                        channel: channelID,
                        file: fileArr[0]
                    }, function(res) {
                        resArr.push(res);
                    });
                    fileArr.splice(0, 1);
                    _sendFiles();
                }
            }, interval);
        }
        _sendFiles();

        var checkInt = setInterval(function() {
            if (resArr.length === len) {
                if (typeof(callback) === 'function') {
                    callback(resArr);
                }
                clearInterval(checkInt);
            }
        }, 0);
    },
    parameters: function(message) {
        // Check the parameters of each message
        parameters = [];
        parameters = message.split(" ");
        return parameters

    },
    generateCommands: function(p) {
        var fs = require("fs"),
            path = require("path");
        fs.readdir(p, function(err, files) {
            if (err) {
                throw err;
            }
            console.log(files);
        });
    },
    housetrans: function(house) {
        var convertHouse = "";
        switch (house) {
            case 'g':
                convertHouse = "Gryffindor";
                break;
            case 'h':
                convertHouse = "Hufflepuff";
                break;
            case 'r':
                convertHouse = "Ravenclaw";
                break;
            case 's':
                convertHouse = "Slytherin";
                break;
        }
        return convertHouse;
    },
    randomator: function(cases) {
        return Math.floor(Math.random() * cases);
    },
    getServerID: function(bot, channelID) {
        var serverlist = bot.servers;
        var serverCheck = false;
        for (var key in serverlist) {
            var serverKey = serverlist[key];
            for (var key in serverKey) {
                var serverInfo = serverKey[key];
                for (var key in serverInfo) {
                    var serverProps = serverInfo[key];
                    if (key === channelID) {
                        serverCheck = true;
                        var serverID = serverKey["id"];
                        return serverID;
                    }
                }
            }
        }
        if (serverCheck === false) {
            return "pm";
        }

    }
}
