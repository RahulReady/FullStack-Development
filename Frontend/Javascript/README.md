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
__DOM__ <br>
  Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
```
document.querySelector('h1').classList.toggle('huge');
```
querySelector() finds the appropriate html element. <br>
classList tells us the name and values of that particular query selection. Toggle() turns on and off the particular css element in your css stylesheet. In this case it is turning on and off the 'huge' class.

```
document.querySelector('a').attributes;
document.querySelector('a').getAttribute('href');
document.querySelector('a').setAttribute('href', 'bing.com');
```
Above code gets the attributes for a anchor tag, and sets the specific attribute to point to bing.com

```
target.addEventListener(type, listener [, options]);
```
Where type is an event type to listen for ex- 'click'. listener could be a function to call when the 'click' occurs. <br> Higher order functions are functions that can take functions as input.

__Constructors__ <br>
Function name has to be capitalized.
```
function Person(name, age, languages){
  this.name = name;
  this.age = age;
  this.languages = languages;
  // can also add a fuction inside a constructor
  this.move = function (){
    alert('I am moving!');
  }
}
// creating a new object based on constructor
var person1 = new Person('Tim', 23, ['english', 'french']);
```

__Switch__
```
if a button is pressed, look for what button is pressed, the execute the relevant code and break from switch.
switch (buttonPressed) {
  case "w":
    Insert things you want executed here
    break;
  default:

}
```
__JQuery__ <br>
Basically simplifies JS code.

```
$('h1').css('color', 'red');
// $ - is same as 'JQuery'.
//Select h1 tag, and change the color css property to red.

// If you want a property of an element,
console.log($('h1').css('color'));

// adding class(s) to js code
$('h1').addClass('enlarge-title margin-100');
//removing classes
$('h1').removeClass('enlarge-title margin-100');
//checking if element has a class
$('h1').hasClass('enlarge-title margin-100');

// modifies text inside button to say hello
$('button').text('Hello');
// modifies html inside button and can also add html
$('button').text(<em>Hello</em>);

//sets href value of anchor tag to google.com
$('a').attr('href', 'google.com')

//adding event listeners
$('button').click(function(){
  $('h1').css('color', 'red');
});

// detecting keypresses
$('input').keypress(function(event){
  console.log(event.key);
});


//general event listeners
// (Reference) https://developer.mozilla.org/en-US/docs/Web/Events
$('h1').on('mouseover', function(){
  $('h1').css('color','purple');
});

//Adding html elements on the fly
$('h1').before('<button>New button</button>');
after, prepend, append (where prepend/append adds them inside the specified class)

$('h1').remove(); // removes all h1 elements

//other characteristics
$('h1').hide();
$('h1').show();
$('h1').toggle();
$('h1').fadeOut();
$('h1').fadeIn();
$('h1').fadeToggle();
$('h1').slideUp();
$('h1').slideDown();
$('h1').slideToggle();

// allows you to define custom css (sticking to things that have a numeric value)
$('h1').animate({opacity: 0.5});

//can chain commands
$('h1').slideUp().slideDown().animate({opacity: 0.5});
```
