class BottleBar extends DrawableObject {
    Images = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];
    
    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.Images);
        this.x = 5;
        this.y = 40;
        this.width = 180;
        this.height = 50;
        this.setPercentage(0);
    }
}