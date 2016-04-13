var rawScripts = require('require-all')(__dirname + '/../scripts');
var async = require('async');
var keywords = [];
for (var script in rawScripts) {
    properties = rawScripts[script];
    for (var property in properties) {
        if (property === 'patterns') {
            var pattern = properties[property];
            for (var i = 0; i < pattern.length; i++) {
                keywords.push(pattern[i]);
            }
        }
    }
}

function index() {
    return keywords;
}

function match(keyword, message) {
    // RegExp adapter for all of the keywords
    var regex = new RegExp(keyword, 'i')
    if (!regex.test(message)) {
        return false
    } else {
        return true
    }
}

function context(event) {
    var command;
    async.forEachOf(rawScripts, function(value, key, callback) {
        patterns = value.patterns;
        async.each(patterns, function(pattern, callback) {
            var regex = new RegExp(pattern, 'g')
            if (!regex.test(event.message)) {
                callback();
            } else {
                command = value.command;
            }
        });
    });
    return command;
}

module.exports = {
    rawScripts: rawScripts,
    index: index,
    match: match,
    context: context
};