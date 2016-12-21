var capture, cnv, sortedVideo;
var videoPixel = [];
// var pixR = [];
// var pixG = [];
// var pixB = [];
// var pixA = [];

function setup() {
  cnv = createCanvas(320, 240);
  //sortedVideo = createCanvas(32, 24);
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

  videoPixel.splice(0, videoPixel.length);
  videoPixel.push.apply(videoPixel, capture.pixels);
  videoPixel.sort(function(a, b) {
    return a - b
  });

  for (var x = 0; x < 32; x++) {
    for (var y = 0; y < 24; y++) {
      var index = (x + y * width) * 4;
      //stroke(0);
      fill(videoPixel[index + 0],
        videoPixel[index + 1],
        videoPixel[index + 2],
        videoPixel[index + 3]);
      ellipse(x * 10, y * 10, 8, 8);
      //var index = (x + y * width) * 4;
      // pixels[index + 0] = videoPixel[index + 0];
      // pixels[index + 1] = videoPixel[index + 1];
      // pixels[index + 2] = videoPixel[index + 2];
      // pixels[index + 3] = videoPixel[index + 3];
    }
  }
  //updatePixels();
  // console.log(sortedVideo);
  // sortedVideo.loadPixels();
  // console.log(sortedVideo.pixels);
  // sortedVideo.pixels.splice(0, sortedVideo.length);
  // sortedVideo.pixels.push(videoPixel);
  // for (var y = 0; y < sortedVideo.height; y++) {
  //   for (var x = 0; x < sortedVideo.width; x++) {
  //     var index = (x + y * width) * 4;
  //     sortedVideo.pixels[index + 0] = videoPixel[index + 0];
  //     sortedVideo.pixels[index + 1] = videoPixel[index + 1];
  //     sortedVideo.pixels[index + 2] = videoPixel[index + 2];
  //     sortedVideo.pixels[index + 3] = videoPixel[index + 3];
  //   }
  // }
  // sortedVideo.updatePixels();
  //   for (var y = 0; y < sortedVideo.height; y++) {
  //   for (var x = 0; x < sortedVideo.width; x++) {
  //     var index = (x + y * width) * 4;
  //     sortedVideo.pixels[index + 0] = video;
  //     sortedVideo.pixels[index + 1] = random(255);
  //     sortedVideo.pixels[index + 2] = y;
  //     sortedVideo.pixels[index + 3] = 255;
  //   }
  // }



  // for (var y = 0; y < capture.height; y++) {
  //   for (var x = 0; x < capture.width; x++) {
  //     var index = (x + y * width) * 4;
  //     videoPixel[index + 0] = x;
  //     videoPixel[index + 1] = random(255);
  //     videoPixel[index + 2] = y;
  //     videoPixel[index + 3] = 255;
  //   }
  // }

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
  //capture.updatePixels();
}

function keyPressed() {
  noLoop();
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