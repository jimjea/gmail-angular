var usersController = require('./usersController');

module.exports = function(app) {
  app.route('/signup')
    .post(usersController.signup);

  app.route('/signin')
    .post(usersController.signin);

}