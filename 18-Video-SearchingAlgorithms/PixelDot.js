function PixelDot(red, green, blue, alpha) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;

  /**
   * Displays the block on the screen
   */
  this.returnColor = function() {
    return color(this.red, this.green, this.blue);
  }
  
}