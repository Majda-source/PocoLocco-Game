// class EndbossBar extends DrawableObject {
//     Images = [
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
//         'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
//     ];

//     percentage = 100;

//     constructor() {
//         super();
//         this.loadImages(this.Images);
//         this.x = 0;
//         this.y = 0;
//         this.width = 180;
//         this.height = 50;
//         this.setPercentage(100);
//     }

    
//      /**
//      * Sets statusbar-image corresponding to life status in percent
//      * 
//      * @param {number} percentage - life status in percent
//      */
//     setPercentage(percentage) {
//         this.percentage = percentage;
//         let path = this.Images[this.resolveImageIndex()];
//         this.img = this.imageCache[path];
//     }
// }