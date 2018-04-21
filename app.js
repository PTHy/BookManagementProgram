var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = new express();

var Port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended :  true}));
app.use(bodyParser.json());

var server = app.listen(Port, () => {
  console.log('Express Sever is running on '+Port);
})
