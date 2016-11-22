## Notes

1. http://codesamplez.com/programming/control-html5-audio-with-jquery
- This article goes into great detail about loading & playing audio files.


$('body').keypress(function(event){
  if(event.keyCode == 88){
    $('#cAudio').trigger('play');

2.   console.log("hello you!" + event.keyCode);


check out what code was actually pressed.


3.
$('body').on('keypress',function(event){
  if(event.keyCode == 120){
    console.log("this is key", event.keypress);
    $('#cAudio').trigger('play');
  }
});
});
