class Chicken extends MovableObject {
    y = 360;
    height = 100;
    width = 80;
    deadChicken = false;
    alive = true;

    WalkingImages = ['img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    DeadImages = new Image();

    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 500 + Math.random() * 2500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.WalkingImages);
        this.DeadImages.src = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
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

