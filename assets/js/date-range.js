'use strict';

(() => {
  // Убедись, что flatpickr подключён глобально
  if (typeof flatpickr === 'undefined') return;

  const fromEl = document.getElementById('date-from');
  const toEl   = document.getElementById('date-to');
  if (!fromEl || !toEl) return;

  // Локаль (если подключен ru.js)
  const ru = (window.flatpickr?.l10ns?.ru) ? window.flatpickr.l10ns.ru : undefined;

  // Форматтер dd.mm.yyyy
  const fmt = (d) =>
      `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;

  // Инициализируем один календарь в режиме 'range' на первом инпуте,
  // а второй инпут просто синхронизируем. Календарь открывается по клику на любой.
  const fp = flatpickr(fromEl, {
    mode: 'range',
    dateFormat: 'd.m.Y',
    allowInput: false,
    clickOpens: true,
    disableMobile: true,
    locale: ru ?? undefined,
    // Минимальная дата — сегодня (при необходимости убери строку)
    minDate: 'today',
    onDayCreate: (_selDates, _str, _inst, dayElem) => {
      // Подсветка выходных: 0 — воскресенье, 6 — суббота
      const date = dayElem.dateObj;
      if (!date) return;
      const day = date.getDay();
      if (day === 0 || day === 6) dayElem.classList.add('is-weekend');
    },
    onChange: (selectedDates) => {
      // selectedDates: [start, end?]
      const [start, end] = selectedDates;
      fromEl.value = start ? fmt(start) : '';
      toEl.value   = end   ? fmt(end)   : '';
    },
    onOpen: () => {
      // синхронизируем текущие значения при повторном открытии
      const start = fromEl.value;
      const end   = toEl.value;
      if (start || end) {
        const parsed = [];
        if (start) {
          const [d,m,y] = start.split('.').map(Number);
          parsed.push(new Date(y, m-1, d));
        }
        if (end) {
          const [d,m,y] = end.split('.').map(Number);
          parsed.push(new Date(y, m-1, d));
        }
        if (parsed.length) fp.setDate(parsed, false);
      }
    }
  });

  // Клик по второму инпуту открывает тот же календарь
  toEl.addEventListener('click', () => fp.open());

  // Дополнительно: если надо запретить ручной ввод
  const preventTyping = (e) => e.preventDefault();
  fromEl.addEventListener('keydown', preventTyping);
  toEl.addEventListener('keydown', preventTyping);

  // Пример программного отключения (Disabled state)
  // toEl.disabled = true;
})();
