'use strict';

// ── Storage ──────────────────────────────────────────────────────────────────
const STORE = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  del: k => localStorage.removeItem(k),
};

// ── Milestones ────────────────────────────────────────────────────────────────
const MILESTONES = {
  4:  { emoji: '🌱', title: 'Week 4 – Implantation', text: 'The fertilised egg has nestled into the uterine lining. The placenta and amniotic sac are forming.' },
  5:  { emoji: '🫀', title: 'Week 5 – Heart forming', text: 'The neural tube is developing. A tiny heart has started beating!' },
  6:  { emoji: '💗', title: 'Week 6 – Heartbeat', text: 'Baby\'s heart beats ~110 times per minute. Tiny arm and leg buds are visible.' },
  7:  { emoji: '🧠', title: 'Week 7 – Brain growth', text: 'Brain growing rapidly. Facial features — eyes, nostrils and ears — are taking shape.' },
  8:  { emoji: '🫘', title: 'Week 8 – Bean-sized', text: 'About the size of a kidney bean. Fingers and toes are beginning to separate.' },
  9:  { emoji: '🍇', title: 'Week 9 – Grape-sized', text: 'All essential organs are in place. Baby can make small movements.' },
  10: { emoji: '🍓', title: 'Week 10 – Strawberry', text: 'Now officially called a fetus. Tiny bones are starting to harden.' },
  11: { emoji: '🫒', title: 'Week 11 – Olive-sized', text: 'Organs are fully formed and growing. Fingers and toes are no longer webbed.' },
  12: { emoji: '🍋', title: 'Week 12 – Lemon', text: 'End of first trimester! Risk drops significantly. Baby can open and close fists.' },
  13: { emoji: '🍑', title: 'Week 13 – Peach', text: 'Welcome to the second trimester! Fingerprints are forming.' },
  14: { emoji: '🍊', title: 'Week 14 – Navel orange', text: 'Baby can squint, frown and grimace. Kidneys are producing urine.' },
  15: { emoji: '🍏', title: 'Week 15 – Apple', text: 'Baby is forming taste buds. You may feel the first flutters (quickening).' },
  16: { emoji: '🥑', title: 'Week 16 – Avocado', text: 'Ears developed enough to hear your voice. Backbone and muscles strengthening.' },
  17: { emoji: '🍐', title: 'Week 17 – Pear', text: 'Baby putting on fat deposits. Sweat glands are forming.' },
  18: { emoji: '🥭', title: 'Week 18 – Mango', text: 'Common week for anatomy ultrasound! Nervous system maturing rapidly.' },
  19: { emoji: '🫑', title: 'Week 19 – Heirloom tomato', text: 'Developing vernix coating. Kicks may be more regular now.' },
  20: { emoji: '🍌', title: 'Week 20 – Banana', text: 'Halfway there! Baby can hear outside sounds. Senses developing quickly.' },
  21: { emoji: '🥕', title: 'Week 21 – Carrot', text: 'Digestive system practicing swallowing amniotic fluid.' },
  22: { emoji: '🌽', title: 'Week 22 – Corn on the cob', text: 'Lips and eyebrows distinct. May be sucking their thumb.' },
  23: { emoji: '🍆', title: 'Week 23 – Eggplant', text: 'Gaining weight steadily. Skin still somewhat transparent but filling out.' },
  24: { emoji: '🌽', title: 'Week 24 – Viability milestone', text: 'Major viability milestone. Lungs developing surfactant needed to breathe.' },
  25: { emoji: '🥦', title: 'Week 25 – Cauliflower', text: 'Responds to touch. Hair, eyebrows and eyelashes present.' },
  26: { emoji: '🥬', title: 'Week 26 – Kale', text: 'Eyes forming and will soon open. Brain activity increasing rapidly.' },
  27: { emoji: '🥒', title: 'Week 27 – Cucumber', text: 'End of second trimester approaching! Baby sleeps and wakes in regular cycles.' },
  28: { emoji: '🫛', title: 'Week 28 – Third Trimester!', text: 'Third trimester begins! Baby can blink and has eyelashes.' },
  29: { emoji: '🍠', title: 'Week 29 – Butternut squash', text: 'Kicking and stretching regularly. Muscles and lungs maturing.' },
  30: { emoji: '🎃', title: 'Week 30 – Cabbage', text: 'About 15 inches long. Storing fat, lanugo starting to disappear.' },
  31: { emoji: '🥥', title: 'Week 31 – Coconut', text: 'Brain and nerves directing all functions. Practicing breathing movements.' },
  32: { emoji: '🫐', title: 'Week 32 – Jicama', text: 'Has toenails, fingernails and real hair! Likely head-down now.' },
  33: { emoji: '🍍', title: 'Week 33 – Pineapple', text: 'Bones hardening (except skull). Immune system developing.' },
  34: { emoji: '🎾', title: 'Week 34 – Cantaloupe', text: '"Late preterm." Central nervous system and lungs nearly mature.' },
  35: { emoji: '🏈', title: 'Week 35 – Honeydew', text: 'Development nearly complete. Gaining ~half a pound per week.' },
  36: { emoji: '🥗', title: 'Week 36 – Head of lettuce', text: 'Baby may "drop" into the pelvis (lightening).' },
  37: { emoji: '✅', title: 'Week 37 – Full term!', text: 'Early term! Likely in position for birth. Final systems maturing.' },
  38: { emoji: '🌟', title: 'Week 38 – Watermelon', text: 'Fully developed and ready to meet you!' },
  39: { emoji: '💫', title: 'Week 39 – Almost!', text: 'Brain still developing. Baby could arrive any day!' },
  40: { emoji: '🎉', title: 'Week 40 – Due week!', text: 'You\'ve made it! Baby will arrive on their own schedule.' },
};

