PVector location;
int count;

void settings() {
  size(600, 600);
}  
void setup() {
  
}

void draw() {
  background(255);
  if (count> 0){
  ellipse(location.x ,location.y, 50,50);
  }
  fill(0);
  text(count,width/2, height/2);
}

void mousePressed() {
  count++;
  location= new PVector(mouseX, mouseY);
}