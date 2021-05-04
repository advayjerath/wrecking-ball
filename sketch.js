const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, polygon_img, Polygon, stand, SlingShotObj;
function preload(){
  polygon_img=loadImage("polygon1.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,800);
 // createSprite(400, 200, 50, 50);

  ground=new Ground(width/2,790,width,20)
  fill("blue")
box1=new Box(900,100,70,70)
box2=new Box(900,100,70,70)
box3=new Box(900,100,70,70)
box4=new Box(900,100,70,70)
box5=new Box(900,100,70,70)
box6=new Box(900,100,70,70)
fill("yellow")
box7=new Box(830,100,70,70)
box8=new Box(830,100,70,70)
box9=new Box(830,100,70,70)
box10=new Box(830,100,70,70)
box11=new Box(830,100,70,70)
box12=new Box(830,100,70,70)

 

   
   
     
    
    



     Polygon=Matter.Bodies.polygon(50, 300, 6, 20);
     World.add(world,Polygon);
     
     SlingShotObj=new SlingShot(this.Polygon,{x:100,y:300});
     Engine.run(engine);
   
}

function draw() {
  background("red");  
  Engine.update(engine);
  
  ground.display();
  
     imageMode(CENTER);
     
     image(polygon_img,Polygon.position.x,Polygon.position.y,40,40); 

 
  
 
  
  
 // polygon(Polygon.position.x,Polygon.position.y,6,20);
 SlingShotObj.display();
 box1.display()
 box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
 box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()


 
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(this.Polygon, {x:100,y:300})
		SlingShotObj.attach(Polygon);
	}
}
function mouseDragged()
{
	Matter.Body.setPosition(this.Polygon, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	SlingShotObj.fly();
}