var radius, circle, col, gap, clockwise, xoff, xincrement, dialNum;

var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = 0;
  radius = 100;
  gap = 10;
  clockwise = true;
  xoff = 0;
  xincrement = 0.005;
  dialNum = 0;

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
  col = map(noise(3 * xoff), 0, 1, 25, 255);
  background(175, col);

  displayCircle();
  update();

  circle.display();
  circle.move();

  dial();
}

/** 
 * This function displays the circle in the center that forms the background for the 'dial'.
 */
function displayCircle() {
  noStroke();
  strokeWeight(1);
  fill(0, 190, 255);
  ellipse(width / 2, height / 2, 2 * radius, 2 * radius);
}


/** 
 * This function updates the radius for the points/dots in the 'dial'. Also, it controls the universal radius.
 */
function update() {
  radius = map(noise(.5 * xoff), 0, 1, 50, 200);
  xoff += xincrement;

  for (var j = 0; j < points.length; j++) {
    points[j].update(radius);
  }
}

/** 
 * This function controls the number of dot/points on the screen. It is called 'dial' because it looks like a dial controlling some variable.
 */
function dial() {
  dialNum = round(map(noise(20 * xoff), 0, 1, 0, 35));

  if (dialNum > points.length) {
    for (var i = 0; i < dialNum - points.length; i++) {
      points.push(new Circle(width / 2, height / 2, circle.start + radians(gap), radius, clockwise));
      gap = gap + 10;
    }
  } else if (dialNum < points.length) {
    gap = gap - (10 * (points.length - dialNum));
    points.splice((points.length) - (points.length - dialNum), points.length - dialNum);
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


/*  Comments for self
 *  @param {number} radius      This the universal radius that determines 
 *  @param {number} xoff        This is the variable for the offset of the noise function being used
 *  @param {number} xincrement  This increments the offset to move along the graph 
 *
 *  @param {number} dialNum   This is the number of the dots/points being drawn to the screen
 *  @param {number} gap       This adds a gap between two dots
 */