var User = require('../mongo.js').user;

module.exports = {
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;


    User.findOne({username: username})
      .exec(function(err, found) {
        if (found) {
          res.status(404).send('User already exists');
        } else {
          var newUser = new User({
            username: username,
            password: password
          })
          newUser.save();
          console.log('User saved');
        }
      })
  },

  signin: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .exec(function(err, found) {
        if (!found) {
          res.status(404).send('Username not found');
        } else {
          res.send('Login successful');
        }
      })
  }
}