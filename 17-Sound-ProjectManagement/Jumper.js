function Jumper(location, person) {
  this.location = location;
  this.gravity = createVector(0, .098);
  this.time = 0;
  this.velocity = createVector(0, -8);
  this.movingUp = true;
  this.movingDown = true;
  this.person = person;

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
   * Displays the characters on the screen
   * @param {float} centerX    Gives the x location of the center of the circle that displays the text
   * @param {float} centerY    Gives the y location of the center of the circle that displays the text
   */
  this.display = function() {
    // stroke(255, 0, 0);
    // strokeWeight(100);
    // point(this.location.x, this.location.y);
    imageMode(CENTER);
    image(this.person, this.location.x, this.location.y);
  }

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