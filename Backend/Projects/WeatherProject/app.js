const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
  //console.log(req.body.cityName);
  //console.log('Post received.');

  const query = req.body.cityName;
  const apiKey = 'insertAPIKeyhere';
  const units = 'imperial';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ query +'&appid='+ apiKey +'&units=' + units;

  https.get(url, function(response){
    //console.log(response.statusCode);

    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const iconUrl = 'http://openweathermap.org/img/wn/'+ icon + '@2x.png';
      //console.log(temp);

      const weatherDescription = weatherData.weather[0].description;
      //console.log(weatherDescription);
      // Can only do 1 send per get.
      res.write('<h1>The temperature in '+ query + ' is ' + temp + ' degrees F</h1>');
      res.write('<h3>The weather is currently ' + weatherDescription + '</h3>');
      res.write('<img src =' + iconUrl +  '>');
      res.send();
    });
  });
});



app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
});
