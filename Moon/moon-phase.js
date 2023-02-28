
function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block'); 
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function phaseIntake() {
    var phaseIn = document.getElementById("phaseChooser").value;
    phaseIn = parseFloat(phaseIn);
    return phaseIn;
}

function draw() {
    background(0);
    noStroke();
    fill(50);
    let p = phaseIntake();

    if (p == 1)
    {
        animMoon();
    }
    else
    {
        let r = width/8;
        let x = width/2;
        let y = height/3;
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

function animMoon(){
    // let phaseArg = 0;

    let parameters = {
        x: 0,
        y: 0,
        radius: 0,
        phase: 0
    };
    animMoonSetup(parameters);
    animMoonDraw(parameters);

}

function animMoonSetup(parameters){
    parameters.x = width / 2;
	parameters.y = height / 2;
	parameters.radius = 100;
}

function animMoonDraw(parameters){
    parameters.phase += 0.01;
	if (parameters.phase > 1.0) {
		parameters.phase = 0;
	}

	fill(0);
	ellipse(width / 2, height / 2, 200, 200);
	drawMoon(parameters); 
}
