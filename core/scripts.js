const rawScripts = require('require-all')(`${__dirname}/../scripts`);
const async = require('async');

const keywords = [];

for (const script in rawScripts) {
  const properties = rawScripts[script];
  for (const property in properties) {
    if (property === 'patterns') {
      const pattern = properties[property];
      for (let i = 0; i < pattern.length; i += 1) {
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
  }
  return true;
}

function context(event) {
  let command;
  async.forEachOf(rawScripts, (value) => {
    const patterns = value.patterns;
    async.each(patterns, (pattern, callback) => {
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
  rawScripts,
  index,
  match,
  context,
};
