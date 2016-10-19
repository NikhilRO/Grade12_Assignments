function Fireworks(location, endLocation, radius, moveVector, attracted) {
  this.velocity = -100;
  this.endLocation = endLocation;
  this.location = location;
  this.gravity = createVector(0, 0.00098);
  this.radius = radius;
  this.moveVector = moveVector;
  console.log(moveVector);
  this.attracted = attracted || false;
  this.time = 0;
  this.attractiveForce;
  this.distance;

  this.display = function() {
    fill(255, 230, 230);
    stroke(255,0,0);
    strokeWeight(2);
    
    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
  }

  this.move = function() {
    this.time++;

    if (this.attracted && (this.time >= 50)) {
      this.attractiveForce = endLocation.copy();
      this.attractiveForce.sub(location);

      this.distance = this.attractiveForce.mag();
      this.distance = constrain(this.distance, 1, 50);

      this.attractiveForce.normalize();
      this.attractiveForce.mult(this.distance / 10);

      this.location.add(this.attractiveForce);
    } else {
      this.location.add(this.moveVector);
      this.moveVector.add(this.gravity);
    }
  }

  this.run = function() {
    this.display()
    this.move();
  }
}