function Fireworks(location, endLocation, radius, moveVector, attracted) {
  this.velocity = -100;
  this.endLocation = endLocation;
  this.location = location;
  this.gravity = createVector(0, 0.098);
  this.radius = radius;
  this.moveVector = moveVector;
  this.attracted = attracted || false;
  this.time = 0;
  this.attractiveForce;
  this.distance;
  this.emanate = [];

  this.display = function() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);

    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
    if (frameCount % 3 === 0) {
      this.emanate.push(new Sparkles(this.location.copy()));
    }
    if (frameCount % 15 === 0) {
      this.emanate.push(new Sparkles(this.location.copy(), random(10, 30)));
    }
    for (var i = 0; i < this.emanate.length; i++) {
      this.emanate[i].display();
      if (this.emanate[i].diappearanceCheck()) {
        this.emanate.splice(i, 1);
      }
    }


  }

  this.move = function() {
    this.time++;

    if (this.attracted && (this.time >= 60)) {
      this.attractiveForce = endLocation.copy();
      this.attractiveForce.sub(location);

      this.distance = this.attractiveForce.mag();
      this.distance = constrain(this.distance, 1, 50);

      this.attractiveForce.normalize();
      this.attractiveForce.mult(this.distance * this.distance / 600);

      this.location.add(this.attractiveForce);
    } else {
      this.location.add(this.moveVector);
      if (this.attracted) {
        this.moveVector.add(this.gravity);
      }
    }
  }

  this.run = function() {
    this.display()
    this.move();
  }
}