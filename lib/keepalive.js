'use strict';
var http = require('http');
var helpers = require('./../helpers/');

function keepAlive(logger) {
  // Create HTTP service to let bot stay alive
  logger('info', 'Starting keepAlive server.');
  http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/json' });
    response.end('Awoo. :3');
    logger('info', 'Serving keepAlive page.');
  }).listen(process.env.PORT || 3000);
}

module.exports = {
  start: keepAlive
};
