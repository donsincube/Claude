'use strict';

// ── Storage helpers ──────────────────────────────────────────────────────────
const STORE = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  del: k => localStorage.removeItem(k),
};

// ── Milestone data (week → info) ─────────────────────────────────────────────
const MILESTONES = {
  4:  { emoji: '🌱', title: 'Week 4 – Implantation', text: 'The fertilised egg has nestled into the uterine lining. The placenta and amniotic sac are beginning to form.' },
  5:  { emoji: '🫀', title: 'Week 5 – Heart forming', text: 'The neural tube (future brain & spinal cord) is developing. A tiny heart has started beating!' },
  6:  { emoji: '💗', title: 'Week 6 – Heartbeat', text: 'Baby\'s heart is beating about 110 times per minute. Tiny arm and leg buds are visible.' },
  7:  { emoji: '🧠', title: 'Week 7 – Brain growth', text: 'Baby\'s brain is growing rapidly. Facial features — eyes, nostrils and ears — are taking shape.' },
  8:  { emoji: '🫘', title: 'Week 8 – Bean-sized', text: 'Baby is about the size of a kidney bean. Fingers and toes are beginning to separate.' },
  9:  { emoji: '🍇', title: 'Week 9 – Grape-sized', text: 'All essential organs are in place. Baby can make small movements, though you can\'t feel them yet.' },
  10: { emoji: '🍓', title: 'Week 10 – Strawberry', text: 'Baby is now officially called a fetus. Tiny bones are starting to harden.' },
  11: { emoji: '🫒', title: 'Week 11 – Olive-sized', text: 'Baby\'s organs are fully formed and growing. Fingers and toes are no longer webbed.' },
  12: { emoji: '🍋', title: 'Week 12 – Lemon', text: 'End of first trimester! Risk of miscarriage drops significantly. Baby can open and close fists.' },
  13: { emoji: '🍑', title: 'Week 13 – Peach', text: 'Welcome to the second trimester! Fingerprints are forming on baby\'s tiny fingertips.' },
  14: { emoji: '🍊', title: 'Week 14 – Navel orange', text: 'Baby can squint, frown and grimace. The kidneys are producing urine.' },
  15: { emoji: '🍏', title: 'Week 15 – Apple', text: 'Baby is forming taste buds. You may start to feel the first flutters of movement (quickening).' },
  16: { emoji: '🥑', title: 'Week 16 – Avocado', text: 'Baby\'s ears are developed enough to hear your voice. The backbone and muscles are strengthening.' },
  17: { emoji: '🍐', title: 'Week 17 – Pear', text: 'Baby is putting on fat deposits to keep warm. Sweat glands are forming.' },
  18: { emoji: '🥭', title: 'Week 18 – Mango', text: 'This is a common week for the anatomy ultrasound! Baby\'s nervous system is maturing rapidly.' },
  19: { emoji: '🫑', title: 'Week 19 – Heirloom tomato', text: 'Baby is developing a waxy protective coating called vernix. You may feel kicks more regularly now.' },
  20: { emoji: '🍌', title: 'Week 20 – Banana', text: 'Halfway there! Baby can hear sounds from outside the womb. Their senses are developing quickly.' },
  21: { emoji: '🥕', title: 'Week 21 – Carrot', text: 'Baby\'s digestive system is practicing swallowing amniotic fluid. You\'ll feel stronger kicks soon.' },
  22: { emoji: '🌽', title: 'Week 22 – Corn on the cob', text: 'Baby\'s lips and eyebrows are distinct. They may suck their thumb in there.' },
  23: { emoji: '🍆', title: 'Week 23 – Eggplant', text: 'Baby is gaining weight steadily. Their skin is still somewhat transparent but filling out.' },
  24: { emoji: '🌽', title: 'Week 24 – Ear of corn', text: 'Baby reaches a major viability milestone. Lungs are developing the surfactant needed to breathe.' },
  25: { emoji: '🥦', title: 'Week 25 – Cauliflower', text: 'Baby responds to touch and may startle at loud sounds. Hair, eyebrows and eyelashes are present.' },
  26: { emoji: '🥬', title: 'Week 26 – Kale', text: 'Baby\'s eyes are forming and will soon open. Brain activity is increasing rapidly.' },
  27: { emoji: '🥒', title: 'Week 27 – Cucumber', text: 'End of second trimester approaching! Baby sleeps and wakes in regular cycles.' },
  28: { emoji: '🫛', title: 'Week 28 – Eggplant', text: 'Third trimester begins! Baby can blink and has eyelashes. Brain is forming grooves and indentations.' },
  29: { emoji: '🍠', title: 'Week 29 – Butternut squash', text: 'Baby is kicking and stretching regularly. Muscles and lungs are maturing for life outside.' },
  30: { emoji: '🎃', title: 'Week 30 – Cabbage', text: 'Baby is about 15 inches long. They\'re storing fat and the lanugo (fine hair) is starting to disappear.' },
  31: { emoji: '🥥', title: 'Week 31 – Coconut', text: 'Baby\'s brain and nerves are directing all bodily functions. They\'re practicing breathing movements.' },
  32: { emoji: '🫐', title: 'Week 32 – Jicama', text: 'Baby has toenails, fingernails and real hair! They\'re head-down in most cases now.' },
  33: { emoji: '🍍', title: 'Week 33 – Pineapple', text: 'Baby\'s bones are hardening (except the skull, which stays soft for delivery). Their immune system is developing.' },
  34: { emoji: '🎾', title: 'Week 34 – Cantaloupe', text: 'Baby is considered "late preterm." The central nervous system and lungs are nearly mature.' },
  35: { emoji: '🏈', title: 'Week 35 – Honeydew', text: 'Most of the development is complete. Baby is gaining about half a pound per week now.' },
  36: { emoji: '🥗', title: 'Week 36 – Head of lettuce', text: 'Baby may "drop" into the pelvis (lightening). You might breathe easier but feel more pressure below.' },
  37: { emoji: '✅', title: 'Week 37 – Full term!', text: 'Baby is considered early term. They\'re likely in position for birth. Final organ systems are maturing.' },
  38: { emoji: '🌟', title: 'Week 38 – Watermelon', text: 'Baby is fully developed and ready to meet you! Most of the vernix has disappeared.' },
  39: { emoji: '💫', title: 'Week 39 – Almost!', text: 'Brain is still rapidly developing. Baby could arrive any day — watch for signs of labor!' },
  40: { emoji: '🎉', title: 'Week 40 – Due week!', text: 'You\'ve made it to your due date! Every day is a waiting game now. Baby will arrive on their own schedule.' },
};

