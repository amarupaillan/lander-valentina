export function StickyBar() {
  return `
    <div class="StickyBarCalendly">
      <div class="Container">
        <div class="sticky-bar-content">
          <div class="sticky-bar-text">
            <span class="sticky-bar-title">Agenda tu evaluación HIDROMAX</span>
            <span class="sticky-bar-subtitle">Disponibilidad limitada</span>
          </div>
          <div class="sticky-bar-actions">
            <button onclick="openCalendlyModal()" class="Button Button--primary Button--small">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V3zM2 7a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7zM10 6a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1h-3z" fill="currentColor"/>
              </svg>
              Agendar
            </button>
            <a href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20agendar%20una%20evaluación%20HIDROMAX" class="Button Button--secondary Button--small" target="_blank">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.648 9.588c-.198-.099-1.172-.578-1.353-.644-.182-.066-.314-.099-.447.1-.132.198-.511.644-.627.776-.115.133-.231.149-.429.05-.198-.1-.837-.309-1.593-.983-.589-.525-.987-1.174-1.102-1.372-.116-.198-.012-.305.087-.404.089-.089.198-.231.297-.347.099-.116.132-.198.198-.331.066-.132.033-.248-.017-.347-.05-.099-.446-1.075-.611-1.471-.161-.386-.325-.333-.446-.34-.115-.005-.247-.007-.38-.007-.132 0-.347.05-.528.248-.181.198-.693.677-.693 1.653 0 .975.71 1.916.809 2.049.099.132 1.397 2.133 3.385 2.992.472.204.841.326 1.129.417.475.151.907.13 1.247.079.381-.057 1.172-.479 1.337-.942.165-.462.165-.859.116-.942-.05-.083-.182-.132-.38-.231m-3.614 4.935h-.003a6.58 6.58 0 01-3.354-.919l-.241-.143-2.494.654.665-2.432-.157-.249a6.573 6.573 0 01-1.007-3.507c.001-3.633 2.958-6.589 6.592-6.589 1.76 0 3.415.687 4.659 1.932a6.55 6.55 0 011.929 4.663c-.002 3.633-2.958 6.589-6.59 6.589m5.609-12.198A7.877 7.877 0 008.033 0C3.663 0 .107 3.556.105 7.928c0 1.397.364 2.761 1.059 3.963L.038 16l4.204-1.103a7.921 7.921 0 003.789.966h.003c4.369 0 7.926-3.556 7.928-7.929A7.88 7.88 0 0013.59 2.325" fill="currentColor"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}