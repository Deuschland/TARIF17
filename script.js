// Єдина константа з усіма ключами
const FIELDS = [
  "Name",
  "Kostenträger-Nr.",
  "Kostenträger - Name / Ort",
  "Von Objekt / Ort",
  "Nach Objekt / Ort",
  "Statistik",
  "Zusatzfeld",
  "Tarif",
  "Zusatztext für Rechnung"
];

// Єдина структура з усіма даними
const categories = {
  "SCHMIEDER KLINIK": {
    icon: "fa-hospital",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "3491",
      [FIELDS[2]]: "SCHMIEDER KLINIK",
      [FIELDS[3]]: "SCHM. GAILINGEN",
      [FIELDS[4]]: "SCHM. ALLENSBACH / MRT",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "",
      [FIELDS[8]]: ""
    },
    subOptions: [
      { label: "3 - Tragestuhl", [FIELDS[7]]: "9211", icon: "" },
      { label: "4 - gehfähig", [FIELDS[7]]: "9111", icon: "fa-person-walking" },
      { label: "5 - Rollstuhl", [FIELDS[7]]: "9711", icon: "fa-wheelchair-move" }
    ]
  },
  "PRIVAT": {
    icon: "fa-user",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "1",
      [FIELDS[2]]: "PRIVAT",
      [FIELDS[3]]: "WHG",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "6600",
      [FIELDS[8]]: ""
    }
  },
  "Hilfeleistung bzw. Tragehilfen/privat": {
    icon: "fa-hands-helping",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "1",
      [FIELDS[2]]: "Hilfeleistung bzw. Tragehilfen/privat",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "WHG",
      [FIELDS[5]]: "93",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "2800",
      [FIELDS[8]]: "HOCH HELFEN"
    }
  },
  "HAUSNOTRUF": {
    icon: "fa-phone-volume",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "8",
      [FIELDS[2]]: "HAUSNOTRUF",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "WHG",
      [FIELDS[5]]: "89",
      [FIELDS[6]]: "8",
      [FIELDS[7]]: "8609",
      [FIELDS[8]]: "HNR NR._ _ _ _ _"
    }
  },
  "ZFP Reichenau": {
    icon: "fa-clinic-medical",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "2775",
      [FIELDS[2]]: "ZFP Reichenau",
      [FIELDS[3]]: "ZFP ST. 92",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "9301",
      [FIELDS[8]]: ""
    }
  },
  "LEERFAHRT": {
    icon: "fa-car-side",
    data: {
      [FIELDS[0]]: "DIENSTFAHRT",
      [FIELDS[1]]: "9",
      [FIELDS[2]]: "LEERFAHRT",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "4202 / 4203 / 4205 / 4206",
      [FIELDS[5]]: "91",
      [FIELDS[6]]: "7",
      [FIELDS[7]]: "Kein",
      [FIELDS[8]]: ""
    }
  },
  "FEHLFAHRT": {
    icon: "fa-exclamation-triangle",
    data: {
      [FIELDS[0]]: "FEHLFAHRT",
      [FIELDS[1]]: "9",
      [FIELDS[2]]: "LEERFAHRT",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "81",
      [FIELDS[6]]: "6",
      [FIELDS[7]]: "Kein",
      [FIELDS[8]]: ""
    }
  },
  "KRANKENHAUS": {
    icon: "fa-hospital-user",
    data: Object.fromEntries(FIELDS.map(f => [f, ""])),
    subOptions: [
      { label: "KH - KONSTANZ",
	  [FIELDS[2]]: "KH - KONSTANZ",
	  [FIELDS[3]]: "ZNA MED KONSTANZ", 
	  [FIELDS[4]]: "ZNA MED SINGEN",
	  [FIELDS[5]]: "21",
	  [FIELDS[1]]: "1203",
	  [FIELDS[7]]: "9101", icon: "fa-hospital" },
      { label: "DR. ZWICKER", 
	  [FIELDS[2]]: "KH - KN",
	  [FIELDS[3]]: "PO3",
	  [FIELDS[4]]: "ZWICKER", 
	  [FIELDS[5]]: "23 / 24",
	  [FIELDS[1]]: "1203",
	  [FIELDS[7]]: "9101", icon: "fa-user-doctor" },
      { label: "KH - SINGEN", 
	  [FIELDS[2]]: "KH - SINGEN",
	  [FIELDS[3]]: "ZNA MED SINGEN", 
	  [FIELDS[4]]: "ZNA MED KONSTANZ",
	  [FIELDS[5]]: "21", 
	  [FIELDS[1]]: "3214",
	  [FIELDS[7]]: "9201", icon: "fa-hospital" },
      { label: "KH - STOCKACH", 
	  [FIELDS[2]]: "KH - STOCKACH",
	  [FIELDS[3]]: "ZNA MED STOCKACH",
	  [FIELDS[4]]: "ZNA MED KONSTANZ", 
	  [FIELDS[5]]: "21",
	  [FIELDS[1]]: "3151",
	  [FIELDS[7]]: "9301", icon: "fa-hospital" }
    ]
  },
  "HEGAU JUGENDWERK": {
    icon: "fa-user-md",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "3472",
      [FIELDS[2]]: "",
      [FIELDS[3]]: "",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "9201",
      [FIELDS[8]]: ""
    }
  },
  "Tarife für Rollstuhlfahrten": {
    icon: "fa-notes-medical",
    data: Object.fromEntries(FIELDS.map(f => [f, ""])),
    subOptions: [
      { label: "DAK", [FIELDS[2]]: "DAK", [FIELDS[1]]: "600", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
       { label: "TK", [FIELDS[2]]: "TK", [FIELDS[1]]: "163", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
      { label: "BEK", [FIELDS[2]]: "BEK", [FIELDS[1]]: "748", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
      { label: "KKH", [FIELDS[2]]: "KKH", [FIELDS[1]]: "590", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
      { label: "hkk", [FIELDS[2]]: "hkk", [FIELDS[1]]: "1602", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
      { label: "HEK", [FIELDS[2]]: "HEK", [FIELDS[1]]: "175", [FIELDS[7]]: "7611", icon: "fa-wheelchair" },
      { label: "IKK", [FIELDS[2]]: "IKK", [FIELDS[1]]: "1770", [FIELDS[7]]: "7621", icon: "fa-wheelchair" }
    ]
  }
};

// DOM елементи
const resetBtn = document.getElementById("reset-button");
const menuContainer = document.getElementById("menu-buttons");
const subOptions = document.getElementById("sub-options");
const output = document.getElementById("output");
const resetContainer = document.getElementById("reset-container");

// Функція створення кнопок
function createButton(text, iconClass, onClick, extraClass = "") {
  const btn = document.createElement("button");
  btn.className = `icon-button ${extraClass}`.trim();
  btn.innerHTML = iconClass ? `<i class="fas ${iconClass}"></i> ${text}` : text;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

// Очищення контейнерів
function clearContainers() {
  menuContainer.textContent = "";
  subOptions.textContent = "";
  output.textContent = "";
}

// Рендер категорії
function renderView(name) {
  clearContainers();
  const category = categories[name];

  menuContainer.appendChild(
    createButton(name, category.icon, null, "selected")
  );

  resetContainer.style.display = "block";

  if (category.subOptions) {
    category.subOptions.forEach(opt => {
      subOptions.appendChild(
        createButton(opt.label, opt.icon || null, () => renderSubSelection(opt, category.data))
      );
    });
  } else {
    renderTable(category.data);
  }
}

// Рендер підкатегорії
function renderSubSelection(option, baseData) {
  subOptions.textContent = "";
  subOptions.appendChild(createButton(option.label, option.icon || null, null, "sub-selected"));
  renderTable({ ...baseData, ...option });
}

// Рендер таблиці
function renderTable(entry) {
  output.innerHTML = `<div class="vertical-table">${
    FIELDS
      .filter(f => entry[f] && String(entry[f]).trim() !== "")
      .map(f => {
        const extraClass = (f === FIELDS[1] || f === FIELDS[7]) ? "highlight" : "";
        return `<div class="row">
                  <div class="label">${f}</div>
                  <div class="value ${extraClass}">${entry[f]}</div>
                </div>`;
      }).join("")
  }</div>`;
}

// Скидання вибору
function resetView() {
  clearContainers();
  resetContainer.style.display = "none";

  const categoryNames = Object.keys(categories);
  if (categoryNames.length > 0) {
    const firstName = categoryNames[0];
    menuContainer.appendChild(
      createButton(firstName, categories[firstName].icon, () => renderView(firstName))
    );
  }
  categoryNames.slice(1).forEach(name => {
    menuContainer.appendChild(
      createButton(name, categories[name].icon, () => renderView(name))
    );
  });
}

// Події
resetBtn.addEventListener("click", resetView);

// Ініціалізація
resetView();

// Реєстрація Service Worker і повідомлення про оновлення
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');

  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data && event.data.type === 'NEW_VERSION_AVAILABLE') {
      if (confirm('Доступна нова версія — оновити?')) {
        window.location.reload();
      }
    }
  });
}