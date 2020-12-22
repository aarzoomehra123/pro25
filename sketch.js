var ground;
var paperObject;
var trash
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function setup() {
	createCanvas(1000, 900);

	engine = Engine.create();
	world = engine.world;

	trash = new Trash(870,600);

	 paperObject=new Paper(100,80,20);
	ground=new Ground(width/2,670,width,20);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");

  trash.display();
   paperObject.display();
   ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25,y:-13});
	   
	}
   }