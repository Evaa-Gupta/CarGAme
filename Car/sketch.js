var playercount,database,form,player,game,car1,car2, car3, car4, allplayers, cars
var gamestate=0
var distance=0
function preload(){
bg=loadImage("images/background.png")
c1=loadImage("images/car1.png")
c2=loadImage("images/car2.png")
c3=loadImage("images/car3.png")
c4=loadImage("images/car4.png")
track=loadImage("images/track.jpg")
ground=loadImage("images/ground.png")
reset=loadImage("images/reset.png")
title=loadImage("images/title.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database()
game = new Game()
game.readgamestate()
game.startgamestate()
}
function draw(){
background(bg)
if (playercount==4){
    
    game.writegamestate(1)
}
if (gamestate==1){
game.playgamestate()
}
}