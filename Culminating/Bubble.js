//How do I create the desired number of arrays with adequate scope?

function Bubble(arr) {
  this.listDown = false
  this.listLevel = 1;
  this.arrayContained = arr;
  this.location = createVector();

  this.display = function(inputText) {
    fill(255, 255, 0); //yellow
    stroke(0, 50);
    ellipse(width / 2, height / 2, 300, 300);
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text(inputText, ext, width / 2, height / 2);
    noFill();
    noStroke();
  }

  this.move = function() {

  }
  
  this.decide= function(){
    this.display("Let's begin");
  }

  this.sortArrayObjects = function(arr, property) {
    arr.sort(function(a, b) {
      var nameA = a[property].toLowerCase(); //TTI: I need organisms[1].kingdom.toLowerCase() but I can't pass just kingdom
      var nameB = b[property].toLowerCase(); //So, I pass "kingdom" and then use organisms[1]["kingdom"].toLowerCase()
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