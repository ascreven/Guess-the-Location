//move from start screen to Snoqualmie
$(document).ready(function () {
  $('#changeScreen').on('click',function(){
    location.href='game.html';
  });
});

  //start game ready to play the first round
$(document).ready(function () {
  $('.next').hide();
  right = 0;
  i= 0;
  tries = 0;
  score(right,tries);
  updateLocation(i);
});

// scoreboard combines global variables right and tries
function score(right,tries) {
  $('.score').html('Score: ' + right + '/' + tries);
}

// information for each of the locations
var locations = [
  // location 1
  {place: 'Snoqualmie Falls',
  image: 'snoqualmie_falls.jpg',
  continentFormal: 'North America',
  continent: 'na',
  description: 'Snoqualmie Falls is a 270 foot waterfall located on the Snoqualmie River in Washington state.'
},
// location 2
  {place: 'Zhangye Danxia Landform',
  image: 'zhangyeDanxiaLandformGeologicalPark.jpg',
  continentFormal: 'Asia',
  continent: 'asia',
  description: ''
},
// location 3
  {place: "Ronda",
  image: "rondaSpain.jpg",
  continentFormal: "Europe",
  continent: 'eur',
  description: ''
},
 // location 4
  {place: "Torres Del Paine",
  image: "torresDelPaine.jpg",
  continentFormal: "South America",
  continent: 'sa',
  description: ''
},
 // location 5
  {place: "Astronomical Clock II",
  image: "astronomicalClockII.jpg",
  continentFormal: "Europe",
  continent: 'eur',
  description: ''
},
// location 6
  {place: "Maletsunyane Falls",
  image: "maletsunyaneFalls.jpg",
  continentFormal: "Africa",
  continent: 'afr',
  description: ''
  },
  // location 7
  {place: "Fly Geyser",
  image: "flyGeyser.jpg",
  continentFormal: "North America",
  continent: 'na',
  description: ''
  },
  // location 8
  {place: "Underground Jenolan Caves",
  image: "undergroundJenolanCaves.jpg",
  continentFormal: "Australia",
  continent: 'aus',
  description: ''
  },
  // location 9
  {place: "Hanoi",
  image: "hanoi.jpg",
  continentFormal: "Asia",
  continent: 'asia',
  description: ''
  },
  // location 10
  {place: "Mount Roraima",
  image: "mountRoraima.jpg",
  continentFormal: "Asia",
  continent: 'asia',
  description: ''
  },
];

function updateLocation() {

  //hide description, outcome
  $('.descriptions').hide();
  $('.outcome').hide();
  // change header to ask where it is
  $('.place').html(locations[i].place + '?');
  // change picture
  $('.location img').attr('src', locations[i].image);
  $('.outcome').html('You are not correct. ' + locations[i].place + ' is located in ' + locations[i].continentFormal + '.');
  var answer = locations[i].continent;
  $('.continent').on('click', function (){
    tries++;
    $('h2:first-child').hide();
    if ($(this).attr('id')==answer){
      right++;
      score(right,tries);
      $('.outcome').html('You are correct! ' + locations[i].place + ' is located in ' + locations[i].continentFormal + '.');
    }
  score(right,tries);
  $('h2.where').hide();
  $('.place').html(locations[i].place);
  $('.continents').hide();
  $('.descriptions').html('Description: ' + locations[i].description);
  $('.descriptions').show();
  $('.outcome').show();
  $('.next').show();
  });
  $('.next').on('click', function (){
    $('h2.where').show();
    $('.continents').show();
    $('h2:first-child').show();
    $('.next').hide();
    i++;
  });
}




