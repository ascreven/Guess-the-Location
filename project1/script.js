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
  $('.next').on(('click'), function (){
    // keep track of where next is going to
    $('.next').hide();
    $('img').attr('src','zhangyeDanxiaLandformGeologicalPark.jpg');
    $('h2').html('Zhangye Danxia Landform')
    $('.options button').on();
    // only get +1 if they click when it actually is Asia(or other continent for other problems)
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
    $('h2').html('Ronda');
    $('.options button').on();
    $('#eur').on('click', function (){
      if (tries==3){
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
  score = right + '/' + this.tries;
  $('.score').html(score);
  fourthMove();
}

function fourthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Torres Del Paine');
    $('img').attr('src','torresDelPaine.jpg');
    $('.options button').on();
    $('#sa').on('click', function (){
      if (tries==4){
        right++;
      }
        fourthResults();
    });
    $('.options :not(#sa)').on('click',function(){
      fourthResults();
    });
  });
}

function fourthResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  fifthMove();
}

function fifthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Astronomical Clock II');
    $('img').attr('src','astronomicalClockII.jpg');
    $('.options button').on();
    $('#eur').on('click', function (){
      if (tries==5){
        right++;
      }
        fifthResults();
    });
    $('.options :not(#eur)').on('click',function(){
      fifthResults();
    });
  });
}

function fifthResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  sixthMove();
}

function sixthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Maletsunyane Falls');
    $('img').attr('src','maletsunyaneFalls.jpg');
    $('.options button').on();
    $('#afr').on('click', function (){
      if (tries==6){
        right++;
      }
        sixthResults();
    });
    $('.options :not(#afr)').on('click',function(){
      sixthResults();
    });
  });
}

function sixthResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  seventhMove();
}

function seventhMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Fly Geyser');
    $('img').attr('src','flyGeyser.jpg');
    $('.options button').on();
    $('#na').on('click', function (){
      if (tries==7){
        right++;
      }
        seventhResults();
    });
    $('.options :not(#na)').on('click',function(){
      seventhResults();
    });
  });
}

function seventhResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  eighthMove();
}

function eighthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Underground Jenolan Caves');
    $('img').attr('src','undergroundJenolanCaves.jpg');
    $('.options button').on();
    $('#aus').on('click', function (){
      if (tries==8){
        right++;
      }
        eighthResults();
    });
    $('.options :not(#aus)').on('click',function(){
      eighthResults();
    });
  });
}

function eighthResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  ninthMove();
}

function ninthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Hanoi');
    $('img').attr('src','hanoi.jpg');
    $('.options button').on();
    $('#asia').on('click', function (){
      if (tries==9){
        right++;
      }
        ninthResults();
    });
    $('.options :not(#asia)').on('click',function(){
      ninthResults();
    });
  });
}

function ninthResults() {
  $('.options button').off();
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
  tenthMove();
}

function tenthMove() {
  $('.next').on('click', function (){
    $('.next').hide();
    $('h2').html('Mount Roraima');
    $('img').attr('src','mountRoraima.jpg');
    $('.options button').on();
    $('#asia').on('click', function (){
      if (tries==10){
        right++;
      }
        tenthResults();
    });
    $('.options :not(#asia)').on('click',function(){
      tenthResults();
    });
  });
}

function tenthResults() {
  $('.options button').off();
  $('.next').html('Final Score');
  $('.next').show();
  score = right + '/' + this.tries;
  $('.score').html(score);
}
