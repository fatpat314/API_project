require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

const routes = require('./routes/index.js');
const jwt = require('jsonwebtoken');




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.body.nToken === "undefined" || req.body.nToken === null) {
      console.log("CHECK")
    req.user = null;
    return console.log("ERROR")
  } else {

    var token = req.body.nToken;

    var decodedToken = jwt.verify(token, process.env.SECRET) || {};

    req.user = decodedToken.payload;
    console.log("CHECK2")
  }

  next();
};
app.use(checkAuth);

app.use('/', routes(router));

app.use(router);

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use('/api/v1', (req, res, next) => {
  res.send('Hello');
  next();
});

app.listen(`3000`, () => {
  console.log(`Server now listening at localhost:3000`);
});





require('./data/api-db')

module.exports = app;
