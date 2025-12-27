// ===== MAIN.JS - Funcionalidades de la Landing Page =====

// Configuración global
const CONFIG = {
    whatsapp: {
        number: '+56912345678', // TODO: Reemplazar con número real
        message: 'Hola! Me interesa agendar una evaluación HIDROMAX. ¿Podrían ayudarme con los horarios disponibles?'
    },
    phone: '+56212345678', // TODO: Reemplazar con teléfono real
    clinic: {
        name: 'Clínica Valeria Hernández',
        address: 'Dirección de la clínica', // TODO: Agregar dirección real
        timezone: 'America/Santiago'
    }
};

// ===== UTILIDADES =====
const utils = {
    // Formatear número de WhatsApp
    formatWhatsAppNumber: (number) => {
        return number.replace(/\D/g, '');
    },

    // Validar formato de WhatsApp chileno
    validateChileanWhatsApp: (number) => {
        const cleaned = number.replace(/\D/g, '');
        return /^569\d{8}$/.test(cleaned);
    },

    // Validar email
    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Formatear número de teléfono para mostrar
    formatPhoneDisplay: (number) => {
        const cleaned = number.replace(/\D/g, '');
        if (cleaned.startsWith('569')) {
            return `+56 9 ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`;
        }
        return number;
    },

    // Scroll suave a elemento
    smoothScrollTo: (element) => {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ===== NAVEGACIÓN =====
class Navigation {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileToggle = document.getElementById('mobile-menu-toggle');
        this.nav = document.getElementById('nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
    }

    setupScrollEffect() {
        const handleScroll = utils.debounce(() => {
            if (window.scrollY > 100) {
                this.header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                this.header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.header.style.boxShadow = 'none';
            }
        }, 10);

        window.addEventListener('scroll', handleScroll);
    }

    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href') || '';

                // Solo interceptar anclas internas (#seccion)
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        utils.smoothScrollTo(targetElement);
                    }
                    this.closeMobileMenu();
                    return;
                }

                // Para rutas absolutas o relativas (p.ej., /catalogo.html), no impedir la navegación
                this.closeMobileMenu();
            });
        });
    }

    setupMobileMenu() {
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && !this.mobileToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.nav.classList.toggle('mobile-open');
        this.mobileToggle.classList.toggle('active');
    }

    closeMobileMenu() {
        this.nav.classList.remove('mobile-open');
        this.mobileToggle.classList.remove('active');
    }
}

// ===== WHATSAPP INTEGRATION =====
class WhatsAppIntegration {
    constructor() {
        this.whatsappButtons = [
            'whatsapp-header',
            'whatsapp-hero', 
            'whatsapp-offer',
            'whatsapp-final'
        ];
        
        this.init();
    }

    init() {
        this.setupWhatsAppButtons();
    }

    setupWhatsAppButtons() {
        this.whatsappButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openWhatsApp();
                });
            }
        });
    }

    openWhatsApp() {
        const whatsappUrl = 'https://wa.link/15vvd0';
        
        // Analytics tracking (si está disponible)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                event_category: 'engagement',
                event_label: 'whatsapp_button'
            });
        }
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
}

// ===== FAQ FUNCTIONALITY =====
class FAQ {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.setupFAQToggle();
    }

    setupFAQToggle() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todas las otras preguntas
                this.faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle la pregunta actual
                item.classList.toggle('active', !isActive);
            });
        });
    }
}


// ===== ANALYTICS HELPERS =====
class Analytics {
    static trackEvent(eventName, parameters = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, parameters);
        }
        
        console.log('Analytics Event:', eventName, parameters);
    }

    static trackPageView(pageName) {
        this.trackEvent('page_view', {
            page_title: pageName,
            page_location: window.location.href
        });
    }

    static trackFormSubmission(formName) {
        this.trackEvent('form_submit', {
            form_name: formName
        });
    }

    static trackWhatsAppClick() {
        this.trackEvent('whatsapp_click', {
            event_category: 'engagement',
            event_label: 'whatsapp_button'
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimizer {
    static init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    static lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    static preloadCriticalResources() {
        // Precargar fuentes críticas
        const fontPreloads = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap',
            'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap'
        ];

        fontPreloads.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }
}

// ===== TESTIMONIALS PLAYER =====
class TestimonialsPlayer {
    constructor() {
        this.cards = Array.from(document.querySelectorAll('.testimonial-video'));
        this.players = new Map();
        this.states = new Map(); // track muted state per player
        this.init();
    }

    init() {
        this.waitForVimeo();
    }

    waitForVimeo() {
        if (window.Vimeo && window.Vimeo.Player) {
            this.setupPlayers();
        } else {
            // Reintentar cada 100ms hasta por 5 segundos
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (window.Vimeo && window.Vimeo.Player) {
                    clearInterval(interval);
                    this.setupPlayers();
                } else if (attempts > 50) {
                    clearInterval(interval);
                    console.warn('Vimeo Player API failed to load');
                }
            }, 100);
        }
    }

    setupPlayers() {
        this.cards.forEach((card, idx) => {
            const iframe = card.querySelector('iframe');
            if (!iframe) return;
            
            try {
                const player = new Vimeo.Player(iframe);
                this.players.set(iframe, player);
                this.states.set(iframe, true); // start muted

                // Ensure loop and start muted
                player.setLoop(true).catch(() => {});
                player.setVolume(0).catch(() => {});
                player.setMuted(true).catch(() => {});

                // Wire mute toggle
                const toggle = card.querySelector('.mute-toggle');
                if (toggle) {
                    // Estado inicial: muted
                    toggle.textContent = '🔇';
                    toggle.setAttribute('aria-label', 'Activar sonido');
                    
                    toggle.addEventListener('click', async () => {
                        try {
                            const isMuted = this.states.get(iframe);
                            if (isMuted) {
                                // Unmute
                                await player.setMuted(false);
                                await player.setVolume(1);
                                await player.play().catch(() => {}); // Ensure play if paused
                                this.states.set(iframe, false);
                                toggle.textContent = '🔊';
                                toggle.setAttribute('aria-label', 'Silenciar');
                            } else {
                                // Mute
                                await player.setVolume(0);
                                await player.setMuted(true);
                                this.states.set(iframe, true);
                                toggle.textContent = '🔇';
                                toggle.setAttribute('aria-label', 'Activar sonido');
                            }
                        } catch (e) {
                            console.warn('Vimeo volume toggle failed', e);
                        }
                    });
                }
            } catch (err) {
                console.error('Error initializing Vimeo player', err);
            }
        });
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    new Navigation();
    new WhatsAppIntegration();
    new FAQ();
    
    // Optimizaciones de rendimiento
    PerformanceOptimizer.init();
    new TestimonialsPlayer();
    
    // Analytics
    Analytics.trackPageView('Landing Page');
    
    console.log('🚀 Landing Page HIDROMAX inicializada correctamente');
});

// Exportar para uso global si es necesario
window.HidromaxLanding = {
    Analytics,
    utils
};
