function stats(events) {
    var msg = '';
    var userID = event.userID;
    var serverID = event.serverID;
    var db = event.storage.get(serverID);
    msg = '**Oh, hey, ' + '__' + event.user + '__' + '!** Here are some statistics that I\'ve collected about you! <3 \n \n';
    //BEGIN STATISTCS LOGIC
    if (!(db.userID.help === undefined || db.userID.help === null)) {
        msg += '- You haven\'t asked for help at all! Make sure to use `!help` if you ever want to. :3 \n';
    } else {
        msg += '- You\'ve asked for my help **' + db.userID.help + '** time(s). \n';
    }
    if (!(db.userID.emotes === undefined || db.userID.emotes === null)) {
        msg += '- You haven\'t checked out all of the cool emotes! o: Try `!emote` to look at \'em all~ \n';
    } else {
        msg += '- You\'ve checked out all the cool emotes **' + db.userID.emotes + '** time(s). \n';
    }
    if (!(db.userID.emoted === undefined || db.userID.emoted === null)) {
        msg += '- Speaking of emotes... you haven\'t used any of them. :c You should! \n';
    } else {
        msg += '- Speaking of emotes, you\'ve used them about... **' + db.userID.emoted + '** times. Yay! \n';
    }
    if (!(db.userID.hug === undefined || db.userID.hug === null)) {
        msg += '- You\'ve hugged people like-... **' + db.userID.hug + '** time(s). You must really like hugs~! \n';
    } else {
        msg += '- You haven\'t hugged anyone yet. :c \n';
    }
    if (!(db.userID.poke === undefined || db.userID.poke === null)) {
        msg += '- You haven\'t poked anyone. \n';
    } else {
        msg += '- You\'ve poked people about... **' + db.userID.poke + '** time(s). `>:3` \n';
    }
    if (!(db.userID.ping === undefined || db.userID.ping === null)) {
        msg += '- You pinged me like-... no times. Pong? ;w; \n';
    } else {
        msg += '- You pinged me like-... **' + db.userID.ping + '** time(s). Pong! \n';
    }
    if (!(db.userID.dice === undefined || db.userID.dice === null)) {} else {
        msg += '- You\'ve rolled the dice **' + db.userID.treats + '** times. Woo! \n';
    }
    if (!(db.userID.pet === undefined || db.userID.pet === null)) {
        msg += '- A-aw... you haven\'t pet me... ;w; ...but you could! I-I\'d like it. :3 \n';
    } else {
        msg += '- Y-you\'ve pet me, uhm... **' + db.userID.pet + '** time(s). >w< \n';
    }
    if (!(db.userID.treats === undefined || db.userID.treats === null)) {
        msg += '- ...you haven\'t given me any treats. Could I have one? ;w; \n';
    } else {
        msg += '- You\'ve given me... **' + db.userID.treats + '** treats. They were really tasty. >w< \n';
    }
    event.bot.sendMessage({
        to: event.userID,
        message: msg
    });
}
module.exports = {
    name: 'stats',
    author: 'thattacoguy',
    patterns: ['stats'],
    description: 'Statistics!',
    command: stats
}
