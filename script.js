const button = document.querySelector('.menu');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
  button.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = '☰';
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#admission-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.status').textContent = 'Thank you! Our admissions team will contact you soon.';
  event.currentTarget.reset();
});
