

// importing modules

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

// calculator
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){

  console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('Result is: ' + result);
});


//bmi calculator
app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var n = weight / Math.pow(height, 2);
  res.send('Your BMI is ' + n);
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
