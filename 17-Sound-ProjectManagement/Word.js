/**
 * This class/object contains words, and their phrases, definitions, and related words. 
 * @class
 * @constructor
 * @param {string}  word              The word that we are interested in
 * @param {array}   relatedWords      This array contains the words that are related to our word of concern
 * @param {array}   phrases           This array contains the phrases that are related to our word of concern
 * @param {array}   definitons        This array contains the defintion that are related to our word of concern
 */
function Word(word, relatedWords, phrases, definitions) {
  this.word = word;
  this.definitions = definitions;
  this.relatedWords = relatedWords;
  this.phrases = phrases;
  this.giantArray = [];

  /**
   * Our API call from Wordnik gives us a ton of information but some information is redundant for us. This function extracts whatever information is useful to us.
   */
  this.extractUseful = function() {
    var tempSplice = this.relatedWords.length;
    for (var i = 0; i < tempSplice; i++) {
      for (var j = 0; j < this.relatedWords[i].words.length; j++) {
        this.relatedWords.push(this.relatedWords[i].words[j]);
      }
    }
    this.relatedWords.splice(0, tempSplice);

    tempSplice = this.phrases.length;
    for (var k = 0; k < tempSplice; k++) {
      this.phrases.push(this.phrases[k].gram1 + " " + this.phrases[k].gram2);
    }
    this.phrases.splice(0, tempSplice);

    tempSplice = this.definitions.length;
    for (var m = 0; m < tempSplice; m++) {
      this.definitions.push(this.definitions[m].text);
    }
    this.definitions.splice(0, tempSplice);
  }

  /**
   * This function takes the array converts it to a string and then divides into individual characters
   */
  this.toChar = function() {
    this.relatedWords = split(this.relatedWords.join(" ").toLowerCase(), /[\d\W\_]+/); //Getting rid of digits and anything not a letter
    this.phrases = split(this.phrases.join(" ").toLowerCase(), /[\d\W\_]+/);
    this.definitions = split(this.definitions.join(" ").toLowerCase(), /[\d\W\_]+/);

    this.relatedWords = split(this.relatedWords.join(""), "");
    this.phrases = split(this.phrases.join(""), "");
    this.definitions = split(this.definitions.join(""), "");
  }

  /**
   * Displays the characters on the screen
   * @param {float} centerX    Gives the x location of the center of the circle that displays the text
   * @param {float} centerY    Gives the y location of the center of the circle that displays the text
   */
  this.display = function(centerX, centerY) {
    this.giantArray = this.relatedWords.concat(this.phrases.concat(this.definitions));

    fill(0);
    var angle = 0;
    var radius = 1;
    push();
    translate(centerX, centerY);
    for (var i = 0; i < this.giantArray.length; i++) {
      text(this.giantArray[i], (radius * Math.cos(radians(angle))), (radius * Math.sin(radians(angle))));
      angle += 5;
      radius += .15;
    }
    pop();
  }
}