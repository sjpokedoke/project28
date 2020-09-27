const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, ground, stone, boy, slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

function preload()
{
	boy=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(800,300)
	ground = new Ground(500,390,1000,20)
	stone = new Stone(155,300,60)
	mango1 = new Mango(600, 130, 50)
	mango2 = new Mango(620, 170, 40)
	mango3 = new Mango(670, 110, 60)
	mango4 = new Mango(670, 170, 50)
	mango5 = new Mango(720, 70, 40)
	mango6 = new Mango(730, 130, 60)
	mango7 = new Mango(750, 160, 30)
	mango8 = new Mango(780, 50, 50)
	mango9 = new Mango(800, 110, 50)
	mango10 = new Mango(820, 160, 40)
	mango11 = new Mango(870, 100, 50)
	mango12 = new Mango(900, 160, 60)
	slingshot = new Slingshot(stone.body,{x:170,y:280});


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  image(boy,200,330,100,200);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  slingshot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
  strokeWeight(1);
  textSize(15)
  text("Press space to play again", 100, 100);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function detectcollision(lstone, lmango){
  stoneBodyPosition = lstone.body.position
  mangoBodyPosition = lmango.body.position
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}
function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x: 155, y: 300})
    slingshot.attach(stone.body)
  }
}