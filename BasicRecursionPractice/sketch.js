var sequence = [];
var number = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < number; i++) {
    sequence.push(geometricSequence(number - i, 20, 1.5));
  }
  console.log(sequence);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  fill(255);
  translate(width / 2, height / 2);
  fractalTree(number);
  noLoop();
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
    fractalTree(2);
    pop();
  }

}