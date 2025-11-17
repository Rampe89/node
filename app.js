// Base64-codierte Flags (inklusive geschweifter Klammern)
const FLAG_SECRETS = {
  CAUGHT_ALL_THE_PHISH: "e0NBVUdIVF9BTExfVEhFX1BISVNIfQ==",
  BRUTE_FORCE_ADMIN_SUCCESS: "e0JSVVRFX0ZPUkNFX0FETUlOX1NVQ0NFU1N9",
  DEFENDER_OF_TRUST: "e0RFRkVOREVSX09GX1RSVVNUfQ==",
  UNBREAKABLE_PASSWORD: "e1VOQlJFQUtBQkxFX1BBU1NXT1JEfQ==",
  PATCH_THE_PATCH: "e1BBVENIX1RIRV9QQVRDSH0=",
  FOUND_SECRET_FLAG: "e0ZPVU5EX1NFQ1JFVF9GTEFHfQ==",
  ADD_A_PINCH_OF_SALT: "e0FERF9BX1BJTkNIX09GX1NBTFR9",
  COOKIES_REVEAL_SECRETS: "e0NPT0tJRVNfUkVWRUFMX1NFQ1JFVFN9",
  FLAG_ADMIN_OVERRIDE: "e0ZMQUdfQURNSU5fT1ZFUlJJREV9",
  MR_ROBOT_REFERENCE: "e01SX1JPQk9UX1JFRkVSRU5DRX0=",
  FLAG_CONSOLE_LEAK: "e0ZMQUdfQ09OU09MRV9MRUFLfQ==",
  FLAG_PRIVACY_AWARE: "e0ZMQUdfUFJJVkFDWV9BV0FSRX0="
};

