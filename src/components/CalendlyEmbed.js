export function CalendlyEmbed(calendlyUrl = 'https://calendly.com/your-username') {
  return `
    <div class="calendly-embed">
      <iframe 
        src="${calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline" 
        width="100%" 
        height="700" 
        frameborder="0" 
        scrolling="no"
        title="Agenda tu evaluación HIDROMAX">
      </iframe>
    </div>
  `;
}