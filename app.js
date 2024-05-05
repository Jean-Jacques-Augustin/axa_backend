var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var opportunityRoutes = require("./routes/opportunityRoute")

var app = express();

// use mongodb connection
require('./config/db');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/opportunity', opportunityRoutes);

module.exports = app;
