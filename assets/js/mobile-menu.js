document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Alterna la clase 'open' en el menú
            navMenu.classList.toggle('open');
            
            // Opcional: Cambiar el icono de hamburguesa a una X cuando está abierto
            if (navMenu.classList.contains('open')) {
                menuBtn.innerHTML = '✕';
            } else {
                menuBtn.innerHTML = '☰';
            }
        });
    }
});
