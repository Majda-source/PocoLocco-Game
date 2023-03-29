class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;


    constructor() {
        this.keyPressEvents();
        this.touchEvents();
    }


    /**
     * Calls functions for different keypress Events for keyboard
     */
    keyPressEvents() {
        this.keydownEvent();
        this.keyupEvent();
    }


    /**
     * activates corresponding events by keydown
     */
    keydownEvent() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (e.keyCode == 38) {
                keyboard.UP = true;
            }
            if (e.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = true;
            }
            if (e.keyCode == 68) {
                keyboard.D = true;
            }
        });
    }


    /**
     * inactivates corresponding events by keyup
     */
    keyupEvent() {
        window.addEventListener("keyup", (e) => {
            if (e.keyCode == 32) {
                keyboard.SPACE = false;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (e.keyCode == 38) {
                keyboard.UP = false;
            }
            if (e.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = false;
            }
            if (e.keyCode == 68) {
                keyboard.D = false;
            }
        });
    }


    /**Calls functions for different keypress Events for touchscreen (mobile-version)*/
    touchEvents() {
        this.touchstart()
        this.touchend();
    }


    touchstart() {
        window.addEventListener('touchstart', (e) => {
            if (e.target.id == 'right') {
                keyboard.RIGHT = true;
            }

            if (e.target.id == 'left') {
                keyboard.LEFT = true;

            }

            if (e.target.id == 'space') {
                keyboard.SPACE = true;
            }

            if (e.target.id == 'throw') {
                keyboard.D = true;
            }
        });
    }


    touchend() {
        window.addEventListener('touchend', (e) => {
            if (e.target.id == 'right') {

                keyboard.RIGHT = false;
            }

            if (e.target.id == 'left') {
                keyboard.LEFT = false;
            }

            if (e.target.id == 'space') {
                keyboard.SPACE = false;
            }

            if (e.target.id == 'throw') {
                keyboard.D = false;
            }
        });
    }
}