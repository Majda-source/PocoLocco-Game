class Coin extends MovableObject{
    height = 80;
    width = 80;
    

    WalkingImages= ['img/8_coin/coin_1.png',
                    'img/8_coin/coin_2.png'
                ];


currentImage = 0;
constructor() {
    super().loadImage('img/8_coin/coin_1.png') 
        this.x = 700 + Math.random() * 2000; 
        this.y = 40 + Math.random()* 380;
       
        this.loadImages(this.WalkingImages);
        this.animate();
}

animate() {
    
    setInterval(() => {
        this.playAnimation(this.WalkingImages);
    }, 800)
}
}