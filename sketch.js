var gridimage;
var font;
var mouse;
var angle = 0.7;
var gap = 20;

var text1 = ["Hello World"];
var text2 = ["<3"];

function preload() {
  gridimage = loadImage("world_map_vector.png");
  tint(68, 195, 245, 250);
}

function setup() {
  createCanvas(900, 600);
  background(131, 23, 241);
  font = loadFont('data/font2.otf');
  textFont(font);
  image(gridimage, 0, 0);
  smooth();
  frameRate(3);
}

function draw() {
  frameRate(3);

  push();
  translate(mouseX, mouseY);
  rotate(angle);
  fill(245);
  textSize(35);
  text(text1[int(random(0, text1.length))], width / 50, height / 50);

  angle += 0.01;
  pop();

  translate(mouseX, mouseY);
  rotate(angle);
  fill(204, 53, 255);
  textSize(30);
  text("Love&Peace", width / 20, height / 20);
  angle -= 2.5;
  
  //text_random show up
  for(var i = 0; i <width; i= i + 50){
    for(var j = 0; j<height; j = j + 50){
      fill(255,100,150, random(100));
       textFont(font, abs(random(i - 230))); 
       textSize(20);
       text(text2, i, random(j));
    }
  }
}

function mousePressed() {
  noLoop();

}