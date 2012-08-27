Crafty.c('GameObject', {
    inScreen: function() {
        return this.within(-this.w, -this.h, Crafty.w+this.w, Crafty.h+this.h);
    },

    moveTo: function(x, y) {
        this.attr({x:x, y:y});
    },

    rotate: function(th) {
        this.attr({rotation:th})
    }
});