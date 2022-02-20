function setup() {
  createCanvas(windowWidth, 500, WEBGL);
  angleMode(DEGREES);
  s1 = createSlider(1, 50, 5, 1).position(300, 650);
  p1 = createP("N. of elements").position(300, 610);

  s2 = createSlider(1, 50, 5, 1).position(500, 650);
  p2 = createP("Roundness").position(500, 610);

  s3 = createSlider(90, 360, 90, 30).position(700, 650);
  p3 = createP("Transform shape").position(700, 610);

  s4 = createSlider(25, 100, 50, 1).position(900, 650);
  p4 = createP("Depth").position(900, 610);

  s5 = createSlider(0, 90, 60, 1).position(1100, 650);
  p5 = createP("Rotate").position(1100, 610);
}

function draw() {
  background(30);
  rotateX(s5.value());
  noFill();
  stroke(200, 226, 230);

  for (var i = 0; i < s1.value(); i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 200);
    var g = map(i, 0, 20, 100, 200);
    var b = map(cos(frameCount * 2), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 10);

    beginShape();

    for (var j = 0; j < s3.value(); j += s2.value()) {
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 8) * s4.value();

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}
