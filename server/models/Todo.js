var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }

});

var newTodo = new Todo({
  text: 'Cook Dinner'
});

newTodo.save().then( (doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save Todo');
});


module.exports = { Todo }; 
