$(document).ready( function() {
  // your code here

// target box button class C & aim
$(".c").click(function(){
  // alert("this worked!"); // this checkos to see if it will alert once clicked.

  // now select your audio you wish to be played.
  $('#cAudio').trigger('play');

});

//select d button
$(".d").click(function() {
  // play dAudio
  $("#dAudio").trigger('play');
});

$(".e").click(function(){
  $("#eAudio").trigger('play');
});

$(".f").click(function(){
  $("#fAudio").trigger('play');
});

$(".a").click(function(){
  $("#aAudio").trigger('play');
});

$(".b").click(function(){
  $("#bAudio").trigger('play');
});




}); // end of code block
