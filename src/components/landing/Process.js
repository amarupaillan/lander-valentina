export function Process() {
  return `
    <section class="Process">
      <div class="Container">
        <div class="process-content">
          <h2 class="process-title">Proceso en 4 pasos</h2>
          
          <div class="process-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3 class="step-title">Reserva tu evaluación</h3>
                <p class="step-description">Agenda tu cita para el análisis con IA coreana</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3 class="step-title">Análisis nutricional con IA</h3>
                <p class="step-description">Escaneamos tu piel para detectar deficiencias nutricionales específicas</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3 class="step-title">Suministro de nutrientes</h3>
                <p class="step-description">Aplicamos los nutrientes exactos que tu piel necesita</p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3 class="step-title">Resultados y seguimiento</h3>
                <p class="step-description">Ve la mejora inmediata y recibe tu plan de cuidado personalizado</p>
              </div>
            </div>
          </div>
          
          <div class="process-calendly">
            <div class="calendly-section">
              <h3 class="calendly-title">Agenda tu evaluación HIDROMAX con IA Coreana</h3>
              <p class="calendly-subtitle">Descubre qué nutrientes necesita tu piel - Selecciona el día y hora que mejor te acomode</p>
              <div id="process-calendly-embed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}