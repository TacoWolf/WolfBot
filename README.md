![](http://i.imgur.com/sLS6kkF.png) 

# WolfBot

[![Dependency Status](https://david-dm.org/tacowolf/wolfbot.svg)](https://david-dm.org/tacowolf/wolfbot)

A simple bot for Discord, built with [discord.io](../../../../izy521/discord.io).

## Requirements

* Node.js 5.x

## Getting Started 

### Installation

Clone the repository as normal. Download the packages needed by running

    npm install

Make a `config.json` from the [config.example.json](config.example.json).

Admin permissions are set dynamically through Roles. If you have the role `WB Admin` in the server, you'll have generic admin permissions. If you have the role `WB Superadmin`, you'll have access to all server functions. The role `Headmaster` is used to get points. These roles are case insensitive.

Stats are stored in [`stats.json`](stats.example.json), which is automatically generated if you don't have one made. 

### Running the bot

Just run the bot with

    npm start
  
For now, you'll have to feed it servers manually by logging into them on the Discord Client. Administrators are set manually and are based on a user ID.

Keep the bot's libraries updated by using 

    npm update

## Licensing

WolfBot is licensed under the [MIT License](LICENSE.md). If you use WolfBot in any of your projects, please let me know! We'd love to see how you use it. :grin:
