/**
 * This class/object represents the jumper which jumps on the blocks.
 * @class
 * @constructor
 * @param {vector object}  location        The vector location of the jumper
 * @param {image }         person          The image to represent the jumper
 */
function Jumper(location, person) {
  this.location = location;
  this.gravity = createVector(0, .098);
  this.time = 0;
  this.velocity = createVector(0, -8);
  this.movingUp = true;
  this.movingDown = true;
  this.person = person;

  /**
   * Moves the block on the screen
   */
  this.move = function() {
    if (this.movingUp) {
      this.velocity.add(this.gravity);
      this.location.add(this.velocity);
      if (this.velocity.y >= 1) {
        this.movingUp = false;
        this.movingDown = true;
      }
    }
    if (this.movingDown) {
      this.location.y += 2;
    }
    //this.velocity.add(this.gravity);
    // if (this.inContact) { //&& (abs(this.timeStart-millis) > 100)) { //JUMPs
    //   this.velocity.y -= 8;
    //   this.inContact = false;
    // }
    // this.location.add(this.velocity);
  }

  /**
   * Displays the jumper on the screen
   */
  this.display = function() {
    // stroke(255, 0, 0);
    // strokeWeight(100);
    // point(this.location.x, this.location.y);
    imageMode(CENTER);
    image(this.person, this.location.x, this.location.y);
  }

  /**
   * helps to determine if the jumper contacted the block leading to a jump
   */
  this.contact = function() {
    if (this.movingDown) {
      this.movingUp = true;
      this.movingDown = false;
      if (this.location.y > height / 2 + height / 32) {
        this.velocity = createVector(0, -10);
      } else {
        this.velocity = createVector(0, -3);
      }
      return true;
    } else {
      return false;
    }
  }
}