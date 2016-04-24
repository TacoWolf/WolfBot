'use strict';
var helpers = require(__dirname + '/../helpers');
var request = require('request');

function pokemon(event) {
  var msg = '';
  var res = event.message.match(/pokemon (.*)/i);
  var pokemon = res[1];
  if (res[1].toLowerCase() === 'missingno') {
    // jscs:disable
    msg += 'Oh, you\'re l̨oo̡k̸ing\u0489 for **???͘?̴?????\u0489?**! Here\'s w̢hat ̢Í ̷k͘no̷w about that Pokémon...'; // jshint ignore:line
    msg += '\n\n**???͘?̴?????\u0489?**\'s national pokedex number is **0̴00̨**. They\'re no͝rmal\u0489ly͝ **3\'3"** tall and weigh about **22.1lbs**.'; // jshint ignore:line
    msg += ' Their ty̵pes ar̶é t̕h̡e following: **b̡i\u0489r̶d** and **no͞rm\u0489al͞**.'; // jshint ignore:line
    // jscs:enable
    event.bot.sendMessage({
      to: event.channelID,
      message: msg
    });
    return;
  }
  if (typeof pokemon === 'string') {
    pokemon = pokemon.toLowerCase();
  }
  var url = 'http://pokeapi.co/api/v2/pokemon/' + pokemon;
  var req = request.get(url, function(err, res, body) {
    var response = '';
    var imgmsg = '';
    if (!err && res.statusCode === 200) {
      response = JSON.parse(body);
      var name = helpers.firstToUpperCase(response.name);
      var height = parseFloat(response.height) * 10 / 100;
      var weight = parseFloat(response.weight) * 10 / 100;
      var types = response.types[0].type.name;
      imgmsg = '<@' + event.userID + '>, that\'s **' + name;
      imgmsg += '** (' + response.id + ')!';
      imgmsg += ' Here\'s what I know about that Pokemon...';
      msg += '**' + name + '**\'s national pokedex number is **';
      msg += response.id + '**. They\'re normally **';
      msg += height + 'm** tall and weigh about **' + weight + 'kg**.';
      for (var i = 1; i < response.types.length; i++) {
        types = types + '** and **' + response.types[i].type.name;
      }
      msg += 'Their types are the following: **' + types + '**.';
      url = 'http://pokeapi.co/media/sprites/pokemon/' + response.id + '.png';
      req = request.get(url, {encoding: null}, function(err, res, body) {
        if (err) {
          return console.log(err);
        } else {
          event.bot.uploadFile({
            to: event.channelID,
            file: body,
            filename: response.id + '.png',
            message: imgmsg
          }, function() {
            event.bot.sendMessage({
              to: event.channelID,
              message: msg
            });
          });
        }
      });
    } else {
      msg = '...I-I couldn\'t find a pokémon with information matching `';
      msg += res[1] + '`. I\'m sorry... ;w;';
      event.bot.sendMessage({
        to: event.channelID,
        message: msg
      });
    }
  });
}
module.exports = {
  name: 'pokemon',
  author: 'thattacoguy',
  syntax: 'pokemon [name|number]',
  patterns: [/pokemon (.*)/i],
  description: 'Search for Pokemon.',
  command: pokemon
};
