
var bigger;
var smaller;

var brushSize = 0;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    background(69); 
    
}

function draw(params) {
    // background(69);  
    noStroke();
    fill(120, 120, 0)

    var size = 100 + setBrushSize(bigger, smaller);
    var params = new setParams(mouseX, mouseY, size);
    ellipse(params.x, params.y, params.size);
}

function setParams(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;

}

function setBrushSize(b, s) {

    var bigger = b;
    if(bigger) {
        brushSize +=10;
    }
    var smaller = s;
    if(smaller) {
        brushSize -=10;
    }
    return brushSize;
}

function keyDown() {
    if(key == 'w')
    {
        bigger = true;
        smaller = false;
        setBrushSize(bigger, smaller);
    }
    if(key == 'e')
    {
        bigger = false;
        smaller = true;
        setBrushSize(bigger, smaller);
    }
}