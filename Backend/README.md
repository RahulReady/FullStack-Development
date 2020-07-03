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

__Layouts__ <br>
```
// Can add to ejs file and can be used in place of writing redundant code
<%- include('header') -%>

```
__Module__ <br>
```
// create a file with necessary code and you can use following to use it
const date = require(__dirname + '/<insertFileName>.js');

// returns the uncalled function
module.exports = <functionHere>;
exports.<giveAName> = <function-you-want-to-use>;
```
__SQL__ <br>
```
// Creating a table
CREATE TABLE Products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
  )

// Updating a table (method 1)
INSERT INTO Products
VALUES (1, 'pen', 1.20)

// Updating a table (method 2)
INSERT INTO Products (id, name)
VALUES (2,'pencil');

// Updating records
UPDATE Products
SET price = 0.8
WHERE id = 2;

// Add, delete, or modify columns
ALTER TABLE products
ADD stock INT;

// Deleting records
DELETE FROM Products
WHERE id = 1;

```
__NOSQL(Mongodb)__ <br>
```
// Make sure to follow instructions on installing mongodb from their website

// Commands
mongod -> Starts a 'mongo db instance'
mongo -> Enables you to write commands for the db
help -> commands available
show dbs -> Shows current available databases
use <dbName> -> Switchs to <dbName> or creates db if does not exist.
show collections -> Shows the the collections (similar to tables in sql)

// Relevant CRUD Docs
https://docs.mongodb.com/manual/crud/#read-operations

// Example from mongodb website of inserting values in a 'collection' (where inventory is a collection (similar to SQL table))
db.inventory.insertOne(
   { "item" : "canvas",
     "qty" : 100,
     "tags" : ["cotton"],
     "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
   }
)
// Reading Operations (finds all records)
db.<collectionName>.find()

https://docs.mongodb.com/manual/reference/operator/query/

// Conditional queries example (1st without projection/ 2nd with projection(return specific attributes))
db.products.find({price:{$gt:0.5}})
db.products.find({name:'Pencil' }, {name: 1, _id: 0, price:1})

// Update example
db.products.updateOne({_id:1}, {$set: {stock:32}})

// Delete example
db.products.deleteOne({_id: 2})
```
