var inboxController = require('./inboxController');

module.exports = function(app) {
  app.route('/')
    .post(inboxController.fetchAll);
}