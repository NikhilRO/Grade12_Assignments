var startBlast, loadDestinations, explosion;
var finalDestination = [];
var fire = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
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

function draw() {
  background(0,150);
  //console.log(typeof(createVector(0,0)));
  console.log(finalDestination);
  destinations();
  fireworks();
}

function mouseDragged() {
  if (!blast && !explosion) {
    loadDestinations = true;
  }
}

function mouseReleased() {
  if (!blast && !explosion) {
    loadDestinations = false;
  }
}

function destinations() {
  if (loadDestinations && frameCount % 30 === 0) {
    finalDestination.push(createVector(mouseX, mouseY)); //how to push vectors into them
  }
}

function keyTyped() {
  if (key === "B" || "b") { //Is this okay?
    startBlast = true;
  }
  if (key === "R" || "r") {
    reset();
  }
}

function fireworks() {
  if (startBlast) {
    shooterCircle.display();
    shooterCircle.move();

    if (shooterCircle.length.y < (1 / 4) * height) {
      explosion = true;
      startBlast = false;
      for (var i = 0; i < finalDestinations.length; i++) {
        fire.push(Fireworks(shooterCircle.location, finalDestination[i], color(100, 100, 100)));
      }
      shooterCircle = undefined;
    }
  }

  if (explosion) {
    for (var i = 0; i < finalDestinations.length; i++) {
      fire[i].run();
    }
  }
}


function reset() {
  finalDestinations.splice(0, finalDestinations.length);
  blast = false;
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