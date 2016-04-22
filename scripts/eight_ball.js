'use strict';
var helpers = require(__dirname + '/../helpers/');

var eightBall = function(event) {
  helpers.statistics(event, 'eightball');
  var answers = [
    'It is certain~',
    'It is decidedly so. >w>',
    'Without a doubt~',
    'Yes, definitely. ^w^',
    'You may rely on it. >w>',
    'As I see it, yes! ^w^',
    'Most likely. :3',
    'Outlook good~! ^w^',
    'Yes. :3',
    'Signs point to yes~ >w<',
    'Reply hazy... try again. =w=',
    'Ask again later...',
    '...better not tell you now... ;w;',
    'Cannot predict now. -w-',
    'Concentrate and ask again. -w-',
    '...don\'t count on it. ;w;',
    'My reply is no. =w=',
    'Outlook... not so good. ;w;',
    'Very doubtful. =w='
  ];
  var answer = helpers.randomArray(answers);
  var rawQuestion = helpers.parameters(event.message);
  for (var i = rawQuestion.length - 1; i >= 0; i--) {
    if (/<@.*>/.test(rawQuestion[i])) {
      rawQuestion[i] = event.bot.fixMessage(rawQuestion[i]);
      rawQuestion[i] = '[' + rawQuestion[i] + ']';
    }
  }
  var question = helpers.join(rawQuestion);
  var msg = '**[WolfBot pulls out a crystal ball and';
  msg += ' gazes into the unknown...]**';
  msg += '\n:grey_question: **Question:** `' + question;
  msg += '`\n:crystal_ball: **Answer:   ** `' + answer + '`';
  helpers.statistics(event, 'eightball');
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
};

module.exports = {
  name: '8ball',
  author: 'thattacoguy',
  syntax: '8ball [question]',
  patterns: ['8ball (.*)'],
  description: 'Ask for advice from the universe, oooo~',
  command: eightBall
};
