var amp, gameStart, gameOver, numberUsed, jumper;
var ampHistory = [];
var blocks = [];

function preload() {
  song = loadSound("BubbleGum.wav");
  amp = new p5.Amplitude();
}

function setup() {
  var cnv = createCanvas(windowWidth / 2, windowHeight);
  cnv.position(width / 2, 0);
  gameOver = false;
  gameStart = true;
  numberUsed = 0;
  jumper = new Jumper(createVector(width / 2, height * (9 / 10)));
  for (var i = 7; i >= -1; i--) {
    blocks.push(new Block(createVector(random(width), i * height / 8)));
  }
  song.play();
}

function draw() {
  ampHistory.push(map(amp.getLevel(), 0, 0.1, 0, width)); //(Math.log(amp.getLevel()), Math.log(.00001), 0, 0, width)); //(Math.pow(2, 100 * amp.getLevel())
  background(255);
  if (gameStart && !gameOver) {
    game();
  }

}

function game() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display()
    blocks[i].move();
    if (jumper.location.y <= height / 2 + height / 16) {
      blocks[i].moveIt();
    }
    if (jumper.location.y >= height / 2 + height / 8) {
      blocks[i].stopMove();
    }
    // if (blocks[i].checkEdges()) {
    //   blocks.splice(i, 1);
    //   blocks.push(new Block(createVector(ampHistory[numberUsed], height / 8)));
    //   numberUsed++;
    // }
  }

  if (blocks[0].checkEdges()) {
    blocks.splice(0, 1);
    blocks.push(new Block(createVector(ampHistory[numberUsed], -height / 8)));
    console.log(ampHistory[numberUsed]);
    numberUsed += 20;
    if(numberUsed>950){
      numberUsed=0;
    }
  }

  jumper.display();
  jumper.move();

  jumperTouchBlock();

  if (millis === 16000) {
    gameOver = false;
  }
}

function jumperTouchBlock() {
  if (jumper.velocity.y >= 0) {
    for (var j = 0; j < blocks.length; j++) {
      if (jumper.location.dist(blocks[j].location) < 50) {
        jumper.contact();
      }
    }
  }
  if (jumper.location.y <= height / 2 - height / 3) {
    jumper.location.y += 4;
  }
  if (jumper.location.x > width) {
    jumper.location.x = 0;
  }
  if (jumper.location.x < 0) {
    jumper.location.x = width;
  }
  if (keyIsDown(LEFT_ARROW)) {
    jumper.location.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
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