/* ============================================================
   PROMO HEADER — auto-rotating weekly promo + countdown
   ------------------------------------------------------------
   1) Calendar of awareness weeks (BR + sleep/health context)
   2) Picks current promo by ISO week of year
   3) Countdown ends next Sunday 23:59:59 (rolling weekly)
   4) Updates DOM elements with data-* attributes:
      - [data-promo-label]    → promo name
      - [data-promo-discount] → discount %
      - [data-countdown-days/hours/minutes] → DD/HH/MM
   ============================================================ */

(function () {
  'use strict';

  const DEFAULT_DISCOUNT = 44;

  // Calendar: ISO week → promo. Latest week ≤ current wins.
  const PROMOS = {
    1:  { label: 'Ano Novo, Sono Novo' },
    3:  { label: 'Janeiro Branco — Saúde Mental' },
    6:  { label: 'Semana Internacional do Sono' },
    10: { label: 'Semana da Mulher' },
    11: { label: 'Dia Mundial do Sono' },
    14: { label: 'Semana Mundial da Saúde' },
    18: { label: 'Promo Outono Recovery' },
    22: { label: 'Semana do Bem-estar' },
    26: { label: 'Promo Meio do Ano' },
    30: { label: 'Semana do Auto-cuidado' },
    34: { label: 'Mês Lilás — Saúde Hormonal' },
    37: { label: 'Setembro Amarelo — Saúde Mental' },
    40: { label: 'Outubro Rosa — Saúde Feminina' },
    45: { label: 'Novembro Azul — Saúde Masculina' },
    48: { label: 'Black Friday Slip' },
    50: { label: 'Promo Fim de Ano — Sono em Paz' },
    _default: { label: 'Promo Semanal Slip' }
  };

  function getISOWeek(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  }

  function getCurrentPromo() {
    const week = getISOWeek(new Date());
    const weeks = Object.keys(PROMOS)
      .filter(k => k !== '_default')
      .map(Number)
      .sort((a, b) => a - b);
    let chosen = PROMOS._default;
    for (const w of weeks) {
      if (w <= week) chosen = PROMOS[w];
    }
    return { label: chosen.label, discount: DEFAULT_DISCOUNT };
  }

  function getCountdownTarget() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0=Sun, 6=Sat
    const target = new Date(now);
    let daysUntil = (7 - dayOfWeek) % 7;
    if (daysUntil === 0) {
      // já é domingo — termina hoje 23:59:59 (se ainda não passou) ou próximo domingo
      const endToday = new Date(now);
      endToday.setHours(23, 59, 59, 999);
      if (now < endToday) {
        target.setHours(23, 59, 59, 999);
        return target;
      }
      daysUntil = 7;
    }
    target.setDate(now.getDate() + daysUntil);
    target.setHours(23, 59, 59, 999);
    return target;
  }

  function formatCountdown(target) {
    const now = new Date();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);
    return { days, hours, minutes, seconds };
  }

  const pad = n => String(n).padStart(2, '0');

  function init() {
    const promo = getCurrentPromo();
    const target = getCountdownTarget();

    document.querySelectorAll('[data-promo-label]').forEach(el => {
      el.textContent = promo.label;
    });
    document.querySelectorAll('[data-promo-discount]').forEach(el => {
      el.textContent = promo.discount + '%';
    });

    function tick() {
      const { days, hours, minutes, seconds } = formatCountdown(target);
      document.querySelectorAll('[data-countdown-days]').forEach(el => el.textContent = pad(days));
      document.querySelectorAll('[data-countdown-hours]').forEach(el => el.textContent = pad(hours));
      document.querySelectorAll('[data-countdown-minutes]').forEach(el => el.textContent = pad(minutes));
      document.querySelectorAll('[data-countdown-seconds]').forEach(el => el.textContent = pad(seconds));
    }

    tick();
    setInterval(tick, 1000); // 1s — agora mostra segundos
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
