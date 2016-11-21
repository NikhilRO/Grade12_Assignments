var story = [];
var block, ritaStory, ritaPos, pronoun, noun, verb, ritaPosJoined, storyWords, storyNumbers;

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
  createP("Symbols: " + (block.match(/\?/g).length + block.match(/\!/g).length + block.match(/\./g).length));
  createP("Nouns: " + (ritaPosJoined.match(/\bnn\b/g).length + ritaPosJoined.match(/\bnnp\b/g).length));
  createP("Verbs: " + ritaPosJoined.match(/\bvb.*?\b/g).length);
  createP("Pronouns: " + (ritaPosJoined.match(/\bprp.*\b/g).length + ritaPosJoined.match(/\bwp.*\b/g).length));
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


//Calculate how many pronouns, nouns (non-plural), and verbs exist.

/*
 prp	Personal pronoun
 	prp$	Possessive pronoun
  wp	Wh-pronoun
 	wp$	Possessive wh-pronoun
  */

  /*
  nn	Noun, singular or mass
  nnp	Proper noun, singular
  */

  /*
  vb	Verb, base form
 	vbd	Verb, past tense
 	vbg	Verb, gerund or present participle
 	vbn	Verb, past participle
 	vbp	Verb, non-3rd person singular present
 	vbz	Verb, 3rd person singular present
  */
