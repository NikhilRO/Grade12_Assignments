function Block(location) {
  this.location = location;
  //this.color = definitions;
  this.velocity = createVector(0, 9.8);
  this.movement = false;

  /**
   * Displays the characters on the screen
   * @param {float} centerX    Gives the x location of the center of the circle that displays the text
   * @param {float} centerY    Gives the y location of the center of the circle that displays the text
   */
  this.display = function() {
    fill(0, 250, 0);
    noStroke();
    ellipse(this.location.x, this.location.y, 100, 20);
  }

  this.move = function() {
    if (this.movement) {
      this.location.add(this.velocity);
    }
  }
  this.moveIt = function() {
    this.movement = true;
  }
  this.stopMove= function(){
    this.movement= false;
  }

  this.checkEdges = function() {
    return (this.location.y >= height);
  }
}