var helpers = require('./../helpers');
function poke(bot, user, userID, channelID, message) {
  helpers.statistics('poke', user, userID, channelID, message);
  msg = '';
  if (parameters[1] === undefined) {
    pokes = [
      '[WolfBot pokes **' + user + '** lightly.] o:',
      '[WolfBot noses **' + user + '** gently, poking them.] `o3o`',
      '[WolfBot nudges **' + user + '** gently with a paw.]'
    ];
    msg = helpers.randomArray(pokes);
  } else {
    var pokedUser = '';
    pokedUser = bot.fixMessage(parameters[1]);
    pokedUser = pokedUser.substring(1);
    pokes = [
      '**' + user + '** pokes **' + pokedUser + '** lightly.',
      '**' + user + '** nudges **' + pokedUser + '** with a finger.',
      '**' + user + '** pokes **' + pokedUser + '**. You there? ;w;'
    ];
    msg = helpers.randomArray(pokes);
  }
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: poke };