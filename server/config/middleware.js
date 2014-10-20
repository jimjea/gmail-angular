var bodyParser = require('body-parser');

module.exports = function(app, express) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  var inbox = express.Router();
  var outbox = express.Router();
  var trash = express.Router();
  var compose = express.Router();


  app.use('/api/inbox', inbox);
  app.use('/api/outbox', outbox);
  app.use('/api/trash', trash);
  app.use('/api/compose', compose);

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  // require('../movies/movieRoutes.js')(movieRouter);
  // require('../yelp/yelpRoutes.js')(yelpRouter);
  // require('../users/userRoutes.js')(userRouter);
  // require('../events/eventRoutes.js')(eventRouter);
};