function getMilestone(week) {
  if (week < 4) return { emoji: '🤰', title: 'Very early days', text: 'You\'re in the earliest days of pregnancy. The journey is just beginning!' };
  if (week > 40) return { emoji: '👶', title: 'Past due date', text: 'You\'ve passed your due date — baby is taking their time! Stay in contact with your care team.' };
  for (let w = week; w >= 4; w--) { if (MILESTONES[w]) return MILESTONES[w]; }
  return { emoji: '🌱', title: `Week ${week}`, text: 'Growing and thriving!' };
}

// ── Retrospective Questions ───────────────────────────────────────────────────
const RETRO_GROUPS = [
  {
    title: 'Your Physical Experience',
    questions: [
      { id: 'q1',  text: 'When did you first suspect you were pregnant, and what was that moment like for you?' },
      { id: 'q2',  text: 'How would you describe your morning sickness — how severe was it, when was it worst, and what (if anything) helped?' },
      { id: 'q3',  text: 'Which foods or smells became completely unbearable? Did any surprising new cravings appear?' },
      { id: 'q4',  text: 'Describe your energy levels through these 18 weeks — were there patterns to the good days and the hard days?' },
      { id: 'q5',  text: 'What physical changes to your body surprised you most, and how did you feel about them?' },
    ]
  },
  {
    title: 'Your Emotional Journey',
    questions: [
      { id: 'q6',  text: 'How did your sleep change — any insomnia, vivid dreams, or unusual patterns?' },
      { id: 'q7',  text: 'Were there any unexpected or unusual symptoms that caught you completely off guard?' },
      { id: 'q8',  text: 'What was the emotional atmosphere when you first confirmed the pregnancy — what feelings hit you first?' },
      { id: 'q9',  text: 'What emotions surprised you most during this period — things you genuinely didn\'t expect to feel?' },
      { id: 'q10', text: 'What was your biggest fear or worry during these 18 weeks, and did anything help ease it?' },
    ]
  },
  {
    title: 'Connection & Support',
    questions: [
      { id: 'q11', text: 'Were there any particularly scary or difficult moments during these 18 weeks? How did you get through them?' },
      { id: 'q12', text: 'What brought you the most comfort, joy, or reassurance during this time?' },
      { id: 'q13', text: 'Describe the moment you told your partner — what was said, what was felt in that moment?' },
      { id: 'q14', text: 'What did your partner do during this period that helped you most?' },
      { id: 'q15', text: 'How did you decide when and how to tell family and friends, and how did those conversations go?' },
    ]
  },
  {
    title: 'Milestones & Moments',
    questions: [
      { id: 'q16', text: 'Describe your first ultrasound — what was going through your mind when you first saw or heard baby?' },
      { id: 'q17', text: 'When did the pregnancy feel truly real to you, and what was the moment that triggered that shift?' },
      { id: 'q18', text: 'Were any particular weeks noticeably harder than others, and looking back, why do you think that was?' },
      { id: 'q19', text: 'What moments of joy, wonder, or laughter stood out most to you during these 18 weeks?' },
      { id: 'q20', text: 'If you could write a letter to yourself from the very beginning of this journey, what would you most want to remember and cherish about these first 18 weeks?' },
    ]
  },
];

