function setup(){
    createCanvas(400, 400);
    background(127);
}

function draw(){
    background(255);

    let r = 100;
    
    push();
        translate(width/2, height/2);
        fill(0, 150, 100);
        strokeWeight(10);
        beginShape();
            vertex(-100, -100);
            vertex(-100, 100,);
            vertex(100, 100);
            vertex(100, -100);
                beginContour();
                for(let i = 0; i < 50; i++)
                {
                    let ratio = i/50;
                    let radians = ratio * TWO_PI

                    x = cos(radians) * r;
                    y = sin(radians) * r;

                    vertex(x, y);
                }
                endContour();  
        endShape(CLOSE);
    pop();

    textSize(24);
    fill(0);
    text("x : " + mouseX.toString(), 20, 20);
    text("y : " + mouseY.toString(), 120, 20);
}