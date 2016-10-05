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
//
// imageNames.push(randomNumberGenerator());
// imageNames.push(randomNumberGenerator());
//
// while (imageNames[1] === imageNames [0] || previousShown[0] === imageNames[1] || imageNames[1] === previousShown[1] || imageNames[1] === previousShown[2]) {
//   console.log(imageNames, 'No duplicates between first and second picture');
//   imageNames[0] = randomNumberGenerator();
// }
// imageNames.push(randomNumberGenerator());
//
// while (imageNames[2] === imageNames[0]) {
//   console.log(imageNames, 'No duplicates between first and third picture');
//   imageNames [1] = randomNumberGenerator();
// }
//
// while (imageNames[2] === imageNames[1]) {
//   console.log(imageNames, 'No dupicates between second and third picture');
//   imageNames[2] = randomNumberGenerator();
// }
// console.log(imageNames);

//Execute Actions
//+++++++++++++++++++++++++++++++++++++++++
//dispay pictures

function displayPics() {
  //console.log('displayPics');
  //var firstPic = document.getElementById('first_pic');
  var leftPic = randomNumberGenerator();

  while (leftPic === previousShown[0] || leftPic === previousShown[1] || leftPic === previousShown[2]) {
    leftPic = randomNumberGenerator();
  }

  //console.log('leftPic: ', leftPic);
  left.src = allImages[leftPic].filePath;

  var centerPic = randomNumberGenerator();

  while (centerPic === previousShown[0] || centerPic === previousShown[1] || centerPic === previousShown[2] || centerPic === leftPic)  {
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

displayPics();

var wrapperEl = document.getElementById('wrapper');
wrapperEl.addEventListener('click' , eventHandlerClick);

var clickCounter = 0;
function eventHandlerClick (event) {
  console.log('event handle click', event);
  clickCounter += 1;
  console.log(clickCounter, 'total clicks');
  var choice = event.target.id;
  console.log('allImages: ', allImages);
//   for (var i = 0; i < allImages.length; i++){
//     if(allImages[i].name === choice){
//       allImages[i].timesClicked += 1;
//       console.log(allImages[i].name + ' has ' + allImages[i].timesClicked + 'clicks');
//     }
//
// //finds out which pictures were clicked
// //converts from 'leftPic, centerPic, rightPic' to actual image name
// //increases that events timesClicked by 1
// //calls displayPics to reload wrapper with 3 new images
//
//   }

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

}


function displayList() {
  var resultsList = document.getElementById('resultsList');
  console.log('resultsList', resultsList);
  resultsList.innerHTML = '';
  for (var i = 0; i < allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allImages[i].name + ' has been selected ' + allImages[i].timesClicked + ' times';
    resultsList.appendChild(liEl);

  }
}

//++++++++++++++++++++++++++++++++++++++++++
//CHART

function drawChart() {
  var canvas = document.getElementById('image-chart');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.
  }
}




// Jed function
// function randomImgs() {
//    var images = [];
//    for (var i = 0; i < numImgs; i++) {
//        if (imgCache.length <= 13) {
//            imgCache = imgArr.slice(0);
//        }
//        var index = Math.floor(Math.random() * imgCache.length);
//        var random = imgCache[index];
//        console.log('random', random.id);
//        imgCache.splice(index, 1);
//        console.log('imgCache', imgCache.length);
//        images.push(random);
//    }
//    return images;
// }
//
// external variables
//
// var imgArr = [];
// var imgCache = imgArr.slice(0);
