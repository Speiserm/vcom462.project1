var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wnumberRouter = require('./routes/wnumber');
var numberguestsRouter = require('./routes/numberguests');
var guestinfoRouter = require('./routes/guestinfo');
var numberovernightRouter = require('./routes/numberovernight');
var completeRouter = require('./routes/complete');

var app = express();

// view engine (currently just static html)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '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',
  resave: true,
  saveUninitialized: false
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wnumber', wnumberRouter);
app.use('/numberguests', numberguestsRouter);
app.use('/guestinfo', guestinfoRouter);
app.use('/numberovernight', numberovernightRouter);
app.use('/complete', completeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function (req, res) {

    res.render('index', { title: 'Vash Template Demo',
                          content:'This is dummy paragraph.'});

});

var server = app.listen(3001, function () {
    console.log('Node server is running..');
});


module.exports = app;
