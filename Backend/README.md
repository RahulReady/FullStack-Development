## Backend notes

__node:__ liberating javascript from the browser and onto your computer.
```
// Runs js files on computer where you have to be in a folder that contains the .js file
node filename.js
```
__Node Repl (Read evaluation print loops)__ <br> Can perform JS commands on the console and get results.
<br>
```
// creates a location where you can store many packages aka dependencies.
npm init
// importing packages/ like in pythom
var userDefinedName = require('moduleName');
```
__Express__ - It is to node as JQuery is to Javascript. No need to write redundant/ repetitive code!

__Useful Functions__
```
// Gets the path of current folder no matter the type of environment
console.log(__dirname);
```
__Basics of Express__
```
// Importing and initializing express (after installing via npm)
const express = require('express');
const app = express();

// Once app gets to 'home page', the innput to the call back funct is request and the output is the response.
app.get('/', function(req, res){
  res.send('<h2>Hello!</h2>');
});

// Can do multiple res.writes() before doing a res.send()

// Using files in a specific folder for ex css/images
app.use(express.static("<insert-folder-name-here>"));
```

__Body-parser__
```
// Used for parsing web data/ form data
app.use(bodyParser.urlencoded({extended : true}));
```

__API__
```
// Example of weather api
after the ? signals the parameters of the API request.
// Each subsequent request is followed by &key=value
api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&appid=74f26bb8155f1b73a2fcfdc1a2192f69
```

```
// Turning javascript object into string
JSON.stringify(object);

// Turning string into json object
JSON.parse(object);

```
__Templating__ <br>
Reference: https://ejs.co/
```
// Let's you generate HTML markup from Javascript
// app.js file
// Looks for ejs file inside a views folder that must be created in home dir
res.render('index', {kindOfDay: day});
// index.ejs file
<%= kindOfDay %>
// So changes the html output based in input param

// scriptlet tag encloses code within ejs file
<%  js code %>
// redirects an incoming request to a desired location
res.redirect('/');

```
