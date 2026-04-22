(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mark current nav link.
  const path = location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.site-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (
      href === path ||
      (path === '/' && href === 'index.html') ||
      path.endsWith('/' + href)
    ) {
      a.classList.add('is-current');
    }
  });

  // Simple lightbox for the gallery.
  const figures = document.querySelectorAll('.gallery-grid figure');
  if (!figures.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button>' +
    '<img alt="">' +
    '<p class="lightbox__caption"></p>';
  Object.assign(overlay.style, {
    position: 'fixed', inset: '0', display: 'none',
    alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
    background: 'rgba(20,12,8,0.92)', zIndex: '1000', padding: '2rem', cursor: 'zoom-out',
  });
  const img = overlay.querySelector('img');
  Object.assign(img.style, { maxWidth: '92vw', maxHeight: '82vh', borderRadius: '6px', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' });
  const cap = overlay.querySelector('.lightbox__caption');
  Object.assign(cap.style, { color: 'rgba(255,255,255,0.85)', marginTop: '1rem', fontSize: '0.95rem', textAlign: 'center', maxWidth: '60ch' });
  const closeBtn = overlay.querySelector('.lightbox__close');
  Object.assign(closeBtn.style, {
    position: 'absolute', top: '1rem', right: '1.2rem',
    background: 'transparent', border: '0', color: '#fff',
    fontSize: '2.4rem', lineHeight: '1', cursor: 'pointer',
  });
  document.body.appendChild(overlay);

  const open = (src, caption) => {
    img.src = src;
    cap.textContent = caption || '';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    overlay.style.display = 'none';
    img.src = '';
    document.body.style.overflow = '';
  };

  figures.forEach((fig) => {
    fig.addEventListener('click', () => {
      const i = fig.querySelector('img');
      const c = fig.querySelector('figcaption');
      if (i) open(i.src, c ? c.textContent : '');
    });
  });
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