function getMilestone(week) {
  if (week < 4) return { emoji: '🤰', title: 'Very early days', text: 'You\'re in the earliest days of pregnancy. The journey is just beginning!' };
  if (week > 40) return { emoji: '👶', title: 'Past due date', text: 'You\'ve passed your due date — baby is taking their time! Stay in close contact with your care team.' };
  // Find closest week at or below
  for (let w = week; w >= 4; w--) {
    if (MILESTONES[w]) return MILESTONES[w];
  }
  return { emoji: '🌱', title: `Week ${week}`, text: 'Growing and thriving!' };
}

// ── Date helpers ─────────────────────────────────────────────────────────────
function today() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function parseDate(str) {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(date) {
  if (!date) return '—';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function lmpFromDue(dueDate) {
  const d = new Date(dueDate);
  d.setDate(d.getDate() - 280);
  return d;
}

function dueFromLmp(lmpDate) {
  const d = new Date(lmpDate);
  d.setDate(d.getDate() + 280);
  return d;
}

function calcPregnancy(lmpDate) {
  const now = today();
  const diffMs = now - lmpDate;
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const week = Math.floor(totalDays / 7);
  const dayOfWeek = totalDays % 7;
  const dueDate = dueFromLmp(lmpDate);
  const daysLeft = Math.max(0, Math.floor((dueDate - now) / (1000 * 60 * 60 * 24)));
  const progress = Math.min(100, Math.max(0, (totalDays / 280) * 100));
  return { week, dayOfWeek, totalDays, daysLeft, dueDate, progress };
}

function trimesterLabel(week) {
  if (week < 14) return '1st Trimester';
  if (week < 28) return '2nd Trimester';
  return '3rd Trimester';
}

// ── App state ────────────────────────────────────────────────────────────────
let selectedMood = null;

function getConfig() { return STORE.get('pg_config'); }
function getCheckins() { return STORE.get('pg_checkins') || {}; }

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const cfg = getConfig();
  if (!cfg || !cfg.lmp) {
    showScreen('setup-screen');
    // Set default max date to today for LMP, min for due
    const todayStr = formatDateKey(today());
    document.getElementById('lmp-input').max = todayStr;
    document.getElementById('lmp-input').addEventListener('change', e => {
      if (e.target.value) {
        const due = dueFromLmp(parseDate(e.target.value));
        document.getElementById('due-date-input').value = formatDateKey(due);
      }
    });
    document.getElementById('due-date-input').addEventListener('change', e => {
      if (e.target.value) {
        const lmp = lmpFromDue(parseDate(e.target.value));
        document.getElementById('lmp-input').value = formatDateKey(lmp);
      }
    });
  } else {
    showDashboard(cfg);
  }
});

