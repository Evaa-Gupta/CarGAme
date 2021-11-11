class Game{
    constructor(){

    }
    readgamestate(){
        //readgamestate is, using a value
       database.ref("gameState").on("value",function(d){
       gamestate=d.val()    
       })
    }

    writegamestate(state){
    //writegamestate is writing and changing the value on its own.
database.ref("/").update({
    gameState:state
})
    }



startgamestate(){
    if (gamestate==0){
    player = new Player() 
    player.readplayercount()

    form = new Form()
    form.display()
}

car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
car1.addImage("c1",c1)
car2.addImage("c2",c2)
car3.addImage("c3",c3)
car4.addImage("c4",c4)
cars = [car1, car2, car3, car4]

}
playgamestate(){
    form.hide()
    Player.readallplayersinfo()
    if (allplayers !== undefined){
        image(track,0, -windowHeight*4, windowWidth, windowHeight*5)
   var i= 0
   var x= 175
   var y

   for (var p in allplayers){
    i=i+1
    x=x+200
    y=windowHeight-allplayers[p].distance
    cars[i-1].x=x
    cars[i-1].y=y

    if (i==player.index){
camera.position.x=displayWidth/2
camera.position.y=cars[i-1].y
    }
   }
}
if (keyCode==38){
    player.distance+=10
player.writenamedistance()
}
drawSprites()
}

}
