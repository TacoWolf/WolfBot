var helpers = require('./../helpers');
var stats = require('./../stats.json');
var msg = '';
function addToHouse(bot, userID){
  var houseName = ''
  addHouse = stats[userID]
  if (addHouse.house !== undefined) {
    houseName = helpers.housetrans(addHouse.house)
    msg = 'You\'ve already been sorted into ' + houseName + '!\nIf you wanna change your house, let `taco#0634` know. :3'
  } else if (addHouse.house === undefined) {
    addHouse.house = parameters[1];
    require('fs').writeFileSync('./stats.json', JSON.stringify(stats, null, '\t'));
    houseName = helpers.housetrans(addHouse.house)
    msg = 'You have been successfully sorted into ' + houseName + '.'
  } else {
    msg = 'You got some weird error with the houses... tell `taco#0634` about it. >.>'
  }
  return msg;
}
module.exports = {
  points: function (bot, user, userID, channelID, message) {
    var serverID = helpers.getServerID(bot, channelID);
    var adminCheck = helpers.roleCheck(bot, serverID, userID, 'headmaster');
    if (parameters[1] !== undefined && parameters[2] !== undefined) {
      if (adminCheck === true) {
        var points = parseInt(parameters[2]);
        var userHouse;
        var userIDfix = parameters[1];
        var house = parameters[1];
        userIDfix = userIDfix.substring(2);
        userIDfix = userIDfix.slice(0, -1);
        var uh;
        for (var key in stats) {
          if (key === userIDfix) {
            uh = stats[userIDfix];
            userHouse = uh.house;
          }
        }
        if (/g|h|r|s/.test(parameters[1])) {
          if (points > 0) {
            msg = '**House ' + helpers.housetrans(parameters[1]) + '** has been awarded **' + points + '** point(s). :3';
          } else if (points < 0) {
            msg = '**House ' + helpers.housetrans(parameters[1]) + '** has been punished with **' + points + '** point(s) taken away. -w-';
          } else {
            msg = '...uh... **' + helpers.housetrans(parameters[1]) + '** has been awarded... no points. Awkward. `>w>`';
          }
          helpers.statistics('total', user, house, channelID, message, points);
        } else if (userHouse !== undefined) {
          var userNameFix = bot.fixMessage(parameters[1]);
          userNameFix = userNameFix.substring(1);
          var nameofHouse = helpers.housetrans(uh.house);
          if (points > 0) {
            msg = '**' + userNameFix + '** has been awarded **' + points + '** point(s) for their house, **' + nameofHouse + '**. :3';
          } else if (points < 0) {
            msg = '**' + userNameFix + '** has been punished with **' + points + '** point(s) taken away from their house, **' + nameofHouse + '**. >:c';
          } else {
            msg = '...uh... **' + userNameFix + '** has been awarded... no points for their house, **' + nameofHouse + '**. Awkward. `>.>`';
          }
          if (points === points) {
            helpers.statistics('points', user, userID, channelID, message, points);
            // ADD +X TO USER
            helpers.statistics('total', user, userHouse, channelID, message, points);  // ADD +X TO HOUSE
          }
        } else {
          bot.sendMessage({
            to: userID,
            message: 'That user hasn\'t been sorted or I don\'t know about that house... ;w;'
          });
          return;
        }
      } else {
        msg = 'You don\'t have the permissions to do that. ;w;';
      }
    } else {
      msg = '...uhm... I-I dunno what kinda points you wanna give. ;w;\nC-could you check what you inputted and try again?';
      var pm = 'The correct syntax for points is `!points @[user] [+x|-x]`. :3';
      bot.sendMessage({
        to: userID,
        message: pm
      });
    }
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  },
  sethouse: function (bot, user, userID, channelID, message) {
    if (parameters[1] === undefined) {
      msg = 'I don\'t think that house exists... the houses are: \n \n';
      msg += '`g` - Gryffindor \n';
      msg += '`h` - Hufflepuff \n';
      msg += '`r` - Ravenclaw \n';
      msg += '`s` - Slytherin \n \n';
      msg += 'Please try again with a real house, like: `!sethouse g`, which would set your house to Gryffindor.';
    } else {
      var houseName = '';
      helpers.statistics('houseset', user, userID, channelID, message);
      for (var key in stats) {
        if (key === userID) {
          if (/g|h|r|s/.test(parameters[1])) {
            msg = addToHouse(bot, userID);
          } else {
            msg = 'I don\'t think that house exists... the houses are: \n \n';
            msg += '`g` - Gryffindor \n';
            msg += '`h` - Hufflepuff \n';
            msg += '`r` - Ravenclaw \n';
            msg += '`s` - Slytherin \n \n';
            msg += 'Please try again with a real house, like: `!sethouse g`, which would set your house to Gryffindor.';
          }
        } else {
          msg = 'Oh, hai! I-I don\'t know you very well... Try `!ping`ing me first. :3'
        }
      }
    }
    bot.sendMessage({
      to: userID,
      message: msg
    });
  },
  cup: function (bot, user, userID, channelID, message) {
    var houseList = [];
    var g = {};
    var h = {};
    var r = {};
    var s = {};
    for (var key in stats) {
      var statsKey = stats[key];
      if (key === 'g') {
        g.name = key;
        g.value = statsKey.total;
        houseList.push(g);
      }
      if (key === 'h') {
        h.name = key;
        h.value = statsKey.total;
        houseList.push(h);
      }
      if (key === 'r') {
        r.name = key;
        r.value = statsKey.total;
        houseList.push(r);
      }
      if (key === 's') {
        s.name = key;
        s.value = statsKey.total;
        houseList.push(s);
      }
    }
    houseList.sort(function (a, b) {
      return parseFloat(b.value) - parseFloat(a.value);
    });
    msg = '**HOUSE CUP RANKINGS**\n';
    msg += '1. **' + helpers.housetrans(houseList[0].name) + '** with **' + houseList[0].value + '** points. \n';
    msg += '2. **' + helpers.housetrans(houseList[1].name) + '** with **' + houseList[1].value + '** points. \n';
    msg += '3. **' + helpers.housetrans(houseList[2].name) + '** with **' + houseList[2].value + '** points. \n';
    msg += '4. **' + helpers.housetrans(houseList[3].name) + '** with **' + houseList[3].value + '** points. \n';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  },
  houses: function (bot, user, userID, channelID, message) {
    var hs = '';
    var members = [];
    switch (parameters[1]) {
      case 'g':
      hs = 'g';
      break;
      case 'h':
      hs = 'h';
      break;
      case 'r':
      hs = 'r';
      break;
      case 's':
      hs = 's';
      break;
      default:
      msg = 'House invalid. Valid houses are: \n \n';
      msg += '`g` - Gryffindor \n';
      msg += '`h` - Hufflepuff \n';
      msg += '`r` - Ravenclaw \n';
      msg += '`s` - Slytherin \n \n';
      msg += 'Please try again with a valid syntax, like: `!house g`, which would show those who belong to Gryffindor.';
      bot.sendMessage({
        to: userID,
        message: msg
      });
      return;
    }
    for (var key in stats) {
      var houseKey = stats[key];
      var uid = key;
      if (houseKey.house === hs) {
        members.push(uid);
      }
    }
    msg = 'Members in House **' + helpers.housetrans(hs) + '**: \n \n';
    for (var i = 0; i < members.length; i++) {
      var userNameFix = members[i];
      userNameFix = '<@' + userNameFix + '>';
      userNameFix = bot.fixMessage(userNameFix);
      userNameFix = userNameFix.substring(1);
      members[i] = userNameFix;
    }
    for (i = 0; i < members.length; i++) {
      msg += i + 1 + ') ' + members[i] + ' \n';
    }
    msg += '\n (These are in no particular order. :3 )';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  }
};