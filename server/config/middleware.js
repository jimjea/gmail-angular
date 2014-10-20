var bodyParser = require('body-parser');

module.exports = function(app, express) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  var inbox = express.Router();
  var outbox = express.Router();
  var trash = express.Router();
  var compose = express.Router();
  var user = express.Router();


  app.use('/api/inbox', inbox);
  app.use('/api/outbox', outbox);
  app.use('/api/trash', trash);
  app.use('/api/compose', compose);
  app.use('/api/user', user);

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  require('../inbox/inboxRoutes.js')(inbox);
  require('../outbox/outboxRoutes.js')(outbox);
  require('../trash/trashRoutes.js')(trash);
  require('../compose/composeRoutes.js')(compose);
  require('../users/usersRoutes.js')(user);
};
