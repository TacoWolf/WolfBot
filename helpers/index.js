var MongoClient = require('mongodb').MongoClient

module.exports = {
    statistics: function(event, name, value) {
        var url = process.env.MONGOLAB_URI
        if (!value) {
            value = 1
        }
        MongoClient.connect(url, function(err, db) {
            if (err) {
                throw err;
            } else {
                var col = db.collection('users')
                var increment = {}
                increment[name] = value
                var user = { $inc: increment }
                col.updateOne({ userID: event.userID }, user);
            };
        });
    },
    parameters: function(message) {
        // Check the parameters of each message
        parameters = [];
        parameters = message.split(' ');
        return parameters;
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