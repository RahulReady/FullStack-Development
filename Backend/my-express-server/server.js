

const express = require('express');


const app = express();

// home page
app.get('/', function(req, res){
  res.send('<h2>Hello bruh!</h2>');
  console.log(res);
});

// about page
app.get('/about', function(req, res){
  res.send('<h2>Budding data scientist learning about full stack dev!</h2>');
})

// Contact
app.get('/contact', function(req, res){
  res.send('<h3>You can reach me at rmaramreddy@hawk.iit.edu</h3>');
})

// Hobbies
app.get('/hobbies', function(req, res){
  res.send('<h3>Learn about web development!</h3>');
})


app.listen(3000, function(){
  console.log('server listening on port 3000');
});
