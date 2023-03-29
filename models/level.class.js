class Level{
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    landmine;
    firstAid;
    warningSign;
    skull;
    level_end_x = 3500;

    constructor(en, cl, bg, co, bo, la, firstAid, warningSign, skeleton, skull){
        this.enemies = en;
        this.clouds = cl;
        this.backgroundObjects = bg;
        this.coins = co;
        this.bottles = bo;
        this.landmine = la;
        this.firstAid = firstAid;
        this.warningSign = warningSign;
        this.skeleton = skeleton;
        this.skull = skull;
    }
}