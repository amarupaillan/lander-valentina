export function Offer() {
  return `
    <section class="Offer">
      <div class="Container">
        <div class="offer-content">
          <h2 class="offer-title">Consultoría Estratégica GRATUITA</h2>
          <p class="offer-subtitle">
            Una sesión personalizada de 60 minutos para analizar tu negocio y crear un plan de crecimiento específico
          </p>
          
          <div class="offer-benefits">
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.2)"/>
                  <path d="M20 12v16m-8-8h16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Análisis Completo</h3>
                <p class="benefit-description">
                  Evaluamos tu situación actual y identificamos oportunidades de crecimiento inmediatas
                </p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.2)"/>
                  <path d="M12 20l6 6 10-10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Plan Personalizado</h3>
                <p class="benefit-description">
                  Creamos una estrategia específica para tu negocio y tus objetivos únicos
                </p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.2)"/>
                  <path d="M20 8v24m0-24l-8 8m8-8l8 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Resultados Inmediatos</h3>
                <p class="benefit-description">
                  Implementa cambios que generen resultados desde la primera semana
                </p>
              </div>
            </div>
          </div>
          
          <div class="guarantee">
            <div class="guarantee-badge">
              <span class="guarantee-emoji">🛡️</span>
            </div>
            <div class="guarantee-content">
              <h3 class="guarantee-title">Garantía de Satisfacción 100%</h3>
              <p class="guarantee-text">
                Si no quedas completamente satisfecha con la consultoría, te devolvemos el 100% de tu inversión. Sin preguntas.
              </p>
            </div>
          </div>
          
          <div class="offer-cta">
            <a href="#contacto" class="Button Button--primary Button--large">
              Reservar Mi Consultoría GRATIS
            </a>
            <p class="offer-urgency">
              <small>⏰ Oferta válida por tiempo limitado</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}