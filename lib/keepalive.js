'use strict';
var http = require('http');
var dispatcher = require('httpdispatcher');

function keepAlive(logger) {
  // Create HTTP service to let bot stay alive
  logger('info', 'Starting keepAlive server.');
  dispatcher.onGet('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('Awoo. :3');
    logger('info', 'Serving keepAlive page.');
  });

  dispatcher.onGet('/restart', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('Visit /restart/bot to reboot WolfBot. Make sure you really want to do this! ;w;');
    logger('info', 'Serving blocking restart page.');
  });
  dispatcher.onGet('/restart/bot', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('Restarting WolfBot. Back in a moment~! >w<');
    logger('info', 'Serving restart page.');
    logger('warn', 'Restarting bot.');
    process.exit(0);
  });
  http.createServer(function(req, res) {
    dispatcher.dispatch(req, res);
  }).listen(process.env.PORT || 3000);
}

module.exports = {
  start: keepAlive
};
