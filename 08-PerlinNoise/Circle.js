/**
 * Represents a dot/point/circle.
 * @class
 * @constructor
 * @param {number}  x          The initial x position of the point
 * @param {number}  y          The initial y position of the point
 * @param {number}  start      The initial angle at which the point starts 
 * @param {number}  radius     The initial radius of the circle of which the point forms a part
 * @param {boolean} clockwise  The initial direction of motion the point
 */
function Circle(x, y, start, radius, clockwise) {
  this.x = x;
  this.y = y;
  this.start = start;
  this.radius = radius;
  this.clockwise = clockwise;

  /**
   * Displays the point on the screen
   */
  this.display = function() {
    noFill();
    stroke(255, 255, 0, 100);
    strokeWeight(10);
    arc(this.x, this.y, 2 * this.radius, 2 * this.radius, this.start, this.start + radians(1));
  }

  /**
   * Moves the point in clockwise or anti-clockwise direction
   */
  this.move = function() {
    if (this.clockwise) {
      this.start = this.start + radians(1);
    } else {
      this.start = this.start - radians(1);
    }
  }

  /**
   * This funtion controls the direction of motion of point
   */
  this.rotation = function() {
    this.clockwise = !this.clockwise;
  }

  /**
   * Updates the radius of the circle that the dot is a part of 
   * @param {number} x  It is used to adjust the radius in accordance to the outside universe
   */
  this.update = function(x) {
    this.radius = x;
  }
}


/* Comment for self
*/