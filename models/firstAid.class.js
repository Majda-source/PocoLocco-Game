class FirstAid extends DrawableObject {
    width = 35;
    height = 35;

    constructor() {
        super().loadImage('img/7_statusbars/3_icons/firstAid.png');
        this.x = 400 + Math.random() * 2000;
        this.y = 100 + Math.random() * 250;
    }
}