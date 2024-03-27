class Horloge {
    constructor(ctx, radius) {
        this.ctx = ctx;
        this.radius = radius;
    }

    drawDial() {
        this.ctx.beginPath();
        this.ctx.arc(this.radius, this.radius, this.radius * 0.9, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawHourMarkers() {
        for (let i = 0; i < 12; i++) {
            const angle = (i - 3) * (Math.PI * 2) / 12;
            const x = this.radius + Math.cos(angle) * (this.radius * 0.8);
            const y = this.radius + Math.sin(angle) * (this.radius * 0.8);
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.radius * 0.05, 0, Math.PI * 2);
            this.ctx.fillStyle = 'white';
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

    clearCanvas(width, height) {
        this.ctx.clearRect(0, 0, width, height);
    }
}

// Export de la classe Horloge pour pouvoir l'utiliser ailleurs
export default Horloge;
