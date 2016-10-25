var radius, circle, col, gap, clockwise, xoff, xincrement, dialNum, startAngle;
var number = 100;
var points = [];
var sequence = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = 0;
  radius = 30;
  gap = 10;
  clockwise = true;
  xoff = 0;
  xincrement = 0.005;
  dialNum = 0;
  startAngle = 0;

  // circle = {
  //   x: width / 2,
  //   y: height / 2,
  //   start: radians(0),
  //   display: function() {
  //     noFill();
  //     stroke(200, 0, 50);
  //     strokeWeight(10);
  //     arc(circle.x, circle.y,  radius,  radius, circle.start, circle.start + radians(1));
  //   },
  //   move: function() {
  //     if (clockwise) {
  //       circle.start = circle.start + radians(1);
  //     } else {
  //       circle.start = circle.start - radians(1);
  //     }
  //   }
  // };
}

function draw() {
  col = map(noise(3 * xoff), 0, 1, 25, 255);
  background(135, 206, 250, col);

  displayCircle();
  update();

  // circle.display();
  // circle.move();
  push();
  translate(width / 2, height / 2);
  rotate(radians(startAngle));
  pop();

  //  dial();
  sequence.splice(0, sequence.length);
  for (var i = 0; i < number; i++) {
    sequence.push(geometricSequence(number - i, 20, 1.05));
  }
  console.log(sequence);
  //push();
  // translate(width / 2, height / 2);
  // waves(5);
  // pop();

  push()
  translate(width / 2, height / 2);
  crack(number);
  pop();

  // for (var j = 0; j < points.length; j++) {
  //   points[j].move();
  //   points[j].display();
  // }
}

/** 
 * This function displays the circle in the center that forms the background for the 'dial'.
 */
function displayCircle() {

  noStroke();
  strokeWeight(1);
  fill(0, 190, 255);
  //ellipse(width / 2, height / 2, radius / 2, radius / 2);
}


/** 
 * This function updates the radius for the points/dots in the 'dial'. Also, it controls the universal radius.
 */
function update() {
  if (clockwise) {
    startAngle = startAngle + radians(1);
  } else {
    startAngle = startAngle - radians(1);
  }

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
      points.push(new Circle(width / 2, height / 2, startAngle + radians(gap), radius, clockwise));
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

function crack(n) {
  stroke(255);
  strokeWeight(4);
  line(0, 0, 0, -sequence[n - 1]);
  translate(0, -sequence[n - 1]);
  if (n > 1) {
    push();
    rotate(radians(64));
    crack(n - 1);
    pop();

  }

}

function waves(n) {

  if (n > 1) {
    translate(0, -sequence[n - 1]);
    rotate(radians(64));
    points.push(new Circle(0, 0, startAngle, radius + sequence[n - 1], clockwise));
    waves(n - 1);
  }

}


function geometricSequence(n, a, r) {
  if (n === 1) {
    return a;
  }
  if (n > 1) {
    return r * geometricSequence(n - 1, a, r);
  }
}

function fractalTree(n) {
  console.log(-sequence[n - 1]);
  line(0, 0, 0, -sequence[n - 1]);
  translate(0, -sequence[n - 1]);

  //What is happening?
  if (n > 1) {

    push();
    rotate(radians(32));
    fractalTree(n - 1);
    pop();

    push();
    rotate(-radians(32));
    fractalTree(n - 1);
    pop();
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
 *  @param {number} dialNum   This is the number of the dots/points being drawn to the screen
 *  @param {number} gap       This adds a gap between two dots
 */