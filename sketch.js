const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine,world,object ;





function setup() {
  createCanvas(800,400);
engine = Engine.create() ;
world = engine.world;
var options = {
  isStatic:true
}
object = Bodies.rectangle (200,200,200,50,options) ;
World.add(world,object) ;

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine) ;
  rect(object.position.x,object.position.y,800,50);
 // drawSprites();
}