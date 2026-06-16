/**
 * CONFETTI PLAYGROUND — app.js (Fuegos Artificiales Exclusivos)
 */

const myCanvas = document.getElementById('confetti-canvas');
const confettiInstance = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

// Paleta de colores ciberpunk oficial
const PALETA_COLORES = ['#ff3c6e', '#3cf0c8', '#ffe040', '#9b5cff', '#ff8c42', '#4af3a1'];

/**
 * EFECTO: Fuegos Artificiales Continuos por 2.5 Segundos
 */
function lanzarFuegosArtificiales() {
  const duration = 2500; 
  const animEnd = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > animEnd) { clearInterval(interval); return; }

    confettiInstance({
      particleCount: 35,
      spread: 360,
      gravity: 0.8,
      startVelocity: 30,
      ticks: 200,
      origin: {
        x: Math.random(), 
        y: Math.random() * 0.6, 
      },
      colors: PALETA_COLORES,
      shapes: ['circle', 'square'],
    });
  }, 200); 
}

/**
 * ESCUCHAR CLICS EN TODOS LOS BOTONES DE LA PÁGINA
 */
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-confetti');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      lanzarFuegosArtificiales();
    });
  });
});
