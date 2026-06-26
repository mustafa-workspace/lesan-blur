document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get target section id
            const targetId = link.getAttribute('data-section');
            
            // Update active state in navigation
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            
            // Show target section, hide others
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, `#${targetId}`);
            
            // Scroll to top of content area on mobile
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: document.querySelector('.content-area').offsetTop - 64,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle deep linking on load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetLink = document.querySelector(`.nav-link[data-section="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            // Sun icon for dark mode (click to switch to light)
            themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
        } else {
            // Moon icon for light mode (click to switch to dark)
            themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
        }
    }

    // Language Toggle Logic
    const langToggle = document.getElementById('langToggle');
    const htmlTag = document.documentElement;
    let currentLang = 'ar';

    const translations = {
        en: {
            nav_overview: "Overview",
            nav_intro: "Intro & Importance",
            nav_usage: "Usage Guide",
            nav_dev: "For Developers",
            nav_manifest: "Manifest Config",
            nav_content: "Blur Logic (Content)",
            nav_background: "Background",
            nav_popup: "User Interface (Popup)",
            nav_updates: "Updates",
            nav_changelog: "What's New? (Changelog)"
        },
        ar: {
            nav_overview: "نظرة عامة",
            nav_intro: "المقدمة والأهمية",
            nav_usage: "دليل الاستخدام",
            nav_dev: "للمطورين",
            nav_manifest: "إعدادات الإضافة (Manifest)",
            nav_content: "منطق الحجب (Content)",
            nav_background: "الخلفية (Background)",
            nav_popup: "واجهة المستخدم (Popup)",
            nav_updates: "التحديثات",
            nav_changelog: "ما الجديد؟ (Changelog)"
        }
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // Update document direction and language
        htmlTag.lang = currentLang;
        htmlTag.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        // Toggle Content Visibility
        document.querySelectorAll('.lang-ar').forEach(el => {
            el.style.display = currentLang === 'ar' ? 'block' : 'none';
        });
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = currentLang === 'en' ? 'block' : 'none';
        });

        // Update Navbar Texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
    });
});
