const helpers = require(`${__dirname}/../helpers`);
const request = require('request');

function pokefunction(event) {
  let msg = '';
  const embed = {
    description: '',
    image: {
      url: '',
    },
    fields: [],
    thumbnail: {
      url: '',
    },
    author: {
      name: '',
      icon_url: 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG',
    },
  };
  const resp = event.message.match(/pokemon (.*)/i);
  let pokemon = resp[1];
  if (resp[1].toLowerCase() === 'missingno') {
    imgmsg = `<@${event.userID}>, tha͢t҉'s **?̶?͘?͘?̢?̸??̨**!`;
    imgmsg += 'Here\'s w̢hat ̢Í ̷k͘no̷w about that Pokémon...';
    embed.author.name = `?̶?͘?͘?̢?̸??̨`;
    const fields = [{
      name: 'Pokedex Number',
      value: `00̷0`,
      inline: true,
    }, {
      name: 'Height',
      value: `0.̡9͏90̕60͠0̸000҉0̷0000͟0̕1̷m`,
      inline: true,
    }, {
      name: 'Weight',
      value: `10͝.́02439͝kg̛`,
      inline: true,
    }, {
      name: 'Types',
      value: `b̡i\u0489r̶d and no͞rm\u0489al`,
      inline: true,
    }];
    embed.fields = fields;
    embed.thumbnail.url = `https://i.imgur.com/t5UYqZQ.png`;
    embed.color = 15602965;
    event.bot.sendMessage({
      to: event.channelID,
      message: imgmsg,
      embed,
    });
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
    return;
  }
  if (typeof pokemon === 'string') {
    pokemon = pokemon.toLowerCase();
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  request.get(url, (err, res, body) => {
    let response = '';
    let imgmsg = '';
    if (!err && res.statusCode === 200) {
      response = JSON.parse(body);
      const name = helpers.firstToUpperCase(response.name);
      const height = (parseFloat(response.height) * 0.1).toFixed(2);
      const weight = (parseFloat(response.weight) * 0.1).toFixed(2);
      let types = response.types[0].type.name;
      for (let i = 1; i < response.types.length; i += 1) {
        types = `${types} and ${response.types[i].type.name}`;
      }
      imgmsg = `<@${event.userID}>, that's **${name}**!`;
      imgmsg += ' Here\'s what I know about that Pokemon...';
      embed.author.name = name;
      const fields = [{
        name: 'Pokedex Number',
        value: response.id,
        inline: true,
      }, {
        name: 'Height',
        value: `${height}m`,
        inline: true,
      }, {
        name: 'Weight',
        value: `${weight}kg`,
        inline: true,
      }, {
        name: 'Types',
        value: types,
        inline: true,
      }];
      embed.fields = fields;
      embed.thumbnail.url = response.sprites.front_default;
      embed.color = 15602965;
      event.bot.sendMessage({
        to: event.channelID,
        message: imgmsg,
        embed,
      });
      return true;
    }
    msg = '...I-I couldn\'t find a pokémon with information matching your request.';
    msg += ' I\'m sorry... ;w;';
    event.bot.sendMessage({
      to: event.channelID,
      message: msg,
    });
    return true;
  });
}
module.exports = {
  name: 'pokemon',
  syntax: 'pokemon (name|number)',
  patterns: [/^pokemon (.*)/i],
  description: 'Search for Pokemon.',
  command: pokefunction,
};