// Missionsdefinitionen
const missions = [
  {
    id: "phishing",
    title: "Phishing-Mails erkennen",
    url: "phishingquiz.html",
    category: "Angriffe verstehen",
    difficulty: 1,
    minutes: 10,
    flagId: "CAUGHT_ALL_THE_PHISH",
    achievement: "Phishing-Profi",
    advanced: false,
    description: "Du analysierst verschiedene E-Mails und entscheidest, ob sie vertrauenswürdig oder gefährlich sind."
  },
  {
    id: "bruteforce",
    title: "Brute Force in Aktion",
    url: "bruteforce.html",
    category: "Angriffe verstehen",
    difficulty: 2,
    minutes: 15,
    flagId: "BRUTE_FORCE_ADMIN_SUCCESS",
    achievement: "Password Cracker",
    advanced: false,
    description: "Du beobachtest, wie ein Brute-Force-Angriff funktioniert und lernst, warum schwache Passwörter gefährlich sind."
  },
  {
    id: "social",
    title: "Social Engineering",
    url: "social-engineering.html",
    category: "Angriffe verstehen",
    difficulty: 2,
    minutes: 15,
    flagId: "DEFENDER_OF_TRUST",
    achievement: "Vertrauenswächter",
    advanced: false,
    description: "Du spielst Szenarien durch, in denen Angreifer versuchen, dich mit Tricks zu manipulieren."
  },
  {
    id: "passwords",
    title: "Starke Passwörter bauen",
    url: "password-simulator.html",
    category: "Sich schützen",
    difficulty: 1,
    minutes: 10,
    flagId: "UNBREAKABLE_PASSWORD",
    achievement: "Passwort-Architekt",
    advanced: false,
    description: "Du entwirfst starke Passwörter und siehst, wie sich ihre Knackdauer verändert."
  },
  {
    id: "updates",
    title: "Updates und Patches",
    url: "updates.html",
    category: "Sich schützen",
    difficulty: 2,
    minutes: 15,
    flagId: "PATCH_THE_PATCH",
    achievement: "Patch-Commander",
    advanced: false,
    description: "Du arbeitest mit einem Szenario zu bekannten Sicherheitslücken und Updates."
  },
  {
    id: "dirbuster",
    title: "Versteckte Seiten finden",
    url: "dirbuster.html",
    category: "Angriffe verstehen",
    difficulty: 3,
    minutes: 15,
    flagId: "FOUND_SECRET_FLAG",
    achievement: "Directory Detective",
    advanced: true,
    description: "Du nutzt einen Directory-Scanner, um versteckte Pfade und geheime Seiten aufzuspüren."
  },
  {
    id: "hashing",
    title: "Hashing und Salt",
    url: "hash.html",
    category: "Sich schützen",
    difficulty: 3,
    minutes: 15,
    flagId: "ADD_A_PINCH_OF_SALT",
    achievement: "Hash-Meister",
    advanced: true,
    description: "Du lernst, warum Hashes und Salt für Passworthashes wichtig sind und wie Rainbow Tables funktionieren."
  },
  {
    id: "cookies",
    title: "Cookies verstehen",
    url: "cookies.html",
    category: "Recht und Datenschutz",
    difficulty: 1,
    minutes: 10,
    flagId: "COOKIES_REVEAL_SECRETS",
    achievement: "Cookie-Jäger",
    advanced: false,
    description: "Du erforschst, was Cookies speichern können und welche Risiken es gibt."
  },
  {
    id: "admin",
    title: "Versteckte Admin-Seite",
    url: "admin.html",
    category: "Spezial",
    difficulty: 2,
    minutes: 10,
    flagId: "FLAG_ADMIN_OVERRIDE",
    achievement: "SysAdmin",
    advanced: true,
    description: "Du findest und nutzt eine versteckte Administrationsseite."
  },
  {
    id: "mrrobot",
    title: "Mr Robot Terminal",
    url: "robot.html",
    category: "Spezial",
    difficulty: 3,
    minutes: 10,
    flagId: "MR_ROBOT_REFERENCE",
    achievement: "Mr Robot Referenz",
    advanced: true,
    description: "Du arbeitest in einem Terminal-Lab im Stil der Serie Mr Robot."
  },
  {
    id: "spam",
    title: "Spamfilter verstehen",
    url: "spam.html",
    category: "Angriffe verstehen",
    difficulty: 2,
    minutes: 15,
    flagId: "FLAG_CONSOLE_LEAK",
    achievement: "Console Leak",
    advanced: true,
    description: "Du vergleichst einen regelbasierten und einen lernenden Spamfilter und analysierst Fehlentscheidungen."
  },
  {
    id: "privacy",
    title: "Datenschutz prüfen",
    url: "datenschutz2.html",
    category: "Recht und Datenschutz",
    difficulty: 2,
    minutes: 15,
    flagId: "FLAG_PRIVACY_AWARE",
    achievement: "Privacy Checker",
    advanced: false,
    description: "Du überarbeitest eine fehlerhafte Datenschutzerklärung und verbesserst sie Schritt für Schritt."
  }
];

let collectedFlags = {};
let advancedUnlocked = false;
let currentMissionId = null;

// State laden / speichern
function loadState() {
  try {
    const rawFlags = localStorage.getItem("cdl_flags");
    const rawAdvanced = localStorage.getItem("cdl_advanced_unlocked");
    collectedFlags = rawFlags ? JSON.parse(rawFlags) : {};
    advancedUnlocked = rawAdvanced === "true";
  } catch (e) {
    collectedFlags = {};
    advancedUnlocked = false;
  }
}

function saveFlags() {
  localStorage.setItem("cdl_flags", JSON.stringify(collectedFlags));
}

function saveAdvanced() {
  localStorage.setItem("cdl_advanced_unlocked", advancedUnlocked ? "true" : "false");
}

// Cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(";").shift());
  }
  return null;
}

