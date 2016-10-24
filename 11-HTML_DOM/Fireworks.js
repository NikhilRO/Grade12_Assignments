/**
 * This class/object represents individual flames in the scene of the fireworks.
 * @class
 * @constructor
 * @param {object}  endLocation        The vector location where the flame will end up
 * @param {object}  location           The vector location of the flame
 * @param {number}  radius             The radius of the flame 
 * @param {object}  moveVector         The vector velocity of the flame
 * @param {boolean} attracted          The boolean value to tell the flame if it is attracted to a location. 
 */
function Fireworks(location, endLocation, radius, moveVector, attracted, noSparkles) {
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
  this.noSparkles = noSparkles || false;

    /**
     * Displays the flame on the screen and controls the "sparkles" emanated/emitted by the flame 
     * @see {@link loadSparkles}
     */
    this.display = function() {
      fill(255, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(2);
      ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);

      if (!this.noSparkles) {
        this.loadSparkles();

        for (var i = 0; i < this.emanate.length; i++) {
          this.emanate[i].display();
          if (this.emanate[i].diappearanceCheck()) {
            this.emanate.splice(i, 1);
          }
        }
      }
    }

  /**
   * Creates the "sparkles" emanated/emitted by the flame 
   */
  this.loadSparkles = function() {
    if (frameCount % 3 === 0) {
      this.emanate.push(new Sparkles(this.location.copy()));
    }
    if (frameCount % 15 === 0) {
      this.emanate.push(new Sparkles(this.location.copy(), random(10, 30)));
    }
  }

  /**
   * Moves the flames in two parts. First part involves normal projectile motion. Second part involves motion towards endLocation
   */
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

  /**
   * Helper function that runs the move() and display() functions
   * @see {@link display}
   * @see {@link move}
   */
  this.run = function() {
    this.display()
    this.move();
  }
}


/* Comment for self
 * @var {object}  gravity            The vector force of gravity applied on the flane  
 * @var {number}  time               The time before the flame changes it direction towards endLocation
 * @var {object}  attractiveForce    The vector force experienced by the flame once it starts moving towards its endLocation  
 * @var {number}  distance           The distance to endLocation from current location
 * @var {array}   emanate            An array to contain the "sparkles" that the flame emanates.
 */