var helpers = require(__dirname + '/../helpers/');

function pet(event) {
    var pets = [
        '**[whines happily, leaning into <@' + event.userID + '>\'s scritches~]**',
        '**[murrs lovingly, nuzzling <@' + event.userID + '>\'s hand gently~]**',
        '**[whines sweetly, blushing and leaning into <@' + event.userID + '>\'s pets~]**',
    ];
    var msg = helpers.randomArray(pets);
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
    helpers.statistics(event, 'pet');
}
module.exports = {
    name: 'pet',
    author: 'thattacoguy',
    syntax: 'pet',
    hidden: true,
    patterns: ['pet'],
    description: 'Pet WolfBot! :green_heart:',
    command: pet
}
