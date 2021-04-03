//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;
var ground
var boy,boyImg
var package,packageImg
var score=0;
 function preload() {
  boyImg=loadImage("images/boy.png")
  packageImg=loadImage("images/package.png")

 }
function setup() {
 // engine  = Engine.create();
 // world = engine.world;
  createCanvas(800,400);
 boy=createSprite(200,334);
 boy.addImage(boyImg)
 boy.scale=0.1
ground=createSprite(400,385,800,30);
ground.shapeColor="brown"
 // ground=new Ground(400,385,800,30)
  //ground.x = ground.width /2;
  //ground.velocityX=-3

 
  
 // package=new Package(400,10);
 
packageSprite=createSprite(400,0,50,50)
  packageSprite.addImage(packageImg)
  packageSprite.scale=0.2
  packageGroup=new Group();
}

function draw() {
  background("lime");  
  noStroke();
        textSize(25)
        fill("white")
        text("Score:" + score, 700, 50)
       
      
  // packageSprite.x= package.position.x
  // packageSprite.y=package.position.y
  //ground.display()
  //package.display()
  spawnPackage()
  drawSprites()
  if(packageGroup.isTouching(boy)){
    packageGroup.destroyEach();
    score = score + 2;
  }
//if(package.position.x=384){
 // package.velocityY=0
//}
}

  
function keyPressed() {
  if (keyCode===RIGHT_ARROW) {
    boy.position.x=boy.position.x+10
      }
  if(keyCode===LEFT_ARROW){
    boy.position.x=boy.position.x-10
    
  }
  //if(keyCode===DOWN_ARROW){
  // packageSprite.velocityY=2
  //}
  
}
function spawnPackage(){
  if(frameCount%80===0){
    packageSprite=createSprite(random(100,600),10,50,50)
  packageSprite.addImage(packageImg)
  packageSprite.velocityY=2
  packageSprite.scale=0.2
  packageGroup.add(packageSprite);
  }
}




