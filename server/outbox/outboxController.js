var User = require('../mongo').user;
var Email = require('../mongo').email;

module.exports = {
  fetchOutbox: function(req, res) {
    var username = req.body.username;

    Email.find({username: username})
      .exec(function(err, found) {
        if (!found) {
          res.send({data: 'Nothing in Outbox'});
        } else {
          res.send(found);
        }
      })
  }
}