const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true,  useUnifiedTopology: true  });

// Schemas
// fruit schema
const fruitSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   review: String
});
// people schema
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});


const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit ({
  name: 'Apple',
  rating: 9,
  review: 'Good stuff man.'

});


const Person = mongoose.model('Person', peopleSchema);

const person = new Person ({
  name: 'Jon',
  age: 25
});
person.save();


const jackfruit = new Fruit ({
  name: 'Jackfruit',
  rating: 10,
  review: 'Very nice!'

});

const orange = new Fruit ({
  name: 'Orange',
  rating: 9,
  review: 'Aight'

});

const pear = new Fruit ({
  name: 'Pear',
  rating: 7,
  review: 'Not too bad'

});

// Fruit.insertMany([jackfruit, orange, pear], function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log('Success');
//   }
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else {
    console.log(fruits);
  }
});
// fruit.save();
