// Словарь переводов
const translations = {
    ru: {
        hero_title: "Твой персональный Астролог в Telegram",
        hero_subtitle: "Точные прогнозы, натальные карты, синастрия и цифровая психология Сюцай — всё в одном боте.",
        btn_start: "Запустить в Telegram",
        feat_1_title: "Натальная карта",
        feat_1_desc: "Глубокий анализ вашей личности: карьера, отношения, предназначение.",
        feat_2_title: "Прогноз на день",
        feat_2_desc: "Персональные транзиты планет и советы на каждый день.",
        feat_3_title: "Сюцай и Нумерология",
        feat_3_desc: "Узнайте свое Число Сознания и Миссии. Психология цифр.",
        feat_4_title: "Совместимость",
        feat_4_desc: "Проверьте совместимость с партнером по звездам и дате рождения.",
        footer_rights: "Все права защищены."
    },
    en: {
        hero_title: "Your Personal Astrologer in Telegram",
        hero_subtitle: "Accurate forecasts, natal charts, synastry, and Syutsai digital psychology — all in one bot.",
        btn_start: "Start in Telegram",
        feat_1_title: "Natal Chart",
        feat_1_desc: "Deep analysis of your personality: career, relationships, destiny.",
        feat_2_title: "Daily Forecast",
        feat_2_desc: "Personal planetary transits and advice for every day.",
        feat_3_title: "Syutsai & Numerology",
        feat_3_desc: "Discover your Consciousness & Mission numbers. Psychology of numbers.",
        feat_4_title: "Compatibility",
        feat_4_desc: "Check compatibility with your partner based on stars and birth data.",
        footer_rights: "All rights reserved."
    },
    de: {
        hero_title: "Ihr persönlicher Astrologe in Telegram",
        hero_subtitle: "Präzise Prognosen, Geburtshoroskope, Synastrie und Syutsai — alles in einem Bot.",
        btn_start: "In Telegram starten",
        feat_1_title: "Geburtshoroskop",
        feat_1_desc: "Tiefgehende Analyse Ihrer Persönlichkeit: Karriere, Beziehungen, Schicksal.",
        feat_2_title: "Tagesprognose",
        feat_2_desc: "Persönliche Planetentransite und Ratschläge für jeden Tag.",
        feat_3_title: "Syutsai & Numerologie",
        feat_3_desc: "Entdecken Sie Ihre Bewusstseins- und Missionszahlen.",
        feat_4_title: "Kompatibilität",
        feat_4_desc: "Überprüfen Sie die Kompatibilität mit Ihrem Partner.",
        footer_rights: "Alle Rechte vorbehalten."
    },
    es: {
        hero_title: "Tu Astrólogo Personal en Telegram",
        hero_subtitle: "Pronósticos precisos, cartas natales, sinastría y psicología digital Syutsai.",
        btn_start: "Iniciar en Telegram",
        feat_1_title: "Carta Natal",
        feat_1_desc: "Análisis profundo de tu personalidad: carrera, relaciones, destino.",
        feat_2_title: "Pronóstico Diario",
        feat_2_desc: "Tránsitos planetarios personales y consejos para cada día.",
        feat_3_title: "Syutsai y Numerología",
        feat_3_desc: "Descubre tus números de Conciencia y Misión.",
        feat_4_title: "Compatibilidad",
        feat_4_desc: "Comprueba la compatibilidad con tu pareja según las estrellas.",
        footer_rights: "Todos los derechos reservados."
    },
    fr: {
        hero_title: "Votre Astrologue Personnel sur Telegram",
        hero_subtitle: "Prévisions précises, thèmes astraux, synastrie et psychologie numérique Syutsai.",
        btn_start: "Lancer sur Telegram",
        feat_1_title: "Thème Natal",
        feat_1_desc: "Analyse approfondie de votre personnalité : carrière, relations, destin.",
        feat_2_title: "Prévisions Quotidiennes",
        feat_2_desc: "Transits planétaires personnels et conseils pour chaque jour.",
        feat_3_title: "Syutsai & Numérologie",
        feat_3_desc: "Découvrez vos numéros de Conscience et de Mission.",
        feat_4_title: "Compatibilité",
        feat_4_desc: "Vérifiez la compatibilité avec votre partenaire.",
        footer_rights: "Tous droits réservés."
    }
};

// Логика переключения
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    
    // 1. Определяем язык (из localStorage или браузера)
    let currentLang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
    if (!translations[currentLang]) currentLang = 'en'; // Fallback на английский

    // 2. Устанавливаем значение в селектор
    selector.value = currentLang;
    applyLanguage(currentLang);

    // 3. Событие смены языка
    selector.addEventListener('change', (e) => {
        const newLang = e.target.value;
        localStorage.setItem('lang', newLang);
        applyLanguage(newLang);
    });
});

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
