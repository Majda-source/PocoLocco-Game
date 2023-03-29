class World {
    character = new Charachter();
    landmine = new Landmine();
    level = level1;
    cvs;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    endbossStatusBar = new EndbossStatusBar();
    youWin = new OutroScreen('img/9_intro_outro_screens/game_over/game over!.png');
    youLost = new OutroScreen('img/9_intro_outro_screens/game_over/you lost.png');
    endBoss = this.level.enemies[12];
    ThrowablObjects = [];
    intervals = [];
    /**all sounds */
    chickenHurt_sound = new Audio('audio/chickenHurt.mp3');
    pepeHurt_sound = new Audio('audio/pepeHurt.mp3');
    bomb_sound = new Audio('audio/boom.mp3');
    youLost_sound = new Audio('audio/youLost.mp3');
    youWin_sound = new Audio('audio/youWin.mp3');
    healed_sound = new Audio('audio/healing.mp3');
    ohNo_sound = new Audio('audio/oh_No.mp3');
    coin_sound = new Audio('audio/coin_collect.mp3');
    splash_sound = new Audio('audio/splash.mp3');
    collectBottle_sound = new Audio('audio/collectBottle.mp3');
    chicksHurt_sound = new Audio('audio/chicksHurt.mp3');
    bigFight_sound = new Audio('audio/fightEndboss.mp3')

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.cvs = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.pushIntervals();
    }


    setWorld() {
        this.character.setedWorld = this;
    }


    /**
     * defines all functions, wich has to be checked during the game
     */
    run() {
        this.quickIntervalls = setInterval(() => {
            this.checkCollisionWithLandmine();
            this.checkCollisionWithBottles();
            this.checkChickenHurt();
            this.checkEndbossHurt();
            this.setEndbossAppearance();
            this.checkCollisionWithFirstAid();
            this.checkCollisionWithCoins();
            this.checkThrowObjects();
        }, 200);
        this.normalIntervalls = setInterval(() => {
            
            this.checkCharacterHurt();
        }, 400);
    }


    /**
     * Pushes multiple intervals to the intervals array.
     */
    pushIntervals() {
        this.intervals.push(this.quickIntervalls);
        this.intervals.push(this.normalIntervalls);
        this.intervals.push(this.character.moveCharacter);
        this.intervals.push(this.character.animeCharacter);
    }

    /**
     * checks, if chicken are hurt
     */
    checkChickenHurt() {
        this.chickenHurtByBottle();
        this.chickenSquashed();
    }


    /**
     * checks, if enemies are hurt by every bottle and set damage
     */
    chickenHurtByBottle() {
        for (let i = 0; i < this.ThrowablObjects.length; i++) {
            const bottle = this.ThrowablObjects[i];

            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle) && !enemy.deadChicken) {
                    if (enemy instanceof Chicken || enemy instanceof Chicks) {
                        this.enemyKilled(enemy);
                    }
                }
            })
        }
    }


    /**checks, if chicken are squashed by character and set damage */
    chickenSquashed() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)
                && this.character.isAboveGround()
                && !enemy.deadChicken
                && this.character.speedY < 0) {
                if (enemy instanceof Chicken || enemy instanceof Chicks) {
                    this.enemyKilled(enemy);
                }
            }
        })
    }


    /**set damage by killing an enemy
     * @param{object} enemy - chicken, that are killed by bottle or squashed
    */
    enemyKilled(enemy) {
        enemy.deadChicken = true;
        enemy.alive = false;
        enemy.img = enemy.DeadImages;
        if (enemy instanceof Chicken) {
            this.chickenHurt_sound.play();
            this.chickenHurt_sound.volume = 0.1;
        } else if (enemy instanceof Chicks) {
            this.chicksHurt_sound.play();
            this.chickenHurt_sound.volume = 0.2;
        }
    }


    /** checks, if the big chicken (endboss) is hurt by bottles and set reaction of big chicken*/
    checkEndbossHurt() {
        this.ThrowablObjects.forEach((object) => {
            if (this.endBoss.isColliding(object)) {
                this.decreaseHealthOfEndboss();
                //this.endBoss.moveFaster();
            }
        });
    }


    decreaseHealthOfEndboss() {
        this.endBoss.hit();
        this.endbossStatusBar.setPercentage(this.endBoss.energy);
    }


    /**set at wich x-axis the endboss will appear*/
    setEndbossAppearance() {
        if (this.character.x > 2600) {
            this.endBoss.readyToFight = true;
            this.bigFight_sound.play();
            this.bigFight_sound.volume = 0.5;
        }
    }


    /**animate thrown bottles*/
    checkThrowObjects() {
        if (this.keyboard.D && this.character.bottleStatus >= 10) {
            let bottle = new ThrowablObject(this.character.x + 50, this.character.y + 50);
            this.ThrowablObjects.push(bottle);
            this.character.decreaseBottleStatus();
            this.bottleBar.setPercentage(this.character.bottleStatus);
            this.smashedBottleSound(bottle);
        }
    }


    /**
     * set bottle sound
     * @param {object} bottle - bottle that hits
     */
    smashedBottleSound(bottle) {
        setTimeout(() => {
            this.splash_sound.play();
            this.splash_sound.volume = 0.2;
        }, 800)
    }


    /**checks, if bottles are collected*/
    checkCollisionWithBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectedBottle();
                this.bottleBar.setPercentage(this.character.bottleStatus);
                let bottleAmount = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(bottleAmount, 1);
                this.collectBottle_sound.play();
                this.collectBottle_sound.volume = 0.2;
            }
        });
    }


    /**checks if firstAid can be collected*/
    checkCollisionWithFirstAid() {
        this.level.firstAid.forEach((firstAid) => {
            if (this.character.isColliding(firstAid)) {
                this.canAffordFirstAid(firstAid);
            }
        });
    }


    /**
     * @param {object} firstAid - firstaid, that can be collected
     */
    canAffordFirstAid(firstAid) {
        if (this.character.coinStatus >= 40) {
            this.character.increaseHeartStatus();
            let i = this.level.firstAid.indexOf(firstAid);
            this.level.firstAid.splice(i, 1);
            this.statusBar.setPercentage(this.character.energy);
            this.healed_sound.play();
            this.healed_sound.volume = 0.2;
            this.coinBar.setPercentage(this.character.coinStatus -= 40);
        }
    }


    /**
     * checks if character collided with a landmine and set damage
     */
    checkCollisionWithLandmine() {
        setInterval(() => {
            this.level.landmine.forEach((landmine) => {
                if (this.character.isColliding(landmine) && !this.character.isDead()) {
                    this.character.walking_sound.pause();
                    this.character.energy = 0;
                    this.statusBar.setPercentage(this.character.energy);
                    this.bomb_sound.play();
                    this.bomb_sound.volume = 0.3;
                    this.character.img = this.character.ExplosionImages;
                }
            });
        }, 200);
    }


    // checks if charcter got hurt by chicken, chicks or endboss
    checkCharacterHurt() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && enemy.alive && !this.character.isDead()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.pepeHurt_sound.play();
                this.pepeHurt_sound.volume = 0.3;
            }
        });
    }


    // checks if coins can be collected
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.increaseCoinStatus();
                this.coinBar.setPercentage(this.character.coinStatus);
                this.coin_sound.play();
                this.coin_sound.volume = 0.2;
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
            }
        });
    }


    /**
     * draw all elements
     */
    draw() {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjects();
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addFixedObjectsToMap();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        this.checkEndScreen();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }


    /**
     *  adds various objects to a map
     */
    addObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.warningSign);
        this.addObjectsToMap(this.level.skeleton);
        this.addObjectsToMap(this.level.skull);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.landmine);
        this.addObjectsToMap(this.level.firstAid);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.ThrowablObjects);
    }


    addFixedObjectsToMap() {
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.addEndbossStatusBar();
    }


    /**
     *  takes an array of objects and adds each object to a map using the addToMap function.
     * @param {object[]} objects - An array of objects to be added to the map
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
    * show health-Statusbar of endboss, when it appears
    */
    addEndbossStatusBar() {
        if (this.endBoss.readyToFight == true) {
            this.addToMap(this.endbossStatusBar);
        }
    }


    /**
     * checks if turned around and draw object 
     * @param {movabelobject} mo - character (or enemy)
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawBorder(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * flips an image on the x-axis.
     * @param {object} mo  - The object (character) that contains the image to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    /**checks if game is over and show endscreen*/
    checkEndScreen() {
        if (this.endBoss.isDead()) {
            this.showEndScreen(this.youWin);
            this.youWin_sound.play();
            this.youWin_sound.volume = 0.3;
        } else if (this.character.isDead() || (this.endBoss.x < 100)) {
            this.showEndScreen(this.youLost);
            this.youLost_sound.play();
            this.youLost_sound.volume = 0.3;
        }
    }


    /**
     * 
     * @param {object} result - youWin- or youLost-img
     */
    showEndScreen(result) {
        this.addToMap(result);
        this.bigFight_sound.pause();
        setTimeout(() => {
            this.stopEnemies();
        }, 600);

        this.clearAllIntervals();
        setTimeout(() => {
            gameIsOver();
        }, 3000);
    }

    /**stop enemies from moving forward */
    stopEnemies() {
        this.level.enemies.forEach(enemy => {
            enemy.speed = 0;
        });
    }


    /**
     * clear all pushed intervals
     */
    clearAllIntervals() {
        for (let i = 0; i < this.intervals.length; i++) {
            clearInterval(this.intervals[i]);
        }
    }
}





