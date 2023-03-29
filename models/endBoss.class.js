class EndBoss extends MovableObject {
    y = 70;
    height = 400;
    width = 300;
    alive = true;

    readyToFight = false;
    endbossReaction;


    ImagesAlert = ['img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'];

    ImagesHurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    ImagesAttack = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'

    ];

    ImagesWalking = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    ImagesDead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ]

    currentImage = 0;
    endbossDead_sound = new Audio('audio/endbossDead.mp3');
    endbossHurt_sound = new Audio('audio/endbossHurt.mp3');
    endbossIntervalWalking;
    endbossWalking = false;

    constructor() {
        super().loadImage(this.ImagesAlert[0])
        this.loadImages(this.ImagesAlert);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesAttack);
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesDead);
        this.x = 3000;
        this.animate();
    }

    animate() {
        this.endbossReaction = setInterval(() => {
            this.endbossAfterFirstHit();
        }, 200);

        this.endbossBevorFirstHit();
    }



    endbossBevorFirstHit() {
        let i = 0;
        setInterval(() => {
            if (this.readyToFight == true && !this.isHurt() && !this.isDead()) {
                if (i < 10) {
                    this.playAnimation(this.ImagesAttack);
                } else {
                    setInterval(() => {
                        this.moveLeft();
                    }, 200);
                    this.playAnimation(this.ImagesWalking);
                }
                i++;
            }
        }, 200);
    }


    endbossAfterFirstHit() {
        if (this.isDead()) {
            this.playAnimation(this.ImagesDead);
            this.endbossDead_sound.play();
            this.endbossDead_sound.volume = 0.3;
        } else if (this.isHurt()) {
            this.playAnimation(this.ImagesHurt);
            this.endbossHurt_sound.play();
            this.endbossHurt_sound.volume = 0.3;
            this.moveFaster();
        }
    }
}