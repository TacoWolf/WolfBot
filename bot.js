//                      .
//                     / V\ - Awoooo~!
//                   / `  /
//                  <<   |
//                  /    |
//                /      |  _    _       _  ________       _
//              /        | | |  | |     | |/ _| ___ \     | |
//            /    \  \ /  | |  | | ___ | | |_| |_/ / ___ | |_
//           (      ) | |  | |/\| |/ _ \| |  _| ___ \/ _ \| __|
//   ________|   _/_  | |  \  /\  / (_) | | | | |_/ / (_) | |_
// <__________\______)\__)  \/  \/ \___/|_|_| \____/ \___/ \__|
// ---------------------------------------------------------------
// | Author: takouhai                                            |
// | Team: TacoWolf                                              |
// | Name: WolfBot                                               |
// | Download: https://github.com/TacoWolf/WolfBot               |
// | License: MIT                                                |
// ---------------------------------------------------------------

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');