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

/**
 * This function takes the array and uses Binary search on it
 * @param  {array}  arr  This is the array to be searched
 * @param  {number} i    This is what we are looking for
 * @return {number}      The index which matches x or -1 if no match
 */
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

/**
 * In javascript there are array-like objects. They don't have ".length" property. This function calculates the length for us. 
 * @param  {object}  obj  The array-like object
 * @return {number}       The length of the array-like object
 */
function countProps(obj) {
  var count = 0;
  for (var p in obj) {
    obj.hasOwnProperty(p) && count++;
  }
  return count;
}