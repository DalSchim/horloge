import Scene from './js/scene.js';

// Création d'un élément canvas
const canvas = document.createElement('canvas');
canvas.id = 'clock';
document.body.appendChild(canvas);

// Définition de la taille du canvas
canvas.width = 400; // Largeur du canvas
canvas.height = 400; // Hauteur du canvas

// Création de la scène
const scene = new Scene(canvas);

function animateClock() {
    scene.drawClock();
    requestAnimationFrame(animateClock);
}

animateClock();
