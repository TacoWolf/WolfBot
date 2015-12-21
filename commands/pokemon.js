var request = require('request');

function pokemon(bot, user, userID, channelID, message) {
    var msg = "";
    if (parameters[1] === undefined) {
        msg += "Um... I-I don't know what you wanna do. ;w; Maybe try using the command with `name` or `id` parameters?";
        bot.sendMessage({
            to: channelID,
            message: msg
        });
    } else if (parameters[2] === undefined) {
        msg += "Um... I-I don't know what you wanna look for. ;w; Maybe try putting a name or pokedex number in? ";
        bot.sendMessage({
            to: channelID,
            message: msg
        });
    } else {
        var pokemon = parameters[2].toLowerCase();
        switch (parameters[1].toLowerCase()) {
            case 'name':
                if (parameters[2].toLowerCase() === "missingno") {
                    msg += "Oh, you're l̨oo̡k̸ing҉ for **???͘?̴?????҉?**! Here's w̢hat ̢Í ̷k͘no̷w about that Pokémon...";
                    msg += "\n\n**???͘?̴?????҉?**'s national pokedex number is **0̴00̨**. They're no͝rmal҉ly͝ **3\'3\"** tall and weigh about **22.1lbs**."
                    msg += " Their ty̵pes ar̶é t̕h̡e following: **b̡i҉r̶d** and **no͞rm҉al͞**.";
                    bot.sendMessage({
                        to: channelID,
                        message: msg
                    });
                    break;
                }
                var result = "";
                var req = request.get('http://pokeapi.co/api/v1/pokedex/1/', function(err, res, body) {
                    if (!err && res.statusCode === 200) {
                        var response = JSON.parse(body);
                        for (var key in response) {
                            var pokeKey = response[key];
                            if (key == "pokemon") {
                                for (var key in pokeKey) {
                                    var pokelist = pokeKey[key]
                                    if (pokelist.name == parameters[2].toLowerCase()) {
                                        result = pokelist.resource_uri;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                    } else {}
                    if (result === "") {
                        msg += "...I-I couldn't find a pokémon with the name **" + parameters[2] + "**. I'm sorry... ;w;"

                        bot.sendMessage({
                            to: channelID,
                            message: msg
                        });
                    } else if (result === "undefined") {
                        msg += "...I-I couldn't find a pokémon with the name **" + parameters[2] + "**. I'm sorry... ;w;"

                        bot.sendMessage({
                            to: channelID,
                            message: msg
                        });
                    } else {
                        var req = request.get('http://pokeapi.co/' + result, function(err, res, body) {
                            if (!err && res.statusCode === 200) {
                                var response = JSON.parse(body);
                                msg += "Oh, you're looking for **" + response.name + "**! Here's what I know about that Pokémon...";
                                var height = ((parseFloat(response.height) * 10) / 100);
                                var weight = ((parseFloat(response.weight) * 10) / 100);
                                msg += "\n\n**" + response.name + "**'s national pokedex number is **" + response.national_id + "**. They're normally **" + height + "m** tall and weigh about **" + weight + "kg**."
                                console.log(response.types)
                                var types = response.types[0].name;
                                for (var i = 1; i < response.types.length; i++) {
                                    types = types + "** and **" + response.types[i].name
                                };

                                msg += " Their types are the following: **" + types + "**.";

                            } else {
                                msg += "...I-I couldn't find anything for that pokémon. I'm sorry... ;w;"
                            }

                            bot.sendMessage({
                                to: channelID,
                                message: msg
                            });
                        })

                    }
                })

                break;
            case 'number':
                var req = request.get('http://pokeapi.co/api/v1/pokemon/' + parameters[2], function(err, res, body) {
                    if (res.statusCode === 404) {
                        msg += "...I-I couldn't find a pokémon with the pokedex number **" + parameters[2] + "**. I'm sorry... ;w;"

                        bot.sendMessage({
                            to: channelID,
                            message: msg
                        });
                    } else if (res.statusCode === "404") {
                        msg += "...I-I couldn't find a pokémon with the pokedex number **" + parameters[2] + "**. I'm sorry... ;w;"

                        bot.sendMessage({
                            to: channelID,
                            message: msg
                        });
                    } else if (!err && res.statusCode === 200) {
                        var response = JSON.parse(body);
                        msg += "Oh, you're looking for **" + response.name + "**! Here's what I know about that Pokémon...";
                        var height = ((parseFloat(response.height) * 10) / 100);
                        var weight = ((parseFloat(response.weight) * 10) / 100);
                        msg += "\n\n**" + response.name + "**'s national pokedex number is **" + response.national_id + "**. They're normally **" + height + "m** tall and weigh about **" + weight + "kg**."
                        console.log(response.types)
                        var types = response.types[0].name;
                        for (var i = 1; i < response.types.length; i++) {
                            types = types + "** and **" + response.types[i].name
                        };

                        msg += " Their types are the following: **" + types + "**.";
                        bot.sendMessage({
                            to: channelID,
                            message: msg
                        });
                    }


                })
                break;
            default:
                msg += "Um... I-I don't know what you wanna do. ;w; Maybe try using the command with `name` or `id` parameters?";
                bot.sendMessage({
                    to: channelID,
                    message: msg
                });
                break;
        }
    }

}

module.exports = {
    command: pokemon
}
