'use strict';
var rawScripts = require('require-all')(__dirname + '/../scripts');
var async = require('async');
var keywords = [];

for (var script in rawScripts) {
  var properties = rawScripts[script];
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
  if (!keyword.test(message)) {
    return false;
  } else {
    return true;
  }
}

function context(event) {
  var command;
  async.forEachOf(rawScripts, function(value) {
    var patterns = value.patterns;
    async.each(patterns, function(pattern, callback) {
      if (!pattern.test(event.message)) {
        callback();
      } else {
        command = value.command;
        callback();
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
