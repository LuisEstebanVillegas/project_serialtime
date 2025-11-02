// Manejo de menú móvil y búsquedas simples
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menus across pages: try to find them by id (each page has its own id)
  [['menuToggle','mobileMenu'], ['menuToggleCatalog','mobileMenuCatalog'], ['menuToggleContact','mobileMenuContact'], ['menuToggleNosotros','mobileMenuNosotros']]
    .forEach(pair => {
      const toggle = document.getElementById(pair[0]);
      const menu = document.getElementById(pair[1]);
      if(toggle && menu){
        toggle.addEventListener('click', () => {
          const isOpen = menu.style.display === 'flex';
          menu.style.display = isOpen ? 'none' : 'flex';
        });
      }
    });

  // Newsletter form (simulación)
  const newsletter = document.getElementById('newsletterForm');
  if(newsletter){
    newsletter.addEventListener('submit', function(e){
      e.preventDefault();
      alert('¡Gracias! Te hemos suscrito (esto es una demo).');
      newsletter.reset();
    });
  }

  // Contact form (simulación)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Mensaje enviado. Gracias por contactarnos (demo).');
      contactForm.reset();
    });
  }

  // Search buttons - hacen scroll a sección de productos o filtran ejemplos
  const searchPairs = [
    ['searchBtn','searchInput','productosDestacados'],
    ['searchBtnCatalog','searchInputCatalog','catalogGrid'],
    ['searchBtnContact','searchInputContact',null],
    ['searchBtnNosotros','searchInputNosotros',null]
  ];

  searchPairs.forEach(([btnId,inputId,anchorId]) => {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if(btn && input){
      btn.addEventListener('click', () => {
        const q = input.value.trim().toLowerCase();
        if(!q){
          alert('Ingresa un término de búsqueda (demo).');
          return;
        }
        if(anchorId){
          // si hay sección de productos: buscar por nombre en texto de tarjetas
          const grid = document.getElementById(anchorId);
          if(grid){
            const cards = grid.querySelectorAll('.product-card');
            cards.forEach(card => {
              const title = (card.querySelector('h4')?.textContent || '').toLowerCase();
              card.style.display = title.includes(q) ? '' : 'none';
            });
            return;
          }
        }
        alert('Búsqueda demo: ' + q);
      });
    }
  });

  // Clear filters (demo)
  const clearFilters = document.getElementById('clearFilters');
  if(clearFilters){
    clearFilters.addEventListener('click', () => {
      document.getElementById('filterType').value = '';
      document.getElementById('filterPrice').value = '';
      // podrías añadir lógica de filtro real aquí
      alert('Filtros limpiados (demo).');
    });
  }
});
