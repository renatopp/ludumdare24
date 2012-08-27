Crafty.scene("level", function () {
    Crafty.background("rgb(100, 149, 500)");

    evolInit();
    // Crafty.audio.play("music");

    // PLAYER
    Crafty.player = Crafty.e("Canvas, Player")
        .player({x: Crafty.w/2-24, y: Crafty.h-64, z: 1})

    Crafty.score = 0;
    Crafty.flies = 0;


    // TEXTS
    Crafty.txtScore = Crafty.e("2D, DOM, Text")
        .attr({x: 10, y: 10, w:100, h:100})
        .text(function () { 
            return "Score: "+Crafty.score +"<br>"+
                   "Flies: "+Crafty.flies +"<br>"; 
        });



    // HANDLER
    Crafty.__mouseHandler = Crafty.e("2D, Mouse")
        .attr({x:0, y:0, w:Crafty.w, h:Crafty.h, z:999})
        .bind("EnterFrame", onEnterFrame)
        .bind("MouseMove", onMouseMove)
        .bind("MouseDown", function(event) {
            if (event.mouseButton == Crafty.mouseButtons.LEFT) {
                Crafty.player.fire();
            } else 
            if (event.mouseButton == Crafty.mouseButtons.RIGHT) {
                Crafty.player.detonate();
            }
        });
});

lose = function() {
    Crafty.player.destroy();
    Crafty.txtScore.destroy();
    Crafty.__mouseHandler.destroy();
    scoreLevel();
}

onEnterFrame = function(event) {
    if (Crafty.flies >= MAX_FLIES) {
        lose();
    }


    addEnemy();

    Crafty.txtScore.text(function () { 
        return "Score: "+ Crafty.score +"<br>"+
               "Flies: "+ Crafty.flies +"<br>"; 
    });

}

onMouseMove = function(event) {
    Crafty.MousePos = {x:event.layerX, y:event.layerY};
    // console.log(event);
}

addEnemy = function() {
    if (Math.random() < FOE_SPAWN_CHANCE && Crafty("Foe").length < MAX_FOES) {
        var x = 40+Math.random()*(Crafty.w-80)

        var foe = Crafty.e("Canvas, Foe")
            .foe({x: x, y: 0, z: 1})
    }
}



