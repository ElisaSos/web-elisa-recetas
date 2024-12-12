// script.js
document.querySelectorAll('.card').forEach((card) => {
  const expandBtn = card.querySelector('.expand-btn');
  const closeBtn = card.querySelector('.close-btn');
  const extraInfo = card.querySelector('.extra-info');

  expandBtn.addEventListener('click', () => {
    card.classList.add('fullscreen');
    expandBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    card.classList.remove('fullscreen');
    expandBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });
});
document.querySelectorAll('.card .extra-info a').forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log('Link clicado:', e.target.href);
    // Evita bloquear enlaces a menos que sea intencionado
    // e.preventDefault();
  });
});
document.querySelectorAll('.card').forEach((card) => {
  const expandBtn = card.querySelector('.expand-btn');
  const closeBtn = card.querySelector('.close-btn');
  const mainImage = card.querySelector('.main-image');

  expandBtn.addEventListener('click', () => {
    card.classList.add('fullscreen'); // Agrega la clase fullscreen
    mainImage.style.display = 'none'; // Opcional: ocultar directamente con JS
    expandBtn.style.display = 'none'; // Oculta el botón de expandir
    closeBtn.style.display = 'block'; // Muestra el botón de cerrar
  });

  closeBtn.addEventListener('click', () => {
    card.classList.remove('fullscreen'); // Quita la clase fullscreen
    mainImage.style.display = 'block'; // Vuelve a mostrar la imagen principal
    expandBtn.style.display = 'block'; // Muestra el botón de expandir
    closeBtn.style.display = 'none'; // Oculta el botón de cerrar
  });
});
  