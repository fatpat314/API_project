const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    // console.log("Validate Token" + validateToken)
    // console.log("Get all" + controller.getAll)
  router.route('/users')
    .post(controller.signup)
    .get(validateToken, controller.getAll); // This route is now protected

  router.route('/login')
    .post(controller.login);



};
