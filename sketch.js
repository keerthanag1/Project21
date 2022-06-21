
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball1
var ground;
var engine, world
var leftSide;
var rightSide;

function preload()
{

}

function setup() {
	createCanvas(1000,550);

	engine = Engine.create();
	world = engine.world;

var ball_options={
	isStatic:false,
	restitution:0.3
}

ground = new Ground(width/2,560,2000,20);
leftSide = new Ground(500,500,15,100);
rightSide = new Ground(700,500,15,100);
ball1 = new Ball(100,100,25);

	//Create the Bodies Here.
	ball = Bodies.circle(300,100,30,ball_options);
	World.add(world, ball)



	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS)
  
  
  ground.display();
  leftSide.display();
  rightSide.display();
  ball1.show();
  ellipse(ball.position.x, ball.position.y, 30, 30)
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(ball1.body, {x:0, y:0}, {x:0.06, y:0.06})
  }
}



