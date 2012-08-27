Crafty.c('Player', {
    player: function(attr) {
        this.requires("2D, GameObject, STurret")
            .origin(21, 48)
            .attr(attr)
            .bind("EnterFrame", this._enterFrame)

        this.base = Crafty.e("2D, Canvas, STurretBase")
            .attr({x:this.x-12, y:this.y+12, z:this.z-1});

        return this;
    },

    fire: function() {
        this.__clearBullets();

        if (Crafty.bullets.length < MAX_BULLETS) {
            var direction = normalize({
                x:(Crafty.MousePos.x - this.x-this.w/2),
                y:(Crafty.MousePos.y - this.y-this.h/2)
            });
            var attr = {x:this.x+12, y:this.y+30}

            bullet = Crafty.e("2D, Canvas, Bullet")
                .bullet(attr, direction);

            Crafty.bullets.push(bullet);
        }
    },

    detonate: function() {
        this.__clearBullets();

        if (Crafty.bullets.length > 0) {
            var bullet = Crafty.bullets.shift();

            foes = Crafty("Foe")
            for (var i=0; i<foes.length; i++) {
                var foe = Crafty(foes[i]);
                var d = magnitude({x:(foe.x-bullet.x+bullet.w), y:(foe.y-bullet.y+bullet.h)});
                if (d < BULLET_RADIUS) {
                    foe.die();
                }
            }

            Crafty.e("2D, Canvas, Explosion")
                .explosion({x:bullet.x-24, y:bullet.y-24, z:3})
            bullet.destroy();
        }
    },

    _enterFrame: function(event) {
        var x = (Crafty.MousePos.x - this.x-this.w/2-6+22);
        var y = (Crafty.MousePos.y - this.y-this.h/2);
        this.rotate(90+rad2deg(Math.atan2(y, x)));
    },

    __clearBullets: function() {
        for(var i=Crafty.bullets.length-1; i>=0; i--) {
            if (Crafty.bullets[i] === undefined || !Crafty.bullets[i].inScreen()) {
                Crafty.bullets.remove(i);
            }
        }
    },
});