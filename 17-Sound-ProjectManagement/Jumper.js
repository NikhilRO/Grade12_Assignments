function Jumper(location) {
  this.location = location;
  //this.colour = definitions;
  this.gravity = createVector(0, .098);
  this.velocity = createVector(0, -8);
  this.inContact = false;

  this.move = function() {
    this.velocity.add(this.gravity);
    //if (this.contact) { //JUMPs
//this.velocity.y -= 8;
    //}
    this.location.add(this.velocity);
  }

  /**
   * Displays the characters on the screen
   * @param {float} centerX    Gives the x location of the center of the circle that displays the text
   * @param {float} centerY    Gives the y location of the center of the circle that displays the text
   */
  this.display = function() {
    stroke(255, 0, 0);
    strokeWeight(100);
    point(this.location.x, this.location.y);
  }

  this.contact = function() {
    this.inContact
  }
}