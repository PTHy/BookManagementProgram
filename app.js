//이 코드는 Velopert님의 코드를 참고해서 만든 것임을 밝힙니다.

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./models/book');

var app = express();

var Port = process.env.PORT || 3000;

var db = mongoose.connection;

db.on('error',console.error);
db.once('open',() => {
  console.log('Contected  mongod server');
})

mongoose.connect('mongodb://localhost/bookmanagement')

app.use(bodyParser.urlencoded({extended :  true}));
app.use(bodyParser.json());

var routes = require('./routes')(app, Book);

var server = app.listen(Port, () => {
  console.log('Express Sever is running on '+Port);
})
