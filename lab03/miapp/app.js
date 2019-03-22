var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //Registrar eventos

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //Motor de vista sera jade

//Todo lo que usa use es middleware

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //La carpeta estatica sera public


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
    res.status(404).send("Eso no existe!")
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Algo salio mal!')
});

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))

module.exports = app;
