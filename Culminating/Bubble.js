//How do I create the desired number of arrays with adequate scope?
//Are there setup in javascript constructor function?

function Bubble(arr, listLevel, bubbleName) {
  this.listDown = false
  this.listLevel = listLevel;
  this.nextProperty;
  this.bubbleName = bubbleName;

  this.arrayContained = arr;
  this.categories = [];

  this.location; //= createVector(random(width), random(height)); //width / 2, height / 2);
  this.radius; // = 75;
  this.originLoc;

  this.initialization = function(loc, radius, endLine) {
    this.nextProperty = this.listToProperty(this.listLevel + 1);
    this.sortArrayObjects();
    this.location = loc;
    this.radius = radius;
    this.originLoc = endLine;
  }

  this.display = function() {
    fill(255, 255, 0);
    stroke(0, 50);
    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
    if (this.originLoc) {
      stroke(255, 255, 0, 50);
      line(this.location.x, this.location.y, this.originLoc.x, this.originLoc.y);
      noStroke();
    }
    textSize(25);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.bubbleName, this.location.x, this.location.y);
    noFill();
    noStroke();
  }

  this.incomingPressed = function(loc) {
    if (!this.listDown) {
      if (p5.Vector.dist(this.location, loc) < this.radius) {
        this.listDown = true;
        var time = millis();
        this.cutArray();
        this.prepareNext();
        console.log("Time taken to process " + this.nextProperty + " : " + (millis() - time));
      }
    } else {
      for (var i = 0; i < this.categories.length; i++) {
        this.categories[i].incomingPressed(loc);
      }
    }
  }

  this.cutArray = function() {
    var previousIndex = 0;
    for (var i = 1; i < this.arrayContained.length; i++) {
      if (i < this.arrayContained.length - 1) {
        if (this.arrayContained[i - 1][this.nextProperty] != this.arrayContained[i][this.nextProperty]) { // != or !==
          this.categories.push(new Bubble(this.arrayContained.slice(previousIndex, i - 1), this.listLevel + 1, this.arrayContained[i - 1][this.nextProperty]));
          previousIndex = i;
        }
      } else {
        this.categories.push(new Bubble(this.arrayContained.slice(previousIndex, i), this.listLevel + 1, this.arrayContained[i][this.nextProperty]));
      }
    }
  }


  this.listToProperty = function(level) {
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
    } else {
      return "Not valid/exhausted all the options";
    }
  }

  this.prepareNext = function() {
    var angleRotate = 360 / this.categories.length;
    var tempRad = this.radius / 2;
    var centerX = this.location.x;
    var centerY = this.location.y;
    for (var j = 0; j < this.categories.length; j++) {
      var newLocX = (2 * tempRad * Math.cos(radians(angleRotate * j)) + centerX);
      var newLocY = (2 * tempRad * Math.sin(radians(angleRotate * j)) + centerY);
      this.categories[j].initialization(createVector(newLocX, newLocY), tempRad, createVector(centerX, centerY));
    }
  }

  this.move = function() {

  }

  this.decide = function() {
    if (!this.listDown) {
      this.display();
    } else {
      for (var i = 0; i < this.categories.length; i++) {
        this.categories[i].decide();
      }
    }
  }

  this.sortArrayObjects = function() {
    this.arrayContained.sort(function(a, b) {
      var nameA = a[this.nextProperty].toLowerCase();
      var nameB = b[this.nextProperty].toLowerCase();
      if (nameA < nameB) { //sort string ascending
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    }.bind(this))
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