
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin;
var world;
var paperObject;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(100,400,40,50)


	dustbin1 =new Dustbin(390,610,20,100)
    dustbin2= new Dustbin(459,659,150,PI)
	dustbin3= new Dustbin(525,610,20,100)
	//Create the Bodies Here.
		
    ground1=new Ground(width/2,670,width,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
 
  drawSprites();
  dustbin1.display();
dustbin2.display();
dustbin3.display();
paperObject.display();
ground1.display();
}
function keyPressed(){

	if( keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	
	
	}
	
	
	
	
	
	 }
	 


