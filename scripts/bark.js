var helpers = require(__dirname + '/../helpers/');

function bark(event) {
    var answers = [
        '**[yip!]**',
        '**[grrrruff~]**',
        '**[snorts awake]**',
        'Awrr? ;w;',
        '**[tailwag]**',
        '**[bark, bark!]**'
    ];
    var msg = helpers.randomArray(answers);
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
    helpers.statistics(event, 'bark');
}
module.exports = {
    name: 'bark',
    author: 'thattacoguy',
    syntax: 'bark',
    hidden: true,
    patterns: ['bark', 'woof', 'yip', 'woof', 'speak'],
    description: 'boof',
    command: bark
}
