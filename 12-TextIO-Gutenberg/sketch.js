var story= [];
function preload() {
  story = loadStrings('rhesus.txt');
}

function setup() {
    console.log(story.length);
}

function draw() {
  //ellipse(width/2, height/2, 50, 50);
}

// .split .toChar