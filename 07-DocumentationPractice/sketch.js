function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
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
    return "not defined";
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
  } else if (first < second) {
    return second;
  } else {
    return "equal";
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
  } else if (first > second) {
    return second;
  } else {
    return "equal";
  }
}

/** This function takes in an array and reverses the order of the array
 *
 *  @param {array} temp   This is a temporary array used to store the reversed input array
 *  @return {array}       The input array with its elements' orders reversed
 */
function reverseArray(first[]) {
  var temp = [];

  for (var i = first.length - 1; i >= 0; i--) {
    temp.push(first[i]);
  }

  for (var i = 0; i < temp.length; i++) {
    first[i] = temp[i];
  }
  
  return first[];
}