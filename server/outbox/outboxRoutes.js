var outboxController = require('./outboxController');

module.exports = function(app) {
  app.route('/')
    .post(outboxController.fetchOutbox)
}