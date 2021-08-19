'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Action = require('./action');
require('./db');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//create action
app.post('/create', (req, res) => new Action().create(req, res));

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