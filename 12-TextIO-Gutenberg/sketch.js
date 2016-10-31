var story = [];
var storyWords = [];
var storyChar = [];
var colImage = [];
var previousWidth, lineNumber;
var img, bPrev;

function preload() {
  story = loadStrings('rhesus.txt');
  img = loadImage("checkeredFloor.png");
}

function setup() {
  previousWidth = 0
  lineNumber = 0;
  bPrev = 0;
  for (var j = 500; j < story.length - 100; j++) {
    var tempArray = splitTokens(story[j], " \-\?!*_,.");
    for (var k = 0; k < tempArray.length; k++) {
      storyWords.push(tempArray[k].toLowerCase());
    }
  }

  for (var l = 100; l < storyWords.length; l++) {
    var tempArray2 = split(storyWords[l], "");
    for (var m = 0; m < tempArray2.length; m++) {
      storyChar.push(tempArray2[m].toLowerCase());
    }
  }


  // console.log(story.length);
  // console.log(storyWords.length);
  console.log(storyChar.length);

  createCanvas(500, 500);

  //image(img, 0, 0, windowWidth, windowHeight);
  img.resize(500, 500); //windowWidth, windowHeight);
  img.loadPixels();
  for (var a = 0; a < img.height; a += 8) {
    for (var b = 0; b < img.width; b += textWidth(storyChar[a * img.width + bPrev])) {
      colImage.push(color(img.pixels[4 * (b + a * img.width)], img.pixels[4 * (b + a * img.width) + 1], img.pixels[4 * (b + a * img.width) + 2]));
      bPrev++;
    }
    bPrev = 0;
    //break;
  }
  img.updatePixels();
  console.log(colImage.length);

  for (var i = 0; i < colImage.length; i++) {
    fill(colImage[i]);
    text(storyChar[i], previousWidth, lineNumber * 8);
    previousWidth += textWidth(storyChar[i])+1;
    if (previousWidth > windowWidth) { //CAN I USE WIDTH?
      previousWidth = 0;
      lineNumber++;
    }
  }


  // noCursor();

}

function draw() {}

/* Comment of self
//prints words
  for (var i = 0; i < storyWords.length; i++) {
    textSize(8);
    text(storyWords[i], previousWidth, lineNumber * 8);
    previousWidth += textWidth(storyWords[i]) + 2;
    if (previousWidth > windowWidth) { //CAN I USE WIDTH?
      previousWidth = 0;
      lineNumber++;
    }
  }
  */