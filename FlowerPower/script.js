let petalMin = 3;
let petalMax = 10;
let radiusMin = 20;
let radiusMax = 100;
let sizeMin = 1.5;
let sizeMax = 3.5;

let rMin = 20;
let rMax = 150;
let gMin = 150;
let gMax = 100;
let bMin = 150;
let bMax = 100;

let flowerCount = 0;


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    //background(161, 184, 105);    
    background(255);
}

function draw() {


}

function Palette() {
    this.r = random(rMin, rMax);
    this.g = random(gMin, gMax);
    this.b = random(bMin, bMax);
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Flower(o, n, r, s, p) {
    this.orgin = o;
    this.num = n;
    this.radius = r;
    this.size = s;
    this.palette = p;

}

function createFlower () {
    var flower = new Flower(
        new Point(mouseX, mouseY), //orgin
        int(random(petalMin, petalMax)), //num
        random(radiusMin, radiusMax), //radius
        random(sizeMin, sizeMax),//size
        new Palette()
    )
    drawFlower(flower);
    return flower;
}

function drawFlower(f)
{ 
    let orgin = f.orgin;
    let num = f.num;
    let radius = f.radius;
    let size = f.size;
    let palette = f.palette;

    let incr = TWO_PI / num;
    let walkout = (radius / num) * size;
    
    push();
    fill(palette.r, palette.g, palette.b);
    translate(orgin.x, orgin.y);
    beginShape();
    for(var i = 0; i < num; i ++)
    {
        let angle = i * incr;

        vertex(0, 0),
        bezierVertex(cos(angle) * radius + sin(angle) * walkout,
                      sin(angle) * radius - cos(angle) * walkout,
                      cos(angle) * radius - sin(angle) * walkout,
                      sin(angle) * radius + cos(angle) * walkout,      
                      0, 0)


    }
    endShape();
    pop();

    flowerCount++;

}

function mouseClicked() {
    var flower = createFlower();
    console.log(flower);
    displayNumFlowers();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}



function displayNumFlowers() {
    var text = document.getElementById("numFlowers");
    text.innerHTML = flowerCount;
}

