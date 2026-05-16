(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progress = document.querySelector('.progress');
  const counter = document.querySelector('.counter');
  const total = slides.length;
  let current = 0;

  function show(idx, replaceHash = false) {
    idx = Math.max(0, Math.min(total - 1, idx));
    if (idx === current && slides[current].classList.contains('active')) {
      // still update progress/counter on first paint
    }
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    current = idx;

    const pct = ((idx + 1) / total) * 100;
    if (progress) progress.style.width = pct + '%';
    if (counter) counter.innerHTML = `<span>${idx + 1}</span> / ${total}`;

    const hash = `#slide-${idx + 1}`;
    if (replaceHash) history.replaceState(null, '', hash);
    else if (location.hash !== hash) history.pushState(null, '', hash);
  }

  function next() { if (current < total - 1) show(current + 1); }
  function prev() { if (current > 0) show(current - 1); }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); show(0); break;
      case 'End':
        e.preventDefault(); show(total - 1); break;
      case 'f':
      case 'F':
        e.preventDefault(); toggleFullscreen(); break;
    }
  });

  document.addEventListener('click', (e) => {
    // Don't navigate when clicking interactive elements
    if (e.target.closest('a, button, input, textarea, select')) return;
    const x = e.clientX;
    if (x > window.innerWidth / 2) next(); else prev();
  });

  window.addEventListener('hashchange', () => {
    const m = location.hash.match(/^#slide-(\d+)$/);
    if (m) show(parseInt(m[1], 10) - 1, true);
  });

  // Initial: respect URL hash
  const m = location.hash.match(/^#slide-(\d+)$/);
  show(m ? parseInt(m[1], 10) - 1 : 0, true);
})();
