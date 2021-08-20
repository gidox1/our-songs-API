'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Action = require('./action');
require('./libs/db');
const cors = require('cors');
const config = require('./libs/config');
const multer = require('multer');
const upload = multer();

//set up middlewares
app.use(cors())
app.use(bodyParser.json({
  limit: config.limit
}));
app.use(bodyParser.urlencoded({
  limit: config.limit,
  parameterLimit: 100000,
  extended: true 
}));

//create action
app.post('/create', upload.single('file'), (req, res) => new Action().create(req, res));

//fetch tracks
app.get('/tracks', (req, res) => new Action().fetch(req, res));

//generic route
app.get('*', (req, res) => {
  return res.send({
    status: 200,
    message: 'Healthy'
  })
})

module.exports = app;