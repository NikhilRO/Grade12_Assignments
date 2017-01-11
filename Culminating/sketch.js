//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)
//Linnaeus would be proud
//kingdom, phylum, class, order, family, genus, species.

var table;
var organisms = [];
var letBegin = false;
var visualization;

function preload() {
  var tempArray = loadJSON("algae.json", intoArray);
}

function intoArray(tempArray) {
  createCanvas(4000/2,3000/2)//windowWidth, windowHeight); //NEED A BETTER WAY TO NAVIGATE
  var number = countProps(tempArray);
  for (var i = 0; i < number; i++) {
    organisms.push(tempArray[i]);
  }
  console.log("Done array: " + millis());
  visualization = new Bubble(organisms, 0, "Let's begin"); //FUTURE ERROR ALERT: this/[organisms] could give me problems; let's try it
  visualization.initialization(createVector(width / 2, height / 2), min(windowWidth,windowHeight)/2);

}

function setup() {
  table = undefined;
  console.log("Setup:" + millis());
}

function mousePressed() {
  visualization.incomingPressed(createVector(mouseX, mouseY));
}

function draw() {
  background(0);
  visualization.decide();
}


function countProps(obj) {
  var count = 0;
  for (var p in obj) {
    obj.hasOwnProperty(p) && count++;
  }
  return count;
}