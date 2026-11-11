// One line per day: day("YYYY-MM-DD", number_of_shifts)
// It expects files named  data/YYYY-MM-DD_shift1.js, _shift2.js ...
(function () {
  function day(date, n) { var s = {}; for (var i = 1; i <= n; i++) s[i] = "data/" + date + "_shift" + i + ".js"; return { date: date, shifts: s }; }
  window.DAYS = [
    day("2026-03-16", 3),
    day("2026-03-17", 3),
    day("2026-03-18", 3),
    day("2026-03-19", 3)
    // day("2025-06-07", 3)
  ];
  // Standard exam rules (change here if needed)
  window.RULES = { fullMinutes: 90, negative: 1/3, sections: ["Maths", "Reasoning", "General Studies"] };
})();
