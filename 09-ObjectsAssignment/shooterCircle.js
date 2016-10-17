  var v = createVector(width / 2, height);


  //what if we change this to a regular object. DONE
  shooterCircle = {
    display: function() {
      fill(200, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(10);
      ellipse(shooterCircle.location.x, shooterCircle.location.y, 140, 140);
    }
  };
  shooterCircle.location = v;
}
