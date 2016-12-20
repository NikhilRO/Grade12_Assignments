var capture;
// var pixR = [];
// var pixG = [];
// var pixB = [];
// var pixA = [];

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(32, 24);
  //capture.hide();   //hides the video feed
  //pixelDensity(1);  //used for retina displays to compensate
  noStroke();
}

function draw() {
  background(255);
  capture.size(32, 24);
  capture.loadPixels();
  var videoPixel = [];
  videoPixel.push.apply(pixels, capture.pixels);
  for (var y = 0; y < capture.height; y++) {
    for (var x = 0; x < capture.width; x++) {
      var index = (x + y * width) * 4;
      videoPixel[index + 0] = x;
      videoPixel[index + 1] = random(255);
      videoPixel[index + 2] = y;
      videoPixel[index + 3] = 255;
    }
  }

  // for (var x = 0; x < capture.width; x++) {
  //   for (var y = 0; y < capture.height; y++) {

  //     // pixR.push(capture.get(x, y)[0]);
  //     // pixG.push(capture.get(x, y)[1]);
  //     // pixB.push(capture.get(x, y)[2]);
  //     // pixA.push(capture.get(x, y)[3]);

  //     //sometimes the "pixels" are images - in that case
  //     //we don't want to do anything with it until the
  //     //video has settled into pixels.
  //     if (!(capture.get(x, y) instanceof p5.Image)) {
  //       fill(capture.get(x, y)[0],
  //         capture.get(x, y)[1],
  //         capture.get(x, y)[2],
  //         capture.get(x, y)[3]);
  //       ellipse(x * 10, y * 10, 8, 8);
  //     }
  //   }
  // }
  capture.updatePixels();
}

/*
  img.loadPixels();
  for (var a = 0; a < img.height; a += 8) {
    for (var b = 0; b < img.width; b += textWidth(storyChar[bPrev])) {
      colImage.push(color(img.pixels[4 * (b + a * img.width)], img.pixels[4 * (b + a * img.width) + 1], img.pixels[4 * (b + a * img.width) + 2])); //(img.pixels[4 * (b + a * img.width)], img.pixels[4 * (b + a * img.width) + 1], img.pixels[4 * (b + a * img.width) + 2]));
      bPrev++;
    }
  }
  img.updatePixels();
  */