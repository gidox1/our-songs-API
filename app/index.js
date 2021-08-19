'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (req, res) => {
    return res.send({
        status: 200,
        message: 'Healthy'
    })
})

module.exports = app;