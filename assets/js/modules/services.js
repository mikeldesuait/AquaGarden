import { getInitialLanguage } from './i18n.js';

const data = {
    es: [
        { 
            num: '01', title: 'Mantenimiento de Piscinas', desc: 'Control absoluto del agua.',
            details: ['Limpieza y mantenimiento general', 'Análisis diarios y tratamiento químico', 'Instalación de bombas dosificadoras', 'Cloradores salinos y bombas de calor', 'Cambio de arena y reparación de vasos']
        },
        { 
            num: '02', title: 'Jardinería Integral', desc: 'Diseño y conservación de zonas verdes.',
            details: ['Creación y mantenimiento de jardines', 'Poda de arbustos y palmeras', 'Tratamiento fitosanitario contra plagas', 'Instalación de riego automatizado', 'Limpieza de parcelas']
        },
        { 
            num: '03', title: 'Limpieza de Comunidades', desc: 'Cuidado de espacios compartidos.',
            details: ['Limpieza semanal de calles', 'Eliminación de malas hierbas', 'Limpieza de garajes con barredera', 'Desinfección de baños comunitarios', 'Limpieza con agua a presión']
        }
    ],
    en: [
        { 
            num: '01', title: 'Pool Maintenance', desc: 'Absolute water control.',
            details: ['General cleaning and maintenance', 'Daily analysis and chemical treatment', 'Installation of dosing pumps', 'Salt chlorinators and heat pumps', 'Sand replacement and pool repairs']
        },
        { 
            num: '02', title: 'Comprehensive Gardening', desc: 'Design and conservation of green areas.',
            details: ['Garden creation and maintenance', 'Pruning of shrubs and palm trees', 'Phytosanitary treatment against pests', 'Installation of automated irrigation', 'Plot cleaning']
        },
        { 
            num: '03', title: 'Community Cleaning', desc: 'Care for shared spaces.',
            details: ['Weekly street cleaning', 'Weed removal', 'Garage cleaning with sweeper', 'Disinfection of community bathrooms', 'High-pressure cleaning']
        }
    ],
    de: [
        { 
            num: '01', title: 'Poolwartung', desc: 'Absolute Wasserkontrolle.',
            details: ['Allgemeine Reinigung und Wartung', 'Tägliche Analyse und chemische Behandlung', 'Installation von Dosierpumpen', 'Salzchlorierer und Wärmepumpen', 'Sandwechsel und Poolreparaturen']
        },
        { 
            num: '02', title: 'Ganzheitliche Gartenarbeit', desc: 'Gestaltung und Pflege von Grünflächen.',
            details: ['Gartengestaltung und -pflege', 'Beschneidung von Sträuchern und Palmen', 'Pflanzenschutzbehandlung gegen Schädlinge', 'Installation automatisierter Bewässerung', 'Grundstücksreinigung']
        },
        { 
            num: '03', title: 'Gemeinschaftsreinigung', desc: 'Pflege gemeinsamer Räume.',
            details: ['Wöchentliche Straßenreinigung', 'Unkrautentfernung', 'Garagenreinigung mit Kehrmaschine', 'Desinfektion von Gemeinschaftsbädern', 'Hochdruckreinigung']
        }
    ],
    fr: [
        { 
            num: '01', title: 'Entretien de Piscine', desc: 'Contrôle absolu de l\'eau.',
            details: ['Nettoyage et entretien général', 'Analyse quotidienne et traitement chimique', 'Installation de pompes doseuses', 'Chlorateurs au sel et pompes à chaleur', 'Remplacement du sable et réparations']
        },
        { 
            num: '02', title: 'Jardinage Complet', desc: 'Conception et conservation d\'espaces verts.',
            details: ['Création et entretien de jardins', 'Taille d\'arbustes et de palmiers', 'Traitement phytosanitaire contre les nuisibles', 'Installation d\'irrigation automatisée', 'Nettoyage de parcelles']
        },
        { 
            num: '03', title: 'Nettoyage de Communauté', desc: 'Soin des espaces partagés.',
            details: ['Nettoyage hebdomadaire des rues', 'Élimination des mauvaises herbes', 'Nettoyage des garages avec balayeuse', 'Désinfection des salles de bains', 'Nettoyage haute pression']
        }
    ]
};

export function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    const lang = getInitialLanguage();
    const currentData = data[lang] || data['es'];

    container.innerHTML = currentData.map((s, index) => `
        <article class="card card--accordion" onclick="toggleAccordion(${index})">
            <div class="card__header">
                <div class="card__num">${s.num}</div>
                <h3 class="card__title">${s.title}</h3>
                <p class="card__desc">${s.desc}</p>
            </div>
            <div class="card__content" id="content-${index}">
                <ul style="list-style: none; padding: 0; margin-top: 1.5rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                    ${s.details.map(d => `<li style="margin-bottom: 0.75rem; color: #475569; display: flex; gap: 0.5rem; align-items: flex-start;"><span style="color: var(--primary); font-weight: bold;">✓</span> ${d}</li>`).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

// Función para abrir y cerrar el acordeón
window.toggleAccordion = function(index) {
    const content = document.getElementById(`content-${index}`);
    if (content) {
        content.classList.toggle('is-open');
    }
};