// function firstMove() {
//   $('#na').on('click', function (){
//     right++;
//     firstResults();
//   });
//   $('.options :not(#na)').on('click', function (){
//     firstResults();
//   });
// }
// function firstResults() {
//   $('.options button').off();
//   $('.next').show();
//   tries++;
//   score(tries,right);
//   secondMove();
// // }
//   //second round
// function secondMove() {
//   $('.next').on(('click'), function (){
//     // keep track of where next is going to
//     $('.next').hide();
//     $('img').attr('src','zhangyeDanxiaLandformGeologicalPark.jpg');
//     $('h2').html('Zhangye Danxia Landform')
//     $('.options button').on();
//     // only get +1 if they click when it actually is Asia(or other continent for other problems)
//     $('#asia').on('click', function (){
//       if (tries===1){
//         right++;
//       }
//       secondResults();
//     });
//     $('.options :not(#asia)').on('click',function(){
//       secondResults();
//     });
//   })
//   };
//
// function secondResults() {
//   $('.options button').off();
//   $('.next').show();
//   tries++;
//   score = this.right + '/' + this.tries;
//   $('.score').html(score);
//   thirdMove();
// }
//
// // third round
//
// function thirdMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('img').attr('src','rondaSpain.jpg');
//     $('h2').html('Ronda');
//     $('.options button').on();
//     $('#eur').on('click', function (){
//       if (tries==3){
//         right++;
//       }
//       thirdResults();
//     });
//     $('.options :not(#eur)').on('click',function(){
//       thirdResults();
//     });
//   });
// }
//
// function thirdResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   fourthMove();
// }
//
// function fourthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Torres Del Paine');
//     $('img').attr('src','torresDelPaine.jpg');
//     $('.options button').on();
//     $('#sa').on('click', function (){
//       if (tries==4){
//         right++;
//       }
//         fourthResults();
//     });
//     $('.options :not(#sa)').on('click',function(){
//       fourthResults();
//     });
//   });
// }
//
// function fourthResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   fifthMove();
// }
//
// function fifthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Astronomical Clock II');
//     $('img').attr('src','astronomicalClockII.jpg');
//     $('.options button').on();
//     $('#eur').on('click', function (){
//       if (tries==5){
//         right++;
//       }
//         fifthResults();
//     });
//     $('.options :not(#eur)').on('click',function(){
//       fifthResults();
//     });
//   });
// }
//
// function fifthResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   sixthMove();
// }
//
// function sixthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Maletsunyane Falls');
//     $('img').attr('src','maletsunyaneFalls.jpg');
//     $('.options button').on();
//     $('#afr').on('click', function (){
//       if (tries==6){
//         right++;
//       }
//         sixthResults();
//     });
//     $('.options :not(#afr)').on('click',function(){
//       sixthResults();
//     });
//   });
// }
//
// function sixthResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   seventhMove();
// }
//
// function seventhMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Fly Geyser');
//     $('img').attr('src','flyGeyser.jpg');
//     $('.options button').on();
//     $('#na').on('click', function (){
//       if (tries==7){
//         right++;
//       }
//         seventhResults();
//     });
//     $('.options :not(#na)').on('click',function(){
//       seventhResults();
//     });
//   });
// }
//
// function seventhResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   eighthMove();
// }
//
// function eighthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Underground Jenolan Caves');
//     $('img').attr('src','undergroundJenolanCaves.jpg');
//     $('.options button').on();
//     $('#aus').on('click', function (){
//       if (tries==8){
//         right++;
//       }
//         eighthResults();
//     });
//     $('.options :not(#aus)').on('click',function(){
//       eighthResults();
//     });
//   });
// }
//
// function eighthResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   ninthMove();
// }
//
// function ninthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Hanoi');
//     $('img').attr('src','hanoi.jpg');
//     $('.options button').on();
//     $('#asia').on('click', function (){
//       if (tries==9){
//         right++;
//       }
//         ninthResults();
//     });
//     $('.options :not(#asia)').on('click',function(){
//       ninthResults();
//     });
//   });
// }
//
// function ninthResults() {
//   $('.options button').off();
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
//   tenthMove();
// }
//
// function tenthMove() {
//   $('.next').on('click', function (){
//     $('.next').hide();
//     $('h2').html('Mount Roraima');
//     $('img').attr('src','mountRoraima.jpg');
//     $('.options button').on();
//     $('#asia').on('click', function (){
//       if (tries==10){
//         right++;
//       }
//         tenthResults();
//     });
//     $('.options :not(#asia)').on('click',function(){
//       tenthResults();
//     });
//   });
// }
//
// function tenthResults() {
//   $('.options button').off();
//   $('.next').html('Final Score');
//   $('.next').show();
//   score = right + '/' + this.tries;
//   $('.score').html(score);
// }
