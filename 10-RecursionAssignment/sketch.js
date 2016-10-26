var radius, circle, col, gap;
var number = 100;
var sequence = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 250);


  sequence.splice(0, sequence.length);
  for (var i = 0; i < number; i++) {
    sequence.push(geometricSequence(number - i, 20, 1.05));
  }
  
  translate(width / 2, height / 2);
  crack(number);
}



/** 
 * This function uses recursion to create lines in the program to give the impression of the top view of a frozen mountain/structure
 * @param {number} n     This number tells the program how many lines it has to create
 */
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

/** 
 * This function uses recursion to create geometric sequences which are stored in the array sequence[]
 * @param {number}  n  The term which we are looking for 
 * @param {number}  a  First term of the sequence
 * @param {number}  r  Common ratio of the sequence
 */
function geometricSequence(n, a, r) {
  if (n === 1) {
    return a;
  }
  if (n > 1) {
    return r * geometricSequence(n - 1, a, r);
  }
}