Crafty.c('Foe', {
    mov: 0,
    a: 0,
    b: 0,

    foe: function(attr) {
        this.requires("2D, Collision, GameObject, SFoe")
            .origin('center')
            .attr(attr)
            .bind("EnterFrame", this._enterFrame)
            .bind('Moved', this._moved);
        
        evolSetMoviment(this);

        return this;
    },

    die: function() {
        Crafty.score += 10;

        // Crafty.e("2D, Canvas, Explosion")
        //     .explosion({x:this.x-24, y:this.y-24, z:3}, 2)
        Crafty.audio.play("paun");

        evolAddScore(this.mov, this.y, this.a, this.b);
        Crafty.e("2D, Canvas, DeadFoe")
            .deadfoe({x:this.x, y:this.y});
        this.destroy();
    },

    land: function() {
        Crafty.flies += 1;
        evolAddScore(this.mov, this.y, this.a, this.b);
        this.destroy();
    },

    _enterFrame: function() {
        data = {x:this.x, y:this.y}
        this.mv_update();
        this.trigger('Moved', data);
    },

    _moved: function(from) {
        if (this.y > Crafty.h) {
            this.land();
        }

        this.mv_onMove(from);
    }
});