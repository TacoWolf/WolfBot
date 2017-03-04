

const helpers = require(`${__dirname}/../helpers/`);

const eightBall = function (event) {
  const embed = {
    title: '',
    description: '',
    color: 2201331,
  };
  helpers.statistics(event, 'eightball');
  const answers = [
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
    'Very doubtful. =w=',
  ];
  const answer = helpers.randomArray(answers);
  const massage = event.message.match(/8ball (.*)/i);
  const rawQuestion = helpers.parameters(massage[1]);
  for (let i = rawQuestion.length - 1; i >= 0; i -= 1) {
    if (/<@.*>/.test(rawQuestion[i])) {
      rawQuestion[i] = event.bot.fixMessage(rawQuestion[i]);
      rawQuestion[i] = `[${rawQuestion[i]}]`;
    }
  }
  const question = helpers.join(rawQuestion);
  embed.title += '**[WolfBot pulls out a crystal ball and';
  embed.title += ' gazes into the unknown...]**';
  embed.description += `\n:grey_question: **Question:** \`${question}`;
  embed.description += `\`\n:crystal_ball: **Answer:   ** \`${answer}\``;
  helpers.statistics(event, 'eightball');
  event.bot.sendMessage({
    to: event.channelID,
    message: `<@${event.userID}>`,
    embed,
  });
};

module.exports = {
  name: '8ball',
  author: 'thattacoguy',
  syntax: '8ball (question)',
  patterns: [/^8ball (.*)/i],
  description: 'Ask for advice from the universe, oooo~',
  command: eightBall,
};
