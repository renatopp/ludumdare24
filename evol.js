EVOL_LIST = []

evolInit = function() {
    for (var i=0; i<EVOL_MAX_SLOTS; i++) {
        EVOL_LIST.push(evolGetRandomMoviment());
    }
}

evolAddScore = function(m, y, a, b) {
    score = y/Crafty.h;
    // console.log('Score: ' +score);
    if (score >= EVOL_LIST[0].score) {
        EVOL_LIST.shift();
        EVOL_LIST.push({mov: m, score: score, a: a, b: b});
        EVOL_LIST.sort(function (a,b) {return a.score-b.score});
    }
}

evolGetComponent = function(v) {
    if (v == 0)
        return "LinearMoviment";
    else if (v == 1)
        return "BouncerMoviment";
    else if (v == 2)
        return "SinMoviment";
}

evolGetRandomMoviment = function() {
    return {
        mov: randomInt(MAX_MOVIMENTS),
        score: -1,
        a: Math.random(),
        b: Math.random(),
    }
}

evolGetBestsMoviments = function() {
    var i = randomInt(EVOL_MAX_SLOTS);
    return EVOL_LIST[i];
}

evolSetMoviment = function(foe) {
    var evol;

    if (Math.random() < EVOL_RANDOM_SPAWN_CHANCE) {
        evol = evolGetRandomMoviment();
    } else {
        evol = evolGetBestsMoviments();
    }

    foe.mov = evol.mov;
    foe.addComponent(evolGetComponent(evol.mov));

    var a = evol.a;
    var b = evol.b;

    if (Math.random() < EVOL_MUTATION_CHANCE)
        a += randomBipolar()*EVOL_MUTATION_RATE;

    if (Math.random() < EVOL_MUTATION_CHANCE)
        b += randomBipolar()*EVOL_MUTATION_RATE;

    foe.moviment(a, b);

}