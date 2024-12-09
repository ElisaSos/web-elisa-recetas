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
  