function Circle(x, y, start, radius, clockwise, change) {
  this.x = x; //why do we need this ? we could use x directly where it is needed
  this.y = y;
  this.start = start;
  this.radius = radius;
  this.change = change;
  this.clockwise = clockwise;

  this.display = function() {
    noFill();
    stroke(255,255,0);
    strokeWeight(10);
    arc(this.x, this.y, 2 * this.radius, 2 * this.radius, this.start, this.start + radians(1));
  }

  this.move = function() {
    //this.start = this.start + radians(1); 
    //why doesn't it automatically assume that start refers to its own variable
    if (this.clockwise) {
      this.start = this.start + radians(1);
    } else {
      this.start = this.start - radians(1);
    }

    if (this.radius > 200 || this.radius < 50) { //mouseIsPressed
      this.change = this.change * -1;
    }
    this.radius = this.radius + this.change;
  }
  
  this.rotation= function(){
    this.clockwise = !this.clockwise;
  }
}



/*function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};

*/