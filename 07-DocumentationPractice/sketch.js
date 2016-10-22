var creatingArrayB, additionB, subtractB, multiplyB, divideB, maximumB, minimumB, reverseArrayB;
var mouseValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatingArrayB = false;
  additionB = false;
  subtractB = false;
  multiplyB = false;
  divideB = false;
  maximumB = false;
  minimumB = false;
  reverseArrayB = false;
}

function draw() {
  background(100);
  textAlign(LEFT, TOP);
  text("( " + mouseX + " , " + mouseY + " )", mouseX + 10, mouseY + 10);
  textDisplay();
}

/**
 * This function displays the instruction to perform all the operations
 */
function textDisplay() {
  fill(255, 200);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Addition: Press A or a", 10, 10);
  text("Subtraction: Press S or s", 10, 30);
  text("Multiplicaton: Press M or m", 10, 50);
  text("Division: Press D or d", 10, 70);
  text("Maximum: Press X or x", 10, 90);
  text("Minimum: Press N or n", 10, 110);
  text("Create Array: Press C or c", 10, 130);
  text("Reverse Array: Press R or r", 10, 150);

  textAlign(RIGHT, BOTTOM);
  conditionals();
}

/**
 * This function displays text according to what operation is being performed
 */
function conditionals() {

  if (additionB) {
    text(addition(mouseX, mouseY), mouseX, mouseY);
  }
  if (subtractB) {
    text(subtract(mouseX, mouseY), mouseX, mouseY);
  }
  if (multiplyB) {
    text(multiply(mouseX, mouseY), mouseX, mouseY);
  }
  if (divideB) {
    text(divide(mouseX, mouseY), mouseX, mouseY);
  }
  if (maximumB) {
    text(maximum(mouseX, mouseY), mouseX, mouseY);
  }
  if (minimumB) {
    text(minimum(mouseX, mouseY), mouseX, mouseY);
  }
  if (creatingArrayB) {
    var stri = "{";
    for (var i = 0; i < mouseValues.length; i++) {
      stri += " " + mouseValues[i] + " ";
    }
    stri += "}";
    textAlign(CENTER);
    text(stri, windowWidth * (1 / 2 + 1 / 4 - 1 / 8), 50);
  }
  if (reverseArrayB) {
    var stri2 = "{";
    for (var j = 0; j < mouseValues.length; j++) {
      stri2 += " " + mouseValues[j] + " ";
    }
    stri2 += "}";
    textAlign(CENTER);
    text(stri2, windowWidth * (1 / 2 + 1 / 4 - 1 / 8), 50);
  }
}

function mousePressed() {
  if (creatingArrayB) {
    mouseValues.push(subtract(mouseX, mouseY));
  }
}

function keyTyped() {
  creatingArrayB = false;
  additionB = false;
  subtractB = false;
  multiplyB = false;
  divideB = false;
  maximumB = false;
  minimumB = false;
  reverseArrayB = false;
  if (key === 'A' || key === 'a') {
    additionB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'S' || key === 's') {
    subtractB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'M' || key === 'm') {
    multiplyB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'D' || key === 'd') {
    divideB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'X' || key === 'x') {
    maximumB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'N' || key === 'n') {
    minimumB = true;
    mouseValues.splice(0, mouseValues.length - 1);
  }
  if (key === 'c' || key === 'C') {
    creatingArrayB = true;
  }
  if (key === 'r' || key === 'R') {
    reverseArray(mouseValues);
    reverseArrayB = true;
  }
}

/** This function takes in two float values and returns the sum of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The sum of first and second as a float value
 */
function addition(first, second) {
  return first + second;
}

/** This function takes in two float values and returns the difference of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The difference of first and second as a float value
 */
function subtract(first, second) {
  return first - second;
}

/** This function takes in two float values and returns the product of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The product of first and second as a float value
 */
function multiply(first, second) {
  return first * second;
}

/** This function takes in two float values and returns the result of dividing of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The result of dividing of first and second as a float value
 */
function divide(first, second) {
  if (second === 0) {
    return undefined;
  } else {
    return first / second;
  }
}

/** This function takes in two float values and returns the bigger of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The bigger of first and second as a float value
 */
function maximum(first, second) {
  if (first > second) {
    return first;
  } else if (first <= second) {
    return second;
  }
}

/** This function takes in two float values and returns the smaller of those two values
 *
 *  @param {number} first   This is the first float of the sum
 *  @param {number} second  This is the second float of the sum
 *  @return {number}        The smaller of first and second as a float value
 */
function minimum(first, second) {
  if (first < second) {
    return first;
  } else if (first >= second) {
    return second;
  }
}

/** This function takes in an array and reverses the order of the array
 *  @param  {array} first  The array that is inputed into the function to be reversed
 *  @return {array}        The input array with its elements' orders reversed
 */
function reverseArray(first) {
  var temp = [];

  for (var i = first.length - 1; i >= 0; i--) {
    temp.push(first[i]);
  }

  for (var j = 0; j < temp.length; j++) {
    first[j] = temp[j];
  }

  return first;
}

/*     
text("{", mouseX - mouseX / 2 - 40, mouseY);
    for (var j = 0; j < mouseValues.length; j++) { // why can't i use "i"? // BECAUSE THE SCOPE OF THE VARIABLE IS THE ENTIRE FUNCTION
      text(mouseValues[j], mouseX - mouseX / 2 + 40 * j, mouseY);
    }
    text("}", mouseX - mouseX / 2 + 40 * mouseValues.length, mouseY);
  }
*/


/* Comment for Self:
 *  @var {string} stri   This is the string to display the array
 *  @var {string} stri2  This is the string to display the reversed array
  *  @var {array} temp   This is a temporary array used to store the reversed input array
*/