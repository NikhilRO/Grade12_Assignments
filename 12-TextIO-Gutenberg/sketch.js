var story = [];
var storyWords = [];
var storyChar = [];
var colImage = [];
var previousWidth, lineNumber;
var img, bPrev;

function preload() {
  story = loadStrings('rhesus.txt', textToChar);
  img = loadImage("skull.jpg"); // DSC_0672.JPG //image.jpeg //DSC_0672WhiteBackground.png //Albert_Einstein.png
}

function setup() {
  previousWidth = 0
  lineNumber = 0;
  bPrev = -1;


  createCanvas(1366,768); //1920,1080


  img.resize(width, height); //windowWidth, windowHeight);
  //image(img, 0, 0);

  img.loadPixels();
  for (var a = 0; a < img.height; a += 8) {
    for (var b = 0; b < img.width; b += textWidth(storyChar[bPrev])) {
      colImage.push(color(img.pixels[4 * (b + a * img.width)], img.pixels[4 * (b + a * img.width) + 1], img.pixels[4 * (b + a * img.width) + 2])); //(img.pixels[4 * (b + a * img.width)], img.pixels[4 * (b + a * img.width) + 1], img.pixels[4 * (b + a * img.width) + 2]));
      bPrev++;
    }
  }
  img.updatePixels();

  console.log(story.length);
  console.log(storyWords.length);
  console.log(storyChar.length);
  console.log(colImage.length);

  for (var i = 0; i < colImage.length; i++) {
    fill(colImage[i]); //HOW TO USE THE COLOR FOR EXTREMES ONLY
    text(storyChar[i].bold(), previousWidth, lineNumber * 8); // ADDED BOLD
    previousWidth += textWidth(storyChar[i]);
    if (previousWidth >= width) { //CAN I USE WIDTH?
      previousWidth = 0;
      lineNumber++;
    }
  }
  //noCursor();
}

function draw() {}

/** 
 * This function takes the text/story and converts it into arrays with words and characters
 */
function textToChar() {
  textSize(5);
  for (var j = 100; j < story.length - 100; j++) {
    var tempArray = splitTokens(story[j], " \-\?!*_,.");
    for (var k = 0; k < tempArray.length; k++) {
      storyWords.push(tempArray[k].toLowerCase());
    }
  }

  for (var l = 0; l < storyWords.length; l++) {
    var tempArray2 = split(storyWords[l], "");
    for (var m = 0; m < tempArray2.length; m++) {
      storyChar.push(tempArray2[m].toLowerCase()); //HOW TO CHANGE THE SIZE OF EACH CHARACTER
    }
  }
}

// function resetToDefaultFontSize() {
//   var p = document.getElementsByTagName('div');
//   for(i=0;i<p.length;i++) {
//       p[i].style.fontSize = "12px";
//   }
// }

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