// ── Date Helpers ──────────────────────────────────────────────────────────────
function today() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }

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
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function lmpFromDue(d) { const r = new Date(d); r.setDate(r.getDate()-280); return r; }
function dueFromLmp(d) { const r = new Date(d); r.setDate(r.getDate()+280); return r; }

function calcPregnancy(lmpDate) {
  const now = today();
  const totalDays = Math.floor((now - lmpDate) / 86400000);
  const week = Math.floor(totalDays / 7);
  const dayOfWeek = totalDays % 7;
  const dueDate = dueFromLmp(lmpDate);
  const daysLeft = Math.max(0, Math.floor((dueDate - now) / 86400000));
  const progress = Math.min(100, Math.max(0, (totalDays / 280) * 100));
  return { week, dayOfWeek, totalDays, daysLeft, dueDate, progress };
}

function trimesterLabel(week) {
  if (week < 14) return '1st Trimester';
  if (week < 28) return '2nd Trimester';
  return '3rd Trimester';
}

// ── Data Accessors ────────────────────────────────────────────────────────────
function getConfig()   { return STORE.get('pg_config'); }
function getCheckins() { return STORE.get('pg_checkins') || {}; }
function getRetro()    { return STORE.get('pg_retro') || {}; }

// ── Init ──────────────────────────────────────────────────────────────────────
let selectedMood = null;

document.addEventListener('DOMContentLoaded', () => {
  const cfg = getConfig();
  if (!cfg || !cfg.lmp) {
    showScreen('setup-screen');
    const todayStr = formatDateKey(today());
    document.getElementById('lmp-input').max = todayStr;
    document.getElementById('lmp-input').addEventListener('change', e => {
      if (e.target.value) document.getElementById('due-date-input').value = formatDateKey(dueFromLmp(parseDate(e.target.value)));
    });
    document.getElementById('due-date-input').addEventListener('change', e => {
      if (e.target.value) document.getElementById('lmp-input').value = formatDateKey(lmpFromDue(parseDate(e.target.value)));
    });
  } else {
    showApp(cfg);
  }
});

