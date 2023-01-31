
var cliffNum = 20;

function setup() {
    createCanvas(400, 400);
    background(0);
    noStroke();
    
    cliffNum = 20;
    x1 = 0;
    y1 = 0;
    x2 = 10;
    y2 = height;
    x3 = 20;
    y3 = 0;
    
    offset = 10;
    expon = 0.5;
    
    fill(180, 80, 120);
    
    for(i = 0; i< cliffNum; i++){
      triangle(x1, y1, x2, y2, x3, y3);
      x1 = x3;
      //x1 = x3 + offset;
      x2 = x1 + offset;
      x3 = x2 + offset;
      y2 = y2 - offset;
      offset = offset - expon;
    }}
