'use strict';

//set up data
var allImages = [];
var previousShown = [];
var currentShown = [];

var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var imageWrapper = document.getElementById('wrapper');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

function Image(name) {
  this.name = name;
  this.filePath = 'img/' + name + '.jpg';
  this.views = 0;
  this.timesCliked = 0;
}


new Image('bag', img/bag.jpg);
new Image('banana', img/banana.jpg);
new Image('bathroom', img/bathroom.jpg);
new Image('boots', img/boots.jpg);
new Image('breakfast', img/breakfast.jpg);
new Image('bubblegum', img/bubblegum.jpg);
new Image('chair', img/chair.jpg);
new Image('cthulhu', img/cthulhu.jpg);
new Image('dog-duck', img/dog-duck.jpg);
new Image('dragon', img/dragon.jpg);
new Image('pen', img/pen.jpg);
new Image('pet-sweep', img/pet-sweep.jpg);
new Image('scissors', img/scissors.jpg);
new Image('shark', img/shark.jpg);
new Image('sweep', img/sweep.png);
new Image('unicorn', img/unicorn.jpg);
new Image('usb', img/usb.gif);
new Image('water-can', img/water-can.jpg);
new Image('wine-glass', img/wine-glass.jpg);

//Define Actions

for (var i = 0; i < imageNames.length; i++) {
  allImages.push(new Image(imageNames[i]));
}

function randomNumberGenerator () {
  var imageNames.length ();
  return Math.floor(Math.random() * imageNames) + 1;
}

imageNames.push(randomNumberGenerator());
imageNames.push(randomNumberGenerator());

while (imageNames[1] === imageNames [0] || previousArray[0] === imageNames[1] || imageNames[1] === previousArray[1] || imageNames[1] === previousArray[2]) {
  console.log(imageNames, 'No duplicates between first and second picture');
  imageNames[0] = randomNumberGenerator();
}
imageNames.push(randomNumberGenerator());

while (imageNames[2] === imageNames[0]) {
  console.log(imageNames, 'No duplicates between first and third picture');
  imageNames [1] = randomNumberGenerator();
}

while (imageNames[2] === imageNames[1]) {
  console.log(imageNames, 'No dupicates between second and third picture');
  imageNames[2] = randomNumberGenerator();
}
console.log(imageNames);

//Execute Actions
//+++++++++++++++++++++++++++++++++++++++++
//dispay pictures

function displayPics () {
  //var firstPic = document.getElementById('first_pic');
var leftPic = randomNumberGenerator(0, allImages.length);
left.src = allImages[leftPic].path;
left.alt = allImages[leftPic].name;
allImages[firstPic].views += 1;

displayFirstPic()


//display list
var picList = document.getElementById('pic list')
  for (var i = 0; i < allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allImages[i].name + 'has been clicked' + allImages[i].clicks + 'times';
    picList.appendChild(liEl);
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
// [8:30]
// external variables
//
// [8:30]
// var imgArr = [];
// var imgCache = imgArr.slice(0);
