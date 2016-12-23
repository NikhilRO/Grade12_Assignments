var radius, change, circle, col, gap, add, clockwise;

var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = 0;
  radius = 100;
  change = -1;
  gap = 10;
  add = true;
  clockwise = true;

  circle = {
    x: width / 2,
    y: height / 2,
    start: radians(0),
    display: function() {
      noFill();
      stroke(200,0,50);
      strokeWeight(10);
      arc(circle.x, circle.y, 2 * radius, 2 * radius, circle.start, circle.start + radians(1));
    },
    move: function() {
      if (clockwise) {
        circle.start = circle.start + radians(1);
      } else {
        circle.start = circle.start - radians(1);
      }
    }
  };
}

function draw() {

  //col = map(mouseX, 0, windowWidth, 255, 175); //you can even invert the range
  background(175);
  movingCircle();
  circle.display();
  circle.move();

  for (var i = 0; i < points.length; i++) {
    points[i].move();
    points[i].display();
  }
  
}

function movingCircle() {

  noStroke();
  strokeWeight(1);
  fill(0, 190, 255);
  ellipse(width / 2, height / 2, 2 * radius, 2 * radius);


  if (radius > 200 || radius < 50) { //mouseIsPressed
    change = change * -1;
  }

  radius = radius + change;

}

function mousePressed() { //is there an elegant way to do it?
  if (add) {
    points.push(new Circle(width / 2, height / 2, circle.start + radians(gap), radius, clockwise, change));
    gap = gap + 10;
    if (points.length === 35) {
      add = false;
    }
  } else {
    points.splice(points.length - 1, 1);
    if (points.length === 0) {
      add = true;
      gap = 10;
    }
  }
}

function keyTyped() {
  if (key === 'r' || key === 'R') {
    clockwise = !clockwise;
    for (var i = 0; i < points.length; i++) {
      points[i].rotation();
    }
  }

}