
function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block'); 
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
    background(0);
    noStroke();
    fill(50);
    let p = phaseIntake();
    let r = width/8;
    let x = width/2;
    let y = height/3;
    ellipse(x, y, r*2, r*2);

    // if (p == 5){
    //     let phaseArg = 0;   
    //     phaseArg +=0;
    //         if (phaseArg > 1.0) {
    //             phaseArg = 0;
    //         }
    //     drawMoon(x, y, r, phaseArg); 
    // } else {
    //     drawMoon(x, y, r, p); 
    // }
    drawMoon(x, y, r, p);

    }  
    
function drawMoon(x, y, r, p){
    
    let xPos = x;
    let yPos = y;
    let radius = r;
    let phase = p;
    let lext;
    let rext;

    if(phase <= 0.5)
    {
        rext =  radius * 4/3;
        lext = map(phase, 0, 0.5, rext, -rext);
    } else {
        lext =   - (radius * 4/3);
        rext = map(phase, 0.5, 1, -lext, lext);
    }

    push();
    translate(xPos, yPos);
    fill(255);
    beginShape();
        vertex(0, radius);
        bezierVertex(rext, radius, rext, -radius, 0, -radius);
        bezierVertex(lext, -radius, lext, radius, 0, radius);  
    endShape();
    pop();

}


function phaseIntake() {
    var phaseIn = document.getElementById("phaseChooser").value;
    phaseIn = parseFloat(phaseIn);
    return phaseIn;
}
