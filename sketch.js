
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Wall(400,200,500,50);
  rope1 = new Rope(bob1.body,roof.body);
	bob1 = new Bob(200,450,50);
  bob2 = new Bob(300,450,50);
  bob3 = new Bob(400,450,50);
  bob4 = new Bob(500,450,50);
  bob5 = new Bob(600,450,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
 
}



