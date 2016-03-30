var helpers = require('./../helpers');
var request = require('request');
function pokemon(bot, user, userID, channelID, message) {
  var msg = '';
  if (parameters[1] === undefined) {
    msg += 'Um... I-I don\'t know what you wanna do. ;w; Maybe try using a name or Pokedex number?';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  } else {
    var pokemon = parameters[1];
    if (parameters[1].toLowerCase() === 'missingno') {
      msg += 'Oh, you\'re l̨oo̡k̸ing\u0489 for **???͘?̴?????\u0489?**! Here\'s w̢hat ̢Í ̷k͘no̷w about that Pokémon...';
      msg += '\n\n**???͘?̴?????\u0489?**\'s national pokedex number is **0̴00̨**. They\'re no͝rmal\u0489ly͝ **3\'3"** tall and weigh about **22.1lbs**.';
      msg += ' Their ty̵pes ar̶é t̕h̡e following: **b̡i\u0489r̶d** and **no͞rm\u0489al͞**.';
      bot.sendMessage({
        to: channelID,
        message: msg
      });
      return;
    }
    if (typeof pokemon == 'string') {
      pokemon = pokemon.toLowerCase();
    }
    var req = request.get('http://pokeapi.co/api/v2/pokemon/' + pokemon, function (err, res, body) {
      response = '';
      imgmsg = '';
      if (!err && res.statusCode === 200) {
        response = JSON.parse(body);
        name = helpers.firstToUpperCase(response.name);
        height = parseFloat(response.height) * 10 / 100;
        weight = parseFloat(response.weight) * 10 / 100;
        types = response.types[0].type.name;
        imgmsg = 'Oh, you\'re looking for **' + name + '** (' + response.id + ')! Here\'s what I know about that Pokemon...';
        msg += '**' + name + '**\'s national pokedex number is **' + response.id + '**. They\'re normally **' + height + 'm** tall and weigh about **' + weight + 'kg**.';
        for (var i = 1; i < response.types.length; i++) {
          types = types + '** and **' + response.types[i].type.name;
        }
        msg += 'Their types are the following: **' + types + '**.';
        req = request.get('http://pokeapi.co/media/sprites/pokemon/' + response.id + '.png', { encoding: null }, function (err, res, body) {
          if (err)
            return console.log(err);
          bot.uploadFile({
            to: channelID,
            file: body,
            filename: response.id + '.png',
            message: imgmsg
          }, function () {
            bot.sendMessage({
              to: channelID,
              message: msg
            });
          });
        });
      } else {
        msg = '...I-I couldn\'t find a pokémon with information matching `' + parameters[1] + '`. I\'m sorry... ;w;';
        bot.sendMessage({
          to: channelID,
          message: msg
        });
      }
    });
  }
}
module.exports = { command: pokemon };