var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email : {
    type: String,
    required: true,
    trim : true,
    minlength : 1
  }

});

var newUser = new User({
  email: ' tsamireddy@email.com   '
});

newUser.save().then( (doc) => {
  console.log('Saved User', doc);
}, (e) => {
  console.log('Unable to save', e);
});


module.exports = { User };
