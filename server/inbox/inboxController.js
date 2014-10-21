var User = require('../mongo').user;
var Email = require('../mongo').email;

module.exports = {
  fetchAll: function(req, res) {
    var username = req.body.username;
    
    Email.find({receiver: username})
      .exec(function(err, found) {
        if (found) {
          res.send(found);
        } else {
          res.status(500).send('How the fuck did this user get in here');
        }
      })
  }
}