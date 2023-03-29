class CoinBar extends DrawableObject {

    Images = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.Images);
        this.x = 5;
        this.y = 80;
        this.width = 180;
        this.height = 50;
        this.setPercentage(0);
    }


    setPercentage(percentage) {
        this.percentage = percentage
        let path = this.Images[this.resolveImageIndex()]
        this.img = this.imageCache[path];

    }


    /**
     * resolveImageIndex - determines the index of the image to be displayed based on the percentage
     *  @returns {number} - the index of the image to be displayed
     */
    resolveImageIndex() {
        if (this.percentage > 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0;
        }
    }
}