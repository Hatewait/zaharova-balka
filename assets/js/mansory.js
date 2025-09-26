(function () {
  const grid = document.querySelector('.mosaic');
  if (!grid || typeof Masonry === 'undefined' || typeof imagesLoaded === 'undefined') return;

  const msnry = new Masonry(grid, {
    itemSelector: '.mosaic__item',
    columnWidth: '.mosaic__sizer',
    gutter: '.mosaic__gutter',
    percentPosition: true,
    originLeft: true,
    transitionDuration: 0   // убери дергания; поставь '0.2s' если хочешь анимацию
  });

  // перезапуск раскладки по мере загрузки каждой картинки
  imagesLoaded(grid).on('progress', function () {
    msnry.layout();
  });

  // на случай смены шрифтов/сайдбаров и пр.
  window.addEventListener('resize', debounce(() => msnry.layout(), 150));

  function debounce(fn, wait){
    let t; return function(){ clearTimeout(t); t = setTimeout(fn, wait); };
  }
})();
