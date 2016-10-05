'use strict';

//set up data
var allImages = [];
var previousShown = [];
//var currentShown = [];

//var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

//var imageWrapper = document.getElementById('wrapper');  need to create click outside pic error message
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var wrapperEl = document.getElementById('wrapper');
var button = document.getElementById('button');
var clickCounter = 0;

function Image (name, filePath) {
  this.name = name;
  this.filePath = 'img/' + name + '.jpg';
  this.views = 0;
  this.timesClicked = 0;
  allImages.push(this);
}

new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulhu', 'img/cthulhu.jpg');
new Image('dog-duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet-sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('unicorn', 'img/unicorn.jpg');
new Image('usb', 'img/usb.gif');
new Image('water-can', 'img/water-can.jpg');
new Image('wine-glass', 'img/wine-glass.jpg');

//console.log('allImages', allImages);
//Define Actions

// for (var i = 0; i < imageNames.length; i++) {
//   allImages.push(new Image(imageNames[i]));
// }

function randomNumberGenerator () {
  return Math.floor(Math.random() * allImages.length);
}


//Execute Actions
//+++++++++++++++++++++++++++++++++++++++++
//dispay pictures

function displayPics() {
  //console.log('displayPics');

  var leftPic = randomNumberGenerator();

  while (leftPic === previousShown[0] || leftPic === previousShown[1] || leftPic === previousShown[2]) {
    leftPic = randomNumberGenerator();
  }

  //console.log('leftPic: ', leftPic);
  left.src = allImages[leftPic].filePath;

  var centerPic = randomNumberGenerator();

  while (centerPic === previousShown[0] || centerPic === previousShown[1] || centerPic === previousShown[2] || centerPic === leftPic) {
    centerPic = randomNumberGenerator();

  }
  //console.log('centerPic: ', centerPic);
  center.src = allImages[centerPic].filePath;

  var rightPic = randomNumberGenerator();

  while (rightPic === previousShown[0] || rightPic === previousShown[1] || rightPic === previousShown[2] || rightPic === leftPic || rightPic === centerPic) {
    rightPic = randomNumberGenerator();

  }
  //console.log('rightPic: ', rightPic);
  right.src = allImages[rightPic].filePath;

  // reset previousShown fr next time
  previousShown = [];
  previousShown.push(leftPic);
  previousShown.push(centerPic);
  previousShown.push(rightPic);


}

// function displayList() {
//   var resultsList = document.getElementById('resultsList');
//   console.log('resultsList', resultsList);
//   resultsList.innerHTML = '';
//   for (var i = 0; i < allImages.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = allImages[i].name + ' has been selected ' + allImages[i].timesClicked + ' times';
//     resultsList.appendChild(liEl);
//   }
// }

function eventHandlerClick (event) {
  console.log('event handle click', event);
  clickCounter += 1;
  console.log(clickCounter, 'total clicks');
  var choice = event.target.id;
  console.log('allImages: ', allImages);


//
// //finds out which pictures were clicked
// //converts from 'leftPic, centerPic, rightPic' to actual image name
// //increases that events timesClicked by 1
// //calls displayPics to reload wrapper with 3 new images
//
//

  if(choice === 'left') {
    var leftPic = previousShown[0];
    allImages[leftPic].timesClicked += 1;
  }
  if(choice === 'center') {
    var centerPic = previousShown[1];
    allImages[centerPic].timesClicked += 1;
  }
  if(choice === 'right') {
    var rightPic = previousShown[2];
    allImages[rightPic].timesClicked += 1;
    console.log(allImages[rightPic].timesClicked);
  }

  displayPics();
  if (clickCounter === 25) {
    wrapperEl.removeEventListener('click', eventHandlerClick);
    button.addEventListener('click', drawChart);
    function storeData(){
      var data = JSON.stringify(allImages);
      localStorage.setItem('data', data);
    }
    // displayList(?);
    storeData();
  }

}





//++++++++++++++++++++++++++++++++++++++++++
//CHART
function drawChart() {


  var imgName = [];
  var votes = [];
  for (var i = 0; i < allImages.length; i++) {
    imgName.push(allImages[i].name);
    console.log('heyyyyy' + allImages[i].name);
    votes.push(allImages[i].timesClicked);
  }

  var ctx = document.getElementById('image-chart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: imgName,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(2, 159, 64, 79)',
          'rgba(255, 159, 622, 0.5)',
          'rgba(5, 1, 64, 5)',
          'rgba(255, 100, 64, 0.5)',
          'rgba(100, 159, 64, 0.5)',
          'rgba(255, 159, 64, 30)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 1, 64, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 300, 64, 0.5)',
          'rgba(255, 119, 114, 0.5)',
          'rgba(2, 15, 64, 0.5)',
          'rgba(2, 1, 0, 50)',
        ],
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            stepSize:1,
            max: 8,
            min: 0
          }
        }]
      }
    }
  });
}


if (localStorage.getItem('data')) {
  var stringifiedDataFromLocalStorage = localStorage.getItem('data');
  allImages = JSON.parse(stringifiedDataFromLocalStorage);
  displayPics();

} else {
  displayPics();
}
wrapperEl.addEventListener('click' , eventHandlerClick);
