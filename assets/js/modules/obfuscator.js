// Este script oculta los datos en el HTML para que no se lean a simple vista
// y los vuelve a pintar usando JavaScript.
document.addEventListener("DOMContentLoaded", () => {
    const sensitiveData = document.querySelectorAll('.sensitive-data');
    sensitiveData.forEach(el => {
        // Decodificamos el texto que ha sido guardado en base64
        const decoded = atob(el.getAttribute('data-obf'));
        el.textContent = decoded;
        el.classList.remove('sensitive-data'); // Quitamos la clase
    });
});
