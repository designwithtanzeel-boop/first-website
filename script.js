gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
intro.from('.topbar', { y: -40, opacity: 0, duration: .7 })
  .from('.hero-title span', { yPercent: 120, opacity: 0, duration: .9, stagger: .12 }, '-=.35')
  .from('.hero-top p, .hero-bottom > *, .hero-stamp', { opacity: 0, y: 20, duration: .6, stagger: .08 }, '-=.55');

gsap.to('.hero-title', { yPercent: 35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
gsap.to('.hero-stamp', { rotation: 360, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 } });
gsap.to('.signal span', { scaleY: 2.5, transformOrigin: 'bottom', duration: .35, repeat: -1, yoyo: true, stagger: { each: .09, from: 'random' }, ease: 'sine.inOut' });

document.querySelectorAll('h2, .record').forEach((item) => {
  gsap.from(item, { y: 55, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 84%' } });
});
gsap.from('.manifesto-copy, .stamp-small', { x: 35, opacity: 0, duration: .8, stagger: .2, scrollTrigger: { trigger: '.manifesto', start: 'top 70%' } });
gsap.from('.quote blockquote', { scale: .9, opacity: 0, duration: 1, scrollTrigger: { trigger: '.quote', start: 'top 75%' } });

const toggle = document.querySelector('.sound-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('broadcasting');
  toggle.innerHTML = document.body.classList.contains('broadcasting') ? '<span class="sound-dot"></span> LIVE / ON' : '<span class="sound-dot"></span> LIVE / OFF';
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  const message = document.querySelector('.form-message');
  if (!input.value.includes('@')) { message.textContent = 'ENTER A REAL FREQUENCY.'; return; }
  message.textContent = 'YOU ARE ON THE LIST. STAY LOUD.';
  input.value = '';
});