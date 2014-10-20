var usersController = require('./usersController');

module.exports = function(app) {
  app.route('/signup')
    .post(usersController.signup);

  app.route('/login')
    .post(usersController.login);

}