function showScreen(id) {
  ['setup-screen', 'main-app'].forEach(s => {
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
  if (!lmpVal && !dueVal) { alert('Please enter your LMP or due date.'); return; }
  const lmpDate = lmpVal ? parseDate(lmpVal) : lmpFromDue(parseDate(dueVal));
  STORE.set('pg_config', { lmp: formatDateKey(lmpDate), name: name || 'Mama' });
  showApp(getConfig());
}

// ── App Shell ─────────────────────────────────────────────────────────────────
function showApp(cfg) {
  showScreen('main-app');
  updateDashboard(cfg);
  renderRetroForm();
  renderSummaries();
  renderHistory();
  showTab('today');
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function updateDashboard(cfg) {
  const lmpDate = parseDate(cfg.lmp);
  const { week, dayOfWeek, totalDays, daysLeft, dueDate, progress } = calcPregnancy(lmpDate);

  document.getElementById('header-name').textContent = `${cfg.name}'s Journey`;
  document.getElementById('week-number').textContent = week;
  document.getElementById('day-number').textContent  = dayOfWeek;
  document.getElementById('trimester-badge').textContent = trimesterLabel(week);
  document.getElementById('progress-fill').style.width = `${progress.toFixed(1)}%`;
  document.getElementById('days-remaining').textContent = `${Math.round(progress)}% complete`;
  document.getElementById('due-date-display').textContent = formatDate(dueDate);
  document.getElementById('days-along').textContent = `${totalDays}`;
  document.getElementById('days-left').textContent  = daysLeft > 0 ? `${daysLeft}` : 'Here! 🎉';

  const ms = getMilestone(week);
  document.getElementById('milestone-emoji').textContent = ms.emoji;
  document.getElementById('milestone-title').textContent = ms.title;
  document.getElementById('milestone-text').textContent  = ms.text;

  document.getElementById('checkin-date-label').textContent =
    `${today().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · Week ${week}, Day ${dayOfWeek}`;

  const todayStr = formatDateKey(today());
  const checkins = getCheckins();
  if (checkins[todayStr]) prefillCheckin(checkins[todayStr]);
}

function prefillCheckin(entry) {
  if (entry.mood) {
    const btn = document.querySelector(`.mood-btn[data-mood="${entry.mood}"]`);
    if (btn) { selectedMood = entry.mood; btn.classList.add('selected'); }
  }
  (entry.symptoms || []).forEach(sym => {
    document.querySelectorAll('.chip').forEach(c => {
      if (c.textContent.trim() === sym) c.classList.add('active');
    });
  });
  if (entry.notes) document.getElementById('notes-input').value = entry.notes;
}

// ── Tab Navigation ────────────────────────────────────────────────────────────
function showTab(name) {
  ['today', 'memories', 'summaries', 'journal'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.toggle('hidden', t !== name);
    document.getElementById(`nav-${t}`).classList.toggle('active', t === name);
  });
  if (name === 'summaries') renderSummaries();
  if (name === 'journal')   renderHistory();
}

// ── Mood & Symptoms ───────────────────────────────────────────────────────────
function selectMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedMood = btn.dataset.mood;
}

function toggleChip(chip) { chip.classList.toggle('active'); }

// ── Save Check-in ─────────────────────────────────────────────────────────────
function saveCheckin() {
  if (!selectedMood) { alert('Please select how you\'re feeling before saving.'); return; }
  const cfg = getConfig();
  const { week, dayOfWeek } = calcPregnancy(parseDate(cfg.lmp));
  const todayStr = formatDateKey(today());
  const symptoms = [...document.querySelectorAll('.chip.active')].map(c => c.textContent.trim());
  const checkins = getCheckins();
  checkins[todayStr] = { date: todayStr, week, dayOfWeek, mood: selectedMood, symptoms, notes: document.getElementById('notes-input').value.trim() };
  STORE.set('pg_checkins', checkins);
  const fb = document.getElementById('save-feedback');
  fb.classList.remove('hidden');
  setTimeout(() => fb.classList.add('hidden'), 3000);
}

// ── Retrospective Form ────────────────────────────────────────────────────────
function renderRetroForm() {
  const retro = getRetro();
  const container = document.getElementById('retro-form');
  let qNum = 0;
  container.innerHTML = RETRO_GROUPS.map(group => {
    const questions = group.questions.map(q => {
      qNum++;
      const n = qNum;
      return `
        <div class="retro-question">
          <div class="retro-question-text">
            <span class="retro-question-num">${n}.</span>${q.text}
          </div>
          <textarea class="retro-textarea" id="retro-${q.id}"
            placeholder="Take your time — write as much or as little as feels right…"
            rows="4"
            oninput="autoSaveRetro()">${retro[q.id] || ''}</textarea>
        </div>
      `;
    }).join('');
    return `<div class="retro-group"><div class="retro-group-title">${group.title}</div>${questions}</div>`;
  }).join('');
}

let retroSaveTimer = null;

function autoSaveRetro() {
  clearTimeout(retroSaveTimer);
  retroSaveTimer = setTimeout(saveRetro, 1500);
}

function saveRetro() {
  const retro = {};
  RETRO_GROUPS.forEach(group => {
    group.questions.forEach(q => {
      const el = document.getElementById(`retro-${q.id}`);
      if (el) retro[q.id] = el.value.trim();
    });
  });
  STORE.set('pg_retro', retro);
  const fb = document.getElementById('retro-feedback');
  if (fb) { fb.classList.remove('hidden'); setTimeout(() => fb.classList.add('hidden'), 2500); }
}

// ── Summary Generators ────────────────────────────────────────────────────────
function generateObGynSummary() {
  const cfg = getConfig();
  const checkins = getCheckins();
  const retro = getRetro();
  const lmpDate = parseDate(cfg.lmp);
  const { week, dayOfWeek, totalDays, dueDate } = calcPregnancy(lmpDate);
  const name = cfg.name || 'Patient';
  const entries = Object.values(checkins);

  const lines = [];

  lines.push(`PATIENT: ${name}`);
  lines.push(`GESTATION: ${week} weeks, ${dayOfWeek} days (${totalDays} days total)`);
  lines.push(`ESTIMATED DUE DATE: ${formatDate(dueDate)}`);
  lines.push(`TRIMESTER: ${trimesterLabel(week)}`);
  lines.push('');

  if (entries.length > 0) {
    const total = entries.length;
    let pos = 0, neu = 0, neg = 0;
    const symCount = {};
    entries.forEach(e => {
      if (['great','good'].includes(e.mood)) pos++;
      else if (e.mood === 'okay') neu++;
      else neg++;
      (e.symptoms || []).forEach(s => { symCount[s] = (symCount[s] || 0) + 1; });
    });
    const topSyms = Object.entries(symCount).sort((a,b) => b[1]-a[1]).slice(0,5);

    lines.push(`WELLBEING LOG (${total} entries)`);
    lines.push(`Positive: ${pct(pos,total)}%  |  Neutral: ${pct(neu,total)}%  |  Difficult: ${pct(neg,total)}%`);
    if (topSyms.length) lines.push(`Most reported symptoms: ${topSyms.map(([s,c]) => `${s} (${c}×)`).join(', ')}`);
    lines.push('');
  }

  const addSection = (heading, key) => {
    if (retro[key]?.trim()) { lines.push(heading); lines.push(`"${retro[key].trim()}"`); lines.push(''); }
  };

  addSection('MORNING SICKNESS / NAUSEA', 'q2');
  addSection('FATIGUE & ENERGY', 'q4');
  addSection('NOTABLE SYMPTOMS', 'q7');
  addSection('SLEEP CHANGES', 'q6');
  addSection('PHYSICAL CHANGES', 'q5');
  addSection('CONCERNS & ANXIETIES', 'q10');
  addSection('DIFFICULT MOMENTS', 'q11');

  const recent = entries.sort((a,b) => b.date.localeCompare(a.date))[0];
  if (recent?.notes?.trim()) {
    lines.push(`MOST RECENT NOTE (${recent.date})`);
    lines.push(`"${recent.notes.trim()}"`);
    lines.push('');
  }

  if (lines.length <= 5) return 'Not enough data yet.\n\nStart logging daily check-ins and complete the Memories section to generate this summary.';
  return lines.join('\n').trim();
}

function generateFamilySummary() {
  const cfg = getConfig();
  const checkins = getCheckins();
  const retro = getRetro();
  const lmpDate = parseDate(cfg.lmp);
  const { week, dayOfWeek, dueDate } = calcPregnancy(lmpDate);
  const name = cfg.name || 'She';
  const entries = Object.values(checkins).sort((a,b) => b.date.localeCompare(a.date));

  const lines = [];
  const MOOD_LABEL = { great: 'great', good: 'good', okay: 'okay', tired: 'really tired', nauseous: 'a bit nauseous', rough: 'having a tough day' };

  lines.push(`${name} is ${week} weeks and ${dayOfWeek} days pregnant! 🎉`);
  lines.push(`Baby is due on ${formatDate(dueDate)}.`);
  lines.push('');

  if (retro.q8?.trim()) { lines.push('✨ When it all began...'); lines.push(`"${retro.q8.trim()}"`); lines.push(''); }
  if (retro.q13?.trim()) { lines.push('💑 Telling the news...'); lines.push(`"${retro.q13.trim()}"`); lines.push(''); }
  if (retro.q16?.trim()) { lines.push('👶 First ultrasound...'); lines.push(`"${retro.q16.trim()}"`); lines.push(''); }
  if (retro.q19?.trim()) { lines.push('💛 Highlights of the journey...'); lines.push(`"${retro.q19.trim()}"`); lines.push(''); }
  if (retro.q12?.trim()) { lines.push('🤗 What has helped the most...'); lines.push(`"${retro.q12.trim()}"`); lines.push(''); }

  if (entries.length > 0) {
    const recent = entries[0];
    const moodStr = MOOD_LABEL[recent.mood] || recent.mood;
    lines.push('📍 Right now...');
    let line = `${name} is feeling ${moodStr}`;
    if (recent.symptoms?.length) line += ` — dealing with ${recent.symptoms.slice(0,3).join(', ').toLowerCase()}`;
    if (recent.notes?.trim()) line += `.\n"${recent.notes.trim()}"`;
    lines.push(line);
    lines.push('');
  }

  if (retro.q20?.trim()) { lines.push('💌 In her own words...'); lines.push(`"${retro.q20.trim()}"`); }

  if (lines.length <= 3) return 'Not enough data yet.\n\nStart logging daily check-ins and complete the Memories section to generate this summary.';
  return lines.join('\n').trim();
}

function pct(n, total) { return total ? Math.round(n / total * 100) : 0; }

// ── Render Summaries ──────────────────────────────────────────────────────────
function renderSummaries() {
  document.getElementById('obgyn-summary').textContent  = generateObGynSummary();
  document.getElementById('family-summary').textContent = generateFamilySummary();
}

// ── Copy to Clipboard ─────────────────────────────────────────────────────────
function copyText(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(`[onclick="copyText('${elementId}')"]`);
    if (btn) {
      btn.textContent = 'Copied! ✓';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy ↗'; btn.classList.remove('copied'); }, 2500);
    }
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });
}

