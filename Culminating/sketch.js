//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)

var table;
var organisms = [];

function preload() {
  //table = loadTable("taxonomy-search-1398436937824.csv", "csv", "header");
  var tempArray = loadJSON("algae.json", intoArray); //Need this because I don't get an array otherwise
}

function intoArray(tempArray) {
  var number = countProps(tempArray);
  for (var i = 0; i < number; i++) {
    organisms.push(tempArray[i]);
  }
  console.log("done array: " + millis());
}

function pushToArray() {
  var number = countProps(table.getObject());
  console.log(number);
  for (var i = 0; i < number; i++) {
    //console.log[1];
    organisms.push(new Organism(table.getObject()[i]));
  }
  console.log("done array: " + millis());
}

function setup() {
  table = undefined;
  console.log("Setup:" + millis());
  //saveJSON(organisms, 'algae.json');
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(0);
  ellipse();
}




//FOR SOME REASON .LENGTH DOES NOT WORK ON table.getObject().length
function countProps(obj) {
  var count = 0;
  for (var p in obj) {
    obj.hasOwnProperty(p) && count++;
  }
  return count;
}

/*Results from run
convert csv into usable objects= just less than 5 minute
30 sec from json without looping

*/