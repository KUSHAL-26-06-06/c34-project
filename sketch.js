//Create variables here
var dog,happydog;
var database;
var foodS,foodstockS;
function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  dogImage1=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,200);
  dog.addImage(dogImage);
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);

}


function draw() {  
  BackGround(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage1);
  }
    
  drawSprites();
  
}

function readStock(data){
  foodS=data.val();

}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }
  
  database.ref('/').update({
     Food:x
  })
}



