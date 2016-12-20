//How to put text on html
//why are distances wrong?
//problem with the endScreen

var amp, gameStart, gameOver, numberUsed, jumper;
var ampHistory = [];
var blocks = [];
var bubblegum, character, person, score, fade;

function preload() {
  bubblegum = loadImage("bubblegum.png");
  person = loadImage("boy.png");
  song = loadSound("BubbleGum.wav");
  amp = new p5.Amplitude();
}

function setup() {
  println("Use arrow keys to control the jumper");
  println("Press R or r to restart the game");
  println("Collect stars to increase your score");

  var cnv = createCanvas(windowWidth / 2, windowHeight);
  cnv.position(width / 2, 0);

  bubblegum.resize(width / 5, height / 14);
  person.resize(50, height / 8);

  gameOver = false;
  gameStart = true;

  score = 0;
  numberUsed = 0;
  fade = 0;

  jumper = new Jumper(createVector(width / 2, height * (9 / 10)), person);
  for (var i = 7; i >= -1; i--) {
    blocks.push(new Block(createVector(random(width), i * height / 8), bubblegum));
  }

  song.loop();
}

function draw() {
  ampHistory.push(map(amp.getLevel(), 0, 0.1, 0, width)); //(Math.log(amp.getLevel()), Math.log(.00001), 0, 0, width)); //(Math.pow(2, 100 * amp.getLevel())
  background(255);

  if (gameStart && !gameOver) {
    game();
    collect();
  }

  if (!gameStart && gameOver) {
    endScreen();
  }
}

/**
 * Runs the actual game 
 */
function game() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display()
    blocks[i].move();

    if (jumper.location.y <= height / 2 - height / 8) {
      blocks[i].moveIt();
    }
    if (jumper.location.y >= height / 2 + height / 128) {
      blocks[i].stopMove();
    }

    // if (blocks[i].checkEdges()) {
    //   blocks.splice(i, 1);
    //   blocks.push(new Block(createVector(ampHistory[numberUsed], height / 8)));
    //   numberUsed++;
    // }

    var distance = jumper.location.dist(blocks[i].location);
    if (distance < 50) {
      console.log(distance);
      if (jumper.contact()) {
        moveBackground();
      }
    }
  }

  if (blocks[0].checkEdges()) {
    blocks.splice(0, 1);
    blocks.push(new Block(createVector(ampHistory[numberUsed] || random(width), -height / 8), bubblegum));
    //console.log(ampHistory[numberUsed] || random(width));
    numberUsed += floor(random(10, 30));
    if (numberUsed > 950) {
      numberUsed = 0;
    }
  }

  jumperMovements();

  if (keyIsDown(LEFT_ARROW)) {
    jumper.location.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    jumper.location.x += 10;
  }

}

/**
 * While the game is running, this controls the scrolling part behind the game (i.e moving the blocks)
 */
function moveBackground() {
  for (var j = 0; j < blocks.length; j++) {
    blocks[j].moveIt();
  }
}

/**
 * While the game is running, this controls the movements of the jumper
 */
function jumperMovements() {
  //for (var j = 0; j < blocks.length; j++) {}
  jumper.display();
  jumper.move();
  if (jumper.location.y <= height * (.15)) {
    jumper.location.y += 9.8;
  }
  if (jumper.location.x > width) {
    jumper.location.x = 0;
  }
  if (jumper.location.x < 0) {
    jumper.location.x = width;
  }

  if (jumper.location.y > height) {
    gameStart = false;
    gameOver = true;
    song.stop();

  }
}

/**
 * While the game is running, this collects the points and tallys the score
 */
function collect() {
  for (var i = 0; i < blocks.length; i++) {
    var distance = jumper.location.dist(blocks[i].location);
    if (distance < 40) {
      if (blocks[i].collect()) {
        score++;
      }
    }
  }

  //displaying score in style
  fill(255, 255, 0); //yellow
  stroke(0, 50);
  ellipse(width / 2 + width / 4 + width / 8, height / 2 + height / 4 + height / 8, 100, 100);
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  text(score, width / 2 + width / 4 + width / 8, height / 2 + height / 4 + height / 8 - 5);
  noFill();
  noStroke();
}

function keyTyped() {
  if (key === 'r' || key === 'R') {
    gameStart = false;
    gameOver = true;
    song.stop();
    restart();
  }
}

/**
 * Used to restart the game/ initialize the game
 */
function restart() {
  blocks.splice(0, blocks.length);

  gameStart = true;
  gameOver = false;

  score = 0;
  numberUsed = 0;
  fade = 0;

  jumper = new Jumper(createVector(width / 2, height * (9 / 10)), person);
  for (var i = 7; i >= -1; i--) {
    blocks.push(new Block(createVector(random(width), i * height / 8), bubblegum));
  }
  song.loop();
}

/**
 * When the game is done, this is displayed
 */
function endScreen() {
  gameOverDisplay();

  fade += 2;
  fill(200, 255 - fade);
  strokeWeight(100);
  textSize(100);
  text("Score:" + score, width / 2, height / 2 - height / 4);
  noFill();
}

/**
 * When the game is done, this is displayed
 */
function gameOverDisplay() { //restart button
  push();

  fill(50);
  translate(width / 2, height / 2 + height / 4 - height / 8);
  ellipse(0, 0, 250, 250);

  noFill();
  stroke(200);
  arc(0, 0, 150, 150, radians(45), radians(315));

  push();
  translate((100 + 50) / 2 * cos(radians(45)), -(100 + 50) / 2 * sin(radians(45)));
  rotate(-radians(45));
  fill(200);
  triangle(-12, 0, 12, 0, 0, 16);
  pop();

  pop();
}

function mousePressed() {
  if (gameOver) { //turns the game on
    if (dist(mouseX, mouseY, width / 2, height * 0.625) < 125) { //0.625= 1/2 + 1/4 -1/8 
      restart();
      gameStart = true;
      gameOver = false;
    }
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