var bodyParser = require('body-parser');

module.exports = function(app, express) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  // var movieRouter = express.Router();
  // var yelpRouter = express.Router();
  // var userRouter = express.Router();
  // var eventRouter = express.Router();


  // app.use('/api/movies', movieRouter);
  // app.use('/api/yelp', yelpRouter);
  // app.use('/users', userRouter);
  // app.use('/api/events', eventRouter);

  // app.get('/*', function(req, res) {
  //   res.redirect('/');
  // });

  // require('../movies/movieRoutes.js')(movieRouter);
  // require('../yelp/yelpRoutes.js')(yelpRouter);
  // require('../users/userRoutes.js')(userRouter);
  // require('../events/eventRoutes.js')(eventRouter);
};
