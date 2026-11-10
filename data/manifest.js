// Add one entry per day. Each shift points to its own JS file.
window.DAYS = [
  { date: "2025-06-05", shifts: { 1: "data/2025-06-05_shift1.js", 2: "data/2025-06-05_shift2.js", 3: "data/2025-06-05_shift3.js" } },
  { date: "2025-06-06", shifts: { 1: "data/2025-06-06_shift1.js" } }
];
// Standard exam rules (change here if needed)
window.RULES = { fullMinutes: 90, negative: 1/3, sections: ["Maths", "Reasoning", "General Studies"] };
