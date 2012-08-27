
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function rotateVector(vec, d) {
    var theta = deg2rad(d);
    var c = Math.cos(theta);
    var s = Math.sin(theta);

    return {
        x: vec.x*c - vec.y*s,
        y: vec.x*s + vec.y*c
    }
}

function randomInt(f) {
    return Math.floor(Math.random()*f)
}

function randomBipolar() {
    return Math.random()*2-1;
}

function randomSign() {
    return sign(randomBipolar());
}

function randomDirection() {
    return normalize({x:randomBipolar(), y:Math.random()})
}

function magnitude(vec) {
    return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))
}

function normalize(vec) {
    m = magnitude(vec);
    return {x:(vec.x/m), y:(vec.y/m)}
}

function sign(value) {
    if (value < 0.0)
        return -1;
    else if (value > 0.0)
        return 1;
    else
        return 0;
}

function step(value, threshold) {
    if (value >= threshold)
        return 1;
    else
        return 0;
}

function clamp(value, min_value, max_value) {
    if (value > max_value)
        return max_value;
    else if (value < min_value)
        return min_value;
    else
        return value;
}

function deg2rad(d) {
    return d*0.017453292519943295;
}

function rad2deg(r) {
    return r*57.29577951308232;
}