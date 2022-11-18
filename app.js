// name: Raymond Baird
// id: 1215758778
// date created: 10/16/2022
// description: project to utilize api and access MongoDB

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
var bodyParser = require('body-parser')

const loanRouter = require('./routes/loanRoutes');
const customerRouter = require('./routes/customerRoutes');
const ledgerRouter = require('./routes/ledgerRoutes');
//const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Body parser, reading data from body into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES

app.use('/', viewRouter, userRouter);
app.use('/loans', loanRouter, userRouter);
app.use('/customers', customerRouter, userRouter);
app.use('/ledgers', ledgerRouter, userRouter);


module.exports = app;
