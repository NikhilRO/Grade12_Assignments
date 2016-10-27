var story = [];
var img;

function preload() {
  //story = loadStrings('rhesus.txt');
  img = loadImage("image.jpeg");
}

function setup() {
  // console.log(story.length);
  createCanvas(windowWidth, windowHeight);

  image(img, 0, 0, windowWidth, windowHeight);

  noCursor();
}

function draw() {
  //ellipse(width/2, height/2, 50, 50);
}

// .split .toChar