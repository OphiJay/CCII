// let phaseArg = 0;
// let speed = 0.001;



function setup() {
    createCanvas(1000, 400); 
    background(21, 103, 128);
}

function draw() {

    // noStroke();

    // drawMoon(x, y, radius, [phaseArg]);  
    // phaseArg += speed;
    // if(phaseArg >1.0){
    //     phaseArg =0;
    // }  


    for(let i = 0; i < 9; i++)
    {
        let p = i * 1/8;
        let r = width/18;
        let x = (width * i/9) + (r);
        let y = (height/2);
        fill(0);
        ellipse(x, y, r*2, r*2);
        drawMoon(x, y, r, p);


    }

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
