//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
    if(err){
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB successfully!');
    const db = client.db('TodoApp');
    // delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    // .then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then((result) => {
    //   console.log(result);
    // });

    //findOne and Delete
    db.collection('Todos').findOneAndDelete({completed: false})
    .then((doc) => {
      console.log(doc);
    });

    db.collection('Todos').findOneAndDelete({completed: true})
    .then((doc) => {
      console.log(doc);
    });


    client.close();
});
