class Form
{
constructor(){
this.textBox=createInput("").attribute("placeholder","Enter your Nickname")
this.button=createButton("Lets Start Playing!")

this.title=createImg("images/title.png")
this.reset=createButton("")
this.reset.class("resetButton")
this.button.class("playButton")
this.textBox.class("textBox")
this.title.class("title")
}

hide(){
this.greeting.hide()
this.textBox.hide()
this.title.hide()
this.button.hide()
}
display(){
this.title.html("Racing Car Game!")
//so this techniccally means - form.title
this.title.position(windowWidth/2-400, windowHeight/2-250)
this.textBox.position(windowWidth/2-115, windowHeight/2-80)
this.button.position(windowWidth/2-115, windowHeight/2+30)
this.reset.position(windowWidth-100,20)

this.button.mousePressed(()=>{
player.name=this.textBox.value()
playercount++
player.index=playercount
player.writenamedistance()
player.writeplayercount(playercount)
this.button.hide()
this.textBox.hide()


this.greeting=createElement("h2")
this.greeting.html("Hi "+player.name+"!")
this.greeting.position(windowWidth/2-85, windowHeight/2-80)
})

this.reset.mousePressed(()=>{
    location.reload()
    player.writeplayercount(0)
    game.writegamestate(0)
    database.ref("players").remove()
})
}
}
