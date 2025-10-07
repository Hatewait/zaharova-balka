// наблюдаем высоту превью и записываем в var
(() => {
  const thumbs = document.querySelector('[data-observe-h]');
  if (!thumbs) return;

  const host = thumbs.closest('.services-slider') || document.documentElement;

  const set = (h) => host.style.setProperty('--thumbs-h', `${Math.round(h)}px`);

  // первичная инициализация
  set(thumbs.getBoundingClientRect().height);

  // живое обновление при ресайзе/перестроении
  const ro = new ResizeObserver((entries) => {
    for (const e of entries) {
      const h = e.borderBoxSize?.[0]?.blockSize ?? e.contentRect.height;
      set(h);
    }
  });
  ro.observe(thumbs);
})();
