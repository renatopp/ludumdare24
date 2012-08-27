Crafty.scene("menu", function () {
    Crafty.background("rgb(100, 149, 237)");
    Crafty.audio.play("music", -1, 0.3)

    Crafty.e("2D, DOM, Text")
        .origin("center")
        .attr({x:0, y:200, h:200, w:Crafty.w})
        .text('Hungry Flies')
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

    Crafty.e("2D, Canvas, Image")
        .image("assets/img/instructions.png")
        .attr({x:220, y:400});

    function onClick() {
        Crafty.removeEvent(this, Crafty.stage.elem, "mousedown", onClick);
        startLevel();
    }

    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", onClick);
});