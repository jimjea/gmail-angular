var Email = require('../mongo').email;
var User = require('../mongo').user;

module.exports = {
  sentMessage: function(req, res) {
    var username = req.body.username;
    var receiver = req.body.receiver;
    var subject = req.body.subject;
    var body = req.body.body;

    User.findOne({username: receiver})
      .exec(function(err, found) {
        if (!found) {
          res.status(500).send('That email address does not exist');
        } else {
          var newEmail = new Email({
            username: username,
            receiver: receiver,
            subject: subject,
            body: body
          })
          newEmail.save();
          console.log('Email Saved');
          res.send('Email Received');
        }
      })
  }
}