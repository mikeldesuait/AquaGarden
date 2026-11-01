const translations = {
    es: {
        nav_home: "Inicio", nav_services: "Servicios", nav_about: "Nosotros", nav_contact: "Contacto",
        hero_title: "Tu piscina y jardín, impecables sin mover un dedo",
        hero_text: "Mantenimiento profesional para comunidades y particulares en la Costa Blanca. Disfruta de tu tiempo libre, nosotros nos encargamos del resto.",
        hero_btn: "Solicitar Presupuesto",
        services_title: "Nuestros Servicios",
        services_subtitle: "Cuidamos los detalles para que tú solo disfrutes del entorno.",
        about_title: "Nuestra Filosofía",
        about_subtitle: "Compromiso, precisión y respeto por tu entorno.",
        contact_title: "Hablemos de tu proyecto",
        contact_desc: "Estamos a tu disposición para asesorarte. Rellena el formulario y nos pondremos en contacto contigo.",
        label_name: "Nombre", label_email: "Correo", label_phone: "Teléfono", label_service: "Servicio", label_msg: "Mensaje", btn_send: "Enviar Mensaje",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_home: "Home", nav_services: "Services", nav_about: "About Us", nav_contact: "Contact",
        hero_title: "Your pool and garden, spotless without lifting a finger",
        hero_text: "Professional maintenance for communities and individuals on the Costa Blanca. Enjoy your free time, we'll take care of the rest.",
        hero_btn: "Request a Quote",
        services_title: "Our Services",
        services_subtitle: "We take care of the details so you can simply enjoy the environment.",
        about_title: "Our Philosophy",
        about_subtitle: "Commitment, precision, and respect for your environment.",
        contact_title: "Let's talk about your project",
        contact_desc: "We are at your disposal to advise you. Fill out the form and we will contact you.",
        label_name: "Name", label_email: "Email", label_phone: "Phone", label_service: "Service", label_msg: "Message", btn_send: "Send Message",
        footer_rights: "All rights reserved."
    },
    de: {
        nav_home: "Startseite", nav_services: "Dienstleistungen", nav_about: "Über Uns", nav_contact: "Kontakt",
        hero_title: "Ihr Pool und Garten, makellos ohne einen Finger zu rühren",
        hero_text: "Professionelle Wartung für Gemeinschaften und Privatpersonen an der Costa Blanca. Genießen Sie Ihre Freizeit, wir kümmern uns um den Rest.",
        hero_btn: "Angebot Anfordern",
        services_title: "Unsere Dienstleistungen",
        services_subtitle: "Wir kümmern uns um die Details, damit Sie die Umgebung einfach genießen können.",
        about_title: "Unsere Philosophie",
        about_subtitle: "Engagement, Präzision und Respekt für Ihre Umgebung.",
        contact_title: "Sprechen wir über Ihr Projekt",
        contact_desc: "Wir stehen Ihnen gerne beratend zur Seite. Füllen Sie das Formular aus und wir melden uns bei Ihnen.",
        label_name: "Name", label_email: "E-Mail", label_phone: "Telefon", label_service: "Dienstleistung", label_msg: "Nachricht", btn_send: "Nachricht Senden",
        footer_rights: "Alle Rechte vorbehalten."
    },
    fr: {
        nav_home: "Accueil", nav_services: "Services", nav_about: "À Propos", nav_contact: "Contact",
        hero_title: "Votre piscine et jardin, impeccables sans lever le petit doigt",
        hero_text: "Entretien professionnel pour les communautés et les particuliers sur la Costa Blanca. Profitez de votre temps libre, nous nous occupons du reste.",
        hero_btn: "Demander un Devis",
        services_title: "Nos Services",
        services_subtitle: "Nous nous occupons des détails pour que vous puissiez simplement profiter de l'environnement.",
        about_title: "Notre Philosophie",
        about_subtitle: "Engagement, précision et respect de votre environnement.",
        contact_title: "Parlons de votre projet",
        contact_desc: "Nous sommes à votre disposition pour vous conseiller. Remplissez le formulaire et nous vous contacterons.",
        label_name: "Nom", label_email: "E-mail", label_phone: "Téléphone", label_service: "Service", label_msg: "Message", btn_send: "Envoyer le Message",
        footer_rights: "Tous droits réservés."
    }
};

export function getInitialLanguage() {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang) return savedLang;
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().substring(0, 2);
    if (['es', 'en', 'de', 'fr'].includes(langCode)) return langCode;
    return 'en';
}

export function translatePage() {
    const lang = getInitialLanguage();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
}

export function changeLanguage(newLang) {
    localStorage.setItem('site_lang', newLang);
    window.location.reload(); 
}
