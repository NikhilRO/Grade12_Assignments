var radius, circle, col, gap, clockwise, xoff1, xoff2, xincrement1, xincrement2, dialNum;

var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = 0;
  radius = 100;
  gap = 10;
  clockwise = true;
  xoff1 = 0;
  xoff2 = 0;
  xincrement1 = 0.03;
  xincrement2 = 0.03;

  circle = {
    x: width / 2,
    y: height / 2,
    start: radians(0),
    display: function() {
      noFill();
      stroke(200, 0, 50);
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
  col = map(noise(xoff1), 0, 1, 25, 255);
  background(175, col);
  movingCircle();
  circle.display();
  circle.move();
  dial();
}

function movingCircle() {

  noStroke();
  strokeWeight(1);
  fill(0, 190, 255);
  ellipse(width / 2, height / 2, 2 * radius, 2 * radius);

  change = map(noise(xoff1), 0, 1, -1, 1);
  xoff1 += xincrement1;

  radius = radius + change;
  update();

}

function update() {
  for (var j = 0; j < points.length; j++) {
    points[j].update(radius);
  }
}

function dial() {
  dialNum = round(map(noise(xoff1), 0, 1, 0, 35));
  xoff2 += xincrement2;

  if (dialNum > points.length) {
    for (var i = 0; i < dialNum - points.length; i++) {
      points.push(new Circle(width / 2, height / 2, circle.start + radians(gap), radius, clockwise, change));
      gap = gap + 10;
    }
  } else if (dialNum < points.length) {
    points.splice((points.length - 1) - (points.length - dialNum), points.length - dialNum);
    gap = gap - (10 * (points.length - dialNum));
  }

  for (var j = 0; j < points.length; j++) {
    points[j].move();
    points[j].display();
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