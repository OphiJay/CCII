
function setup() {
    createCanvas(1000, 400); 
    background(49, 66, 89);
}

function draw() {

    for(let i = 0; i < 9; i++)
    {
        let p = i * 1/8;
        let r = width/18 -5 ;
        let x = (width * i/9) + (width/18);
        let y = (height/2);
        fill(0);
        ellipse(x, y, r*2, r*2);
        drawMoon(x, y, r, p);
    }
    // let phaseArg = phaseIntake;
    // let speed = 0.001;

    // drawMoon(x, y, radius, [phaseArg]);  
    // phaseArg += speed;
    // if(phaseArg >1.0){
    //     phaseArg =0;
    // }  

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



// function phaseIntake() {
//     var phaseIn = document.getElementById("phaseChooser").value;
//     return phaseIn;
// }
