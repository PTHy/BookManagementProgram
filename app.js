var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./models/book');

var app = new express();

var Port = process.env.PORT || 8080;

var routes = require('./routes')(app, Book);

var db = mongoose.connection;

db.on('error',console.error);
db.once('open',() => {
  console.log('Contected  mongod server');
})

mongoose.connect('mongodb://localhost/bookmanagement')

app.use(bodyParser.urlencoded({extended :  true}));
app.use(bodyParser.json());

var server = app.listen(Port, () => {
  console.log('Express Sever is running on '+Port);
})
