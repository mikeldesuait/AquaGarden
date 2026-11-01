document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? '../' : '';

    footer.innerHTML = `
      <div class="container footer-compact">
        
        <!-- LÍNEA 1: Logo a la izquierda, Menú a la derecha -->
        <div class="footer-row-1">
          <a href="${prefix}index.html" class="footer-logo">
            <img src="${prefix}assets/img/gota.png" alt="Gota" class="footer-gota">
            aqua<span>&</span>garden
          </a>
          <nav class="footer-nav">
            <a href="${prefix}index.html">Inicio</a>
            <a href="${prefix}pages/servicios.html">Servicios</a>
            <a href="${prefix}pages/nosotros.html">Nosotros</a>
            <a href="${prefix}pages/contacto.html">Contacto</a>
          </nav>
        </div>

        <!-- LÍNEA 2: Copyright a la izquierda, Contacto y Legales a la derecha -->
        <div class="footer-row-2">
          <p class="footer-copy">&copy; 2026 aqua&garden. Todos los derechos reservados.</p>
          <div class="footer-info">
            <a href="tel:+34622411992">(+34) 622 411 992</a>
            <span>•</span>
            <a href="mailto:aquagardenpools@gmail.com">aquagardenpools@gmail.com</a>
            <span>•</span>
            <a href="${prefix}pages/aviso-legal.html">Aviso Legal</a>
            <span>•</span>
            <a href="${prefix}pages/privacidad.html">Privacidad</a>
            <span>•</span>
            <a href="${prefix}pages/cookies.html">Cookies</a>
          </div>
        </div>
        
      </div>
    `;
});
