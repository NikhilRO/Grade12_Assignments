var startBlast, loadDestinations, explosion, shooterCircle;
var finalDestinations = [];
var fire = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  startBlast = false;
  loadDestinations = false;
  explosion = false;

  shooterCircle = new Fireworks(createVector(width / 2, height), createVector(width / 2, (1 / 4) * height), 40, createVector(0, -5));
}

function draw() {
  background(0);
  destinations();
  firework();
}

function mouseDragged() {
  if (!startBlast && !explosion) {
    loadDestinations = true;
  }
}

function mouseReleased() {
  if (!startBlast && !explosion) {
    loadDestinations = false;
  }
}

function destinations() {
  if (loadDestinations && frameCount % 10 === 0) {
    finalDestinations.push(createVector(mouseX, mouseY)); //how to push vectors into them
  }
}

function keyTyped() {
  if (!loadDestinations) {
    if (key === "B" || key === "b") { //Is this okay?
      startBlast = true;
    }
    if (key === "R" || key === "r") {
      reset();
    }
  }
}

function firework() {
  if (startBlast) {
    shooterCircle.run();

    if (shooterCircle.location.y < (1 / 4) * height) {
      explosion = true;
      startBlast = false;
      //console.log(shooterCircle.location);
      for (var i = 0; i < finalDestinations.length; i++) {
        fire.push(new Fireworks(shooterCircle.location.copy(), finalDestinations[i], random(7, 14)));
      }
      shooterCircle = undefined;
    }
  }

  if (explosion) {
    for (var j = 0; j < fire.length; j++) {
      fire[j].run();
    }
    // if (frameCount % 10 === 1) {
    //   noLoop();
    // }
  }
}


function reset() {
  finalDestinations.splice(0, finalDestinations.length);
  startBlast = false;
  loadDestinations = false;
  explosion = false;

  shooterCircle = new Fireworks(createVector(width / 2, height), createVector(width / 2, (1 / 4) * height), 40, createVector(0, -5));
}