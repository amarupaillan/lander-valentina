export function Expectations() {
  return `
    <section class="Expectations">
      <div class="Container">
        <div class="expectations-content">
          <h2 class="expectations-title">Expectativas reales</h2>
          
          <div class="expectations-grid">
            <div class="expectations-column expectations-yes">
              <div class="expectations-header">
                <div class="expectations-icon expectations-icon--yes">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="expectations-subtitle">Qué SÍ lograrás</h3>
              </div>
              
              <ul class="expectations-list">
                <li class="expectations-item">
                  <span class="expectations-check">✓</span>
                  Eres esteticista profesional con experiencia
                </li>
                <li class="expectations-item">
                  <span class="expectations-check">✓</span>
                  Quieres aumentar tus ingresos significativamente
                </li>
                <li class="expectations-item">
                  <span class="expectations-check">✓</span>
                  Estás dispuesta a implementar nuevas estrategias
                </li>
                <li class="expectations-item">
                  <span class="expectations-check">✓</span>
                  Buscas resultados reales y medibles
                </li>
                <li class="expectations-item">
                  <span class="expectations-check">✓</span>
                  Quieres diferenciarte de la competencia
                </li>
              </ul>
            </div>
            
            <div class="expectations-column expectations-no">
              <div class="expectations-header">
                <div class="expectations-icon expectations-icon--no">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="expectations-subtitle">Qué NO es</h3>
              </div>
              
              <ul class="expectations-list">
                <li class="expectations-item">
                  <span class="expectations-cross">✗</span>
                  No reemplaza lifting ni corrige flacidez avanzada o exceso cutáneo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}