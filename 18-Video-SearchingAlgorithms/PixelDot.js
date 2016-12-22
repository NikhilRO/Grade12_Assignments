/**
 * This class/object holds pixels and their colour information
 * @class
 * @constructor
 * @param {float}  red        The red information of the pixel
 * @param {float}  green      The green information of the pixel
 * @param {float}  blue       The blue information of the pixel
 * @param {float}  alpha      The alpha information of the pixel
 */
function PixelDot(red, green, blue, alpha) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;

  /**
   * Returns the colour of the pixel
   * @return {color object}      The colour of the pixel
   */
  this.returnColor = function() {
    return color(this.red, this.green, this.blue);
  }

}