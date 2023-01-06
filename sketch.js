var player1,player1Img,player2,player2Img
var background, backgroundImg
var referee, refereeImg
var ball, ballImg
var table, tableImg


function preload(){

  player1Img = loadImage("assets/player1.png")
  player2Img = loadImage("assets/player2.png")
  refereeImg = loadImage("assets/referee.gif")
  ballImg = loadImage("assets/ball.png")
  tableImg = loadImage("assets/pingpongtable.png")
}

function setup(){

  createCanvas(windowWidth,windowHeight)

  player1 = createSprite(width/2 - 390,height - 500)
  player1.addImage("player1.jpg", player1Img)
  player1.scale = 0.4

  
  player2 = createSprite(width/2 + 260,height - 500)
  player2.addImage("player2.jpg", player2Img)
  player2.scale = 1.2
   

  table = createSprite(width/2 -50,height/2 -50,600,800)
  table.addImage("pingpongtable", tableImg)

  ball = createSprite(width/2 - 65,height - 490)
  ball.addImage("ball.png", ballImg)
  ball.scale = 0.1

  

  ball.velocityX = 6
  ball.velocityY = 3
}

function draw() {
  
  background(255);
  
  createEdgeSprites()

  drawSprites()

  player2.y = World.mouseY

  table.depth = player1.depth
  player1.depth += 1 
  player2.depth += 1
  ball.depth += 1

  
  ball.bounceOff(player2)
  ball.bounceOff(player1)
  ball.bounceOff(edges)

  player1.y = ball.y
         
}




         



  
