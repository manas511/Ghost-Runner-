var ghost , ghostImage;
var door , tower, climber;


var Play =1 ;
var End = 0;
var gameState = Play ;
var climberImg, doorImg,ghostImg, towerImg;
var ghost , door , tower, climber;

var doorgroup;
    
    
    
function preload(){
     climberImg = loadImage("climber.png") ;
     doorImg = loadImage("door.png");
     towerImg=loadImage("tower.png");
     ghostImg = loadImage("ghost-standing.png");


  
    }


function setup(){
  createCanvas (500,500);
  
  tower = createSprite(250,250,500,500);
  tower.addImage(towerImg);
  tower.velocityY =10;
  

  ghost=createSprite(100,400,10,10);
 ghost.addImage(ghostImg);
 //ghost.y = mouse.Y;
 ghost.scale = 0.5;


doorgroup=createGroup();




  
  
}

function draw (){
background("white");   
 if (gameState === Play ){
  if (tower.y >500){
    tower.y = 250;
    }
    if (keyDown("A")){
      ghost.x = ghost.x-10;
    }
   if (keyDown("D")){
     ghost.x =ghost.x+10;
   }
   doorF();
   if (doorgroup.isTouching(ghost)){
     gameState =End;
   }


   drawSprites();
  }

  if (gameState === End ){

        background("black ");
        fill("yellow" );
        textSize (25);
        text ("Game Over",250,250)
  }
  






}


function doorF(){
  
  if (frameCount %60 === 0){
  door = createSprite(Math.round(random(10,450)),0,10,10);
  door.addImage(doorImg);
  door.velocityY = 10;
  climber =createSprite(door.x,50,10,10);
  climber.addImage(climberImg);
  climber.velocityY =10;
  doorgroup.add(door);
}
}