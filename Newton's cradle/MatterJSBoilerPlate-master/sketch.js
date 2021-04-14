
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(200,100,275,20);

	paper1=new paper(110,300,35)
	paper2=new paper(150,300,35)
	paper3=new paper(190,300,35)
	paper4=new paper(230,300,35)
	paper5=new paper(270,300,35)

	sling1=new SlingShot(roof1.roof,paper1.paper);
	sling2=new SlingShot(roof1.roof,paper2.paper);
	sling3=new SlingShot(roof1.roof,paper3.paper);
	sling4=new SlingShot(roof1.roof,paper4.paper);
	sling5=new SlingShot(roof1.roof,paper5.paper);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  roof1.display();

  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();


  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  
 
}



