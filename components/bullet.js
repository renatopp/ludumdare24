Crafty.c('Bullet', {
    speed: 0,
    direction: 0,

    bullet: function(attr, direction, speed) {
        this.speed = speed || 5;
        this.direction = direction || randomDirection();
        this.requires("2D, Collision, GameObject, SBubble")
            .attr(attr)
            .bind("EnterFrame", this._enterFrame)
            .bind('Moved', this._moved);
            // .onHit("enemy", function() {});

        return this;
    },

    _enterFrame: function() {
        this._th = this._th + this._speed;
        
        data = {x:this.x, y:this.y}
        var x = this.x + this.direction.x*this.speed;
        var y = this.y + this.direction.y*this.speed;

        this.moveTo(x, y);
        this.trigger('Moved', data)
    },

    _moved: function(from) {
        if (!this.inScreen()) {
            this.destroy();
        }
    }
});
