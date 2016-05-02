'use strict';
var express = require('express');
var app = express();

function keepAlive(logger) {
  // Create HTTP service to let bot stay alive
  var msg = {};
  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/json');
    msg = { message: 'Awoo. :3' }
    res.send(JSON.stringify(msg));
    logger('info', 'Serving keepAlive page.');
  });

  app.get('/restart', function(req, res) {
    res.setHeader('Content-Type', 'text/json');
    msg = { message: 'Visit /restart/bot to reboot WolfBot. Make sure you really want to do this! ;w;' }
    res.send(JSON.stringify(msg));
    logger('info', 'Serving blocking restart page.');
  });
  app.get('/restart/bot', function(req, res) {
    res.setHeader('Content-Type', 'text/json');
    msg = { message: 'Restarting WolfBot. Back in a moment~! >w<' }
    res.send(JSON.stringify(msg));
    logger('info', 'Serving restart page.');
    logger('warn', 'Restarting bot.');
    process.exit(0);
  });
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  app.listen(process.env.PORT || 3000, function() {
    logger('info', 'Starting bot web server.');
  });
}

module.exports = {
  start: keepAlive
};
