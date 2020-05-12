require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

const routes = require('./routes/index.js');




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

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