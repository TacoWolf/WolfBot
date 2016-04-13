var helpers = require(__dirname + '/../helpers/');

function hug(event) {
    helpers.statistics(event, 'hug');
    msg = '';
    var res = event.message.match(/(<@\d*>)/i);
    if (!res) {
        hugs = [
            '**[WolfBot bounds up and hugs __' + event.user + '__ happily~]** :green_heart:',
            '**[WolfBot hugs __' + event.user + '__ happily, wagging his tail~]** `^w^`',
            '**[WolfBot gives __' + event.user + '__ a big hug. D\'aww~]** :green_heart:'
        ];
        msg = helpers.randomArray(hugs);
    } else {
        var huggedUser = '';
        huggedUser = event.bot.fixMessage(res[1]);
        huggedUser = huggedUser.substring(1);
        hugs = [
            '**' + event.user + '** gives **' + huggedUser + '** a really big hug. :3',
            '**' + event.user + '** hugs **' + huggedUser + '** tightly! :green_heart:',
            '**' + event.user + '** hugs **' + huggedUser + '** lovingly~ :green_heart:',
        ];
        msg = helpers.randomArray(hugs);
    }
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
}
module.exports = {
    name: 'hug',
    author: 'thattacoguy',
    patterns: ['hug me', 'hug (<@.*>)', 'give (<@.*>) (a hug|hugs)', 'give me (a hug|hugs)'],
    description: 'Hug someone. >w<',
    command: hug
}
