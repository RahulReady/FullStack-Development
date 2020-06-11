const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

// Uses static files for website
app.use(express.static("public"));

// for reading form data
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  //console.log(firstName +" "+ lastName +" "+ email);

  // Mailchimp required data format
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  // Fake audience id and auth key added
  // console.log('stringified data: ' + jsonData);
  const url = 'https://us10.api.mailchimp.com/3.0/lists/6a095725fa';

  const options = {
    method: 'POST',
    auth: 'rahul1:baca8c63398dd6g8f8c50b590fecd067-us10'
  };
  const request1 =  https.request(url, options, function(response){

    if(response.statusCode === 200){
      res.sendFile(__dirname + '/success.html');
    }
    else{
      res.sendFile(__dirname + '/failure.html');
    }

    response.on('data', function(data){
      // console.log(JSON.parse(data));
    });
  });

  request1.write(jsonData);
  request1.end();

});

app.post('/failure', function(req, res){
  res.redirect('/');
});

// Since we are deploying to Heroku, the .env.PORT enables dynamic port changes
app.listen(process.env.PORT || 3000, function(req, res){
  console.log('Serer is listening on port 3000');
});
