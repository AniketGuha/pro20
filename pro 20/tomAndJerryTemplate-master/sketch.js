
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("sleepingCat",cat1)
    cat.scale=0.2

    mouse=createSprite(200,600)
    mouse.addAnimation("notStandingMouse",mouse1)
    mouse.scale=0.1

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2)
{
    cat.velocityX=0
    cat.addAnimation("firstImage",cat4)
 cat.x=300
 cat.scale=0.2   
 cat.changeAnimation("firstImage")
 mouse.addAnimation("mouseLastImage",mouse4)
 mouse.scale=0.1
 mouse.changeAnimation("mouseLastImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==LEFT_ARROW){
cat.velocityX =-5
cat.addAnimation("fitCat",cat2)
cat.changeAnimation("fitCat")

mouse.addAnimation("teasingMouse",mouse2)
mouse.changeAnimation("teasingMouse")

}

}