// ── History ───────────────────────────────────────────────────────────────────
const MOOD_DISPLAY = {
  great:    { emoji: '😄', label: 'Great' },
  good:     { emoji: '🙂', label: 'Good' },
  okay:     { emoji: '😐', label: 'Okay' },
  tired:    { emoji: '😴', label: 'Tired' },
  nauseous: { emoji: '🤢', label: 'Nauseous' },
  rough:    { emoji: '😞', label: 'Rough Day' },
};

function renderHistory() {
  const checkins = getCheckins();
  const list = document.getElementById('history-list');
  const keys = Object.keys(checkins).sort((a,b) => b.localeCompare(a));
  if (!keys.length) { list.innerHTML = '<p class="empty-state">No entries yet — start logging today!</p>'; return; }
  list.innerHTML = keys.map(key => {
    const e = checkins[key];
    const d = parseDate(key);
    const dateLabel = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    const mood = MOOD_DISPLAY[e.mood] || { emoji: '😐', label: e.mood };
    const symsHtml = (e.symptoms||[]).map(s => `<span class="entry-symptom-chip">${s}</span>`).join('');
    return `<div class="history-entry">
      <div class="history-entry-header">
        <span class="entry-date">${dateLabel}</span>
        <span class="entry-week">Week ${e.week}, Day ${e.dayOfWeek}</span>
      </div>
      <div class="entry-mood">${mood.emoji} ${mood.label}</div>
      ${symsHtml ? `<div class="entry-symptoms">${symsHtml}</div>` : ''}
      ${e.notes ? `<div class="entry-notes">"${e.notes}"</div>` : ''}
    </div>`;
  }).join('');
}

