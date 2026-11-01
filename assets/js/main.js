import { renderServices } from './modules/services.js';
import { translatePage, changeLanguage } from './modules/i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    translatePage();

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    renderServices();
});
