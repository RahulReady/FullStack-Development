
$('h1').addClass('big-title margin-100');



$('button').click(function(){
  $('h1').css('color', 'red');
});


$('input').keypress(function(event){
  console.log(event.key);
  $('h1').text(event.key);
});

$('h1').on('mouseover', function(){
  $('h1').css('color','purple');
});
