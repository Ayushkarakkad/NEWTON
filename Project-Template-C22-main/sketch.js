const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 1,
		friction : 0.1
	  }

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(167,100,20,ball_options);
  World.add(world,ball5);

	Engine.run(engine);

	con = Matter.Constraint.create({
	bodyA : roof,
    bodyB : ball,
    lenght : 100,
    stiffness:0.7
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
	bodyA : roof,
    bodyB : ball2,
    lenght : 100,
    stiffness:0.7
	  });

	World.add(world,con2);

	con3 = Matter.Constraint.create({
	bodyA : roof,
    bodyB : ball3,
    lenght : 100,
    stiffness:0.7
	  });

	World.add(world,con3);

	con4 = Matter.Constraint.create({
	bodyA : roof,
    bodyB : ball4,
    lenght : 100,
    stiffness:0.7
	  });

	World.add(world,con4);

	con5 = Matter.Constraint.create({
	bodyA : roof,
    bodyB : ball5,
    lenght : 100,
    stiffness:0.7
	  });

	World.add(world,con5);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  line(roof.position.x+80,roof.position.y,ball.position.x,ball.position.y);
  line(roof.position.x+39,roof.position.y,ball2.position.x,ball2.position.y);
  line(roof.position.x+0,roof.position.y,ball3.position.x,ball3.position.y);
  line(roof.position.x-39,roof.position.y,ball4.position.x,ball4.position.y);
  line(roof.position.x-80,roof.position.y,ball5.position.x,ball5.position.y);
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,40)
  ellipse(ball2.position.x,ball2.position.y,40)
  ellipse(ball3.position.x,ball3.position.y,40)
  ellipse(ball4.position.x,ball4.position.y,40)
  ellipse(ball5.position.x,ball5.position.y,40)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }

    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.05,y:0});
    }
}