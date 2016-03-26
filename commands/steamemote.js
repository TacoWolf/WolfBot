var request = require('request');

function steamemote(bot, user, userID, channelID, message) {
    var matches = [];
    var r = new RegExp(/:(.*?):/g);
    var e = r.exec(parameters[1]);
    while (e) {
        matches.push(e[1]);
        e = r.exec(parameters[1]);
    }

    function getSteamEmote(m) {
        if (m.length > 0) {
            var emote = m.splice(0, 1)[0];
            // console.log(emote);
            req = request.get('http://cdn.steamcommunity.com/economy/emoticon/' + emote, { encoding: null }, function(err, res, body) {
                if (err) return console.log(err);
                bot.uploadFile({
                    to: channelID,
                    file: body,
                    filename: 'file.png'
                });
            });
        } else {
            return;
        }
    }

    getSteamEmote(matches);
}

module.exports = {
    command: steamemote
}
