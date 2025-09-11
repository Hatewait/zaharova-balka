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

/* menu */
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const buttonClose = document.querySelector('[data-menu-close]');
const body = document.body;

menuButton.addEventListener('click', () => {
  menu.classList.add('opened');
  body.classList.add('opened');
})

buttonClose.addEventListener('click', () => {
  menu.classList.remove('opened');
  body.classList.remove('opened');
})



Fancybox.bind('[data-fancybox]', {
  Thumbs : false,
});

// плавающий лейбл
const setFocus = (el, state) => {
  const field = el.closest('.date-field');
  if (field) field.classList.toggle('is-focused', !!state);
};
const setFilled = (el) => {
  const field = el.closest('.date-field');
  if (field) field.classList.toggle('is-filled', !!el.value.trim());
};
