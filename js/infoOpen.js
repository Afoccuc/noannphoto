document.addEventListener('DOMContentLoaded', function() {
    const info = document.getElementById('info');
    const closeBtn = document.getElementById('close-btn');
    const openBtn = document.getElementById('open-btn');
  
    if (info && closeBtn && openBtn) {
      closeBtn.addEventListener('click', function() {
        // Ajoute la classe pour cacher l'info et commence l'animation
        info.classList.add('hidden');
        
        // Après la fin de l'animation, masque l'élément et affiche le bouton "Réouvrir"
        setTimeout(function() {
          info.style.display = 'none';
          openBtn.style.display = 'block';
        }, 500); // Correspond au temps de l'animation CSS (0.5s)
      });
  
      openBtn.addEventListener('click', function() {
        // Affiche de nouveau le conteneur "info"
        info.style.display = 'flex';
        // closeBtn.style.position= 'absolute';
  
        // Retire la classe "hidden" pour ramener le conteneur à son état initial
        setTimeout(function() {
          info.classList.remove('hidden');
        }, 10); // Petit délai pour permettre à l'animation de se déclencher correctement
  
        // Masque le bouton "Réouvrir"
        openBtn.style.display = 'none';
      });
    }
  });
  