const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rightSide,groundObj,leftSide;
var world;
var radius = 40;

function setup() {
	createCanvas(600,250);
	rectMode(CENTER);
	//crear los cuerpos aquí.
	engine = Engine.create();
	world = engine.world;
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	
	groundObj= new Ground(width/2,670,width,20);
  	leftSide = new Ground(1100,600,20,120);
  	rightSide = new Ground(10,200,20,400);
	
	Engine.run(engine);
}


function draw() {
	background("black");
  	rectMode(CENTER);
 	
	ellipse(ball.position.x,ball.position.y,radius,radius);
  	
  	

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85	});
	}
}