// Missionsliste
function renderMissions() {
  const list = document.getElementById("mission-list");
  list.innerHTML = "";

  const byCategory = {};
  missions.forEach(m => {
    if (!byCategory[m.category]) {
      byCategory[m.category] = [];
    }
    byCategory[m.category].push(m);
  });

  Object.keys(byCategory).forEach(category => {
    const title = document.createElement("div");
    title.className = "sidebar-section-title";
    title.textContent = category;
    list.appendChild(title);

    byCategory[category].forEach(m => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mission-item";
      btn.dataset.missionId = m.id;

      const done = !!collectedFlags[m.flagId];

      const lockBadge = m.advanced && !advancedUnlocked
        ? '<span class="badge badge-locked">Fortgeschritten</span>'
        : "";

      const doneBadge = done
        ? '<span class="badge badge-done">Flag</span>'
        : "";

      btn.innerHTML = `
        <div class="mission-title-line">
          <span>${m.title}</span>
          <div style="display:flex;gap:0.25rem;">
            ${lockBadge}
            ${doneBadge}
          </div>
        </div>
        <div class="mission-meta">
          <span>Stufe ${m.difficulty} • ca. ${m.minutes} Min</span>
        </div>
      `;

      if (m.advanced && !advancedUnlocked) {
        btn.classList.add("locked");
      }

      if (currentMissionId === m.id) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => onMissionClick(m));

      list.appendChild(btn);
    });
  });
}

function getRecommendedMission() {
  const open = missions.filter(m => !collectedFlags[m.flagId]);
  if (open.length === 0) {
    return null;
  }
  const sorted = open.slice().sort((a, b) => a.difficulty - b.difficulty);
  return sorted[0];
}

function renderAchievements() {
  const list = document.getElementById("achievements-list");
  list.innerHTML = "";

  missions.forEach(m => {
    const item = document.createElement("div");
    item.className = "achievement-item";

    const name = document.createElement("span");
    name.className = "achievement-name";
    name.textContent = m.achievement;

    const status = document.createElement("span");
    status.className = "achievement-status";
    status.textContent = collectedFlags[m.flagId] ? "Freigeschaltet" : "Offen";

    item.appendChild(name);
    item.appendChild(status);
    list.appendChild(item);
  });
}

function updateProgressUI() {
  const total = missions.length;
  const doneCount = missions.filter(m => collectedFlags[m.flagId]).length;

  const progressText = document.getElementById("progress-text");
  progressText.textContent = doneCount + " von " + total + " Flags";

  const fill = document.getElementById("progress-bar-fill");
  const percent = total > 0 ? (doneCount / total) * 100 : 0;
  fill.style.width = percent + "%";

  const recEl = document.getElementById("progress-recommendation");
  const rec = getRecommendedMission();
  if (rec) {
    recEl.textContent = "Empfohlene Mission: " + rec.title;
  } else if (total > 0 && doneCount === total) {
    recEl.textContent = "Mission accomplished. Alle Flags gefunden.";
  } else {
    recEl.textContent = "Wähle eine Mission, um zu starten.";
  }

  renderAchievements();
}

function renderMissionInfo(mission) {
  const block = document.getElementById("mission-info-body");
  if (!mission) {
    block.innerHTML = "Wähle eine Mission, um Details zu sehen.";
    return;
  }

  const stars = "★".repeat(mission.difficulty);
  block.innerHTML = `
    <div class="difficulty-stars">${stars}</div>
    <p>${mission.description}</p>
    <p class="meta-line">Kategorie ${mission.category}</p>
    <p class="meta-line">Dauer ca. ${mission.minutes} Minuten</p>
    <p class="meta-line">Die Flag passt inhaltlich zu dieser Mission und steht in geschweiften Klammern.</p>
  `;
}

function updateAdvancedUI() {
  const status = document.getElementById("advanced-status");
  if (advancedUnlocked) {
    status.textContent = "Status Fortgeschrittene Missionen sind freigeschaltet.";
  } else {
    status.textContent = "Status Fortgeschrittene Missionen sind aktuell gesperrt.";
  }
}

// Mission laden
function loadMission(mission) {
  currentMissionId = mission.id;

  const frame = document.getElementById("lab-frame");
  frame.src = mission.url;

  const title = document.getElementById("current-mission-title");
  const sub = document.getElementById("current-mission-sub");
  title.textContent = mission.title;
  sub.textContent = "Die Übung läuft im Fenster. Nutze die Flag-Eingabe unten, sobald du die Flag gefunden hast.";

  const hint = document.getElementById("flag-hint");
  hint.textContent = "Tipp Die Flag dieser Mission findest du innerhalb der Übung und sie steht in geschweiften Klammern.";

  const input = document.getElementById("flag-input");
  input.value = "";

  renderMissions();
  renderMissionInfo(mission);
}