function showScreen(id) {
  ['setup-screen', 'dashboard'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// ── Setup ─────────────────────────────────────────────────────────────────────
function saveSetup() {
  const lmpVal = document.getElementById('lmp-input').value;
  const dueVal = document.getElementById('due-date-input').value;
  const name   = document.getElementById('mom-name-input').value.trim();

  if (!lmpVal && !dueVal) {
    alert('Please enter either your LMP or due date to continue.');
    return;
  }

  let lmpDate;
  if (lmpVal) {
    lmpDate = parseDate(lmpVal);
  } else {
    lmpDate = lmpFromDue(parseDate(dueVal));
  }

  const cfg = { lmp: formatDateKey(lmpDate), name: name || 'Mama' };
  STORE.set('pg_config', cfg);
  showDashboard(cfg);
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function showDashboard(cfg) {
  showScreen('dashboard');

  const lmpDate = parseDate(cfg.lmp);
  const { week, dayOfWeek, totalDays, daysLeft, dueDate, progress } = calcPregnancy(lmpDate);

  // Header
  document.getElementById('header-name').textContent =
    cfg.name ? `${cfg.name}'s Journey` : 'Our Pregnancy Journey';

  // Week / day
  document.getElementById('week-number').textContent = week;
  document.getElementById('day-number').textContent  = dayOfWeek;
  document.getElementById('trimester-badge').textContent = trimesterLabel(week);

  // Progress bar
  document.getElementById('progress-fill').style.width = `${progress.toFixed(1)}%`;
  document.getElementById('days-remaining').textContent = `${Math.round(progress)}% complete`;

  // Key dates
  document.getElementById('due-date-display').textContent = formatDate(dueDate);
  document.getElementById('days-along').textContent = `${totalDays}`;
  document.getElementById('days-left').textContent  = daysLeft > 0 ? `${daysLeft}` : 'Here! 🎉';

  // Milestone
  const ms = getMilestone(week);
  document.getElementById('milestone-emoji').textContent = ms.emoji;
  document.getElementById('milestone-title').textContent = ms.title;
  document.getElementById('milestone-text').textContent  = ms.text;

  // Check-in label
  const todayStr = formatDateKey(today());
  document.getElementById('checkin-date-label').textContent =
    `Logging for ${today().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · Week ${week}, Day ${dayOfWeek}`;

  // Pre-fill today's entry if it exists
  const checkins = getCheckins();
  if (checkins[todayStr]) {
    prefillCheckin(checkins[todayStr]);
  }

  renderHistory();
}

function prefillCheckin(entry) {
  if (entry.mood) {
    const btn = document.querySelector(`.mood-btn[data-mood="${entry.mood}"]`);
    if (btn) { selectedMood = entry.mood; btn.classList.add('selected'); }
  }
  if (entry.symptoms) {
    entry.symptoms.forEach(sym => {
      document.querySelectorAll('.chip').forEach(c => {
        if (c.textContent.trim() === sym) c.classList.add('active');
      });
    });
  }
  if (entry.notes) {
    document.getElementById('notes-input').value = entry.notes;
  }
}

// ── Mood & Symptoms ──────────────────────────────────────────────────────────
function selectMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedMood = btn.dataset.mood;
}

function toggleChip(chip) {
  chip.classList.toggle('active');
}

// ── Save check-in ─────────────────────────────────────────────────────────────
function saveCheckin() {
  if (!selectedMood) {
    alert('Please select how you\'re feeling before saving.');
    return;
  }

  const cfg = getConfig();
  const lmpDate = parseDate(cfg.lmp);
  const { week, dayOfWeek } = calcPregnancy(lmpDate);
  const todayStr = formatDateKey(today());

  const symptoms = [];
  document.querySelectorAll('.chip.active').forEach(c => symptoms.push(c.textContent.trim()));

  const entry = {
    date: todayStr,
    week,
    dayOfWeek,
    mood: selectedMood,
    symptoms,
    notes: document.getElementById('notes-input').value.trim(),
  };

  const checkins = getCheckins();
  checkins[todayStr] = entry;
  STORE.set('pg_checkins', checkins);

  // Feedback
  const fb = document.getElementById('save-feedback');
  fb.classList.remove('hidden');
  setTimeout(() => fb.classList.add('hidden'), 3000);

  renderHistory();
}

// ── Mood display helpers ──────────────────────────────────────────────────────
const MOOD_DISPLAY = {
  great:    { emoji: '😄', label: 'Great' },
  good:     { emoji: '🙂', label: 'Good' },
  okay:     { emoji: '😐', label: 'Okay' },
  tired:    { emoji: '😴', label: 'Tired' },
  nauseous: { emoji: '🤢', label: 'Nauseous' },
  rough:    { emoji: '😞', label: 'Rough Day' },
};

// ── Render history ────────────────────────────────────────────────────────────
function renderHistory() {
  const checkins = getCheckins();
  const list = document.getElementById('history-list');
  const keys = Object.keys(checkins).sort((a, b) => b.localeCompare(a));

  if (keys.length === 0) {
    list.innerHTML = '<p class="empty-state">No entries yet — start logging today!</p>';
    return;
  }

  list.innerHTML = keys.map(key => {
    const e = checkins[key];
    const d = parseDate(key);
    const dateLabel = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    const mood = MOOD_DISPLAY[e.mood] || { emoji: '😐', label: e.mood };
    const symptomsHtml = (e.symptoms || []).map(s =>
      `<span class="entry-symptom-chip">${s}</span>`
    ).join('');
    const notesHtml = e.notes ? `<div class="entry-notes">"${e.notes}"</div>` : '';

    return `
      <div class="history-entry">
        <div class="history-entry-header">
          <span class="entry-date">${dateLabel}</span>
          <span class="entry-week">Week ${e.week}, Day ${e.dayOfWeek}</span>
        </div>
        <div class="entry-mood">${mood.emoji} ${mood.label}</div>
        ${symptomsHtml ? `<div class="entry-symptoms">${symptomsHtml}</div>` : ''}
        ${notesHtml}
      </div>
    `;
  }).join('');
}

// ── Settings ──────────────────────────────────────────────────────────────────
function showSettings() {
  const cfg = getConfig();
  if (cfg) {
    document.getElementById('settings-mom-name').value = cfg.name || '';
    document.getElementById('settings-lmp').value = cfg.lmp || '';
    const due = cfg.lmp ? formatDateKey(dueFromLmp(parseDate(cfg.lmp))) : '';
    document.getElementById('settings-due').value = due;
  }
  document.getElementById('settings-modal').classList.remove('hidden');

  // Wire up LMP ↔ due date sync in settings
  document.getElementById('settings-lmp').oninput = e => {
    if (e.target.value) {
      document.getElementById('settings-due').value =
        formatDateKey(dueFromLmp(parseDate(e.target.value)));
    }
  };
  document.getElementById('settings-due').oninput = e => {
    if (e.target.value) {
      document.getElementById('settings-lmp').value =
        formatDateKey(lmpFromDue(parseDate(e.target.value)));
    }
  };
}

function closeSettings() {
  document.getElementById('settings-modal').classList.add('hidden');
}

function saveSettings() {
  const name = document.getElementById('settings-mom-name').value.trim();
  const lmpVal = document.getElementById('settings-lmp').value;

  if (!lmpVal) { alert('Please enter an LMP or due date.'); return; }

  const cfg = { lmp: lmpVal, name: name || 'Mama' };
  STORE.set('pg_config', cfg);
  closeSettings();
  showDashboard(cfg);
}

function resetApp() {
  if (!confirm('This will delete all your data including the entire wellness journal. Are you sure?')) return;
  STORE.del('pg_config');
  STORE.del('pg_checkins');
  closeSettings();
  location.reload();
}
