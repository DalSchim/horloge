import Horloge from './shapes/horloge.js'
import Time from './utility/time.js'
import Width from './utility/width.js'


class Scene {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        const width = new Width(canvas.width, canvas.height);
        this.radius = width.calculateRadius();

        this.horloge = new Horloge(this.ctx, this.radius);
        this.time = new Time(this.ctx, this.radius);
    }

    drawClock() {
        this.horloge.clearCanvas(this.canvas.width, this.canvas.height);
        this.horloge.drawDial();
        this.horloge.drawHourMarkers();
        this.time.drawHands();
    }
}

// Export de la classe Scene pour pouvoir l'utiliser ailleurs
export default Scene;
