//How do I create the desired number of arrays with adequate scope?

function Bubble(arr, listLevel, bubbleName) {
  this.listDown = false
  this.listLevel = listLevel;
  this.listProperty = listToProperty(listLevel);
  this.bubbleName= bubbleName;

  this.arrayContained = arr;
  this.categories = [];
  this.bubbleContained= [];

  this.location = createVector(width / 2, height / 2);
  this.radius = 150;


  this.display = function(inputText) {
    fill(255, 255, 0);
    stroke(0, 50);
    ellipse(location.x, location.y, 2 * this.radius, 2 * this.radius);
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text(inputText, ext, width / 2, height / 2);
    noFill();
    noStroke();
  }

  this.incomingPressed = function(loc) {
    if (p5.Vector.dist(this.location, loc) < this.radius) {
      this.listDown = true;
    }
  }

  this.cutArray = function() {
    this.sortArrayObjects(this.arrayContained);
  }

  this.listToPropery = function(level) {
    if (level === 1) {
      return "kingdom";
    } else if (level === 2) {
      return "phylum";
    } else if (level === 3) {
      return "clas";
    } else if (level === 4) {
      return "order";
    } else if (level === 5) {
      return "family";
    } else if (level === 0) {
      return "begin";
    }
  }


  this.move = function() {

  }

  this.decide = function() {
    if (!this.listDown) {
      this.display(this.bubbleName);
    }
    
  }

  this.sortArrayObjects = function(arr) {
    arr.sort(function(a, b) {
      var nameA = a[this.listProperty].toLowerCase(); //TTI: I need organisms[1].kingdom.toLowerCase() but I can't pass just kingdom
      var nameB = b[this.listProperty].toLowerCase(); //So, I pass "kingdom" and then use organisms[1]["kingdom"].toLowerCase()
      if (nameA < nameB) { //sort string ascending
        return -1
      } else if (nameA > nameB) {
        return 1
      } else {
        return 0
      } //default return value (no sorting)
    })
  }
}

/*
Let's begin:0
kingdom:1 
phylum:2
class:3
order:4 
family:5
*/