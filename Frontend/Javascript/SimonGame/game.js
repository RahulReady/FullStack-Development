
//initialize global vars
var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var startGame = false;

// start when startgame is false
  $(document).on('keydown', function(){
    if (!startGame){
        pickNextSequence();
        startGame = true;
    }
  });

// wait for clicks from user
$('.btn').on('click', function(event){

  var color = event.target.id;
  userClickedPattern.push(color);

  animatePress(color);
  playSound(color);

  // pass in most recent user answer
  checkUserInput(userClickedPattern.length-1);
});

// Select a random color for the computer and play color
function pickNextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //animate button and play sound
  animateButton(randomChosenColor);
  playSound(randomChosenColor);
  level += 1;
  $('h1').text('Level ' + level);
  userClickedPattern = [];
  //console.log(gamePattern);
}

function checkUserInput(levelNumber){
  if(userClickedPattern[levelNumber] === gamePattern[levelNumber]){
    //console.log('success');
    if(userClickedPattern.length === gamePattern.length){
      // pick next random sequence
      setTimeout(function(){
        pickNextSequence()
      }, 700);
    }
  }
  else{
    //console.log('fail');
    gameOver();
    startOver();

  }
}

// Display game over message
function gameOver(){
  $('h1').text('Game over. Press any key to restart!');
  $('body').addClass('game-over');
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
  setTimeout(function(){
    $('body').removeClass('game-over');
  }, 200);

}
// restart variables
function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  startGame = false;
}
// animate button
function animateButton(name){
   $('.btn.' + name ).fadeOut(100).fadeIn(100);
}
// play sounds
function playSound(name){
   var audio = new Audio('sounds/' + name + '.mp3');
   audio.play();
}
// animate press
function animatePress(color){
  $('.btn.' + color).addClass('pressed');
  setTimeout(function(){
    $('.btn.' + color).removeClass('pressed')
  }, 100);
}