function onMissionClick(mission) {
  if (mission.advanced && !advancedUnlocked) {
    const pw = window.prompt("Fortgeschrittene Mission. Bitte Passwort eingeben:");
    if (pw === null) {
      return;
    }
    if (pw === "user123") {
      advancedUnlocked = true;
      saveAdvanced();
      updateAdvancedUI();
      showToast("Fortgeschrittene Missionen freigeschaltet");
    } else {
      window.alert("Passwort nicht korrekt.");
      return;
    }
  }
  loadMission(mission);
}

// Flag prüfen
function onFlagSubmit() {
  if (!currentMissionId) {
    window.alert("Wähle zuerst eine Mission.");
    return;
  }

  const mission = missions.find(m => m.id === currentMissionId);
  if (!mission) {
    window.alert("Unbekannte Mission.");
    return;
  }

  const input = document.getElementById("flag-input");
  const value = input.value.trim();

  const encoded = FLAG_SECRETS[mission.flagId];
  if (!encoded) {
    window.alert("Für diese Mission ist keine Flag-Konfiguration vorhanden.");
    return;
  }

  const expected = atob(encoded);

  if (value === expected) {
    if (!collectedFlags[mission.flagId]) {
      collectedFlags[mission.flagId] = true;
      saveFlags();
      updateProgressUI();
      showToast("Neue Flag: " + mission.achievement);
    } else {
      showToast("Flag war bereits freigeschaltet.");
    }
  } else {
    window.alert("Diese Flag stimmt nicht. Prüfe Schreibweise und Klammern.");
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = "<span>" + message + "</span>";
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function resetProgress() {
  if (!window.confirm("Fortschritt und freigeschaltete Flags wirklich löschen")) {
    return;
  }
  collectedFlags = {};
  advancedUnlocked = false;
  saveFlags();
  saveAdvanced();
  updateAdvancedUI();
  updateProgressUI();
  renderMissions();
  showToast("Fortschritt zurückgesetzt");
}

function unlockAdvancedExplicit() {
  const pw = window.prompt("Passwort für fortgeschrittene Missionen:");
  if (pw === null) {
    return;
  }
  if (pw === "user123") {
    advancedUnlocked = true;
    saveAdvanced();
    updateAdvancedUI();
    renderMissions();
    showToast("Fortgeschrittene Missionen freigeschaltet");
  } else {
    window.alert("Passwort nicht korrekt.");
  }
}

function lockAdvancedExplicit() {
  advancedUnlocked = false;
  saveAdvanced();
  updateAdvancedUI();
  renderMissions();
  showToast("Fortgeschrittene Missionen wieder gesperrt");
}

// Cookie-Banner
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) {
    return;
  }

  const accepted = getCookie("cdl_cookie_consent");
  if (!accepted) {
    banner.classList.add("show");
  }

  const encodedFlag = FLAG_SECRETS["COOKIES_REVEAL_SECRETS"];

  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      const flagValue = atob(encodedFlag);
      setCookie("cyberFlag", flagValue, 1);
      setCookie("cdl_cookie_consent", "yes", 365);
      banner.classList.remove("show");
      showToast("Lern-Cookie gesetzt. Nutze die Entwicklertools, um mehr zu sehen.");
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", () => {
      setCookie("cdl_cookie_consent", "no", 365);
      banner.classList.remove("show");
    });
  }
}

// Initialisierung
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderMissions();
  updateProgressUI();
  updateAdvancedUI();
  initCookieBanner();

  const flagBtn = document.getElementById("flag-submit");
  if (flagBtn) {
    flagBtn.addEventListener("click", onFlagSubmit);
  }

  const resetBtn = document.getElementById("reset-progress");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetProgress);
  }

  const advUnlock = document.getElementById("advanced-unlock-btn");
  if (advUnlock) {
    advUnlock.addEventListener("click", unlockAdvancedExplicit);
  }

  const advLock = document.getElementById("advanced-lock-btn");
  if (advLock) {
    advLock.addEventListener("click", lockAdvancedExplicit);
  }

  const recommended = getRecommendedMission();
  if (recommended) {
    loadMission(recommended);
  }
});
