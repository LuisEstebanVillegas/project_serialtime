// Menu Toggle para móviles
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        var isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && window.innerWidth <= 768) {
            nav.classList.remove('active');
        }
    });
    
    // Búsqueda simple (simulación)
    var searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                var searchTerm = searchBox.value.trim();
                if (searchTerm) {
                    alert('Buscando: ' + searchTerm + '\n(Funcionalidad de búsqueda pendiente)');
                }
            }
        });
    }
    
    // Animación suave al hacer scroll
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Botones "Ver Detalles" (simulación)
    var detailButtons = document.querySelectorAll('.btn-primary');
    detailButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productCard = button.closest('.product-card');
            var productName = productCard.querySelector('h3').textContent;
            alert('Ver detalles de: ' + productName + '\n(Funcionalidad pendiente)');
        });
    });
});