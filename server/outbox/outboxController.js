var User = require('../mongo').user;
var Email = require('../mongo').email;

module.exports = {
  fetchOutbox: function(req, res) {
    var username = req.body.username;
    console.log(username)

    Email.find({username: username})
      .exec(function(err, found) {
        if (found) {
          res.send(found);
        } else {
          res.status(500).send({data: 'Nothing in Outbox'});
        }
      })
  }
}