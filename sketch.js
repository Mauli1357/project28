
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies
	ground = new Ground(300, 580, 600, 20);

	boy = new Boy(150, 500, 200, 300);
	
	tree = new Tree(500, 400, 300, 400);

	stone = new Stone(50, 550, 30, 30);

	rope = new Rope(stone.body, {x:80, y:430});

	mango1 = new Mango(520, 380, 20, 20);
	mango2 = new Mango(400, 400, 20, 20);
	mango3 = new Mango(390, 300, 20, 20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display();
  boy.display();
  tree.display();
  rope.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	rope.fly();

}

