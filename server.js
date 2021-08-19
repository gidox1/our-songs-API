'use strict';

require('dotenv').config();
const http = require('http');
const port = process.env.PORT || 9005;
const app = require('./app');
const server = http.createServer(app);
const logger = require('turbo-logger').createStream({});

server.listen(port, (err) => {
    if(err) return false;
    logger.log(`Nodemon is keeping me alive on port ${port} ...  ¯\\_(ツ)_/¯ `);
})