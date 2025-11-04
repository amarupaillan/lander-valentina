export function Modal() {
  return `
    <div id="calendly-modal" class="modal-overlay" style="display: none;">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Agenda tu evaluación HIDROMAX</h3>
          <button class="modal-close" onclick="closeCalendlyModal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="modal-body" id="modal-calendly-container">
          <!-- Calendly embed will be loaded here -->
        </div>
      </div>
    </div>
  `;
}

// Funciones globales para manejar el modal
window.openCalendlyModal = function() {
  const modal = document.getElementById('calendly-modal');
  const container = document.getElementById('modal-calendly-container');
  
  // Importar y cargar Calendly solo cuando se abre el modal
  import('./CalendlyEmbed.js').then(({ CalendlyEmbed }) => {
    container.innerHTML = CalendlyEmbed('https://calendly.com/your-username');
  });
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeCalendlyModal = function() {
  const modal = document.getElementById('calendly-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Limpiar el contenido para evitar problemas de rendimiento
  const container = document.getElementById('modal-calendly-container');
  container.innerHTML = '';
};