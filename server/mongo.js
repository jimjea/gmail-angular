var mongoose = require('mongoose');
var mongodb = 'mongodb://gmail-angular:test123@ds047040.mongolab.com:47040/gmail-angular';

var db = mongoose.connection;

mongoose.connect(mongodb);

db.on('error', function(error) {
  console.error('Mongoose encountered an error: ', error);
});

db.once('open', function() {
  console.log('Mongoose successfully opened connection with database');
});


var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var emailSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);
var Email = mongoose.model('Email', emailSchema);


exports.user = User;
exports.email = Email;