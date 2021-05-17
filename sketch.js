var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12, wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50;
var bg,bg_Image;
var girl,girl_Image;
var robot,robot_Image;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var player, player_Image;

function preload() {
  bg_Image = loadImage("bg3.png");
  player_Image = loadImage("ghost.png");
}

function setup() {
  createCanvas(1000,1000);
  
  bg = createSprite(300,300);
  bg.addImage(bg_Image);
  bg.scale = 3.9;

  player = createSprite(50,50);
  player.addImage(player_Image);
  player.scale = 0.2;
  
  wall1 = createSprite(150,45,15,90);
  wall1.shapeColor = "red";
  
  wall2 = createSprite(43,130,85,15);
  wall2.shapeColor = "red";
  
  wall3 = createSprite(250,120,15,90);
  wall3.shapeColor = "red";
  
  wall4 = createSprite(318,70,150,15);
  wall4.shapeColor = "red";
  
  wall5 = createSprite(140,180,85,15);
  wall5.shapeColor = "red";
  
  wall6 = createSprite(185,223,15,100);
  wall6.shapeColor = "red";
  
  wall7 = createSprite(240,280,125,15);
  wall7.shapeColor = "red";
  
  wall8 = createSprite(300,323,15,100);
  wall8.shapeColor = "red";
  
  wall9 = createSprite(61,360,120,15);
  wall9.shapeColor = "red";
  
  wall10 = createSprite(81,320,15,90);
  wall10.shapeColor = "red";
  
  wall11 = createSprite(300,250,15,90);
  wall11.shapeColor = "red";
  
  wall12 = createSprite(400,113,15,100);
  wall12.shapeColor = "red";
  
  wall13 = createSprite(457,70,100,15);
  wall13.shapeColor = "red";
  
  wall14 = createSprite(400,70,100,15);
  wall14.shapeColor = "red";
  
  wall15 = createSprite(400,20,15,90);
  wall15.shapeColor = "red";
  
  wall14 = createSprite(387,260,160,15);
  wall14.shapeColor = "red";
  
  wall15 = createSprite(460,215,15,100);
  wall15.shapeColor = "red";
  
  wall16 = createSprite(387,260,160,15);
  wall16.shapeColor = "red";
  
  wall17 = createSprite(528,160,150,15);
  wall17.shapeColor = "red";
  
  wall18 = createSprite(300,130,100,15);
  wall18.shapeColor = "red";
  
  wall19 = createSprite(720,42,15,90);
  wall19.shapeColor = "red";
  
  wall20 = createSprite(387,260,160,15);
  wall20.shapeColor = "red";
  
  wall21 = createSprite(550,330,100,15);
  wall21.shapeColor = "red";
  
  wall22 = createSprite(387,260,160,15);
  wall22.shapeColor = "red";
  
  wall23 = createSprite(920,260,160,15);
  wall23.shapeColor = "red";

  wall24 = createSprite(660,247,130,15);
  wall24.shapeColor = "red";

  wall25 = createSprite(600,300,15,120);
  wall25.shapeColor = "red";

  wall26 = createSprite(600,122,15,90);
  wall26.shapeColor = "red";

  wall27 = createSprite(658,80,130,15);
  wall27.shapeColor = "red";

  wall28 = createSprite(993,175,15,180);
  wall28.shapeColor = "red";

  wall29 = createSprite(930,80,180,15);
  wall29.shapeColor = "red";

  wall30 = createSprite(720,207,15,90);
  wall30.shapeColor = "red";

  wall31 = createSprite(762,160,100,15);
  wall31.shapeColor = "red";
}

function draw() {
  background("green")
  drawSprites();
}