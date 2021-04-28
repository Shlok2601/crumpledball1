
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(100,100,20)
	ground=new Ground(400,680,800,20)
	rect1=new Dustbin(700,650,200,20)
	rect2=new Dustbin(600,600,20,100)
	rect3=new Dustbin(800,600,20,100)
    

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85})
}
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 ground.display();
 rect1.display();
 rect2.display();
 rect3.display();
}

