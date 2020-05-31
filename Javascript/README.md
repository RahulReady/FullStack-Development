# Javascript notes

#### Basics
* `var ` is a keyword to be used for creating variables. <br>
* `var name = 'Rahul';` <br>
* Code ends in a semi-colon.
* Adding/subtracting/multiplying same as Python

#### Functions
`var message = "Hello";` <br>
`message.length` gets the number of characters in message.
`message.toLowerCase()` converts the message to lower case and message.toUpperCase() to uppercase. <br>
`message.slice(0, 1)`: Similar to python and gets a substring of the specified string. In this case, it gets the first character. <br><br>
`Math.floor(2.999)`: Rounds down numbers. Output would be 2. <br><br>
`Math.random()`: Function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) <br><br>

__Creating functions in javascript:__
```
function namedFunction(){

  }
  ```
  Functions can return values in JS like python.<br>
  __Calling functions__
  ```
  namedFunction();
  ```
  __Conditionals__
  ```
  if(){

  }
  else{

  }
  === checks equality and if datatypes match
  == checks only equality
  !== not equal
  && And
  || Or

  ```
  __Arrays__
  ```
  var numbers = [0,1,2,3];
  numbers.includes(3); // checks whether 3 is in array.
  numbers.push(5);// adds numbers into array
  numbers.pop(); //removes last item from array
  for and while loops work the same way as in java
  ```
