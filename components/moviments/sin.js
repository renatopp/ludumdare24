Crafty.c('SinMoviment', {
    speed: 0,
    waveLength: 0,
    waveAmplitude: 0,

    moviment: function(waveLength, waveAmplitude, speed) {
        this.waveLength = waveLength*SIN_DELTA_WAVE_LENGTH + SIN_MIN_WAVE_LENGTH;
        this.waveAmplitude = waveAmplitude*SIN_DELTA_WAVE_AMPLITUDE + SIN_MIN_WAVE_AMPLITUDE;
        this.speed = speed || FOE_SPEED;

        this.requires("2D, Collision, GameObject")
    }, 

    mv_update: function () {
        this._th = this._th + this._speed;
        
        var x = this.x + Math.sin(this.y/this.waveAmplitude)*this.waveLength;
        var y = this.y + this.speed*0.5; // 0.5 = SpeedModifier
        this.moveTo(x, y);
    },

    mv_onMove: function (from) {
        if (!this.within(0, -Crafty.h, Crafty.w, Crafty.h*2)) {
            this.moveTo(from.x, this.y);
        }
    }
});