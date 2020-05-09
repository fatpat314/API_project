const users = require('./users');
const artist = require('./artist');
const song = require('./songs');
const key = require('./key');
const period = require('./period')

module.exports = (router) => {
  users(router);
  artist(router);
  song(router);
  key(router);
  period(router);
  return router;
};
