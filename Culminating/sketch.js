//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)
//Linnaeus would be proud
//kingdom, phylum, class, order, family, genus, species.

var table;
var organisms = [];
var letBegin = false;
var visualization;

function preload() {
  //table = loadTable("taxonomy-search-1398436937824.csv", "csv", "header");
  var tempArray = loadJSON("algae.json", intoArray); //Need intoArray because I don't get an array otherwise
}

function intoArray(tempArray) {
  var number = countProps(tempArray);
  for (var i = 0; i < number; i++) {
    organisms.push(tempArray[i]);
  }
  console.log("done array: " + millis());
  visualization = new Bubble(organisms); //FUTURE ERROR ALERT: this could give me problems; let's try it
  //sortArrayObjects(organisms, "kingdom");
  //console.log("done sorting: " + millis());
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