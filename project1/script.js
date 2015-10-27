//move from start screen to Snoqualmie
$(document).ready(function () {
  $('#changeScreen').on('click',function(){
    location.href='game.html';
  });
});

  //if they click on North America button they get they get +1 to their score, otherwise they just get one more attempt
  $(document).ready(function () {
    $('.next').hide();
    firstMove();
  });

function firstMove() {
  tries = 0;
  right = 0;
  $('#na').on('click', function (){
    right++;
    firstResults();
  });
  $('.options :not(#na)').on('click', function (){
    firstResults();
  });
}
function firstResults() {
  $('.options button').off();
  $('.next').show();
  tries++;
  score = this.right + '/' + this.tries;
  $('.score').html(score);
  secondMove();
}
  //second round
function secondMove() {
  $('.next').on('click', function (){
    // keep track of where next is going to
    $('.next').hide();
    $('img').attr('src','zhangyeDanxiaLandformGeologicalPark.jpg');
    $('.options button').on();
    $('#asia').on('click', function (){
      if (tries===1){
        right++;
      }
      secondResults();
    });
    $('.options :not(#asia)').on('click',function(){
      secondResults();
    });
  })
  };

function secondResults() {
  $('.options button').off();
  $('.next').show();
  tries++;
  score = this.right + '/' + this.tries;
  $('.score').html(score);
  thirdMove();
}

// third round

function thirdMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('img').attr('src','rondaSpain.jpg');
    $('.options button').on();
    $('#eur').on('click', function (){
      if (tries==2){
        right++;
      }
      thirdResults();
    });
    $('.options :not(#eur)').on('click',function(){
      thirdResults();
    });
    });
  }

function thirdResults() {
  $('.options button').off();
  $('.next').show();
  score = this.right + '/' + this.tries;
  $('.score').html(score);
  // fourthMove();
}
