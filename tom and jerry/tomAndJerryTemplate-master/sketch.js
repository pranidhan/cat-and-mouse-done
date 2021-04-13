
    var cat ,catImage,mouseImage,garden,gardenImage;



    function preload() {
        //load the images here

    catRunnimgAnimation=loadAnimation("images/cat2.png","images/cat3.png");
    mouserunningAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");
    cheesemouse=loadAnimation("images/mouse1.png");
    catSitting=loadAnimation("images/cat1.png");
    catStanding=loadAnimation("images/cat4.png");
    mouseStanding=loadAnimation("images/mouse4.png");
    gardenImage=loadImage("images/garden.png");


    }

    function setup(){
       
        createCanvas(1000,1000);

        //create tom and jerry sprites here

    

    cat = createSprite(700,875,20,20);
    cat.addAnimation("Sitting",catSitting);
    cat.scale=0.1;

    mouse = createSprite(200,875)
    mouse.addAnimation("cheese",cheesemouse)
    mouse.scale=0.1;

    }

    function draw() {

        background(gardenImage);
        //Write condition here to evalute if tom and jerry collide

        
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX=0;
        cat.addAnimation("catLastImage",catStanding);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",  mouseStanding);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");


        }
        

        drawSprites();
    }


    function keyPressed(){



        if(keyCode===LEFT_ARROW){
            cat.velocityX=-2;
            cat.addAnimation("running",catRunnimgAnimation);
            cat.changeAnimation("running",catRunnimgAnimation);

            mouse.addAnimation("Mrunning",mouserunningAnimation);
            mouse.changeAnimation("Mrunning",mouserunningAnimation);
        }
    }
    //For moving and changing animation write code here




    
