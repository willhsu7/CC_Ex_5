var thefont = new Array(4);
var gap = 50;
var font;
var sky;
var letter = 'A';

function preload() {
  sky = loadImage("sky1.jpg");
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf');
  }
}

function setup() {
  createCanvas(1200, 800);
  background(255);
  smooth();
  frameRate(2);
  //font = loadFont('data/font2.otf');
  //textFont(thefont[i], fsize);
}

function draw() {
  background(255);
  image(sky, 0, 0);
  noStroke();
  for (var i = 0; i < width; i = i + 100) {
    for (var j = 0; j < height; j = j + 100) {
      fill(6, 73, 164, random(100));
      textFont(thefont[2], abs(random(i - 150)));
      text(letter, i, random(j));
    }
  }
}

function keyPressed() {
  if (key == 'B' || key == 'b') {
    letter = 'B'
  }
  if (key == 'C' || key == 'c') {
    letter = 'C'
  }
  if (key == 'D' || key == 'd') {
    letter = 'D'
  }
  if (key == 'E' || key == 'e') {
    letter = 'E'
  }
  if (key == 'F' || key == 'f') {
    letter = 'F'
  }
  if (key == 'G' || key == 'g') {
    letter = 'G'
  }
  if (key == 'H' || key == 'h') {
    letter = 'H'
  }
  if (key == 'I' || key == 'i') {
    letter = 'I'
  }
  if (key == 'J' || key == 'j') {
    letter = 'J'
  }
  if (key == 'K' || key == 'k') {
    letter = 'K'
  }
  if (key == 'L' || key == 'l') {
    letter = 'L'
  }
  if (key == 'M' || key == 'm') {
    letter = 'M'
  }
  if (key == 'N' || key == 'n') {
    letter = 'N'
  }
  if (key == 'O' || key == 'o') {
    letter = 'O'
  }
  if (key == 'P' || key == 'p') {
    letter = 'P'
  }
  if (key == 'Q' || key == 'q') {
    letter = 'Q'
  }
  if (key == 'R' || key == 'r') {
    letter = 'R'
  }
  if (key == 'S' || key == 's') {
    letter = 'S'
  }
  if (key == 'T' || key == 't') {
    letter = 'T'
  }
  if (key == 'U' || key == 'u') {
    letter = 'U'
  }
  if (key == 'V' || key == 'v') {
    letter = 'V'
  }
  if (key == 'W' || key == 'w') {
    letter = 'W'
  }
  if (key == 'X' || key == 'x') {
    letter = 'X'
  }
  if (key == 'Y' || key == 'y') {
    letter = 'Y'
  }
  if (key == 'Z' || key == 'z') {
    letter = 'Z'
  }
}