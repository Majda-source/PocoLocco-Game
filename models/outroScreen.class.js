class OutroScreen extends MovableObject {

    width = 780;
    height = 480;
    x = 0;
    y = 0;

    constructor(path) {
        super().loadImage(path);
    }
}