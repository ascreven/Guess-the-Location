//move from start screen to actual screen
$(document).ready(function () {
$('#changeScreen').on('click',function(){
  $(this).html('next');
  $('h2').html('Snoqualmie Falls');
  $('img').attr('src','snoqualmie_falls.jpg');
  });
});
