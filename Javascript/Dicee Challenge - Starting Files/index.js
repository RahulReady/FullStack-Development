// dice 1 roll
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//change image to dice image
document.querySelector('img.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');

//dice 2 roll
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector('img.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');


if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerText = '🚩Player 1 wins';
}
else if(randomNumber1 < randomNumber2){
  document.querySelector('h1').innerText = 'Player 2 wins🚩';
}
else{
  document.querySelector('h1').innerText = '🚩Draw🚩';
}
