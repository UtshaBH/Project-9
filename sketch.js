
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{ 
background("black")

if (keyDown("right")) 
  {
    background("red");
    
  }

  if (keyDown("left")) 
  {
    background("blue");
    
  }
 

    if (keyDown("up")) 
  {
    background("yellow");
   
  }

  
  if (keyDown("down")) 
  {
    background("green");
  }

  
 

  
  drawSprites();
}

