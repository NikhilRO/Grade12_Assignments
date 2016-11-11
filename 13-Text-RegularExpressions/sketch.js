var story = [];
var block;

function preload() {
  story = loadStrings('rhesus.txt', lineToBlock);
}

function setup() {
  previousWidth = 0
  lineNumber = 0;

  console.log("Two Digit Numbers: " + block.match(/\b\d{2}\b/g).length);
  console.log("Three Digit Numbers: " + block.match(/\b\d{3}\b/g).length);
  console.log("Four Digit Numbers: " + block.match(/\b\d{4}\b/g).length);
  console.log("Italics: " + block.match(/\b\_.*?\_\b/g).length);
  console.log("Symbols: " + (block.match(/\?/g).length + block.match(/\!/g).length+ block.match(/\./g).length));
}

function draw() {} //Do I even need draw??

/** 
 * This function takes the array of text/story and converts it one big block/string 
 */
function lineToBlock() {
  for (var i = 0; i < story.length; i++) {
    block = block + " " + story[i];
  }
}
