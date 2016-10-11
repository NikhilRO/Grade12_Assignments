var blast, loadDestinations;
var finalDestination= [];


function setup() {
  createCanvas(windowWidth,windowHeight);
  blast= false;
  loadDestinations= false;
}

function draw() {
  
  
}

function mouseDragged(){
  loadDestinations= true;
}
function mouseReleased(){
  loadDestinations= false;
}

function destinations(){
  if(loadDestinations && frameCount%60===0){
    finalDestination.push(mouseX); //how to push vectors into them 
  }
}