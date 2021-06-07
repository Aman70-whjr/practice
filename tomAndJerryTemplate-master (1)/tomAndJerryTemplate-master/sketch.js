var cat,catI,rat,ratI, bg,cat2,rat2,catlast

function preload() {
    //load the images here
bg=loadImage("images/garden.png")
    catI=loadAnimation("images/cat2.png","images/cat3.png")
  cat2=loadImage("images/cat1.png")
ratI=loadImage("images/mouse1.png")
rat2=loadAnimation("images/mouse2.png" , "images/mouse3.png" , "images/mouse4.png")
catlast=loadImage( "images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addImage(cat2)    
    cat.scale=0.2

    rat=createSprite(200,600)
    rat.addImage(ratI)
    rat.scale=0.2


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width-rat.width)/2){
    cat.addAnimation("catI", catI)
    cat.x=300
    cat.velocityX=0
    cat.scale=0.2
    cat.changeAnimation("catI")
    rat.addAnimation("rat2")
    rat.scale=0.2
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.changeAnimation("catI",cat2)
    

    rat.addAnimation("rat2")
    
    rat.changeAnimation("rat2")

} 


  //For moving and changing animation write code here                   


}
