var wall1;
var wall2;
var wall3;
var car1; 
var car2;
var car3;
var speed1;
var speed2;
var speed3;

function setup() {
  createCanvas(1600,400);
  wall1=createSprite(1300, 300, 10, height/5);
  wall2=createSprite(1300, 200, 10, height/5);
  wall3=createSprite(1300, 100, 10, height/5);
  car1=createSprite(100, 300, 20, 20);
  car2=createSprite(100, 200, 20, 20);
  car3=createSprite(100, 100, 20, 20);
  speed1 = random(3,10);
  speed2 = random(3,10);
  speed3 = random(3,10);
}


function draw() {
  background(0,0,0);
 
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;

 if(wall1.x-car1.x<car1.width){
    car1.shapeColor="green";
    car1.velocityX=0;
 }
 else{
  car1.shapeColor="white";
  }
  if(wall2.x-car2.x<car2.width){
    car2.shapeColor="yellow";
    car2.velocityX=0;
  }
  else{
    car2.shapeColor="white";
    }
    if(wall3.x-car3.x<car3.width){
      car3.shapeColor="red";
      car3.velocityX=0;
    }
    else{
      car3.shapeColor="white";
      }  

  drawSprites();
}