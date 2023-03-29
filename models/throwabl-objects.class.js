class ThrowablObject extends MovableObject {
    BottleImagesRotation = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png'
    ];
    currentImage = 0;

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.BottleImagesRotation);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 50;
        this.throw();
    }


    /**throw bottle */
    throw() {
        this.speedY = 8;
        this.applyGravity();
        this.checkDirectionOfThrow();
        this.animate();
    }

    
    /**checks direction of character to throw the bottle in the left or right */
    checkDirectionOfThrow() {
        let turnedLeft;
        if (world.character.otherDirection) {
            turnedLeft = true;
        }
        setInterval(() => {
            if (this.isAboveGround()) {
                if (!turnedLeft) {
                    this.x += 20;
                } else {
                    this.x -= 20;
                }
            }
        }, 60);
    }


    /**animate bottle after throwing */
    animate() {
        setInterval(() => {
            this.playAnimation(this.BottleImagesRotation);
        }, 70);
    }
}