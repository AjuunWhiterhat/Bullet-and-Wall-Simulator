var bullet,speed,weight;
var wall,thickness;
var bulletRightEdge,wallLeftEdge;
var damage;



function setup() {
  createCanvas(800,400);
  
  thickness = random(22,83);

  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(200,200,20,20);
  wall = createSprite(800,200,thickness,height/2);

  bullet.velocityX = speed;
}

function draw() {
  background =(255,255,255);

if(bullet.isTouching(wall)){
  bullet.velocityX = 0;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  bullet.collide(wall);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  console.log(damage);
  drawSprites();
}

function hasCollided(_bullet,_wall) {
    bulletRightEdge= _bullet.x +_bullet.width;
    wallLeftEdge = _wall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;

}