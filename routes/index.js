const users = require('./users');
const artist = require('./artist');

module.exports = (router) => {
  users(router);
  artist(router);
  return router;
};
