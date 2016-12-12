function Word(word, relatedWords, phrases, definitions) {
  this.word = word;
  this.definitions = definitions;
  this.relatedWords = relatedWords;
  this.phrases = phrases;
  this.giantArray = [];

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

  this.toChar = function() {
    this.relatedWords = split(this.relatedWords.join(" ").toLowerCase(), /[\d\W\_]+/);
    this.phrases = split(this.phrases.join(" ").toLowerCase(), /[\d\W\_]+/);
    this.definitions = split(this.definitions.join(" ").toLowerCase(), /[\d\W\_]+/);

    this.relatedWords = split(this.relatedWords.join(""), "");
    this.phrases = split(this.phrases.join(""), "");
    this.definitions = split(this.definitions.join(""), "");
  }

  this.display = function(centerX, centerY) {
    this.giantArray = this.relatedWords.concat(this.phrases.concat(this.definitions));

    fill(0);
    var angle = 0;
    var radius = 1;
    push();
    translate(centerX, centerY);
    for (var i = 0; i < this.giantArray.length; i++) {
      text(this.giantArray[i], (radius * Math.cos(radians(angle))), (radius * Math.sin(radians(angle))));
      angle  +=  5;
      radius += .15;
    }
    pop();
  }
}