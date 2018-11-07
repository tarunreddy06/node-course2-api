//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
    if(err){
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB successfully!');
    const db = client.db('TodoApp');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5bdbdb3b4999df7d1b0e4dc0')
    }, {
      $set: {name: 'TarunNew'}
    }, {
      returnOriginal: false
    }).
    then((result) => {
      console.log(result);
    });


    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5bdbdd33f518a77d26a55569')
    }, {
      $inc: {age: 1}
    }, {
      returnOriginal: false
    }).
    then((result) => {
      console.log(result);
    });

    client.close();
});
