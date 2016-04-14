var helpers = require(__dirname + '/../helpers/');

function diceroll(event) {
    var msg = '**[WolfBot rolls some dice for <@' + event.userID + '>]**\n';
    var rolllog = [];
    var res = event.message.match(/roll ([0-9]*d[0-9]*)(\+[0-9]*|\-[0-9]*)?/i);
    var rawDice = res[1];
    var roll = rawDice.split('d');
    if (!isNaN(parseInt(roll[0])) && !isNaN(parseInt(roll[1]))) {
        amount = parseInt(roll[0]);
        dietype = parseInt(roll[1]);
        if (amount <= 100 && dietype <= 100) {
            for (var i = 0; i < amount; i++) {
                roll = Math.floor(Math.random() * dietype) + 1;
                rolllog.push(roll)
            }
            msg += 'Ooh! I rolled **' + amount + 'd' + dietype + '** and I got... \n';
            r = rolllog.sort(function(a,b) { return a - b; });
            msg += '`' + r + '`\n';
            var total = 0;
            for (var i in rolllog) { total += rolllog[i]; }
            msg += 'Which comes out to... `' + total + '`!'
            if (res[2]) {
                msg += '\nAnd if I throw in `' + parseInt(res[2]) + '`, that comes out to `' + (total + parseInt(res[2])) + '`.';
            }
        }

        if (amount > 100 || dietype > 100) {
            msg += '...th-those are some big numbers... ;w;\n I-I can\'t count that high... try using smaller numbers?';
        }
    } else {
        msg += 'Uhm... I dunno what to do. ;w; \nMaybe try putting something in like `1d20` and trying again?';
    }
    helpers.statistics(event, 'dice');
    event.bot.sendMessage({
        to: event.channelID,
        message: msg
    });

}
module.exports = {
    name: 'ping',
    author: 'thattacoguy',
    syntax: 'roll [x]d[x][+x|-x]',
    patterns: ['roll ([0-9]*d[0-9]*)(\\+[0-9]*|\\-[0-9]*)?'],
    description: 'Roll some dice!',
    command: diceroll
}
