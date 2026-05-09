// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Floating particles in cover
const container = document.getElementById('particles');
for (let i = 0; i < 28; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 6 + 3;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    animation-duration:${Math.random()*18+10}s;
    animation-delay:${Math.random()*10}s;
    opacity:${Math.random()*0.2};
  `;
  container.appendChild(p);
}

// Scroll-triggered fade-in
const fadeEls = document.querySelectorAll(
  '.journal-card, .toc-card, .timeline-card, .cert-card, .intro-text-col p, .cv-card, .conclusion-card'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));
