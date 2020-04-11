var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect =createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect = createSprite(600,200,70,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (movingrect.x - fixedrect.x < movingrect.width/2+ fixedrect.width/2
  && fixedrect.x - movingrect.x < movingrect.width/2+ fixedrect.width/2
 && movingrect.y - fixedrect.y < movingrect.width/2+ fixedrect.width/2
  && fixedrect.y - movingrect.y < movingrect.width/2+ fixedrect.width/2)
  {
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
  }
  else
  {
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  }
  drawSprites();
}