let level1;

function initLevel() {

    level1 = new Level(
        initEnemies(),
        [new Cloud(), new Cloud()],
        initBackground(),
        initCoins(),
        initBottles(),
        initLandmine(),
        initFirstAid(),
        [new WarningSign()],
        [new Skeleton()],
        [new Skulls()]
    );
}


function initEnemies() {
    return [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicks(),
        new Chicks(),
        new Chicks(),
        new Chicks(),
        new Chicks(),
        new EndBoss()
    ]
}


function initBackground(){
    return [
        new BackgroundObject('img/5_background/layers/air.png', -779 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', -779 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', -779 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', -779 * 2),

        new BackgroundObject('img/5_background/layers/air.png', -779),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -779),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -779),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -779),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 779),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 779),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 779),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 779),

        new BackgroundObject('img/5_background/layers/air.png', 779 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 779 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 779 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 779 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 779 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 779 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 779 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 779 * 3),

        new BackgroundObject('img/5_background/layers/air.png', 779 * 4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 779 * 4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 779 * 4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 779 * 4),

        new BackgroundObject('img/5_background/layers/air.png', 779 * 5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 779 * 5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 779 * 5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 779 * 5)
    ]
}


function initCoins(){
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}


function initBottles(){
    return [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ]
}


function initLandmine(){
    return [
        new Landmine(),
        new Landmine(),
        new Landmine()
    ]
}


function initFirstAid(){
    return [
        new FirstAid(),
        new FirstAid(),
        new FirstAid(),
        new FirstAid(),
        new FirstAid()
    ]
}