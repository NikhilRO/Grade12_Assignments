var story = [];
var storyWords = [];
var storyNumbers = [];
var storyWordsSorted = [];
var storyNumbersSorted = [];


function preload() {
  story = loadStrings('rhesus.txt', lineToWord);
}

function setup() {
  noCanvas();
  storyNumbersSorted = bubble(storyNumbers);
  storyWordsSorted = insertionSort(storyWords);
  
  createP(storyWordsSorted);
}

function draw() {

  // createP("Two Digit Numbers: " + block.match(/\b\d{2}\b/g).length);
  // createP("Three Digit Numbers: " + block.match(/\b\d{3}\b/g).length);
  // createP("Four Digit Numbers: " + block.match(/\b\d{4}\b/g).length);

}

/**
 * This function takes the array of text/story and converts it into one big block/string. Then it applies several rita functions to it.
 */
function lineToWord() {
  storyWords = split(story.join(" ").toLowerCase(), /[\d\W\_]+/);
  storyWords.splice(0, 1);
  console.log(storyWords.length)
  storyNumbers = split(story.join(" "), /[\D\_]+/); //Convert Array to Numbers
  storyNumbers.splice(0, 1);
  console.log(storyNumbers.length)
    //saveStrings(storyWords, "words.txt");
}


function bubble(array) {
  var inputArray = array;
  for (var i = 0; i < inputArray.length - 1; i++) {
    for (var j = 0; j < inputArray.length - i - 1; j++) {
      if (parseInt(inputArray[j]) > parseInt(inputArray[j + 1])) { 
        var temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  return inputArray;
}

function insertionSort(array) {
  var inputArray = array;
  for (var i = 0; i < inputArray.length; i++) {
    var current = inputArray[i];
    for (var j = i;j > 0 && inputArray[j-1]> current; j--){
      inputArray[j]= inputArray[j-1];
    }
    inputArray[j]= current;
  }
  return inputArray;
}