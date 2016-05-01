'use strict';
var http = require('http');
var dispatcher = require('httpdispatcher');

function keepAlive(logger) {
  // Create HTTP service to let bot stay alive
  dispatcher.onGet('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('Awoo. :3');
    logger('info', 'Serving keepAlive page.');
  });

  dispatcher.onGet('/restart', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('Restarting WolfBot. Back in a moment~! >w<');
    logger('info', 'Serving restart page.');
    logger('warn', 'Restarting bot.');
    process.exit(0);
  });
  http.createServer(function(req, res) {
    logger('info', 'Starting keepAlive server.');
    dispatcher.dispatch(req, res);
  }).listen(process.env.PORT || 3000);
}

module.exports = {
  start: keepAlive
};
