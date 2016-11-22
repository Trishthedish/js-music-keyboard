$(document).ready( function() {
  // your code here
// potential keys to use.
// x = 120 (note c) // c = 99 (note d)// v = 118 (note e)// b = 98 // n = 78// m = 77 //
// target box button class C & aim
$(".c").click(function(){

  // alert("this worked!"); // this checks to see if it will alert once clicked.

  // now select your audio you wish to be played.
  $('#cAudio').trigger('play');
});

// attach c-note to key x
$('body').keypress(function(event){
  console.log("hello you!" + event.keyCode);
// this is special code that loads it before. thus making it be able to be hit & play each time.
  $('#cAudio').load();
  if(event.keyCode == 120){
    $('#cAudio').trigger('play');
  }
});


// ------------------------------//

//select d button play D note
$(".d").click(function() {
  // play dAudio
  $("#dAudio").trigger('play');
});
// attach d note to key c
$('body').keypress(function(event){
  // special
  $('#dAudio').load();
  if(event.keyCode == 99 ){
    $('#dAudio').trigger('play');
  }
});

// ------------------------------//

// play E note
$(".e").click(function(){
  $("#eAudio").trigger('play');
});
// attach e note to key v
$('body').keypress(function(event){
  //special
  $('#eAudio').load();
  if(event.keyCode == 118 ){
    $('#eAudio').trigger('play');
  }
});

// ------------------------------//

// play f note
$(".f").click(function(){
  $("#fAudio").trigger('play');
});
// attach f note to key b
$('body').keypress(function(event){
  //special
  $('#fAudio').load();
  if(event.keyCode == 98 ){
    $('#fAudio').trigger('play');
  }
});

// ------------------------------//
$(".g").click(function(){
  $("#gAudio").trigger('play');
});

// attach g note to key n
$('body').keypress(function(event){
  // special
  $('#gAudio').load();
  if(event.keyCode == 110 ){
    $('#gAudio').trigger('play');
  }
});

// ------------------------------//
// play a note
$(".a").click(function(){
  $("#aAudio").trigger('play');
});

// attach g note to key m // 109
$('body').keypress(function(event){
    $('#aAudio').load();
  if(event.keyCode == 109 ){
    $('#aAudio').trigger('play');
  }
});

// ------------------------------//
// 44
// play b note.
$(".b").click(function(){
  $("#bAudio").trigger('play');
});
$('body').keypress(function(event){
  $('#bAudio').load();
  if(event.keyCode == 44 ){
    $('#bAudio').trigger('play');
  }
});






}); // end of code block
