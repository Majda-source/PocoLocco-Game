class MovableObject extends DrawableObject{
    
    speed = 0.5;
    speedY = 0;
    acceleration = 2;
    otherDirection = false;
    energy = 100;
    lastBite = 0;
    bottleStatus = 0;
    coinStatus = 0;
    alive = true;


    /**
     * Sets gravity on elements that move on y-axis (that jump)
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * Returns object above the ground or lets them fall out of game
     * 
     * @returns {boolean}
     */
    isAboveGround() {
        if(this instanceof ThrowablObject){ // qd il s agit de trowableobject...
            return true;
        }else{
            return this.y < 100
        }
    }


    /**decrease energy */
    hit(){
        this.energy -= 10;
        if( this.energy < 0){
           this.energy = 0;
        }else{
            this.lastBite = new Date().getTime();
        }
    }


    /**
     * Takes the time span from the last hit to the current time and sets a time limit
     * 
     * @returns {boolean}
     */
    isHurt(){
        let timePassed = new Date().getTime() - this.lastBite; 
        timePassed = timePassed / 1000; 
        return timePassed < 0.75;
    }
    

    /**
     * checks if character is dead or not
     * 
     * @returns {boolean}
     */
    isDead(){
        return this.energy == 0;
    }


    /**
     * checks if charcter is explosed
     * @returns {boolean}
     */
    isExplosed(){
        return this.energy == 0;
    }
    
    
    // charachter.isColliding(chicken)
    isColliding(mo) {
        return (this.x + this.width - this.offsetRight) >= (mo.x + mo.offsetLeft) &&
            (this.x - this.offsetLeft) <= (mo.x + mo.width - mo.offsetRight) &&
            (this.y + this.height - this.offsetBottom) >= (mo.y + mo.offsetTop) &&
            (this.y + this.offsetTop) <= (mo.y + mo.height - mo.offsetBottom);
    }


    /**
     * Function sets one image after another to animate movement
     * 
     * @param {Array} images - array of Images used for animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Increases the x coordinate and moves objects to the right
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Decreases the x coordinate and moves objects to the left
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * Moves character on y-axis
     * 
     * @param {number} speed - speed to move on y-axis
     */
    jump() {
        this.speedY = 25;
    }


    moveFaster() {
        this.x -= this.speed * 30;
    }
}