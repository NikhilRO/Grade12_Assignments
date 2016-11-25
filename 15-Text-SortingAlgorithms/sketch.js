var story = [];
var storyWords = [];
var storyNumbers = [];
var time = 0;
var number = 0;
var img;

function preload() {
  story = loadStrings('rhesus.txt', lineToWord);
  img = loadImage("49304443.jpg");
}

function setup() {
  createCanvas(600, windowHeight);
  bubble(storyNumbers);
  insertionSort(storyWords);
}

function draw() {
  background(255);
  for (var i = time; i < time + (height/12)+ 5; i++) {
    if (i < storyNumbers.length) {
      text(storyNumbers[i], 100, number * 12);
    }
    text(storyWords[i], 500, number * 12);
    number++;
    if (i >= (storyWords.length)-60) {
      img.resize(width, height);
      image(img, 0, 0);
      noLoop();
    }
  }
  number = 0;
  time += 10;
}

/**
 * This function takes the array of text/story and extracts numbers and words from it
 */
function lineToWord() {
  storyWords = split(story.join(" ").toLowerCase(), /[\d\W\_]+/);
  storyWords.splice(0, 1);

  storyNumbers = split(story.join(" "), /[\D\_]+/); 
  storyNumbers.splice(0, 1);
  storyNumbers.splice(storyNumbers.length - 1, 1);
  for (var i = 0; i < storyNumbers.length; i++) {
    storyNumbers[i] = parseInt(storyNumbers[i]);//Converts strings to Numbers
  }
}

/**
 ** This function takes the array and uses Bubble Sort to sort it 
 * @ param {array} array  This is the array that is sorted
 */
function bubble(array) {
  var inputArray = array; //THIS IS POINTING AT THE SAME MEMORY LOCATION
  for (var i = 0; i < inputArray.length - 1; i++) {
    for (var j = 0; j < inputArray.length - i - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        var temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  return inputArray;
}

/**
 * This function takes the array and uses Insertion Sort to sort it 
 * @ param {array} array  This is the array that is sorted
 */
function insertionSort(array) {
  var inputArray = array;
  for (var i = 0; i < inputArray.length; i++) {
    var current = inputArray[i];
    for (var j = i; j > 0 && inputArray[j - 1] > current; j--) {
      inputArray[j] = inputArray[j - 1];
    }
    inputArray[j] = current;
  }
  return inputArray;
}