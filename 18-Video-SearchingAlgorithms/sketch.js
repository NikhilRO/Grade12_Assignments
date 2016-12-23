//HOW TO WORK WITH MULTIPLE CANVAS?

var capture, cnv, whatRedToLookFor;
var videoPixel = [];

function preload() {
  capture = createCapture(VIDEO);
  capture.size(32, 24);
}

function setup() {
  cnv = createCanvas(650, 240);
  whatRedToLookFor = 150;

  //capture.hide();   //hides the video feed
  //pixelDensity(1);  //used for retina displays to compensate
  noStroke();
}

function draw() {
  background(255);
  capture.size(32, 24);
  capture.loadPixels();

  videoPixel.splice(0, videoPixel.length);
  // var timeLinear = millis();
  for (var x = 0; x < capture.width; x++) {
    for (var y = 0; y < capture.height; y++) {
      if (!(capture.get(x, y) instanceof p5.Image)) {
        videoPixel.push(new PixelDot(capture.get(x, y)[0],
          capture.get(x, y)[1],
          capture.get(x, y)[2],
          capture.get(x, y)[3]));
        var tempColor = videoPixel[videoPixel.length - 1].returnColor();
        if (red(tempColor) === whatRedToLookFor) { //Linear Search
          fill(255);
          strokeWeight(8);
          stroke(255);
        } else {
          fill(tempColor);
        }
        ellipse(x * 10 + 330, y * 10, 8, 8);
        noStroke();
        strokeWeight(1);
      }
    }
  }
  //console.log(timeLinear- millis());//"Time taken by linear search is "+ (timeLinear- millis()));
  //var timeBinary = millis();
  if (videoPixel) {
    videoPixel.sort(function(a, b) {
      return a.red - b.red;
    });

    var tempArray = [];
    for (var n = 0; n < videoPixel.length; n++) {
      tempArray.push(videoPixel[n].red);
    }

    // var timeBinary = millis();
    var tempNumber = binarySearch(tempArray, whatRedToLookFor);
    // if (tempNumber != -1) {
    //   console.log(timeBinary - millis());
    // }

    for (var k = 0; k < 32; k++) {
      for (var l = 0; l < 24; l++) {
        var index = (k + (l * 24));
        //stroke(0);
        if (index != tempNumber) {
          fill(videoPixel[index].returnColor());
          // fill(videoPixel[index].red,//
          //   videoPixel[index].green,
          //   videoPixel[index].blue,
          //   videoPixel[index].alpha);
          ellipse(k * 10, l * 10, 8, 8);
        } else {
          fill(255);
          ellipse(k * 10, l * 10, 16, 16);
        }
      }
    }
  }
}



/**
 * This function takes the array and uses Binary search on it
 * @param  {array}  arr  This is the array to be searched
 * @param  {number} i    This is what we are looking for
 * @return {number}      The index which matches x or -1 if no match
 */
function binarySearch(arr, i) {
  var mid = Math.floor(arr.length / 2);
  //console.log(arr[mid], i);

  if (arr[mid] === i) {
    //console.log('match', arr[mid], i);
    return mid;
  } else if (arr[mid] < i && arr.length > 1) {
    //console.log('mid lower', arr[mid], i);
    return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
  } else if (arr[mid] > i && arr.length > 1) {
    //console.log('mid higher', arr[mid], i);
    return binarySearch(arr.splice(0, mid), i);
  } else {
    //console.log('not here', i);
    return -1;
  }
}

/**
 * This function takes the array and uses Linear search 
 * @param  {array}  array  This is the array to be searched
 * @param  {number} x      This is what we are looking for
 * @return {number}        The index which matches x or -1 if no match
 */
function linearSearch(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === x) {
      return i;
    }
  }
  return -1;
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

// function compare(a, b) { //sorts based on red //Actually you don't need this for numbers //This is good for strings
//   if (a.red < b.red)
//     return -1;
//   if (a.red > b.red)
//     return 1;
//   return 0;
// }

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