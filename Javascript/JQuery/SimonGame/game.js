
buttonColors = ['red', 'blue', 'green', 'yellow'];
gamePattern = [];
userClickedPattern = [];



function nextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).fadeOut(100).fadeIn(100);

  var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  $('#' + randomChosenColor).click();
  audio.play();
}

$(':button').mousedown(function(){
  alert('I got clicked');
});