// ── Settings ──────────────────────────────────────────────────────────────────
function showSettings() {
  const cfg = getConfig() || {};
  document.getElementById('settings-mom-name').value = cfg.name || '';
  document.getElementById('settings-lmp').value  = cfg.lmp || '';
  document.getElementById('settings-due').value  = cfg.lmp ? formatDateKey(dueFromLmp(parseDate(cfg.lmp))) : '';
  document.getElementById('settings-modal').classList.remove('hidden');
  document.getElementById('settings-lmp').oninput = e => {
    if (e.target.value) document.getElementById('settings-due').value = formatDateKey(dueFromLmp(parseDate(e.target.value)));
  };
  document.getElementById('settings-due').oninput = e => {
    if (e.target.value) document.getElementById('settings-lmp').value = formatDateKey(lmpFromDue(parseDate(e.target.value)));
  };
}

function closeSettings() { document.getElementById('settings-modal').classList.add('hidden'); }

function saveSettings() {
  const name   = document.getElementById('settings-mom-name').value.trim();
  const lmpVal = document.getElementById('settings-lmp').value;
  if (!lmpVal) { alert('Please enter an LMP or due date.'); return; }
  STORE.set('pg_config', { lmp: lmpVal, name: name || 'Mama' });
  closeSettings();
  showApp(getConfig());
}

function resetApp() {
  if (!confirm('This will delete ALL data — check-ins, memories, and setup. Are you sure?')) return;
  ['pg_config','pg_checkins','pg_retro'].forEach(k => STORE.del(k));
  location.reload();
}
