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
            '**[WolfBot gives __' + huggedUser + '__ a really big hug.]** :green_heart',
            '**[WolfBot hugs __' + huggedUser + '__ tightly!]** :green_heart:',
            '**[WolfBot hugs __' + huggedUser + '__ lovingly~]** :green_heart:',
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
    syntax: 'hug [@someone|me]',
    patterns: ['hug me', 'hug (<@.*>)', 'give (<@.*>) (a hug|hugs|a big hug)', 'give me (a hug|hugs)', 'snuggle me', 'snuggle <@.*>'],
    description: 'Hug someone. >w<',
    command: hug
}
