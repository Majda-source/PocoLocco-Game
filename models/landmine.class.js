class Landmine extends MovableObject{
    height= 30;
    width = 30;

    ExplosionImages = new Image();
    
    constructor(){
        super().loadImage('img/danger/landmine.png');
        this.x = 500 + Math.random() * 1700; 
        this.y = 400 + Math.random() * 10;
    }
}
