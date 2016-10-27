var story = [];
var storyWords = [];
var storyChar = [];
var previousWidth, lineNumber;
var img;

function preload() {
  story = loadStrings('rhesus.txt');
  img = loadImage("image.jpeg");
}

function setup() {
  previousWidth = 0
  lineNumber = 0;
  for (var j = 500; j < story.length - 100; j++) {
    var tempArray = splitTokens(story[j], " -!*_,.");
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


  console.log(story.length);
  console.log(storyWords.length);
  console.log(storyChar.length);

  createCanvas(windowWidth, windowHeight);

  //image(img, 0, 0, windowWidth, windowHeight);

  // for (var i = 0; i < storyWords.length; i++) {
  //   textSize(8);
  //   text(storyWords[i], previousWidth, lineNumber * 8);
  //   previousWidth += textWidth(storyWords[i]) + 2;
  //   if (previousWidth > windowWidth) { //CAN I USE WIDTH?
  //     previousWidth = 0;
  //     lineNumber++;
  //   }
  // }
  for (var i = 0; i < storyChar.length; i++) {
    textSize(8);
    text(storyChar[i], previousWidth, lineNumber * 8);
    previousWidth += textWidth(storyChar[i]) + 12;
    if (previousWidth > windowWidth) { //CAN I USE WIDTH?
      previousWidth = 0;
      lineNumber++;
    }
  }

  // noCursor();

}

function draw() {}