const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onsling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
    block16=new Box(390,155,30,40);
    slingshot=new SlingShot(this.polygon,{x:100,y:200});

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    
}

function mouseDragged(){
    if(gameState!=="launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }   
}

function mouseReleased(){
    slingshot.fly();
    gameState="launch";

}

