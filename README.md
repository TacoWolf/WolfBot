![](http://i.imgur.com/sLS6kkF.png) 

# WolfBot

[![Build Status](https://travis-ci.org/TacoWolf/WolfBot.svg?branch=master)](https://travis-ci.org/TacoWolf/WolfBot) [![Dependency Status](https://david-dm.org/tacowolf/wolfbot.svg)](https://david-dm.org/tacowolf/wolfbot)

A simple bot for Discord, built with [discord.io](../../../../izy521/discord.io).

## Requirements

* Node.js 5.x

## Getting Started 

Clone the repository as normal. Download the packages needed by running

    npm install

Make a `config.json` from the [config.example.json](config.example.json). Then, make an `admins.json` from the [admins.example.json](admins.example.json) with your UserID and the UserIDs of the admins you want to set. Finally, make a `stats.json` from the [stats.example.json](stats.example.json). `stats.json` doesn't need to have anything in it, just `{}`.

After that, just run the bot with

    npm start
  
For now, you'll have to feed it servers manually by logging into them on the Discord Client. Administrators are set manually and are based on a user ID.

Keep the bot's libraries updated by using 

    npm update

## Licensing

WolfBot is licensed under the [MIT License](LICENSE.md). If you use WolfBot in any of your projects, please let me know! We'd love to see how you use it. :grin:
