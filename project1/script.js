//move from start screen to Snoqualmie
$(document).ready(function () {
  $('#changeScreen').on('click',function(){
    location.href='game.html';
  });
});

  //start game ready to play the first round
$(document).ready(function () {
  $('.next').hide();
  tries = 0;
  right = 0;
  score(right, tries);
  handleChoice();
  locationNumber = 0;
  updateLocation(locationNumber);
  updateScreen();
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
//change things to divs to easily hide and show
function updateLocation() {
  $('.descriptions').hide();
  $('.outcome').hide();
  $('.place').html(locations[locationNumber].place + '?');
  $('.location img').attr('src', locations[locationNumber].image);
  $('.outcome').html('You are not correct. ' + locations[locationNumber].place + ' is located in ' + locations[locationNumber].continentFormal + '.');
  answer = locations[locationNumber].continent;

}
function handleChoice() {
  $('.continent').on('click', function (){
    tries++;
    var selectedAnswer = $(this).attr('id');
    if (selectedAnswer==answer){
      right++;
      $('.outcome').html('You are correct! ' + locations[locationNumber].place + ' is located in ' + locations[locationNumber].continentFormal + '.');
    }
  score(right,tries);
  $('h2:first-child').hide();
  $('h2.where').hide();
  $('.place').html(locations[locationNumber].place);
  $('.continents').hide();
  $('.descriptions').html('Description: ' + locations[locationNumber].description);
  $('.descriptions').show();
  $('.outcome').show();
  $('.next').show();
  });
}

function updateScreen() {
  $('.next').on('click', function (){
    console.log(locationNumber);
    locationNumber++;
    console.log(locationNumber);
    $('h2.where').show();
    $('.continents').show();
    $('h2:first-child').show();
    $('.next').hide();
    updateLocation(locationNumber);
  });

}
