
// Libraries
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = ['Be awesome!'];

app.set('view engine', 'ejs');

// for reading form data
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/', function(req, res){

  var today = new Date();

  options = {
    weekday : 'long',
    day : 'numeric',
    month : 'long'
  };

  var day = today.toLocaleDateString('en-us', options);

  res.render('list', {kindOfDay: day, newListItems: items});

});

app.post('/', function(req, res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect('/');
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
