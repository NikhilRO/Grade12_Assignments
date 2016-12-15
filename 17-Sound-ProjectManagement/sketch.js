var englishWords, relatedWords, phrases, definitions;
var ampHistory = [];
var amp;
var Blocks= [];

function preload() {
  song = loadSound("BubbleGum.wav") //, getAmp);
}

function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (var i = 0; i < ampHistory.length; i++) {
    Blocks.push(new Block(createVector(locationX, height/8))); 
  }
}

function getAmp() {
  amp = new p5.Amplitude();
  if(millis%10=0);
  ampHistory.push(amp.getLevel());
}