function Fireworks(location, Endlocation, colour) {
  this.velocity = -100;
  this.endLocation = location;
  this.location = location;
  this.gravity = 9.8;
  this.radius = random(7, 14);

  this.display = function() {
    fill(20, 0, 0);
    stroke(40, 0, 0);
    strokeWeight(5);
    ellipse(location.x, location.y, 2 * radius, 2 * radius);
  }

  this.move = function() {

  }

  this.run = function() {
    this.display()
    this.move();
  }
}