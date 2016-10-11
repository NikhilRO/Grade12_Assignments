function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  console.log(fibonacciR(8));
}

//Iterative Method
function fibonacci(n) {
  var last = 1;
  var secondLast = 1;
  var answer = 0;
  for (var i = 0; i < n - 2; i++) {
    answer = last + secondLast;
    secondLast = last;
    last = answer;
  }
  return answer;
}

//Recursive Method
function fibonacciR(n) {
  if (n <= 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}