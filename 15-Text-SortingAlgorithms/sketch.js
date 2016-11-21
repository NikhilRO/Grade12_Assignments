var story = [];
var block, ritaStory, ritaPos, pronoun, noun, verb, ritaPosJoined, storyWords, storyNumbers;

function preload() {
  story = loadStrings('rhesus.txt', lineToBlock);
}

function setup() {

  noCanvas();

  createP("Two Digit Numbers: " + block.match(/\b\d{2}\b/g).length);
  createP("Three Digit Numbers: " + block.match(/\b\d{3}\b/g).length);
  createP("Four Digit Numbers: " + block.match(/\b\d{4}\b/g).length);
  
}

/**
 * This function takes the array of text/story and converts it into one big block/string. Then it applies several rita functions to get a string of Part of Speech
 */
function lineToBlock() {
  block = story.join("\n"); // \n creates a new line
  ritaStory = RiString(block);

  storyWords = ritaStory.words();

  saveStrings(storyWords.join("\n") ,'words.txt');

  ritaPos = ritaStory.pos();
  ritaPosJoined = ritaPos.join("\n");
}
