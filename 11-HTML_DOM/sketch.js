var startBlast, loadDestinations, explosion, shooterCircle, slider, externalVar, externalBoolean;
var finalDestinations = [];
var fire = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  startBlast = false;
  loadDestinations = false;
  explosion = false;

  button = createButton('Make it faster');
  // button.position(19, 19);
  // button.mousePressed(externalBoolean);

  slider = createSlider(0, 50, 5, 1);
  slider.style('width', '99%');

  shooterCircle = new Fireworks(createVector(width / 2, height), createVector(width / 2, (1 / 4) * height), 10, createVector(0, -7));
}

function draw() {
  button.mousePressed(externalBoolean = !externalBoolean);

  externalVariable = slider.value();
  background(0, externalVariable);

  destinations();
  firework();
}

function mouseDragged() {
  if (!startBlast && !explosion) {
    loadDestinations = true;
  }
}

/** 
 * This function helps to load the destinations for the fireworks later. In other words, this function add items to the finalDestinations array
 */
function destinations() {
  if (loadDestinations) {
    finalDestinations.push(createVector(mouseX, mouseY)); //how to push vectors into them
  }
}

function mouseReleased() {
  if (!startBlast && !explosion) {
    loadDestinations = false;
  }
}


function keyTyped() {
  if (!loadDestinations && !explosion && !startBlast) {
    if (key === "B" || key === "b") { //Is this okay?
      startBlast = true;
    }
  }
  if (key === "R" || key === "r") {
    reset();
  }
}

/** 
 * This function helps you run the fireworks in two steps. First step involves the shootingCircle which then explodes after a certain height. After explosions, array containing flames/fireworks is run. 
 */
function firework() {
  if (startBlast) {
    shooterCircle.run();

    if (shooterCircle.location.y < (1 / 4) * height) {
      explosion = true;
      startBlast = false;
      for (var i = 0; i < finalDestinations.length; i++) {
        fire.push(new Fireworks(shooterCircle.location.copy(), finalDestinations[i], 2, (p5.Vector.random2D()).mult(random(2.5, 7.5)), true));
      }
      shooterCircle = undefined;
    }
  }

  if (explosion) {
    for (var j = 0; j < fire.length; j++) {
      fire[j].run();
    }
  }
}

/** 
 * This function helps you reset the program
 */
function reset() {
  finalDestinations.splice(0, finalDestinations.length);
  startBlast = false;
  loadDestinations = false;
  explosion = false;

  shooterCircle = new Fireworks(createVector(width / 2, height), createVector(width / 2, (1 / 4) * height), 10, createVector(0, -7));

  fire.splice(0, fire.length);
}