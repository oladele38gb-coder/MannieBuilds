/* ── Menu toggle ── */
const overlay   = document.getElementById('menu-overlay');
const toggleBtn = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('[data-menu-link]');

function openMenu(){
  if(!overlay) return;
  overlay.classList.add('open');
  document.body.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  if(toggleBtn) toggleBtn.setAttribute('aria-expanded','true');
}

function closeMenu(){
  if(overlay) overlay.classList.remove('open');
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
  if(toggleBtn) toggleBtn.setAttribute('aria-expanded','false');
  const sp = document.querySelector('.services-parent');
  const ss = document.getElementById('services-submenu');
  const st = document.getElementById('services-toggle');
  if(sp) sp.classList.remove('open');
  if(ss) ss.classList.remove('open');
  if(st) st.setAttribute('aria-expanded','false');
  if(typeof updateNav === 'function') updateNav();
}

if(toggleBtn && overlay) {
  toggleBtn.addEventListener('click', () => overlay.classList.contains('open') ? closeMenu() : openMenu());
}
menuLinks.forEach(l => {
  l.addEventListener('click', () => {
    const href = l.getAttribute('href');
    if (!href) return;

    // Pure anchor link on the current page (e.g. "#contact" or "#services")
    if (href.startsWith('#')) {
      closeMenu();
      return;
    }

    try {
      const currentUrl = new URL(window.location.href);
      const targetUrl  = new URL(href, window.location.href);

      const normalize = (p) => p.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
      const currentNorm = normalize(currentUrl.pathname);
      const targetNorm  = normalize(targetUrl.pathname);

      // If staying on the exact same page, close the menu
      if (currentNorm === targetNorm) {
        if (targetUrl.hash || !targetUrl.search || targetUrl.search === currentUrl.search) {
          closeMenu();
        }
      }
      // If navigating to a DIFFERENT page, DO NOT call closeMenu().
      // The menu overlay stays open so the user doesn't see the current page flash.
    } catch(err) {
      // Fallback
    }
  });
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

/* Services dropdown */
const st = document.getElementById('services-toggle');
const ss = document.getElementById('services-submenu');
if(st && ss){
  const sp = st.closest('.services-parent');
  st.addEventListener('click', () => {
    const open = sp ? sp.classList.toggle('open') : false;
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
      const targetId = b.getAttribute('aria-controls');
      if (targetId) document.getElementById(targetId)?.classList.remove('open');
      const p = b.querySelector('.faq-icon svg path'); if(p) p.setAttribute('d','M12 5v14M5 12h14');
    });
    if(!isOpen){
      btn.setAttribute('aria-expanded','true');
      const targetId = btn.getAttribute('aria-controls');
      if (targetId) document.getElementById(targetId)?.classList.add('open');
      const p = btn.querySelector('.faq-icon svg path'); if(p) p.setAttribute('d','M5 12h14');
    }
  });
});

/* ── Live WAT time ── */
function tick(){
  try {
    const t = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:'Africa/Lagos'})+' WAT';
    const ft = document.getElementById('footer-time'); if(ft) ft.textContent = t;
    const ot = document.getElementById('overlay-time'); if(ot) ot.textContent = t;
  } catch(err) {}
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

/* ── Universal Hover Videos (Instant, Smooth Previews) ── */
document.querySelectorAll('.work-item, .wp-list-item, .wp-grid-item').forEach(item => {
  const video = item.querySelector('video');
  if (!video) return;

  video.preload = 'metadata';
  let playPromise = null;

  item.addEventListener('mouseenter', () => {
    playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          item.classList.add('video-active');
          const thumb = item.querySelector('.wp-grid-thumb, .work-preview, .wp-list-preview');
          if (thumb) thumb.classList.add('video-active');
        })
        .catch(() => {});
    }
  });

  item.addEventListener('mouseleave', () => {
    if (playPromise !== undefined) {
      playPromise.then(() => {
        video.pause();
        item.classList.remove('video-active');
        const thumb = item.querySelector('.wp-grid-thumb, .work-preview, .wp-list-preview');
        if (thumb) thumb.classList.remove('video-active');
      }).catch(() => {
        video.pause();
        item.classList.remove('video-active');
      });
    } else {
      video.pause();
      item.classList.remove('video-active');
    }
  });
});

/* ── Site Preloader (Fast, Snappy Editorial Curtain Reveal) ── */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  const percentEl = document.getElementById('preloader-percent');
  if (!preloader || !percentEl) return;

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  const hasVisited = sessionStorage.getItem('mb_visited') === 'true';
  const minDuration = hasVisited ? 350 : 650;
  let isWindowLoaded = document.readyState === 'complete' || document.readyState === 'interactive';

  if (!isWindowLoaded) {
    window.addEventListener('load', () => { isWindowLoaded = true; }, { once: true });
    setTimeout(() => { isWindowLoaded = true; }, hasVisited ? 400 : 900);
  }

  let current = 0;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const timeProgress = Math.min(elapsed / minDuration, 1);
    const eased = 1 - Math.pow(1 - timeProgress, 3);
    current = Math.min(Math.floor(eased * 100), isWindowLoaded ? 100 : 95);

    percentEl.textContent = String(current).padStart(2, '0') + '%';

    if (current < 100) {
      requestAnimationFrame(step);
    } else {
      try { sessionStorage.setItem('mb_visited', 'true'); } catch(e) {}
      setTimeout(() => {
        preloader.classList.add('curtain-up');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        window.dispatchEvent(new CustomEvent('preloader-revealed'));

        const heroPhoto = document.querySelector('.hero-photo');
        if (heroPhoto) {
          heroPhoto.style.transition = 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
          heroPhoto.style.transform = 'scale(1)';
        }

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 750);
      }, 70);
    }
  }

  requestAnimationFrame(step);
}

// Run immediately or when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreloader);
} else {
  initPreloader();
}
