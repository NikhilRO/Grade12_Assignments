var story = [];
var block;

function preload() {
  story = loadStrings('rhesus.txt', lineToBlock);
}

function setup() {
  previousWidth = 0
  lineNumber = 0;
  
  noCanvas();

  createP("Two Digit Numbers: " + block.match(/\b\d{2}\b/g).length);
  createP("Three Digit Numbers: " + block.match(/\b\d{3}\b/g).length);
  createP("Four Digit Numbers: " + block.match(/\b\d{4}\b/g).length);
  createP("Italics: " + block.match(/\b\_.*?\_\b/g).length);
  createP("Symbols: " + (block.match(/\?/g).length + block.match(/\!/g).length+ block.match(/\./g).length));
}

/** 
 * This function takes the array of text/story and converts it one big block/string 
 */
function lineToBlock() {
block= story.join("\n"); // \n creates a new line 
}
