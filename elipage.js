// Referencias a los elementos
const verMas = document.getElementById('verMas');
const fullscreen = document.getElementById('fullscreen');
const cerrar = document.getElementById('cerrar');

// Mostrar el contenedor fullscreen
verMas.addEventListener('click', () => {
  fullscreen.style.display = 'flex'; // Mostrar el fullscreen
});

// Ocultar el contenedor fullscreen
cerrar.addEventListener('click', () => {
  fullscreen.style.display = 'none'; // Ocultar el fullscreen
});
