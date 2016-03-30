var helpers = require('./../helpers');
function eightball(bot, user, userID, channelID, message) {
  helpers.statistics('8ball', user, userID, channelID, message);
  answers = [
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
  answer = answers[Math.floor(Math.random() * answers.length)];
  rawQuestion = helpers.parameters(message);
  rawQuestion.shift();
  question = helpers.join(rawQuestion);
  msg = ':grey_question: **Question:** `' + question + '`\n:crystal_ball: **Answer:** `' + answer + '`';
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: eightball };