// ── Rodríguez Martínez Lab Website · main.js ───────────

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const open  = navLinks.classList.contains('open');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity   = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) navLinks.classList.remove('open');
  });
}

// Intersection Observer — fade-in on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement?.querySelectorAll('.fade-in');
      let delay = 0;
      if (siblings) {
        [...siblings].forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      }
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// Active nav link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
  else a.classList.remove('active');
  if (href === 'contact.html') a.classList.add('nav-cta');
});
