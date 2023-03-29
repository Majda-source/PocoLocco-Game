class Charachter extends MovableObject {
    height = 350;
    y = 0;
    speed = 10;
    offsetTop = 140;
    offsetLeft = -10;
    offsetRight = 30;

    ExplosionImages = new Image();

    WalkingImages = ['img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'];

    JumpingImages = ['img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'];

    DeadImages = ['img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'];

    HurtImages = ['img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IdleImages = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    currentImage = 0;


    moveCharacter;
    animeCharacter;
    setedWorld;
    walking_sound = new Audio('audio/pepeWalking.mp3');
    hop_sound = new Audio('audio/pepeJumping.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.WalkingImages);
        this.loadImages(this.JumpingImages);
        this.loadImages(this.DeadImages);
        this.ExplosionImages.src = 'img/3_enemies_chicken/chicken_normal/2_dead/boom.png';
        this.loadImages(this.HurtImages);
        this.loadImages(this.IdleImages);
        this.applyGravity();
        this.animate();
    }


    animate() {
        this.moveCharacter = setInterval(() => {
            this.walking_sound.pause()
            if (this.setedWorld.keyboard.RIGHT && this.x < this.setedWorld.level.level_end_x) {
                this.moveRightAnimation();
            }
            if (this.setedWorld.keyboard.LEFT && this.x > -500) {
                this.moveLeftAnimation();
            }
            if (this.setedWorld.keyboard.SPACE && !this.isAboveGround()) { // jump / change the speedY-axis to 30
                this.jumpAnimation();
            }
            this.setedWorld.camera_x = -this.x + 200;
        }, 1000 / 40);


        this.animeCharacter = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.DeadImages);
                this.walking_sound.pause();
            } else if (this.isExplosed()) {
                this.playAnimation(this.ExplosionImages);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.HurtImages);
            }
            else if (this.isAboveGround()) {
                this.playAnimation(this.JumpingImages);
            } else if (this.setedWorld.keyboard.RIGHT || this.setedWorld.keyboard.LEFT) {
                this.playAnimation(this.WalkingImages);
            } else {
                this.playAnimation(this.IdleImages);
            }
        }, 200)
    }


    moveRightAnimation() {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        this.walking_sound.volume = 0.2;
    };


    moveLeftAnimation() {
        this.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
        this.walking_sound.volume = 0.2;
    };


    jumpAnimation() {
        this.jump();
        this.hop_sound.play();
        this.hop_sound.volume = 0.2;
    }


    /**
    * 
    * decreases status of bottles
    */
    decreaseBottleStatus() {
        this.bottleStatus -= 10;
        if (this.bottleStatus < 0) {
            this.bottleStatus = 0;
        }
    }


    increaseHeartStatus() {
        this.energy += 20;
        if (this.energy > 100) {
            this.energy == 100;
        }
    }


    increaseCoinStatus() {
        this.coinStatus += 20;
        if (this.coinStatus > 100) {
            this.coinStatus == 100;
        }
    }


    collectedBottle() {
        this.bottleStatus += 10;
        if (this.bottleStatus > 100) {
            this.bottleStatus == 100;
        }
    }
}
