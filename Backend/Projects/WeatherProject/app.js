const express = require('express');
const https = require('https');
const app = express();


app.get('/', function(req, res){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=74f26bb8155f1b73a2fcfdc1a2192f69&units=imperial';
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);

      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
    });
  });
  res.send('Server up and running');
});


app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
});
