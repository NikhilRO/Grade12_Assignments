function Fireworks(location, endLocation, radius, moveVector) {
  this.velocity = -100;
  this.endLocation = endLocation;
  this.location = location;
  this.gravity = createVector(0,0.000098);
  this.radius = radius;
  this.moveVector = moveVector || p5.Vector.random2D();

  this.display = function() {
    fill(20, 0, 0);
    stroke(40, 0, 0);
    strokeWeight(5);
    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
  }

  this.move = function() {
    this.location.add(this.moveVector);
    this.moveVector.add(this.gravity);
  }

  this.run = function() {
    this.display()
    this.move();
  }
}