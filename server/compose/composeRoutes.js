var composeController = require('./composeController');

module.exports = function(app) {
  app.route('/')
    .post(composeController.test);
}