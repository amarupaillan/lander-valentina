import './style.css'
import { Hero } from './components/landing/Hero.js'
import { Problem } from './components/landing/Problem.js'
import { Solution } from './components/landing/Solution.js'
import { Process } from './components/landing/Process.js'
import { Results } from './components/landing/Results.js'
import { Expectations } from './components/landing/Expectations.js'
import { Offer } from './components/landing/Offer.js'
import { FAQ } from './components/landing/FAQ.js'
import { FinalCTA } from './components/landing/FinalCTA.js'
import { HealthNotice } from './components/landing/HealthNotice.js'
import { Modal } from './components/Modal.js'
import { StickyBar } from './components/StickyBar.js'
import { CalendlyEmbed } from './components/CalendlyEmbed.js'

// Ensamblar la landing page
document.querySelector('#app').innerHTML = `
  ${StickyBar()}
  ${Hero()}
  ${Problem()}
  ${Solution()}
  ${Process()}
  ${Results()}
  ${Expectations()}
  ${Offer()}
  ${FAQ()}
  ${FinalCTA()}
  ${HealthNotice()}
  ${Modal()}
`

// Funcionalidad para FAQ
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq-open');
      
      // Cerrar todos los otros items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('faq-open');
        otherItem.querySelector('.faq-toggle').textContent = '+';
      });
      
      // Toggle el item actual
      if (!isOpen) {
        item.classList.add('faq-open');
        toggle.textContent = '−';
      }
    });
  });

  // Cargar Calendly embeds en las secciones correspondientes
  const processEmbed = document.getElementById('process-calendly-embed');
  const finalCtaEmbed = document.getElementById('final-cta-calendly-embed');
  
  if (processEmbed) {
    processEmbed.innerHTML = CalendlyEmbed('https://calendly.com/your-username');
  }
  
  if (finalCtaEmbed) {
    finalCtaEmbed.innerHTML = CalendlyEmbed('https://calendly.com/your-username');
  }
});