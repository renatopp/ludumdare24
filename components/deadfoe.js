Crafty.c('DeadFoe', {
    sign: 0,
    th: 0,

    deadfoe: function(attr) {
        this.requires("2D, Collision, GameObject, LinearMoviment, SDeadFoe")
            .origin('center')
            .attr(attr)
            .bind("EnterFrame", this._enterFrame)
            .moviment(0, 0, FOE_SPEED*3)

        this.sign = randomSign();
        this.th = Math.random()
        return this;
    },

    _enterFrame: function() {
        data = {x:this.x, y:this.y}
        this.mv_update();
        this.attr({rotation:this.rotation+this.th*this.sign})
        this.trigger('Moved', data);
    },

    _moved: function(from) {
        if (this.y > Crafty.h) {
            this.destroy();
        }

        this.mv_onMove(from);
    }
});