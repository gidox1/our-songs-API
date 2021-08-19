'use strict';

const config = require('./config');
const mongoose = require('mongoose');
const logger = require('turbo-logger').createStream({});

mongoose.connect(config.mongodb.mongodb_host, { useNewUrlParser: true });
const connection = mongoose.connection;

//DB Settings
connection.once('open', function(){
  logger.log('Connected to mongodb');
});

connection.on('error', function(err){
  logger.error(err);
});

module.exports = connection;