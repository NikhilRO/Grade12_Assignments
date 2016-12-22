//HOW TO WORK WITH MULTIPLE CANVAS?

var capture, cnv;
var videoPixel = [];
// var pixR = [];
// var pixG = [];
// var pixB = [];
// var pixA = [];

function preload() {
  capture = createCapture(VIDEO);
  capture.size(32, 24);
}

function setup() {
  cnv = createCanvas(320, 240);
  //sortedVideo = createCanvas(32, 24);

  //capture.hide();   //hides the video feed
  //pixelDensity(1);  //used for retina displays to compensate
  noStroke();
}

function draw() {
  background(255);
  capture.size(32, 24);
  capture.loadPixels();

  if (millis() > 5000) {
    videoPixel.splice(0, videoPixel.length);
    for (var x = 0; x < capture.width; x++) {
      for (var y = 0; y < capture.height; y++) {
        if (!(capture.get(x, y) instanceof p5.Image)) {
          videoPixel.push(new PixelDot(capture.get(x, y)[0],
            capture.get(x, y)[1],
            capture.get(x, y)[2],
            capture.get(x, y)[3]));
          var tempColor = videoPixel[videoPixel.length - 1].returnColor();
          if (red(tempColor) > 150) { //Linear Search
            fill(0, 0, 255);
          } else {
            fill(tempColor);
          }
          ellipse(x * 10, y * 10, 8, 8);
        }
      }
    }

    if (videoPixel) {
      videoPixel.sort(function(a, b) {
        return a.red - b.red;
      });


      //IS IT POSSIBLE THAT IT GOES TO THIS BEFORE COMPLETEING above
      //   for (var k = 0; k < 32; k++) {
      //     for (var l = 0; l < 24; l++) {
      //       var index = (k + (l * width));
      //       //stroke(0);
      //       fill(videoPixel[index].returnColor());
      //       // fill(videoPixel[index].red,//
      //       //   videoPixel[index].green,
      //       //   videoPixel[index].blue,
      //       //   videoPixel[index].alpha);
      //       ellipse(x * 10, y * 10, 8, 8);
      //     }
      //   }
      // 
      //console.log(videoPixel);
      //noLoop();


      //   var tempArray = [];
      //   for (var n = 0; n <= videoPixel.length; n++) {
      //     tempArray.push(videoPixel[n].returnColor());
      //   }
      //   binarySearch(tempArray, color(150, 150, 150));
      // 
    }
  }
  //WHY IS THIS NOT WORKING
  // videoPixel.splice(0, videoPixel.length);
  // videoPixel.push.apply(videoPixel, capture.pixels);
  // videoPixel.sort(function(a, b) {
  //   return a - b
  // });

  // for (var x = 0; x < 32; x++) {
  //   for (var y = 0; y < 24; y++) {
  //     var index = (x + y * width) * 4;
  //     //stroke(0);
  //     fill(videoPixel[index + 0],
  //       videoPixel[index + 1],
  //       videoPixel[index + 2],
  //       videoPixel[index + 3]);
  //     ellipse(x * 10, y * 10, 8, 8);
  //   }
  // }
}


function compare(a, b) { //sorts based on red //Actually you don't need this for numbers //This is good for strings
  if (a.red < b.red)
    return -1;
  if (a.red > b.red)
    return 1;
  return 0;
}

function binarySearch(arr, i) {
  var mid = Math.floor(arr.length / 2);
  console.log(arr[mid], i);

  if (arr[mid] === i) {
    console.log('match', arr[mid], i);
    return arr[mid];
  } else if (arr[mid] < i && arr.length > 1) {
    console.log('mid lower', arr[mid], i);
    return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
  } else if (arr[mid] > i && arr.length > 1) {
    console.log('mid higher', arr[mid], i);
    return binarySearch(arr.splice(0, mid), i);
  } else {
    console.log('not here', i);
    return -1;
  }

}

function linearSearch(array, x){
  var tempArray;
  for(var i= 0; i< array.length; i++){
    if(array[i] === x){
      tempArray.push(i);
    }
  }
  return tempArray;
}


function keyPressed() {
  noLoop();
}

//var index = (x + y * width) * 4;
// pixels[index + 0] = videoPixel[index + 0];
// pixels[index + 1] = videoPixel[index + 1];
// pixels[index + 2] = videoPixel[index + 2];
// pixels[index + 3] = videoPixel[index + 3];

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