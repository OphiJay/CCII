let phaseArg = 0;
let speed = 0.001;

function setup() {
    createCanvas(400, 400);
   
}

function draw() {
    background(150);
    //text(test, 20, 20);
    //phaseArg = map(mouseX, 0, width, 0, 1);
    moonPhase([phaseArg]);  
    phaseArg += speed;
    if(phaseArg >1.0){
        phaseArg =0;
    }  
}

function moonPhase(phase){
    
    let radius = width/4;
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

    // New Moon
    push();
    translate(width/2, height/2);
    fill(255);
    beginShape();
        vertex(0, radius);
        bezierVertex(rext, radius, rext, -radius, 0, -radius);
        bezierVertex(lext, -radius, lext, radius, 0, radius);  
    endShape();
    pop();

}
