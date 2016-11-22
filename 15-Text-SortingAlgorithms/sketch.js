var story = [];
var storyWords= [];
var storyNumbers= [];

function preload() {
  story = loadStrings('rhesus.txt', lineToWord);
}

function setup() {
  noCanvas();

  // createP("Two Digit Numbers: " + block.match(/\b\d{2}\b/g).length);
  // createP("Three Digit Numbers: " + block.match(/\b\d{3}\b/g).length);
  // createP("Four Digit Numbers: " + block.match(/\b\d{4}\b/g).length);

}

/**
 * This function takes the array of text/story and converts it into one big block/string. Then it applies several rita functions to it.
 */
function lineToWord() {
  storyWords = split(story.join(" ").toLowerCase() ,/[\d\W\_]+/);
  console.log(storyWords.length)
  storyNumbers= split(story.join(" ") ,/[\D\_]+/);
  console.log(storyNumbers.length)
 //saveStrings(storyWords, "words.txt");
}
