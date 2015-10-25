//move from start screen to actual screen
$(document).ready(function () {
$('.snoqualmie').hide();
$('#start').on('click',function(){
    $('.snoqualmie').show();
    $('.start-page').hide();
  });
});
