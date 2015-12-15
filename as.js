function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(0);
  noStroke(0);
  from = color('rgba(255,   0, 0, 0.1)');
  to   = color('rgba(255, 255, 0, 1.0)');
  lerp1 = lerpColor(from, to, 0.33);
  lerp2 = lerpColor(from, to, 0.67);
  for (var i = 0; i < 10; i++) {
    // red
    var a1 = random(0, 120);
    var b1 = random(0, 67);
    var c1 = random(120, 240);
    var d1 = random(67, 133);
    var e1 = random(240, 360);
    var f1 = random(133, 200);
    // lerp1
    var a2 = random(120, 240);
    var b2 = random(67, 133);
    var c2 = random(240, 360);
    var d2 = random(133, 200);
    var e2 = random(360, 480);
    var f2 = random(200, 267);
    // lerp2
    var a3 = random(240, 360);
    var b3 = random(133, 200);
    var c3 = random(360, 480);
    var d3 = random(200, 267);
    var e3 = random(480, 600);
    var f3 = random(267, 333);
    // yellow
    var a4 = random(360, 480);
    var b4 = random(200, 267);
    var c4 = random(480, 600);
    var d4 = random(267, 333);
    var e4 = random(600, 720);
    var f4 = random(333, 400);
    noStroke();
    fill(from);
    triangle(a1, b1, c1, d1, e1, f1);
    fill(lerp1);
    triangle(a2, b2, c2, d2, e2, f2);
    fill(lerp2);
    triangle(a3, b3, c3, d3, e3, f3);
    fill(to);
    triangle(a4, b4, c4, d4, e4, f4);
  }
  frameRate(13);
}
