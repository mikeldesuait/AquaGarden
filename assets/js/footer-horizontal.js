document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? '../' : '';

    footer.innerHTML = `
      <div class="container footer-horizontal">
        
        <!-- FILA 1: Logo con la gota y el menú a la derecha -->
        <div class="footer-h-row-1">
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

        <!-- FILA 2: Contacto y legales todo en la misma línea, centrado -->
        <div class="footer-h-row-2">
          <a href="tel:+34622411992">(+34) 622 411 992</a>
          <span class="dot">•</span>
          <a href="mailto:aquagardenpools@gmail.com">aquagardenpools@gmail.com</a>
          <span class="dot">•</span>
          <a href="${prefix}pages/aviso-legal.html">Aviso Legal</a>
          <span class="dot">•</span>
          <a href="${prefix}pages/privacidad.html">Privacidad</a>
          <span class="dot">•</span>
          <a href="${prefix}pages/cookies.html">Cookies</a>
        </div>

        <!-- FILA 3: Copyright -->
        <div class="footer-h-row-3">
          <p>&copy; 2026 aqua&garden. Todos los derechos reservados.</p>
        </div>

      </div>
    `;
});
