'use strict';

class Action {

  constructor() {
    this.logger = require('turbo-logger').createStream({});
  }

  create(req, res) {
    this.logger.log("create called...", req.file);
    return true
  }

  fetch(req, res) {
    this.logger.log('fetch called...')
  }
}

module.exports = Action;