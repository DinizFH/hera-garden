// Toggle do menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('mainNav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

// Garantir autoplay em alguns navegadores
const video = document.querySelector('.hero-video');
if (video) {
  const tryPlay = () => video.play().catch(() => {/* silencioso */});
  document.addEventListener('DOMContentLoaded', tryPlay);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlay();
  });
}
