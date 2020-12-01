const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine;
var myworld;
var ground;
var groundoptions;
var ball;
var balloptions;


function setup() {
  createCanvas(400,400);
 myengine=Engine.create();
 myworld=myengine.world;
groundoptions={
  isStatic:true
}
 ground=Bodies.rectangle(200,390,400,20,groundoptions);
 World.add(myworld,ground);
 balloptions={
  restitution:1.0
 }
ball=Bodies.circle(200,100,20,balloptions);
World.add(myworld,ball);

}
function draw() {
  background(0);  
  Engine.update(myengine);

rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

  
}