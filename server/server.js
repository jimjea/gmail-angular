var express = require('express');
// var mongoose = require('mongoose');
// var mongodb =require('../keys.js').mongodb;

// var dbURL = mongodb || 'mongodb://localhost/nite-out';
// mongoose.connect(dbURL);

var app = express();

// Middleware takes two arguments into the exported function
// both the app object returned from express, and the expres
// method itself.
require('./config/middleware.js')(app, express);

module.exports = app;