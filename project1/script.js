//move from start screen to Snoqualmie
$(document).ready(function () {
  $('#changeScreen').on('click',function(){
    location.href='game.html';
  });
});

  //start game ready to play the first round
$(document).ready(function start () {
  $('.next').html('Next');
  $('.next').hide();
  tries = 0;
  right = 0;
  score(right, tries);
  handleChoice();
  locationNumber = 0;
  updateLocation(locationNumber);
  updateScreen();
  $('#1').css('background-color','#CC9999');
  $('.rightOrWrong').hide();
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
  {place: 'Zhangye Danxia National Geological Park',
  image: 'zhangyeDanxiaLandformGeologicalPark.jpg',
  continentFormal: 'Asia',
  continent: 'asia',
  description: 'The Zhangye Danxia National Geopark is a collection of colorful rocks in northwest China. The beautiful rocks took over 24 millions years to form from mineral deposits.'
},
// location 3
  {place: "Ronda",
  image: "rondaSpain.jpg",
  continentFormal: "Europe",
  continent: 'eur',
  description: 'Ronda is a Spanish city that is divided by the Guadalevín River and El Tajo canyon. Three bridges span the canyon: Puente Romano, Puente Viejo, and Puente Nuevo(pictured).'
},
 // location 4
  {place: "Torres Del Paine",
  image: "torresDelPaine.jpg",
  continentFormal: "South America",
  continent: 'sa',
  description: 'Torres del Paine National Park is located in Chile. The park spans 935 square miles and includes mountains, glaciers, lakes, and rivers.'
},
 // location 5
  {place: "Astronomical Clock",
  image: "astronomicalClockII.jpg",
  continentFormal: "Europe",
  continent: 'eur',
  description: 'The Astronomical Clock is located in Prague, Czech Republic. The clock was built in 1410 and is set in motion every hour.'
},
// location 6
  {place: "Maletsunyane Falls",
  image: "maletsunyaneFalls.jpg",
  continentFormal: "Africa",
  continent: 'afr',
  description: 'Maletsunyane Falls is a 630 foot waterfall located in South Africa on the ledge of the Triassic/Jurassic basalt.'
  },
  // location 7
  {place: "Fly Geyser",
  image: "flyGeyser.jpg",
  continentFormal: "North America",
  continent: 'na',
  description: 'Fly Geyser is a small geothermal geyser in Nevada that was accidentally created while well drilling for geothermal energy in 1964.'
  },
  // location 8
  {place: "Jenolan Caves",
  image: "undergroundJenolanCaves.jpg",
  continentFormal: "Australia",
  continent: 'aus',
  description: "The Jenolan Caves are limestone caves New South Wales, Australia. It is the oldest known and dated cave system in the world and is made of clay that is approximately 340 million years old."
  },
  // location 9
  {place: "Turtle Tower",
  image: "hanoi.jpg",
  continentFormal: "Asia",
  continent: 'asia',
  description: 'Turtle Tower is located in the center of Hoan Kiem Lake in Hanoi, Vietnam. The temple represents the Golden Turtle God who according to legend asked emperor Lê Lǫi for his magic sword.'
  },
  // location 10
  {place: "Mount Roraima",
  image: "mountRoraima.jpg",
  continentFormal: "Asia",
  continent: 'asia',
  description: 'Mount Roraima is a 31 square kilometer summit with 400 meter cliffs that serves as a triple border point for Venezuela, Brazil, and Guyana. It is over 2 billion years old, making it one of the oldest geological formations.'
  },
];

//change elements before selection

function updateLocation() {
  $('.description').hide();
  $('.rightOrWrong').hide();
  $('#place').html(locations[locationNumber].place);
  $('img').attr('src', locations[locationNumber].image);
  $('.rightOrWrong').html('You are not correct. ' + locations[locationNumber].place + ' is located in ' + locations[locationNumber].continentFormal + '.');
  answer = locations[locationNumber].continent;
}

function handleChoice() {
  $('.continent').on('click', function (){
    if (locationNumber < 10) {
      tries++;
    }
    var selectedAnswer = $(this).attr('id');
    if (selectedAnswer==answer){
      right++;
      $('.rightOrWrong').html('You are correct! ' + locations[locationNumber].place + ' is located in ' + locations[locationNumber].continentFormal + '.');
      var currentBoxIdentifier = locationNumber + 1;
        currentBox = $(document.getElementById(currentBoxIdentifier));
      $(currentBox).css('background-color','#336633');
    } else {
        var currentBoxIdentifier = locationNumber + 1;
        currentBox = $(document.getElementById(currentBoxIdentifier));
        $(currentBox).css('background-color','#880000');
    }
  score(right,tries);
  // $('h2:first-child').hide();
  $('.place').html(locations[locationNumber].place);
  $('.continentChoices').hide();
  $('.description').html('DESCRIPTION: ' + locations[locationNumber].description);
  $('.description').show();
  $('.rightOrWrong').show();
  continueButton();
  });
}

function continueButton() {
    if (locationNumber < 9) {
      $('.next').show();
    } else {
      console.log('be ready');
      console.log(locationNumber);
      $('.next').html('Reset');
      $('.next').show();
    }
}

function updateScreen() {
  $('.next').on('click', function (){
    if ($('.next').html()==='Reset') {
      console.log('it is');
      location.reload();
    } else {
      locationNumber++;
      colorBox(locationNumber);
    }
    // $('h2.where').show();
    $('.continentChoices').show();
    // $('h2:first-child').show();
    $('.next').hide();
    updateLocation();
});

//color current and completed boxes
function colorBox() {
  var currentBoxIdentifier = locationNumber + 1;
  var currentBox = $(document.getElementById(currentBoxIdentifier));
  $(currentBox).css('background-color','#CC9999');
}
}
