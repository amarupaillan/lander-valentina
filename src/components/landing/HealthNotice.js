export function HealthNotice() {
  return `
    <section class="HealthNotice">
      <div class="Container">
        <div class="health-notice-content">
          <div class="health-notice-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="health-notice-text">
            <h3 class="health-notice-title">Aviso importante</h3>
            <p class="health-notice-description">
              HIDROMAX es estético, no médico. No diagnostica enfermedades. Contraindicaciones: dermatosis activas, heridas, infecciones; consulta en embarazo/lactancia.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}