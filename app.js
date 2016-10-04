'use strict';

//set up data

// var picZero = './img/bag.jpg';
// var picOne = './img/banana.jpg';
// var picTwo = './img/bathroom.jpg';
// var picThree = './img/boots.jpg';
// var picFour = './img/breakfast.jpg';
// var picFive = './img/bubblegum.jpg';
// var picSix = './img/chair.jpg';
// var picSeven = './img/cthulhu.jpg';
// var picEight = './img/dog-duck.jpg';
// var picNine = './img/dragon.jpg';
// var picTen = './img/pen.jpg';
// var picEleven = './img/pet-sweep.jpg';
// var picTwelve = './img/scissors.jpg';
// var picThirteen = './img/shark.jpg';
// var picFourteen = './img/sweep.png';
// var picSixteen = './img/unicorn.jpg';
// var picSeventeen = './img/usb.gif';
// var picEighteen = './img/water-can.jpg';
// var picNinteen = './img/wine-glass.jpg';

//var allImages = [];
var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
//var inUse = [];
//var clearImgArray [];
var imageWrapper = document.getElementById('wrapper');

function Image(name, filepath) {
  this.name = name;
  this.filePath = filepath;
  this.numberDisplayed = 0;
  this.timesCliked = 0;
}


new Image('bag', ./img/bag.jpg);
new Image('banana', ./img/banana.jpg);
new Image('bathroom', ./img/bathroom.jpg);
new Image('boots', ./img/boots.jpg);
new Image('breakfast', ./img/breakfast.jpg);
new Image('bubblegum', ./img/bubblegum.jpg);
new Image('chair', ./img/chair.jpg);
new Image('cthulhu', ./img/cthulhu.jpg);
new Image('dog-duck', ./img/dog-duck.jpg);
new Image('dragon', ./img/dragon.jpg);
new Image('pen', ./img/pen.jpg);
new Image('pet-sweep', ./img/pet-sweep.jpg);
new Image('scissors', ./img/scissors.jpg);
new Image('shark', ./img/shark.jpg);
new Image('sweep', ./img/sweep.png);
new Image('unicorn', ./img/unicorn.jpg);
new Image('usb', ./img/usb.gif);
new Image('water-can', ./img/water-can.jpg);
new Image('wine-glass', ./img/wine-glass.jpg);

//Define Actions

function randomNumberGenerator () {
  var numberOfPicsLength = 19;
  return Math.floor(Math.random() * numberOfPicsLength + 1);
}

imageNames.push(randomNumberGenerator());
imageNames.push(randomNumberGenerator());

while (imageNames[1] === imageNames[0]) {
  console.log(imageNames, 'No duplicates between first and second picture');
  imageNames[1] = randomNumberGenerator();
}
imageNames.push(randomNumberGenerator());

while (imageNames[2] === imageNames[0]) {
  console.log(imageNames, 'No duplicates between first and third picture');
  imageNames [2] = randomNumberGenerator();
}

while (imageNames[2] === imageNames[1]) {
  console.log(imageNames, 'No dupicates between second and third picture');
  imageNames[2] = randomNumberGenerator();
}
console.log(imageNames);

//+++++++++++++++++++++++++++++++++++++++++
//dispay 1st picture

function displayFirstPic () {
  var firstPic = document.createElement('first_pic');
  firstPic.appendChild(imageWrapper)



}
//Kenneth function

// function randomNumberGenerator () {
//   var choiceOne = Math.floor(Math.random() * 19) + 1;
//   var choiceTwo = Math.floor(Math.random() * 19) + 1;
//   var choiceThree = Math.floor(Math.random() * 19) + 1;
//
// pictureOne = imgArray[choiceOne]
//
// console.log (pictureOne);
// }
//
// randomNumberGenerator();












//Execute Actions
