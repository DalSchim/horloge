class Width {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    calculateRadius() {
        return Math.min(this.canvasWidth, this.canvasHeight) / 2;
    }
}

export default Width;
