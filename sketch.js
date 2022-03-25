const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5,particle6,particle7,particle8,particle9,particle10;
var particle11,paricle12,particle13,particle14,particle15;
var particle16, particle17, particle18, particle19, particle20;
var rotator1, rotator2, rotator3;
var block1, block2;
var wall1, wall2;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(150,400,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(350,400,150,20,plane_options);
    World.add(world,block2);

    //created multiple of particle bodies 
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }

    var wall_options = {
      isStatic: true
    }


    particle1 = Bodies.circle(220,10,15,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(220,10,15,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(225,10,15,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(230,10,15,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle5);
    particle6 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle6);
    particle7 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle7);
    particle8 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle8);
    particle9 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle9);
    particle10 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle10);
    particle11 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle11);
    particle12 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle12);
    particle13 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle13);
    particle14 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle14);
    particle15 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle15);
    particle16 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle16);
    particle17 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle17);
    particle18 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle18);
    particle19 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle19);
    particle20 =Bodies.circle(230,10,15,particle_options);
    World.add(world,particle20);


    wall1 = Bodies.rectangle(545,260, 10, 660, wall_options);
    World.add(world, wall1);

    wall2 = Bodies.rectangle(5,260, 10, 660, wall_options);
    World.add(world, wall2);

    var rotator_options={
      // isStatic=true
      // isStatic true
      //isStatic:false
       isStatic:true
    };

    // rotator1 = rectangle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

    // rotator1 = Bodies.rectangle();
    // World.add(world,rotator1);

    // rotator1 = Bodies.circle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

    rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator1);

    rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator3);

    //styling the bodies here
    fill("red");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightpink");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  //created shape for all the paticles
  ellipse(particle1.position.x,particle1.position.y,15);
  ellipse(particle2.position.x,particle2.position.y,15);
  ellipse(particle3.position.x,particle3.position.y,15);
  ellipse(particle4.position.x,particle4.position.y,15);
  ellipse(particle5.position.x,particle5.position.y,15);
  ellipse(particle6.position.x,particle6.position.y,15);
  ellipse(particle7.position.x,particle7.position.y,15);
  ellipse(particle8.position.x,particle8.position.y,15);
  ellipse(particle9.position.x,particle9.position.y,15);
  ellipse(particle10.position.x,particle10.position.y,15);
  ellipse(particle11.position.x,particle11.position.y,15);
  ellipse(particle12.position.x,particle12.position.y,15);
  ellipse(particle13.position.x,particle13.position.y,15);
  ellipse(particle14.position.x,particle14.position.y,15);
  ellipse(particle15.position.x,particle15.position.y,15);
  ellipse(particle16.position.x,particle16.position.y,15);
  ellipse(particle17.position.x,particle17.position.y,15);
  ellipse(particle18.position.x,particle18.position.y,15);
  ellipse(particle19.position.x,particle19.position.y,15);
  ellipse(particle20.position.x,particle20.position.y,15);

  rect(wall1.position.x,wall1.position.y,10,660);
  rect(wall2.position.x,wall2.position.y,10,660);

  //created shape for all the rotators
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}
