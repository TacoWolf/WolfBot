var helpers = require('./../helpers');
var stats = require('./../stats.json');


function statsget(bot, user, userID, channelID, message) {
    var stats = require('./../stats.json');
    for (var key in stats) {
        var userStats = stats[key];
        var fixedUserID = "<@" + userID + ">"
        userName = bot.fixMessage(fixedUserID);
        while (userName.charAt(0) === '@') {
            userName = userName.substr(1);
        }
        var msg = "**Oh, hey, " + "__" + userName + "__" + "!** Here are some statistics that I've collected about you! <3 \n \n";

        //BEGIN STATISTCS LOGIC

        if (userStats.help === 1) {
            msg += "- You've asked for my help **" + userStats.help + "** time. \n";
        } else if (userStats.help >= 2) {
            msg += "- You've asked for my help **" + userStats.help + "** times. \n";
        } else if (userStats.help === undefined) {
            msg += "- You haven't asked for help at all! Make sure to use `!help` if you ever want to. :3 \n";
        }

        if (userStats.emotes === 1) {
            msg += "- You've checked out all the cool emotes **" + userStats.emotes + "** time. \n";
        } else if (userStats.emotes >= 2) {
            msg += "- You've checked out all the cool emotes **" + userStats.emotes + "** times. \n";
        } else if (userStats.emotes === undefined) {
            msg += "- You haven't checked out all of the cool emotes! o: Try `!emote` to look at 'em all~ \n";
        }

        if (userStats.emoted === 1) {
            msg += "- Speaking of emotes, you've used them... once. Cool!\n"
        } else if (userStats.emoted >= 2) {
            msg += "- Speaking of emotes, you've used them about... **" + userStats.emoted + "** times. Yay! \n";
        } else if (userStats.emoted === undefined) {
            msg += "- Speaking of emotes... you haven't used any of them. :c You should! \n"
        }

        if (userStats.butt === 1) {
            msg += "- You thought someone was a butt like-... one time. \n";
        } else if (userStats.butt >= 2) {
            msg += "- You thought someone was a butt like-... **" + userStats.butt + "** times. Were they really, tho? \n";
        } else if (userStats.butt === undefined) {}

        if (userStats.hugs === 1) {
            msg += "- You've hugged someone once. Were they special? :3 \n"
        } else if (userStats.hugs >= 2) {
            msg += "- You've hugged people like-... **" + userStats.hugs + "** times. You must really like hugs~! \n"
        } else if (userStats.hugs === undefined) {
            msg += "- You haven't hugged anyone yet. :c \n"
        }

        if (userStats.poke === 1) {
            msg += "- You've poked someone once. It was pretty cool. \n";
        } else if (userStats.poke >= 2) {
            msg += "- You've poked people about... **" + userStats.poke + "** times. `>:3` \n";
        } else if (userStats.poke == undefined) {
            msg += "- You haven't poked anyone. \n"
        }

        if (userStats.ping === 1) {
            msg += "- You pinged me like-... **" + userStats.ping + "** time. Pong! \n";
        } else if (userStats.ping >= 2) {
            msg += "- You pinged me like-... **" + userStats.ping + "** times. Pong! \n";
        } else if (userStats.ping === undefined) {
            msg += "- You pinged me like-... no times. Pong? ;w; \n";
        }

        if (userStats.dice === 1) {
            msg += "- You've rolled the dice once! \n";
        } else if (userStats.dice >= 2) {
            msg += "- You've rolled the dice **" + userStats.treats + "** times. Woo! \n"
        } else if (userStats.dice === undefined) {}

        if (userStats.pet === 1) {
            msg += "- Y-you've pet me, uhm... **" + userStats.pet + "** time. >w< \n";
        } else if (userStats.pet >= 2) {
            msg += "- Y-you've pet me, uhm... **" + userStats.pet + "** times. >w< \n";
        } else if (userStats.pet === undefined) {
            msg += "- A-aw... you haven't pet me... ;w; ...but you could! I-I'd like it. :3 \n"
        }

        if (userStats.treats === 1) {
            msg += "- You've given me... one treat. It was tasty! <3 \n";
        } else if (userStats.treats >= 2) {
            msg += "- You've given me... **" + userStats.treats + "** treats. They were really tasty. >w< \n"
        } else if (userStats.treats === undefined) {
            msg += "- ...you haven't given me any treats. Could I have one? ;w; \n";
        }
    }
    bot.sendMessage({
        to: userID,
        message: msg
    });
}

module.exports = {
    command: statsget
}
