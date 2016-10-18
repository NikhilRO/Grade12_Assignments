function Fireworks(location, endLocation, radius, moveVector) {
  this.velocity = -100;
  this.endLocation = endLocation;
  this.location = location;
  this.gravity = createVector(0,0.00098);
  this.radius = radius;
  this.moveVector = moveVector || (p5.Vector.random2D()).mult(5);

  this.display = function() {
    fill(20, 200, 200);
    stroke(40, 255, 255);
    strokeWeight(5);
    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
  }

this.move = function() {
    // console.log("pre: " + this.moveVector);
    // console.log("pre: " + this.location);
    this.location = (this.location).add(this.moveVector);
    this.moveVector = (this.moveVector).add(this.gravity);
    // console.log("post: " + this.moveVector);
    // console.log("post: " + this.location);
  }

  this.run = function() {
    this.display()
    this.move();
  }
}