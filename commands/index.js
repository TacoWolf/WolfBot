//Include command files

var help = require('./help').command;
var listemotes = require('./listemotes').command;
var statsget = require('./statsget').command;
var hug = require('./hug').command;
var snuggle = require('./snuggle').command;
var poke = require('./poke').command;
var butt = require('./butt').command;
var ping = require('./ping').command;
var diceroll = require('./diceroll').command;
var bark = require('./bark').command;
var pet = require('./pet').command;
var treat = require('./treat').command;
var exclaim = require('./exclaim').command;
var sparkle = require('./sparkle').command;
var voice = require('./voice').command;
var fuck = require('./fuck').command;
var music = require('./music');
var wb = require('./wb');
var steamemote = require('./steamemote').command;
var pokemon = require('./pokemon').command;


var houses = require('./houses');

var emotes = require('./emotes');

var test = require('./test');

//Declare commands in commandlist

var commands = {
    // ! commands
    '!help': {
        name: '!help',
        toRun: help,
        typeOf: 'text',
        description: "Shows the help page with all of the commands. You're looking at it now!",
        hidden: false,
    },
    '!emote': {
        name: '!emote',
        toRun: listemotes,
        typeOf: 'text',
        description: "Shows the list of emotes.",
        hidden: false,
    },
    '!stats': {
        name: '!stats',
        toRun: statsget,
        typeOf: 'text',
        description: "Shows your statistics for your actions across all of the servers I know you on!",
        hidden: false,
    },
    /* DO THIS SOON DAMN IT
    '!globalstats': {
        name: '!stats',
        toRun: help,
        typeOf: 'text',
        description: "Shows global statistics across all of the servers I'm on! :O",
        hidden: true,
    },
    */
    '!hug': {
        name: '!hug @[user]',
        toRun: hug,
        typeOf: 'text',
        description: "Hugs someone.",
        hidden: false,
    },
    '!snuggle': {
        name: '!snuggle @[user]',
        toRun: snuggle,
        typeOf: 'text',
        description: "Snuggles someone. `>w<`",
        hidden: false,
    },
    '!poke': {
        name: '!poke @[user]',
        toRun: poke,
        typeOf: 'text',
        description: "Pokes someone.",
        hidden: false,
    },
    '!butt': {
        name: '!butt @[user]',
        toRun: butt,
        typeOf: 'text',
        description: "Butts someone.",
        hidden: false,
    },
    '!ping': {
        name: '!ping',
        toRun: ping,
        typeOf: 'text',
        description: "Pings WolfBot, making him pong back.",
        hidden: false,
    },
    '!dice': {
        name: '!dice d[x] [amount]',
        toRun: diceroll,
        typeOf: 'text',
        description: "WolfBot rolls some dice for you.",
        hidden: false,
    },
    '!roll': {
        name: '!roll d[x] [amount]',
        toRun: diceroll,
        typeOf: 'text',
        description: "WolfBot rolls some dice for you.",
        hidden: true,
    },
    '!steam': {
        name: '!steam :[steamemote]:',
        toRun: steamemote,
        typeOf: 'text',
        description: "Pulls an emote from the Steam API and posts it.",
        hidden: false,
    },
    '!pokemon': {
        name: '!pokemon [name|number] [input]',
        toRun: pokemon,
        typeOf: 'text',
        description: "Searches for a Pokémon using the PokeAPI - http:///pokeapi.co",
        hidden: false,
    },
    '!bark': {
        name: '!bark',
        toRun: bark,
        typeOf: 'text',
        description: "WolfBot barks.",
        hidden: false,
    },
    '!pet': {
        name: '!pet',
        toRun: pet,
        typeOf: 'text',
        description: "Pets the WolfBot. He likes scritches. <3",
        hidden: false,
    },
    '!treat': {
        name: '!treat',
        toRun: treat,
        typeOf: 'text',
        description: "Give WolfBot a treat!",
        hidden: false,
    },
    '!!!': {
        name: '!!!',
        toRun: exclaim,
        typeOf: 'text',
        description: "OH MY GOD.",
        hidden: false,
    },
    '!sparkle': {
        name: '!sparkle',
        toRun: sparkle,
        typeOf: 'text',
        description: "Fabulous.",
        hidden: false,
    },
    '!voice': {
        name: '!voice',
        toRun: voice,
        typeOf: 'text',
        description: "Announces that you would like people to join the voice channel.",
        hidden: false,
    },
    '!sethouse': {
        name: '!sethouse [g|h|r|s]',
        toRun: houses.sethouse,
        typeOf: 'text',
        description: "Sets your house for the House Cup.",
        hidden: false,
    },
    '!house': {
        name: '!house [g|h|r|s]',
        toRun: houses.houses,
        typeOf: 'text',
        description: "See the members in a specific house.",
        hidden: false,
    },
    '!points': {
        name: '!points [@user] [# of points]',
        toRun: houses.points,
        typeOf: 'admin',
        description: "Awards points to users.",
        hidden: true,
    },
    '!cup': {
        name: '!cup',
        toRun: houses.cup,
        typeOf: 'text',
        description: "Shows the current standings of the house cup.",
        hidden: false,
    },
    '!fuck': {
        name: '!fuck',
        toRun: fuck,
        typeOf: 'text',
        description: "L-lewd!",
        hidden: true,
    },
    '!yiff': {
        name: '!yiff',
        toRun: emotes.emote_torielglare,
        typeOf: 'emote',
        description: "...",
        hidden: true,
    },
    '!join': {
        name: '!join',
        toRun: music.join,
        typeOf: 'text',
        description: "L-lewd!",
        hidden: true,
    },
    '!play': {
        name: '!play',
        toRun: music.play,
        typeOf: 'text',
        description: "L-lewd!",
        hidden: true,
    },
    '!stop': {
        name: '!stop',
        toRun: music.stop,
        typeOf: 'text',
        description: "L-lewd!",
        hidden: true,
    },
    /*
    '!gameset': {
        name: '!gameset [id]',
        toRun: setgame,
        typeOf: 'admin',
        description: "Set the game WolfBot is playing.",
        hidden: true,
    },
    */
    // Phrase commands
    'wolfbot': {
        name: 'wolfbot',
        toRun: wb.mention,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot.': {
        name: 'wolfbot',
        toRun: wb.mention,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot!': {
        name: 'wolfbot',
        toRun: wb.mention,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot?': {
        name: 'wolfbot',
        toRun: wb.mention,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot~': {
        name: 'wolfbot',
        toRun: wb.mention,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, speak!': {
        name: 'wolfbot, speak!',
        toRun: wb.bark,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, speak.': {
        name: 'wolfbot, speak!',
        toRun: wb.bark,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, speak': {
        name: 'wolfbot, speak!',
        toRun: wb.bark,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy!': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy.': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy, wolfbot': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy, wolfbot!': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy, wolfbot.': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'good boy, wolfbot~': {
        name: 'good boy',
        toRun: wb.gb,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, make me a sandwich': {
        name: 'wbsandwich',
        toRun: wb.sandwich,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, make me a sandwich.': {
        name: 'wbsandwich',
        toRun: wb.sandwich,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, sudo make me a sandwich': {
        name: 'wbsudo',
        toRun: wb.sudo,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, sudo make me a sandwich.': {
        name: 'wbsudo',
        toRun: wb.sudo,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, i love you': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, i love you!': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, i love you.': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, i love you~': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'i love you, wolfbot': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'i love you, wolfbot!': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'i love you, wolfbot.': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'i love you, wolfbot~': {
        name: 'wblove',
        toRun: wb.love,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, roll over': {
        name: 'wbroll',
        toRun: wb.roll,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, roll over!': {
        name: 'wbroll',
        toRun: wb.roll,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, roll over~': {
        name: 'wbroll',
        toRun: wb.roll,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    'wolfbot, roll over.': {
        name: 'wbroll',
        toRun: wb.roll,
        typeOf: 'text',
        description: "",
        hidden: true,
    },
    // Test functions
    '!test': {
        name: 'test',
        toRun: test.test,
        typeOf: 'text',
        description: "test function",
        hidden: true,
    },
    // Emoticons
    '!flowey': {
        name: '!flowey',
        toRun: emotes.emote_flowey,
        typeOf: 'emote',
        description: "I'm your new best friend.",
        hidden: false,
    },
    '!floweyevil': {
        name: '!floweyevil',
        toRun: emotes.emote_floweyevil,
        typeOf: 'emote',
        description: "In this world... it's KILL or BE KILLED.",
        hidden: false,
    },
    '!toriel': {
        name: '!toriel',
        toRun: emotes.emote_toriel,
        typeOf: 'emote',
        description: "Oh! My child!",
        hidden: false,
    },
    '!torielglare': {
        name: '!torielglare',
        toRun: emotes.emote_torielglare,
        typeOf: 'emote',
        description: "...",
        hidden: true,
    },
    '!torielshock': {
        name: '!torielshock',
        toRun: emotes.emote_torielshock,
        typeOf: 'emote',
        description: "Hello! I am Toriel.",
        hidden: false,
    },
    '!torielsad': {
        name: '!torielsad',
        toRun: emotes.emote_torielcry,
        typeOf: 'emote',
        description: "My child...",
        hidden: false,
    },
    '!blook': {
        name: '!blook',
        toRun: emotes.emote_blook,
        typeOf: 'emote',
        description: "* (are they gone yet)",
        hidden: false,
    },
    '!dapperblook': {
        name: '!dapperblook',
        toRun: emotes.emote_dapperblook,
        typeOf: 'emote',
        description: "do you like it?",
        hidden: false,
    },
    '!blookchill': {
        name: '!blook',
        toRun: emotes.emote_blookchill,
        typeOf: 'emote',
        description: "* after a great meal i like to lie on the ground and feel like garbage...",
        hidden: false,
    },
    '!blookworried': {
        name: '!blookworried',
        toRun: emotes.emote_blookworried,
        typeOf: 'emote',
        description: "REALLY NOT FEELIN UP TO IT RIGHT NOW. SORRY.",
        hidden: false,
    },
    '!napsta': {
        name: '!napsta',
        toRun: emotes.emote_napsta,
        typeOf: 'emote',
        description: "* uh, do you wanna... listen to some tunes...",
        hidden: false,
    },
    '!toby': {
        name: '!toby',
        toRun: emotes.emote_toby,
        typeOf: 'emote',
        description: "That's the hard part. Knowing that it's all over.",
        hidden: false,
    },
    '!tobybone': {
        name: '!tobybone',
        toRun: emotes.emote_tobybone,
        typeOf: 'emote',
        description: "STOP MUNCHING ON MY SPECIAL ATTACK!!!",
        hidden: false,
    },
    '!papyrusglare': {
        name: '!papyrusglare',
        toRun: emotes.emote_papyrusglare,
        typeOf: 'emote',
        description: "Spaghetti.",
        hidden: false,
    },
    '!papyrusshock': {
        name: '!papyrusshock',
        toRun: emotes.emote_papyrusshock,
        typeOf: 'emote',
        description: "SANS!!!",
        hidden: false,
    },
    '!papyruscool': {
        name: '!papyruscool',
        toRun: emotes.emote_papyruscool,
        typeOf: 'emote',
        description: "C00L DUDE",
        hidden: false,
    },
    '!sans': {
        name: '!sans',
        toRun: emotes.emote_sans,
        typeOf: 'emote',
        description: "hey.",
        hidden: false,
    },
    '!undyne': {
        name: '!undyne',
        toRun: emotes.emote_undyne,
        typeOf: 'emote',
        description: "HOTLAND SUUUUUUCKS!",
        hidden: false,
    },
    '!alphys': {
        name: '!alphys',
        toRun: emotes.emote_alphys,
        typeOf: 'emote',
        description: "D-do you like anime?",
        hidden: false,
    },
};

module.exports = commands
