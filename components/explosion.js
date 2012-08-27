Crafty.c('Explosion', {
    explosion: function(attr, n) {
        n = n || 1
        this.requires("2D, GameObject, SpriteAnimation, SExplosion")
            .origin('center')
            .attr(attr)
            .animate('explode', 0, 0, 10)
            .bind("AnimationEnd", function(){
                this.destroy();
            })
            .animate('explode', 10, 0)

        Crafty.audio.play("bubble");
        return this;
    },
});
