Crafty.scene("score", function () {
    Crafty.background("rgb(100, 149, 237)");

    Crafty.e("2D, DOM, Text")
        .origin("center")
        .attr({x:0, y:200, h:200, w:Crafty.w})
        .text('Score: '+Crafty.score)
        .css({
            "font-family":"Arial",
            "font-size":"48pt",
            "text-align":"center"
        });

    Crafty.e("2D, DOM, Text")
        .origin("center")
        .attr({x:0, y:300, h:200, w:Crafty.w})
        .text('Click anywhere to continue...')
        .css({
            "font-family":"Arial",
            "font-size":"12pt",
            "text-align":"center"
        });

    function onClick() {
        Crafty.removeEvent(this, Crafty.stage.elem, "mousedown", onClick);
        menuLevel();
    }

    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", onClick);
});