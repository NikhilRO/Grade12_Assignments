var story = [];
var storyWords;
var previousWidth, lineNumber;
var img;

function preload() {
  story = loadStrings('rhesus.txt');
  img = loadImage("image.jpeg");
}

function setup() {
  previousWidth = 0
  lineNumber = 0;

  storyWords.push(split(story[i]," ");
  console.log(storyWords.length);

  //console.log(storyWords.length);
  createCanvas(windowWidth, windowHeight);


  image(img, 0, 0, windowWidth, windowHeight);

  for (var i = 0; i < storyWords.length; i++) {
    text(storyWords[i], previousWidth, lineNumber * 10);
    previousWidth += textWidth(storyWords[i]) + 2;
    if (previousWidth > windowWidth) { //CAN I USE WIDTH?
      previousWidth = 0;
      lineNumber++;
    }
  }

 // noCursor();

}

function draw() {
  //ellipse(width/2, height/2, 50, 50);
}

// .split .toChar