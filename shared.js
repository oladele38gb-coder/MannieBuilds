/* ── Menu toggle ── */
const overlay   = document.getElementById('menu-overlay');
const toggleBtn = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('[data-menu-link]');

function openMenu(){
  overlay.classList.add('open');
  document.body.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  toggleBtn.setAttribute('aria-expanded','true');
}
function closeMenu(){
  overlay.classList.remove('open');
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
  toggleBtn.setAttribute('aria-expanded','false');
  const sp = document.querySelector('.services-parent');
  const ss = document.getElementById('services-submenu');
  const st = document.getElementById('services-toggle');
  if(sp) sp.classList.remove('open');
  if(ss) ss.classList.remove('open');
  if(st) st.setAttribute('aria-expanded','false');
  if(typeof updateNav === 'function') updateNav();
}
toggleBtn.addEventListener('click', () => overlay.classList.contains('open') ? closeMenu() : openMenu());
menuLinks.forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

/* Services dropdown */
const st = document.getElementById('services-toggle');
const ss = document.getElementById('services-submenu');
if(st && ss){
  const sp = st.closest('.services-parent');
  st.addEventListener('click', () => {
    const open = sp.classList.toggle('open');
    ss.classList.toggle('open', open);
    st.setAttribute('aria-expanded', open);
  });
}

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── FAQ ── */
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-btn').forEach(b => {
      b.setAttribute('aria-expanded','false');
      document.getElementById(b.getAttribute('aria-controls'))?.classList.remove('open');
      const p = b.querySelector('.faq-icon svg path'); if(p) p.setAttribute('d','M12 5v14M5 12h14');
    });
    if(!isOpen){
      btn.setAttribute('aria-expanded','true');
      document.getElementById(btn.getAttribute('aria-controls'))?.classList.add('open');
      const p = btn.querySelector('.faq-icon svg path'); if(p) p.setAttribute('d','M5 12h14');
    }
  });
});

/* ── Live WAT time ── */
function tick(){
  const t = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:'Africa/Lagos'})+' WAT';
  const ft = document.getElementById('footer-time'); if(ft) ft.textContent = t;
  const ot = document.getElementById('overlay-time'); if(ot) ot.textContent = t;
}
tick(); setInterval(tick, 1000);

/* ── Smooth scroll for hash links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({ behavior:'smooth' }); }
  });
});

/* ── Universal Hover Videos ── */
document.querySelectorAll('.work-item, .wp-list-item, .wp-grid-item').forEach(item => {
  const video = item.querySelector('video');
  if (!video) return;
  item.addEventListener('mouseenter', () => { video.play().catch(() => {}); });
  item.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

/* ── Site Preloader (Concept A: Editorial Curtain Reveal) ── */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  const percentEl = document.getElementById('preloader-percent');
  if (!preloader || !percentEl) return;

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  let current = 0;
  const startTime = performance.now();
  const minDuration = 1200;
  let isWindowLoaded = document.readyState === 'complete';

  if (!isWindowLoaded) {
    window.addEventListener('load', () => { isWindowLoaded = true; }, { once: true });
  }

  function step(now) {
    const elapsed = now - startTime;
    const timeProgress = Math.min(elapsed / minDuration, 1);
    const eased = 1 - Math.pow(1 - timeProgress, 3);
    current = Math.min(Math.floor(eased * 100), isWindowLoaded ? 100 : 94);

    percentEl.textContent = String(current).padStart(2, '0') + '%';

    if (current < 100) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        preloader.classList.add('curtain-up');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';

        const heroPhoto = document.querySelector('.hero-photo');
        if (heroPhoto) {
          heroPhoto.style.transition = 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
          heroPhoto.style.transform = 'scale(1)';
        }

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1100);
      }, 140);
    }
  }

  requestAnimationFrame(step);
}
initPreloader();
