class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    readplayercount(){
        database.ref("playerCount").on("value",function(d){
            playercount=d.val()
            //d = database
        })
}
    writeplayercount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

writenamedistance(){
    var playerindex="players/player"+this.index
    
    database.ref(playerindex).set({
        playerName: this.name, 
        distance: this.distance 
    })
}

static readallplayersinfo(){
    database.ref("players").on("value",function(d){
        allplayers=d.val()
    })
} 
}
//static function does not depend on an object creation.
