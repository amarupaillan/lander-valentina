// ===== MAIN.JS - Funcionalidades de la Landing Page =====

// Configuración global
const CONFIG = {
    whatsapp: {
        number: '+56912345678', // TODO: Reemplazar con número real
        message: 'Hola! Me interesa agendar una evaluación HIDROMAX. ¿Podrían ayudarme con los horarios disponibles?'
    },
    phone: '+56212345678', // TODO: Reemplazar con teléfono real
    clinic: {
        name: 'Clínica Valentina Hernández',
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
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    utils.smoothScrollTo(targetElement);
                    this.closeMobileMenu();
                }
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
        const number = utils.formatWhatsAppNumber(CONFIG.whatsapp.number);
        const message = encodeURIComponent(CONFIG.whatsapp.message);
        const whatsappUrl = `https://wa.me/${number}?text=${message}`;
        
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

// ===== FORMULARIO DE CONTACTO =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('lead-form');
        this.formToggle = document.getElementById('form-toggle');
        this.bookingForm = document.getElementById('booking-form');
        
        this.init();
    }

    init() {
        this.setupFormToggle();
        this.setupFormValidation();
        this.setupFormSubmission();
    }

    setupFormToggle() {
        if (this.formToggle && this.bookingForm) {
            this.formToggle.addEventListener('click', () => {
                const isVisible = this.bookingForm.style.display !== 'none';
                this.bookingForm.style.display = isVisible ? 'none' : 'block';
                this.formToggle.textContent = isVisible ? 'Reservar con formulario' : 'Ocultar formulario';
                
                if (!isVisible) {
                    utils.smoothScrollTo(this.bookingForm);
                }
            });
        }
    }

    setupFormValidation() {
        if (!this.form) return;

        const nameInput = this.form.querySelector('#name');
        const whatsappInput = this.form.querySelector('#whatsapp');
        const emailInput = this.form.querySelector('#email');
        const privacyCheckbox = this.form.querySelector('#privacy');

        // Validación en tiempo real del WhatsApp
        if (whatsappInput) {
            whatsappInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                // Formatear automáticamente
                if (value.length > 0) {
                    if (!value.startsWith('569')) {
                        if (value.startsWith('9')) {
                            value = '56' + value;
                        } else if (value.startsWith('56')) {
                            // Ya tiene 56, no hacer nada
                        } else {
                            value = '569' + value;
                        }
                    }
                    
                    // Limitar a 11 dígitos (569 + 8 dígitos)
                    if (value.length > 11) {
                        value = value.substring(0, 11);
                    }
                    
                    // Formatear para mostrar
                    if (value.length >= 3) {
                        const formatted = `+${value.substring(0, 2)} ${value.substring(2, 3)} ${value.substring(3, 7)} ${value.substring(7)}`.trim();
                        e.target.value = formatted;
                    }
                }
                
                this.validateField(whatsappInput);
            });
        }

        // Validación del email
        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                this.validateField(emailInput);
            });
        }

        // Validación del nombre
        if (nameInput) {
            nameInput.addEventListener('blur', () => {
                this.validateField(nameInput);
            });
        }
    }

    validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remover errores previos
        this.clearFieldError(field);

        switch (fieldName) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorMessage = 'El nombre es obligatorio';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'El nombre debe tener al menos 2 caracteres';
                }
                break;

            case 'whatsapp':
                const cleanNumber = value.replace(/\D/g, '');
                if (!value) {
                    isValid = false;
                    errorMessage = 'El WhatsApp es obligatorio';
                } else if (!utils.validateChileanWhatsApp(cleanNumber)) {
                    isValid = false;
                    errorMessage = 'Formato de WhatsApp inválido (+56 9 XXXX XXXX)';
                }
                break;

            case 'email':
                if (value && !utils.validateEmail(value)) {
                    isValid = false;
                    errorMessage = 'Formato de email inválido';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.style.color = '#EF4444';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            errorElement.style.display = 'block';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    validateForm() {
        if (!this.form) return false;

        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        // Validar checkbox de privacidad
        const privacyCheckbox = this.form.querySelector('#privacy');
        if (privacyCheckbox && !privacyCheckbox.checked) {
            isValid = false;
            this.showFieldError(privacyCheckbox, 'Debes aceptar la Política de Privacidad');
        }

        return isValid;
    }

    setupFormSubmission() {
        if (!this.form) return;

        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!this.validateForm()) {
                return;
            }

            const submitButton = this.form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Mostrar estado de carga
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            try {
                // Recopilar datos del formulario
                const formData = new FormData(this.form);
                const data = Object.fromEntries(formData.entries());
                
                // Limpiar número de WhatsApp
                data.whatsapp = data.whatsapp.replace(/\D/g, '');
                
                // Enviar datos (placeholder)
                await this.sendLead(data);
                
                // Mostrar mensaje de éxito
                this.showSuccessMessage();
                
                // Redirigir a página de gracias
                setTimeout(() => {
                    window.location.href = '/gracias.html';
                }, 2000);
                
            } catch (error) {
                console.error('Error al enviar formulario:', error);
                this.showErrorMessage('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    async sendLead(data) {
        // TODO: Conectar con Make.com o servicio de backend
        
        // Simulación de envío
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Datos del lead:', data);
                resolve({ success: true });
            }, 1000);
        });
        
        /*
        // Implementación real con Make.com
        const response = await fetch('https://hook.make.com/YOUR_WEBHOOK_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Error en el servidor');
        }
        
        return response.json();
        */
    }

    showSuccessMessage() {
        alert('¡Listo! Te contactaremos por WhatsApp para confirmar tu hora.');
        // Redirección a página de agradecimiento
        setTimeout(() => {
            window.location.href = '/gracias.html';
        }, 2000);
    }

    showErrorMessage(message) {
        alert(message);
    }
}

// ===== CALENDAR INTEGRATION =====
class CalendarIntegration {
    static generateICS() {
        const now = new Date();
        const startDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Mañana
        const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // 30 minutos después
        
        const formatDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Clínica Valentina Hernández//HIDROMAX//ES',
            'BEGIN:VEVENT',
            `UID:${Date.now()}@clinicavalentinahernandez.cl`,
            `DTSTAMP:${formatDate(now)}`,
            `DTSTART:${formatDate(startDate)}`,
            `DTEND:${formatDate(endDate)}`,
            'SUMMARY:Evaluación HIDROMAX - Clínica Valentina Hernández',
            `DESCRIPTION:Evaluación y protocolo HIDROMAX no invasivo\\n\\nClínica Valentina Hernández\\n${CONFIG.clinic.address}\\n\\nWhatsApp: ${CONFIG.whatsapp.number}`,
            `LOCATION:${CONFIG.clinic.address}`,
            'STATUS:TENTATIVE',
            'BEGIN:VALARM',
            'TRIGGER:-PT15M',
            'ACTION:DISPLAY',
            'DESCRIPTION:Recordatorio: Evaluación HIDROMAX en 15 minutos',
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        return icsContent;
    }

    static downloadICS() {
        const icsContent = this.generateICS();
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        
        link.href = URL.createObjectURL(blob);
        link.download = 'evaluacion-hidromax.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(link.href);
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

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    new Navigation();
    new WhatsAppIntegration();
    new FAQ();
    new ContactForm();
    
    // Optimizaciones de rendimiento
    PerformanceOptimizer.init();
    
    // Analytics
    Analytics.trackPageView('Landing Page');
    
    console.log('🚀 Landing Page HIDROMAX inicializada correctamente');
});

// Exportar para uso global si es necesario
window.HidromaxLanding = {
    Analytics,
    CalendarIntegration,
    utils
};