var helpers = require(__dirname + '/../helpers/');

function points(event) {
    var msg = '';
    var recieve = event.message.match(/(<@.*>|r|g|h|s)/i);
    var point = event.message.match(/\+[0-9]*|\-[0-9]|a/)
    var recipientDetail = recieve[1];
    var recipient = ''
    var points = 0;
    if (point[1] === 'a') {
        points = 1
    } else {
        points = parseInt(point[1]);
    }
    if (/r|g|h|s/i.test(recipientDetail)) {
        recipient = helpers.houseDetail(recipientDetail);
    } else {
        recipient = recipientDetail;
    }
    var check = helpers.roleCheck(event, 'headmaster');
    if (check === true) {
        if (points < 0) {
            msg = recipient + ' has been punished with `' + points + '` point(s) taken away by <@' + event.userID + '>. =w='
        } else {
            msg = recipient + ' has been awarded `' + points + '` point(s) by <@' + event.userID + '>. `^w^`'
        }
    } else {
        msg = 'I\'m afraid you can\'t do that, <@' + event.userID + '>. .w.'
    }
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });
}
module.exports = {
    name: 'points',
    author: 'thattacoguy',
    syntax: 'ping',
    hidden: true,
    patterns: ['points (<@.*>|r|g|h|s) (\+[0-9]*|\-[0-9]*)',
        '(<@.*>|r|g|h|s) (\+[0-9]*|\-[0-9]|a) point'
    ],
    description: '[Admin Only] Give points to users!',
    command: points
}
