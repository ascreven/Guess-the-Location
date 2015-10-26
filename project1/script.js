//move from start screen to Snoqualmie
$(document).ready(function () {
  $('#changeScreen').on('click',function(){
    location.href='game.html';
  });
});

  //if they click on North America button they get they get +1 to their score, otherwise they just get one more attempt
  var firstMove = function() {
    $('#na').on('click', function (){
      var right = 1;
      var score = right + '/' + 1
      $('.score').html(score);
    });
    $('.options :not(#na)').on('click', function (){
      var right = 0
      var score = [right, '/1']
      $('.score').html(score);
    });
  };
$(document).ready(function () {
  firstMove();
});
  // $(this).html('next');
  // $('h2').html('Snoqualmie Falls');
  // $('img').attr('src','snoqualmie_falls.jpg');
