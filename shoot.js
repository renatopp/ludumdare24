window.onload = function () {
    initiliaze();
};

initiliaze = function() {
    var w = 640;
    var h = 640;

    Crafty.w = w;
    Crafty.h = h;
    Crafty.MousePos = {x:0, y:0}
    Crafty.init(w, h);
    Crafty.canvas.init();

    loadContent();
}

loadContent = function() {
    Crafty.player = null;
    Crafty.bullets = [];
    Crafty.foes = [];
    Crafty.explosions = [];

    Crafty.scene("loading");
}


menuLevel = function() {
    Crafty.scene("menu");
}

startLevel = function() {
    Crafty.scene("level");
}

scoreLevel = function() {
    Crafty.scene("score");
}

