Crafty.scene("loading", function () {
    Crafty.background("rgb(100, 149, 500)");

    // Crafty.audio.add("music", ["assets/sfx/run_128.mp3", 
    //                            "assets/sfx/run_128.ogg",
    //                            "assets/sfx/run_128.wav"]);

    // Crafty.audio.add("explosion", ["assets/sfx/explosion-03.mp3", 
    //                                "assets/sfx/explosion-03.ogg",
    //                                "assets/sfx/explosion-03.wav"]);
    Crafty.audio.add("music", "assets/sfx/track.ogg");
    Crafty.audio.add("bubble", "assets/sfx/pop.ogg");
    Crafty.audio.add("paun", "assets/sfx/paun.ogg");

    Crafty.load([
            "assets/img/instructions.png",

            "assets/img/bubble.png",
            "assets/img/moscona.png",
            "assets/img/mosca.png",
            "assets/img/mosca-back.png",
            "assets/img/turret.png",
            "assets/img/turret-base.png",
            "assets/img/explosion2.png",
        ],
        function(e) { menuLevel(); },
        function(e) {},
        function(e) {}
    );

    Crafty.sprite(64, "assets/img/turret.png", {STurret: [0, 0]})
    Crafty.sprite(64, "assets/img/turret-base.png", {STurretBase: [0, 0]})
    Crafty.sprite(24, "assets/img/bubble.png", {SBubble: [0, 0]})
    Crafty.sprite(48, "assets/img/mosca.png", {SFoe: [0, 0]})
    Crafty.sprite(48, "assets/img/mosca-back.png", {SDeadFoe: [0, 0]})
    Crafty.sprite(64, "assets/img/explosion2.png", {SExplosion: [0, 0]})
});