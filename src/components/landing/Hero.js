export function Hero() {
  return `
    <section class="Hero">
      <div class="Container">
        <div class="hero-logo">
          <img src="/logo.png" alt="Logo" class="logo-image">
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Descubre las deficiencias nutricionales de tu piel con IA coreana — y corrígelas desde la primera sesión.
            </h1>
            <p class="hero-subtitle">
              HIDROMAX utiliza inteligencia artificial de tecnología coreana para detectar qué nutrientes le faltan a tu piel y te proporciona exactamente lo que necesita para rejuvenecer, limpiar y mejorar tu rostro.
            </p>
            <div class="hero-cta">
              <button onclick="openCalendlyModal()" class="Button Button--primary Button--large">
                Agenda tu evaluación ahora
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="hero-placeholder">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" rx="12" fill="#f8fafc"/>
                <rect x="50" y="50" width="300" height="200" rx="8" fill="#e2e8f0"/>
                <circle cx="200" cy="120" r="30" fill="#cbd5e1"/>
                <rect x="150" y="170" width="100" height="8" rx="4" fill="#cbd5e1"/>
                <rect x="170" y="190" width="60" height="6" rx="3" fill="#cbd5e1"/>
                <text x="200" y="230" text-anchor="middle" fill="#64748b" font-size="12">Clínica Médica</text>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="hero-authority">
          <div class="authority-item">
            <div class="authority-logo">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="40" rx="6" fill="#2563eb"/>
                <text x="30" y="25" text-anchor="middle" fill="white" font-size="10" font-weight="bold">CVH</text>
              </svg>
            </div>
          </div>
          <div class="authority-item">
            <div class="authority-number">15+</div>
            <div class="authority-text">Años de experiencia</div>
          </div>
          <div class="authority-item">
            <div class="authority-number">2,500+</div>
            <div class="authority-text">Pacientes atendidos</div>
          </div>
        </div>
      </div>
    </section>
  `;
}