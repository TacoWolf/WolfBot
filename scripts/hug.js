var helpers = require(__dirname + '/../helpers/');

function hug(event) {
    helpers.statistics(event, 'hug');
    msg = '';
    console.log(event.message)
    var res = event.message.match(/(<@\d*>)/i);
    var regex = new RegExp('(<@\d*>)', 'i')
    var result = undefined;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i])
        if (regex.test(res[i]) && res[i] !== bot.id) {
            result = res[i]
        }
    }
    if (!result) {
        hugs = [
            '**[WolfBot bounds up and hugs __' + event.user + '__ happily~]** :green_heart:',
            '**[WolfBot hugs __' + event.user + '__ happily, wagging his tail~]** `^w^`',
            '**[WolfBot gives __' + event.user + '__ a big hug. D\'aww~]** :green_heart:'
        ];
        msg = helpers.randomArray(hugs);
    } else {
        var huggedUser = '';
        huggedUser = event.bot.fixMessage(result);
        huggedUser = huggedUser.substring(1);
        console.log(huggedUser)
        hugs = [
            '**' + event.user + '** gives **' + huggedUser + '** a really big hug. :3',
            '**' + event.user + '** hugs **' + huggedUser + '** tightly! :green_heart:',
            '**' + event.user + '** hugs **' + huggedUser + '** lovingly~ :green_heart:',
        ];
        console.log(msg)
        msg = helpers.randomArray(hugs);
        console.log(msg)
    }
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
}
module.exports = {
    name: 'hug',
    author: 'thattacoguy',
    patterns: ['hug me', 'hug (<@\d*>)', 'give (<@\d*>) (a hug|hugs)', 'give me (a hug|hugs)'],
    description: 'Hug someone. >w<',
    command: hug
}
