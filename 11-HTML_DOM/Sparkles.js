/**
 * This class/object represents the "sparkles" being emanated from individual flames in the scene of the fireworks.
 * @class
 * @constructor
 * @param {object}  location          The vector location of the flame
 * @param {number}  multiply          The factor by which the location is changed. Determines how far it goes 
 */
function Sparkles(location, multiply) {
  this.location = location;
  this.multiply = multiply || random(1, 10);
  this.location.add((p5.Vector.random2D()).mult(this.multiply));
  this.disappear = 255;

  /**
   * Displays the "sparkles" on the screen
   */
  this.display = function() {
    fill(220, 20, 60, this.disappear);
    this.disappear -= 6;
    noStroke();
    ellipse(this.location.x, this.location.y, 2.5, 2.5);
  }

  /**
   * Displays the "sparkles" on the screen
   * @return {boolean}    It returns true if it has disappeared. 
   */
  this.diappearanceCheck = function() {
    if (this.disappear <= 10) {
      return true;
    } else {
      return false;
    }
  }
}

/* Questions?
//HOW TO USE RANDOM SUCH THAT IF GIVES MOST VALUES IN THAT RANGE BUT ONCE IN A WHILE A LARGER VALUE?
For now created two ways to add the sparkles, one more frequent than the other.
*/

/* Comment for self
 * @var {number}  disappear         The alpha factor determining its transparency
 */