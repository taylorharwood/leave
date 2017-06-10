const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    cors = require('cors'),
    config = require('./config'),
    authMiddleware = require('./authMiddleware');

const users = require('./routes/users'),
    map = require('./routes/map'),
    app = express();

mongoose.connect(config.MONGO_DB_INSTANCE);
mongoose.Promise = global.Promise;
app.set('superSecret', config.SECRET);

const conn = mongoose.connection;             
conn.on('error', console.error.bind(console, 'connection error:'));  

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use('/users', users);
// app.use(authMiddleware);
app.use('/map', authMiddleware, map);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const port = process.env.PORT || '3000';
app.listen(port);
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;