function Sparkles(location, multiply) {
  this.location = location;
  this.multiply = multiply || random(1,10);
  this.location.add((p5.Vector.random2D()).mult(this.multiply)); //HOW TO USE RANDOM SUCH THAT IF GIVES MOST VALUES IN THAT RANGE BUT ONCE IN A WHILE A LARGER VALUE?
  this.disappear= 255;

  this.display = function() {
    fill(220, 20, 60, this.disappear);
    this.disappear -= 6;
    noStroke();
    ellipse(this.location.x, this.location.y, 2.5 ,2.5);
  }
  
  this.diappearanceCheck= function(){
    if(this.disappear <= 10){
      return true;
    } else {
      return false;
    }
  }
  
  
}