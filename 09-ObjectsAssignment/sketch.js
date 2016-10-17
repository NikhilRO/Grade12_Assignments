var startBlast, loadDestinations, explosion;
var finalDestinations = [];
var fire = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  startBlast = false;
  loadDestinations = false;
  explosion = false;
  var v = createVector(width / 2, height);


  //what if we change this to a regular object
  shooterCircle = {
    display: function() {
      fill(200, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(10);
      ellipse(shooterCircle.location.x, shooterCircle.location.y, 140, 140);
    }
  };
  shooterCircle.location = v;
}

function draw() {
  background(0, 150);
  destinations();
  fireworks();
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
  if (loadDestinations && frameCount % 30 === 0) {
    finalDestinations.push(createVector(mouseX, mouseY)); //how to push vectors into them
  }
}

function keyTyped() {
  if (key === "B" || key === "b") { //Is this okay?
    startBlast = true;
  }
  if (key === "R" || key === "r") {
    reset();
  }
}

function fireworks() {
  if (startBlast) {
    shooterCircle.display();
    var v = createVector(0, -5);
    shooterCircle.location.add(v);

    if (shooterCircle.location.y < (1 / 4) * height) {
      explosion = true;
      startBlast = false;
      console.log(shooterCircle.location);
      for (var i = 0; i < finalDestinations.length; i++) {
        fire.push(new Fireworks(shooterCircle.location, finalDestinations[i]));
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


function reset() {
  finalDestinations.splice(0, finalDestinations.length);
  startBlast = false;
  loadDestinations = false;
  explosion = false;

  shooterCircle = {
    location: createVector(width / 2, height),
    display: function() {
      fill(200, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(10);
      ellipse(location.x, location.y, 40, 40);
    },
    move: function() {
      location.add(createVector(0, -5));
    }
  }
}