'use strict'

const header = document.querySelector('[data-header]');

const addFixedHeaderClass = () => {
  if (window.scrollY > 1) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.addEventListener("scroll", addFixedHeaderClass);

/* initialising accordions */
const accordionFaq = document.querySelector('#accordion-1');

if (accordionFaq) {
  new ItcAccordion('#accordion-1');
}
