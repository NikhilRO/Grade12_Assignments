var amp, gameStart, gameOver, numberUsed, jumper;
var ampHistory = [];
var blocks = [];

function preload() {
  song = loadSound("BubbleGum.wav");
  amp = new p5.Amplitude();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameOver = false;
  gameStart = true;
  numberUsed = 0;
  jumper = new Jumper(createVector(width / 2, height * (9 / 10)));
  for (var i = 7; i >= 0; i--) {
    blocks.push(new Block(createVector(random(width), i * height / 8)));
  }
  song.play();

}

function draw() {
  ampHistory.push(map(amp.getLevel(), 0, 1, 0, width));
  background(255);
  if (gameStart && !gameOver) {
    game();
  }

}

function game() {
  for (var j = 0; j < blocks.length; j++) {
    if (blocks[j].checkEdges()) {
      blocks.splice(j, 1);
      blocks.push(new Block(createVector(ampHistory[numberUsed], height / 8)));
      numberUsed++;
    }
  }

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display()
    blocks[i].move();
  }

  jumper.display();
  jumper.move();

  jumperTouchBlock();

  if (millis === 16000) {
    gameOver = false;
  }
}

function jumperTouchBlock() {
  for (var j = 0; j < blocks.length; j++) {
    if (jumper.location.dist(blocks[j].location) < 50) {
      jumper.contact();
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    jumper.location.x -= 10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    jumper.location.x += 10;
  }
  
}

// function keyPressed() {
//   if (gameStart && !gameOver) {
//     if (keyCode == RIGHT_ARROW) {
//       jumper.location.x += 10;
//     }  else if (keyCode == LEFT_ARROW) {
//       jumper.location.x -= 10;
//     } 
//     return false;
//   }
// }

//   document.onkeydown = checkKey;
//   function checkKey(e) {

//   e = e || window.event;

//   if (e.keyCode == '38') {
//     // up arrow
//   } else if (e.keyCode == '40') {
//     // down arrow
//   } else if (e.keyCode == '37') {
//     // left arrow
//   } else if (e.keyCode == '39') {
//     // right arrow
//   }

// }

//975 ampValues available