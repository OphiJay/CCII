
function setup() {
    createCanvas(400, 400);
    background(255);
    
    //Vars for Circ
    circNum = 4;
    circSize = 100;
    addNum = circSize/6
    posX = width/2;
    posY = height/4;
    isBlack = true;
    
    //Vars for Tri
    triNum = 11;
    triAdd = 10;
    pad = 1;
    triVertTop = (height/2) - (circSize/4);
    triVertBot = height * 3/4 + 10;
    triVertLeft = (width/2) - (circSize/2) - pad;
    triVertRight = (width/2) + (circSize/2) + pad;
    
    
    //Vars for Rect
    rectSizeX = 6;
    rectSizeY = 10;
    rectNum = 11;
    
    rectPosX = width/2 - circSize/2;
    rectPosY = height/2 - circSize/4;
    
    noStroke();
    //stroke(2);;
    
    // CIRC
    for(i =0; i <= circNum; i++){
         
      if(isBlack){
        fill(0);
      }else{
        fill(255);
      }
      
      ellipse(posX, posY, circSize);
      
      posY = posY + addNum;
      isBlack = !isBlack;
      
    }
  
    // TRI
    for(i =0; i <= triNum; i ++){
      
      if(isBlack){
        fill(0);
      }else{
        fill(255);
      }
      triangle(triVertLeft, triVertTop, triVertRight, triVertTop, width/2, triVertBot);
      
      triVertTop = triVertTop + triAdd;
      triVertLeft = triVertLeft + (triAdd/3);
      triVertRight = triVertRight - (triAdd/3);
      
      isBlack = !isBlack;
      
    }
     
    // RECT
    for(i =0; i <= rectNum; i ++){
      rectMode(CORNER);
  
      
      if(isBlack){
        fill(0);
      }else{
        fill(255);
      }
      
      rect(rectPosX, rectPosY, rectSizeX, rectSizeY);
      
      rectPosX = rectPosX + rectSizeX*1.4;
      rectSizeY = rectSizeY + 10;
     
      isBlack = !isBlack;
      
    }
  }
  
  function draw() {
      //console.log(isBlack); 
    //customFunc();
  }
  
  function customFunc(){
        console.log(isBlack); 
  }