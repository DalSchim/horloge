class Time {
    constructor(ctx, radius) {
        this.ctx = ctx;
        this.radius = radius;
    }

    drawHand(length, angle, width) {
        const x = this.ctx.canvas.width / 2 + Math.cos(angle) * length;
        const y = this.ctx.canvas.height / 2 + Math.sin(angle) * length;
        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
        this.ctx.lineTo(x, y);
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawHands() {
        const now = new Date();
        const hour = now.getHours() % 12;
        const minute = now.getMinutes();
        const second = now.getSeconds();

        this.drawHand(this.radius * 0.5, (hour - 3 + minute / 60) * (Math.PI * 2) / 12, this.radius * 0.07);
        this.drawHand(this.radius * 0.7, (minute - 15 + second / 60) * (Math.PI * 2) / 60, this.radius * 0.05);
        this.drawHand(this.radius * 0.8, (second - 15) * (Math.PI * 2) / 60, this.radius * 0.02);

        // Dessiner le centre de l'horloge
        this.ctx.beginPath();
        this.ctx.arc(this.radius, this.radius, this.radius * 0.02, 0, Math.PI * 2);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.closePath();
    }
}

// Export de la classe Time pour pouvoir l'utiliser ailleurs
export default Time;
