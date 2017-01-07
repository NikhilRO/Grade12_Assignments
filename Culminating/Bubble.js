//How do I create the desired number of arrays with adequate scope?

function Bubble(arr, listLevel, bubbleName) {
  this.listDown = false
  this.listLevel = listLevel;
  this.nextProperty; //this.listToProperty(listLevel);
  this.bubbleName = bubbleName;

  this.arrayContained = arr;
  this.categories = [];

  this.location = createVector(random(width), random(height));//width / 2, height / 2);
  this.radius = 75;


  this.display = function() {
    fill(255, 255, 0);
    stroke(0, 50);
    ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
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
        this.nextProperty = this.listToProperty(this.listLevel + 1);
        this.sortArrayObjects(); //I could move it earlier
        this.cutArray();
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
      if (this.arrayContained[i - 1][this.nextProperty] != this.arrayContained[i][this.nextProperty]) { // != or !==
        this.categories.push(new Bubble(this.arrayContained.slice(previousIndex, i - 1), this.listLevel + 1, this.arrayContained[i - 1][this.nextProperty]));
        previousIndex = i;
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

  this.sortArrayObjects = function() { //I DON'T GET IT. What is wrong? It works fine from the console. but for some reason you can't call it  
    this.arrayContained.sort(function(a, b) {
      var nameA = a[this.nextProperty].toLowerCase(); //TTI: I need organisms[1].kingdom.toLowerCase() but I can't pass just kingdom
      var nameB = b[this.nextProperty].toLowerCase(); //So, I pass "kingdom" and then use organisms[1]["kingdom"].toLowerCase()
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

/* In chrome for sort
visualization.arrayContained.sort(function(a, b) {
      var nameA = a[visualization.nextProperty].toLowerCase(); //TTI: I need organisms[1].kingdom.toLowerCase() but I can't pass just kingdom
      var nameB = b[visualization.nextProperty].toLowerCase(); //So, I pass "kingdom" and then use organisms[1]["kingdom"].toLowerCase()
      if (nameA < nameB) { //sort string ascending
        return -1
      } else if (nameA > nameB) {
        return 1
      } else {
        return 0
      } //default return value (no sorting)
    })
  

/*
Let's begin:0
kingdom:1 
phylum:2
class:3
order:4 
family:5
*/