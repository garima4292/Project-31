const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld;
var ground;
var division = [];
var plinko = [];
var particle = [];

function setup() {

  createCanvas(500,800);
  myengine = Engine.create();
  myworld = myengine.world;


  ground = new Ground(250,780,500,40);
  
  
  for(i=0;i<6;i=i+1){
    division[i] = new Division(100*i,600,20,350);
  }

  for(i=0;i<13;i=i+1){
    plinko[i]=[];
    for(j=0;j<4;j=j+1){
       plinko[i][j] = new Plinko(15+(50*i),130+(50*j),10);
    }
  }

  
}


function draw() {
  background("aquamarine");  
  Engine.update(myengine);
  ground.display();

  for(i=0;i<6;i=i+1){
    division[i].display();
  }

  for(i=0;i<13;i=i+1){
    for(j=0;j<4;j=j+1){
      plinko[i][j].display();
    }
  }
  
  
  if(frameCount%60===0){
    particle.push(new Particle(random(180,220),10,10));
  }
  

  for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }
  
}