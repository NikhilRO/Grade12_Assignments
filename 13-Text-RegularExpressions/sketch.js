var story = [];
var block;
var italicsWord = [];

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
  
  var italics = block.match(/\b\_.*?\_\b/g);
  for (var i = 0; i < italics.length; i++) {
    var tempArray = split(italics[i], " ");
    for (var k = 0; k < tempArray.length; k++) {
      if (tempArray[k] !== "") {
        italicsWord.push(tempArray[k]);
      }
    }
  }
  createP("Italics: " + italicsWord.length);

  createP("Symbols: " + (block.match(/\?/g).length + block.match(/\!/g).length + block.match(/\./g).length));
}

/** 
 * This function takes the array of text/story and converts it one big block/string 
 */
function lineToBlock() {
  for (var i = 0; i < story.length; i++) {
    block = block + " " + story[i];
  }
}