const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// Theme toggle (dark is the default)
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function updateToggle() {
  const isLight = root.getAttribute('data-theme') === 'light';
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (next === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  try { localStorage.setItem('theme', next); } catch (e) {}
  updateToggle();
});

updateToggle();