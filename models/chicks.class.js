class Chicks extends MovableObject {
    y = 390;
    height = 60;
    width = 60;
    deadChicken = false;
    alive = true;

    WalkingImages = ['img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'];

    DeadImages = new Image();

    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.x = 570 + Math.random() * 2000;
        this.speed = 0.20 + Math.random() * 0.34;
        this.loadImages(this.WalkingImages);
        this.DeadImages.src = 'img/3_enemies_chicken/chicken_small/2_dead/dead.png';
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (!this.deadChicken) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!this.deadChicken) {
                this.playAnimation(this.WalkingImages);
            }
        }, 300)
    }
}

