Crafty.c('LinearMoviment', {
    speed: 0,
    direction: 0,

    moviment: function(angle, _, speed) {
        var vec = {x:0, y:1}
        this.direction = rotateVector(vec, angle*randomSign()*LINEAR_MAX_DEVIATION);
        this.speed = speed || FOE_SPEED;

        this.requires("2D, Collision, GameObject")
    }, 

    mv_update: function () {
        this._th = this._th + this._speed;
        
        var x = this.x + this.direction.x*this.speed;
        var y = this.y + this.direction.y*this.speed;
        this.moveTo(x, y);
    },

    mv_onMove: function (from) {
        if (!this.within(0, -Crafty.h, Crafty.w, Crafty.h*2)) {
            this.moveTo(from.x, this.y);
            this.direction = {x:0, y:1}
        }
    }
});