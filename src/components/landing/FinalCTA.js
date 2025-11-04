export function FinalCTA() {
  return `
    <section class="FinalCTA" id="contacto">
      <div class="Container">
        <div class="final-cta-content">
          <h2 class="final-cta-title">
            ¿Lista para Transformar tu Negocio de Estética?
          </h2>
          <p class="final-cta-subtitle">
            No esperes más. Cada día que pasa es una oportunidad perdida de aumentar tus ingresos.
          </p>
          
          <div class="contact-options">
            <button onclick="openCalendlyModal()" class="Button Button--primary Button--large contact-button" style="background: linear-gradient(135deg, #8AAD9D 0%, #7a9d8d 100%);">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" fill="currentColor"/>
              </svg>
              Reservar Mi Consultoría GRATIS Ahora
            </button>
            
            <p style="font-size: 0.875rem; opacity: 0.8; margin-top: 1rem;">
              ⏰ Solo quedan 3 cupos disponibles esta semana
            </p>
            
            <div class="contact-alternatives">
              <a href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20agendar%20una%20evaluación%20HIDROMAX" class="contact-link contact-whatsapp" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" fill="#25D366"/>
                </svg>
                WhatsApp
              </a>
              
              <a href="tel:+56912345678" class="contact-link contact-phone">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                +56 9 1234 5678
              </a>
            </div>
            
            <div class="final-cta-calendly">
              <div class="calendly-section">
                <h3 class="calendly-title">O agenda directamente aquí:</h3>
                <div id="final-cta-calendly-embed"></div>
              </div>
            </div>
          </div>
          
          <div class="final-cta-guarantee">
            <p class="guarantee-text">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1l2.045 4.142L15 6l-3.455 3.37L12.5 14 8 11.79 3.5 14l.955-4.63L1 6l4.955-.858L8 1z" fill="#10b981"/>
              </svg>
              Garantía de satisfacción - Si no obtienes claridad sobre tu piel, no pagas
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}