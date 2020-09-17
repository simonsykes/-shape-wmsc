var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);



  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1100, 200, thickness, 200);
  wall.shapeColor="red";

}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var def=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (def>10){
      wall.shapeColor=color(255,0,0)
    }
    if (def<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}

function hasCollided (lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}