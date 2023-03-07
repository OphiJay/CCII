let petalMin = 3;
let petalMax = 10;
let radiusMin = 20;
let radiusMax = 100;
let sizeMin = 1;
let sizeMax = 3.5;

let rMin = 0;
let rMax = 255;
let gMin = 0;
let gMax = 255;
let bMin = 0;
let bMax = 255;

let garden = [];

let selectedFlower;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    background(129, 150, 80); 
    
    petalMax = checkMax('petalMax', 'petalNum');
    radiusMax = checkMax('radiusMax', 'radiusNum');
    sizeMax = checkMax('sizeMax', 'sizeNum');

    rMax = checkMax('redMax', 'redNum');
    gMax = checkMax('greenMax', 'greenNum');
    bMax = checkMax('blueMax', 'blueNum');

    rMin = checkMax('redMin', 'redNumMin');
    gMin = checkMax('greenMin', 'greenNumMin');
    bMin = checkMax('blueMin', 'blueNumMin');
}

function draw() {
    background(129, 150, 80);  

    for (flower in garden) {
        garden[flower].draw(garden[flower]);
    }

    averageFlower();
}


function Palette(r = random(rMin, rMax), g = random(gMin, gMax), b = random(bMin, bMax)) {
    this.r = r;
    this.g = g;
    this.b = b;
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

function createFlower() {

    petalMax = checkMax('petalMax', 'petalNum');
    radiusMax = checkMax('radiusMax', 'radiusNum');
    sizeMax = checkMax('sizeMax', 'sizeNum');

    rMax = checkMax('redMax', 'redNum');
    gMax = checkMax('greenMax', 'greenNum');
    bMax = checkMax('blueMax', 'blueNum');

    rMin = checkMax('redMin', 'redNumMin');
    gMin = checkMax('greenMin', 'greenNumMin');
    bMin = checkMax('blueMin', 'blueNumMin');


    var flower = new Flower(
        new Point(mouseX, mouseY), //orgin
        int(random(petalMin, petalMax)), //num
        random(radiusMin, radiusMax), //radius
        random(sizeMin, sizeMax),//size
        new Palette()
    )

    garden.push(flower);
    return flower;
}

Flower.prototype.draw = (f) => { 
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
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function displayNumFlowers() {
    var text = document.getElementById("numFlowers");
    text.innerHTML = garden.length;
}

function checkMax(id, displayNum) {
    var slider = document.getElementById(id);
    var output = document.getElementById(displayNum);
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    } 

    var varMax = slider.value;
    return varMax;
}


function keyTyped () {
    if(key === 'd' || key === 'D')
    {
        garden.pop();
        displayNumFlowers();
    }
    if(key === 'f' || key === 'F')
    {
        if (mouseY >= 0) {
            var flower = createFlower();
            displayNumFlowers();

        }
    }
}

function mousePressed () {
    if(mouseButton == 'left') {

        if(garden.length >= 1) 
        {
            let lastFlower = garden[garden.length -1]
            console.log(dist(lastFlower.orgin.x, 
                                    lastFlower.orgin.y,
                                    mouseX, mouseY));
            selectedFlower = garden.findLast((flower) => {
                return dist(flower.orgin.x, 
                    flower.orgin.y,
                    mouseX, mouseY) < 10;
            });
    
            console.log(selectedFlower);
        }
        

    }
}

function mouseDragged() {
    if(selectedFlower) 
    {
        selectedFlower.orgin.x = mouseX;
        selectedFlower.orgin.y = mouseY;
    }
}

function averageFlower() {

    function radiusAverage() {
        var radiusTotal = 0;
        var radiusAverage = 0;
    
        for (flower in garden) {
            radiusTotal += garden[flower].radius;
        }
        radiusAverage = radiusTotal / garden.length;
        return int(radiusAverage);
    }

    function petalAverage() {
        var petalTotal = 0;
        var petalAverage = 0;
    
        for (flower in garden) {
            petalTotal += garden[flower].num;
        }
        petalAverage = petalTotal / garden.length;
        return int(petalAverage);
    }

    function sizeAverage() {
        var sizeTotal = 0;
        var sizeAverage = 0;
    
        for (flower in garden) {
            sizeTotal += garden[flower].size;
        }
        sizeAverage = sizeTotal / garden.length;
        return int(sizeAverage);
    }

    var radiusAF = radiusAverage();
    var petalAF = petalAverage();
    var sizeAF = sizeAverage();

    var orginAF = new Point(radiusAF, radiusAF);
    var paletteAF = new Palette(0, 0, 0)

    var averageFlower = new Flower(orginAF, petalAF, radiusAF, sizeAF, paletteAF)

    circle(orginAF.x, orginAF.y, radiusAF*2)

    averageFlower.draw(averageFlower);



}
