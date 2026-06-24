// const API_BASE = "http://localhost:8080";
const API_BASE = "https://api-profilhijau.nusanova.org";
const ADMIN_KEY_STORAGE = "green_sme_admin_key";
const OFFICIAL_QUESTION_TOTAL = 63;

function getAdminKey() {
  return sessionStorage.getItem(ADMIN_KEY_STORAGE) || "";
}

function setAdminKey(key) {
  sessionStorage.setItem(ADMIN_KEY_STORAGE, key);
}

function clearAdminKey() {
  sessionStorage.removeItem(ADMIN_KEY_STORAGE);
}

function requireAdmin() {
  if (!getAdminKey()) {
    window.location.href = "admin-login.html";
    return false;
  }

  return true;
}

async function adminFetch(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    "X-Admin-Key": getAdminKey(),
    ...(options.headers || {})
  };

  const response = await fetch(API_BASE + path, {
    ...options,
    headers
  });

  if (response.status === 401) {
    clearAdminKey();
    window.location.href = "admin-login.html";
    throw new Error("Admin session expired");
  }

  if (!response.ok) {
    let message = "Request gagal.";

    try {
      const body = await response.json();
      message = body.message || body.error || message;
    } catch (e) {}

    throw new Error(message);
  }

  return response.json();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

const INSTITUTION_CONTACTS = {
  "Melati Nusantara": "https://www.instagram.com/melatinusantara/",
  "APINDO": "https://www.instagram.com/apindoumkm/?hl=en",
  "Temani": "https://www.nusanova.org/temani/demo/",
  "NusaNova": "https://www.nusanova.org/",
  "KUMKM": "https://ppid.umkm.go.id/",
  "KUKM": "https://ppid.umkm.go.id/",
  "KEM": "https://www.instagram.com/ekonomimembumi/?hl=en",
  "TUMBU": "https://tumbu.co.id/home"
};

const INSTITUTION_ALIASES = {
  "UNUSA": "Universitas Nahdlatul Ulama Surabaya",
  "UWIKA": "Universitas Widya Kartika Surabaya",
  "UNPAR": "Universitas Katolik Parahyangan",
  "KUKM": "KUMKM",
  "KUMKM": "KUMKM",
  "NUSANOVA": "NusaNova",
  "TEMANI": "Temani",
  "APINDO": "APINDO",
  "BEDO": "BEDO",
  "GRI": "GRI",
  "BINUS": "BINUS",
  "DSC": "DSC",
  "GIZ CASE": "GIZ CASE",
  "KEM": "KEM",
  "ILO": "ILO",
  "SEDES": "SEDES",
  "Origo": "Origo",
  "UKM Indonesia": "UKM Indonesia",
  "Melati Nusantara": "Melati Nusantara"
};

function canonicalInstitutionName(name) {
  const clean = String(name || "").trim();
  return INSTITUTION_ALIASES[clean] || clean;
}

function getInstitutionLinks(institutionText) {
  return String(institutionText || "")
    .split("/")
    .map(name => canonicalInstitutionName(name))
    .filter(Boolean)
    .map(name => ({
      name,
      url: INSTITUTION_CONTACTS[name] || ""
    }));
}

function renderInstitutionLinks(item) {
  const links = Array.isArray(item?.institutionLinks) && item.institutionLinks.length
    ? item.institutionLinks
    : getInstitutionLinks(item?.institution);

  if (!links.length) return "-";

  return links.map(link => {
    const name = escapeHtml(link.name);
    return link.url
        ? `<a class="institution-link" href="${escapeAttr(link.url)}" target="_blank" rel="noopener noreferrer">${name}</a>`
        : name;
  }).join(" / ");
}

function normalizeText(value) {
  return String(value ?? "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim();
}

function formatDateTime(value) {
  if (!value) return "-";
  return String(value).replace("T", " ").substring(0, 19);
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function formatNumber(value) {
  const number = toNumber(value, 0);
  return new Intl.NumberFormat("id-ID").format(number);
}

function logoutAdmin() {
  clearAdminKey();
  window.location.href = "admin-login.html";
}

function adminShell(title, activeMenu, content) {
  return `
    <header class="site-header ministerial-header">
      <div class="header-accent" aria-hidden="true"></div>

      <div class="gov-topbar ministry-shell">
        <div class="institution-strip" aria-label="Logo penyelenggara">
          <div class="institution-logo logo-ministry">
            <img src="assets/logo-kementerian-umkm.png" alt="Kementerian UMKM Republik Indonesia">
          </div>
          <div class="institution-logo logo-sapa">
            <img src="assets/logo-sapa-umkm.png" alt="SAPA UMKM">
          </div>
          <div class="institution-logo logo-cny">
            <img src="assets/logo-umkm-hijau.jpeg" alt="UMKM Hijau Berdampak">
          </div>
        </div>

        <div class="gov-utilities" aria-label="Kontrol admin">
          <div class="admin-title-block">
            <strong>Admin Profil UMKM Hijau Berdampak</strong>
            <small>${escapeHtml(title)}</small>
          </div>
          <button class="btn ghost" type="button" onclick="logoutAdmin()">Logout</button>
        </div>
      </div>

      <div class="gov-nav-band">
        <div class="nav-shell ministry-shell">
          <nav class="main-menu" aria-label="Menu admin">
            <a class="menu-link ${activeMenu === "users" ? "active" : ""}" href="admin-list-user.html">
              <span class="menu-icon" aria-hidden="true">♙</span>
              List User
            </a>
            <a class="menu-link ${activeMenu === "dashboard" ? "active" : ""}" href="admin-dashboard.html">
              <span class="menu-icon" aria-hidden="true">▥</span>
              Dashboard Admin
            </a>
          </nav>
        </div>
      </div>
    </header>

    <main class="admin-shell app-shell">
      ${content}
    </main>

    <footer class="official-footer" aria-label="Informasi resmi platform">
      <div class="official-footer__inner">
        <div class="official-footer__meta">
          <span class="official-footer__eyebrow">Didukung Oleh</span>
          <span>Nusanova Climate Practice Group</span>
          <small>(Bagian dari PT Candra Naya Lestari)</small>
        </div>
      </div>
    </footer>
  `;
}

function getBusinessName(user) {
  return user?.businessName || user?.business || user?.companyName || "-";
}

function getRespondentName(user) {
  return user?.respondentName || user?.name || user?.picName || "-";
}

function getasesorName(user) {
  return user?.assessorName || user?.asesorName || user?.asesor || "-";
}

function getLocation(user) {
  const city = user?.city || "";
  const province = user?.province || "";
  return [city, province].filter(Boolean).join(", ") || "-";
}

function getTierNumber(tier) {
  const match = String(tier ?? "").match(/-?\d+/);
  return match ? Number(match[0]) : 0;
}

function getScorePercent(score, max = 1000) {
  return Math.max(0, Math.min(100, Math.round((toNumber(score) / max) * 100)));
}

function getStatusClass(status) {
  const text = normalizeText(status);
  if (text.includes("reject") || text.includes("diskual") || text.includes("failed")) return "danger";
  if (text.includes("pending") || text.includes("review") || text.includes("draft")) return "warning";
  if (text.includes("submit") || text.includes("approve") || text.includes("done") || text.includes("complete")) return "success";
  return "";
}

function summarizeUsers(users) {
  const rows = Array.isArray(users) ? users : [];
  const totalScore = rows.reduce((sum, user) => sum + toNumber(user.totalScore || user.score || user.result?.total), 0);
  const averageScore = rows.length ? Math.round(totalScore / rows.length) : 0;
  const tier3Plus = rows.filter(user => getTierNumber(user.tier || user.result?.tier) >= 3).length;
  const disqualified = rows.filter(user => {
    const status = normalizeText(user.status || "");
    const tier = getTierNumber(user.tier || user.result?.tier);
    return tier === 0 || status.includes("diskual") || status.includes("reject");
  }).length;

  return { totalUser: rows.length, averageScore, tier3Plus, disqualified };
}

function countBy(items, getter, fallback = "Tidak diisi") {
  const map = new Map();
  (items || []).forEach(item => {
    const raw = getter(item);
    const key = String(raw ?? "").trim() || fallback;
    map.set(key, (map.get(key) || 0) + 1);
  });
  return Array.from(map.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function objectToChartData(source, options = {}) {
  const prefix = options.prefix || "";
  const suffix = options.suffix || "";
  return Object.entries(source || {})
    .map(([label, value]) => {
      let cleanLabel = String(label || "-");
      if (prefix && !normalizeText(cleanLabel).startsWith(normalizeText(prefix))) cleanLabel = `${prefix} ${cleanLabel}`;
      if (suffix && !normalizeText(cleanLabel).endsWith(normalizeText(suffix))) cleanLabel = `${cleanLabel} ${suffix}`;
      return { label: cleanLabel, value: toNumber(value) };
    })
    .filter(item => item.value > 0)
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function compactChartData(items, maxItems = 10) {
  const clean = (items || [])
    .filter(item => item && item.value !== undefined && Number(item.value) > 0)
    .map(item => ({ label: String(item.label || "-"), value: Number(item.value) || 0 }));

  if (clean.length <= maxItems) return clean;

  const main = clean.slice(0, maxItems - 1);
  const other = clean.slice(maxItems - 1).reduce((sum, item) => sum + item.value, 0);
  main.push({ label: "Lainnya", value: other });
  return main;
}

function chartColor(index, alpha = 1) {
  const palette = [
    `rgba(15, 107, 91, ${alpha})`,
    `rgba(11, 61, 76, ${alpha})`,
    `rgba(22, 128, 71, ${alpha})`,
    `rgba(198, 161, 58, ${alpha})`,
    `rgba(72, 166, 98, ${alpha})`,
    `rgba(103, 183, 120, ${alpha})`,
    `rgba(32, 112, 75, ${alpha})`,
    `rgba(79, 145, 92, ${alpha})`,
    `rgba(20, 92, 62, ${alpha})`,
    `rgba(160, 196, 89, ${alpha})`
  ];
  return palette[index % palette.length];
}

function getCanvasRenderHeight(canvasId, type, itemCount, width) {
  const isMobile = width <= 640;
  const count = Math.max(1, itemCount || 0);

  if (["pie", "doughnut"].includes(type)) {
    if (isMobile) {
      const rows = Math.ceil(count / 2);
      return Math.min(360, Math.max(220, 150 + rows * 28));
    }
    return Math.min(420, Math.max(270, 170 + count * 22));
  }

  if (type === "horizontalBar") {
    const base = isMobile ? 110 : 120;
    const perRow = isMobile ? 34 : 32;
    return Math.min(isMobile ? 430 : 520, Math.max(isMobile ? 220 : 250, base + count * perRow));
  }

  if (type === "line") return isMobile ? 260 : 290;

  return isMobile ? 250 : 285;
}

function drawSimpleChart(canvasId, items, type = "bar", options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !canvas.getContext) return;

  const data = compactChartData(items || [], options.maxItems || 12);
  const wrapperWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 760;
  const width = Math.max(260, wrapperWidth - 4);
  const height = getCanvasRenderHeight(canvasId, type, data.length, width);
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width = "100%";
  canvas.style.height = height + "px";
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.font = "12px Inter, Arial, sans-serif";
  ctx.textBaseline = "middle";

  if (!data.length) {
    ctx.fillStyle = "#66756d";
    ctx.fillText("Belum ada data", 24, height / 2);
    return;
  }

  if (["pie", "doughnut"].includes(type)) {
    drawPieChart(ctx, data, width, height, type === "doughnut");
  } else if (type === "horizontalBar") {
    drawHorizontalBarChart(ctx, data, width, height);
  } else if (type === "line") {
    drawLineChart(ctx, data, width, height);
  } else {
    drawBarChart(ctx, data, width, height);
  }
}

function truncateLabel(label, max = 18) {
  const text = String(label || "-");
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

function drawBarChart(ctx, data, width, height) {
  const pad = { top: 24, right: 18, bottom: 58, left: 44 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const max = Math.max(...data.map(d => d.value), 1);
  const barW = Math.max(10, chartW / data.length * .62);
  const gap = chartW / data.length;

  ctx.strokeStyle = "rgba(16,37,27,.12)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + chartH - (chartH / 4 * i);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  data.forEach((d, i) => {
    const h = chartH * (d.value / max);
    const x = pad.left + gap * i + (gap - barW) / 2;
    const y = pad.top + chartH - h;
    ctx.fillStyle = chartColor(i, .9);
    roundRect(ctx, x, y, barW, h, 8);
    ctx.fill();

    ctx.fillStyle = "#10231a";
    ctx.font = "700 12px Inter, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(d.value), x + barW / 2, Math.max(12, y - 10));

    ctx.save();
    ctx.translate(x + barW / 2, pad.top + chartH + 14);
    ctx.rotate(-Math.PI / 6);
    ctx.fillStyle = "#66756d";
    ctx.font = "11px Inter, Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(truncateLabel(d.label, 13), 0, 0);
    ctx.restore();
  });
}

function drawHorizontalBarChart(ctx, data, width, height) {
  const isMobile = width < 640;
  const pad = { top: 16, right: isMobile ? 36 : 46, bottom: 18, left: isMobile ? 112 : 150 };
  const chartW = Math.max(80, width - pad.left - pad.right);
  const rowH = Math.max(isMobile ? 28 : 22, (height - pad.top - pad.bottom) / data.length);
  const max = Math.max(...data.map(d => d.value), 1);
  const labelMax = isMobile ? 14 : 21;

  data.forEach((d, i) => {
    const y = pad.top + i * rowH + rowH * .16;
    const h = rowH * .58;
    const w = chartW * (d.value / max);
    ctx.fillStyle = "#4b5f57";
    ctx.font = `${isMobile ? 600 : 700} ${isMobile ? 10 : 11}px Inter, Arial, sans-serif`;
    ctx.textAlign = "right";
    ctx.fillText(truncateLabel(d.label, labelMax), pad.left - 10, y + h / 2);

    ctx.fillStyle = "rgba(15,107,91,.10)";
    roundRect(ctx, pad.left, y, chartW, h, 8);
    ctx.fill();

    ctx.fillStyle = chartColor(i, .9);
    roundRect(ctx, pad.left, y, Math.max(4, w), h, 8);
    ctx.fill();

    ctx.fillStyle = "#10231a";
    ctx.textAlign = "left";
    ctx.font = `800 ${isMobile ? 11 : 12}px Inter, Arial, sans-serif`;
    ctx.fillText(String(d.value), Math.min(width - 22, pad.left + w + 8), y + h / 2);
  });
}

function drawLineChart(ctx, data, width, height) {
  const pad = { top: 26, right: 22, bottom: 52, left: 44 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const max = Math.max(...data.map(d => d.value), 1);
  const step = data.length > 1 ? chartW / (data.length - 1) : chartW;

  ctx.strokeStyle = "rgba(16,37,27,.12)";
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + chartH - (chartH / 4 * i);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#0f6b5b";
  ctx.lineWidth = 3;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = pad.left + step * i;
    const y = pad.top + chartH - chartH * (d.value / max);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  data.forEach((d, i) => {
    const x = pad.left + step * i;
    const y = pad.top + chartH - chartH * (d.value / max);
    ctx.fillStyle = chartColor(i, 1);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#10231a";
    ctx.font = "800 12px Inter, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(d.value), x, y - 14);
    ctx.save();
    ctx.translate(x, pad.top + chartH + 16);
    ctx.rotate(-Math.PI / 6);
    ctx.fillStyle = "#66756d";
    ctx.font = "11px Inter, Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(truncateLabel(d.label, 13), 0, 0);
    ctx.restore();
  });
}

function drawPieChart(ctx, data, width, height, doughnut = false) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const isMobile = width < 680;
  const radius = isMobile ? Math.min(74, width * .22, (height - 50) * .22) : Math.min(height * .22, width * .18);
  const cx = isMobile ? width / 2 : Math.min(width * .28, 220);
  const cy = isMobile ? 90 : height / 2;
  let start = -Math.PI / 2;

  data.forEach((d, i) => {
    const angle = Math.PI * 2 * (d.value / total);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, start + angle);
    ctx.closePath();
    ctx.fillStyle = chartColor(i, .92);
    ctx.fill();
    start += angle;
  });

  if (doughnut) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, radius * .56, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#10231a";
    ctx.font = `900 ${isMobile ? 16 : 18}px Inter, Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(String(total), cx, cy);
    ctx.font = `${isMobile ? 10 : 11}px Inter, Arial, sans-serif`;
    ctx.fillStyle = "#66756d";
    ctx.fillText("total", cx, cy + (isMobile ? 18 : 20));
  }

  if (isMobile) {
    const itemsPerCol = Math.ceil(data.length / 2);
    const col1X = 22;
    const col2X = Math.max(width / 2 + 4, 170);
    const legendStartY = cy + radius + 24;
    data.forEach((d, i) => {
      const col = i < itemsPerCol ? 0 : 1;
      const row = col === 0 ? i : i - itemsPerCol;
      const x = col === 0 ? col1X : col2X;
      const y = legendStartY + row * 24;
      ctx.fillStyle = chartColor(i, .92);
      roundRect(ctx, x, y - 6, 12, 12, 3);
      ctx.fill();
      ctx.fillStyle = "#10231a";
      ctx.font = "700 11px Inter, Arial, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${truncateLabel(d.label, 11)} (${d.value})`, x + 18, y);
    });
  } else {
    const legendX = Math.min(cx + radius + 42, width * .55);
    let legendY = Math.max(28, cy - (data.length * 21) / 2);
    data.forEach((d, i) => {
      ctx.fillStyle = chartColor(i, .92);
      roundRect(ctx, legendX, legendY - 6, 12, 12, 3);
      ctx.fill();
      ctx.fillStyle = "#10231a";
      ctx.font = "700 12px Inter, Arial, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${truncateLabel(d.label, 24)} (${d.value})`, legendX + 18, legendY);
      legendY += 22;
    });
  }
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}


/* ===== Admin dashboard helpers mirip index.html ===== */
const ADMIN_QUESTIONS = [
  {
    "id": "Q1",
    "no": 1,
    "section": "data_awal",
    "title": "Nama asesor"
  },
  {
    "id": "Q2",
    "no": 2,
    "section": "data_awal",
    "title": "Tanggal"
  },
  {
    "id": "Q3",
    "no": 3,
    "section": "identitas_usaha",
    "title": "Nama Lengkap"
  },
  {
    "id": "Q4",
    "no": 4,
    "section": "identitas_usaha",
    "title": "Jenis Kelamin"
  },
  {
    "id": "Q5",
    "no": 5,
    "section": "identitas_usaha",
    "title": "Alamat"
  },
  {
    "id": "Q6",
    "no": 6,
    "section": "identitas_usaha",
    "title": "Kabupaten / Kota"
  },
  {
    "id": "Q7",
    "no": 7,
    "section": "identitas_usaha",
    "title": "Provinsi"
  },
  {
    "id": "Q8",
    "no": 8,
    "section": "identitas_usaha",
    "title": "Nomor WhatsApp"
  },
  {
    "id": "Q9",
    "no": 9,
    "section": "profil",
    "title": "Dokumen legalitas yang dimiliki"
  },
  {
    "id": "Q10",
    "no": 10,
    "section": "identitas_usaha",
    "title": "Nama usaha atau merek"
  },
  {
    "id": "Q11",
    "no": 11,
    "section": "identitas_usaha",
    "title": "Sejak kapan usaha Anda berdiri (tahun)"
  },
  {
    "id": "Q12",
    "no": 12,
    "section": "identitas_usaha",
    "title": "Sektor usaha"
  },
  {
    "id": "Q13",
    "no": 13,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah seluruh karyawan?"
  },
  {
    "id": "Q14",
    "no": 14,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah karyawan dengan jenis kelamin laki-laki?"
  },
  {
    "id": "Q15",
    "no": 15,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah karyawan dengan jenis kelamin perempuan?"
  },
  {
    "id": "Q16",
    "no": 16,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah karyawan yang merupakan penyandang disabilitas?"
  },
  {
    "id": "Q17",
    "no": 17,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah karyawan dengan disabilitas berjenis kelamin laki-laki?"
  },
  {
    "id": "Q18",
    "no": 18,
    "section": "identitas_usaha",
    "title": "Berapakah jumlah karyawan dengan disabilitas berjenis kelamin perempuan?"
  },
  {
    "id": "Q19",
    "no": 19,
    "section": "profil",
    "title": "Apakah perempuan memiliki peluang yang sama untuk dipromosikan bahkan ditempatkan pada posisi strategis untuk pengambilan keputusan dalam usaha Anda?"
  },
  {
    "id": "Q20",
    "no": 20,
    "section": "identitas_usaha",
    "title": "Berapakah omzet usaha Anda dalam satu tahun terakhir?"
  },
  {
    "id": "Q21",
    "no": 21,
    "section": "profil",
    "title": "Berapa persen omzet usaha dari penjualan produk hijau atau ramah lingkungan per tahun?"
  },
  {
    "id": "Q22",
    "no": 22,
    "section": "profil",
    "title": "Apakah gaji karyawan sudah sesuai dengan UMR setempat?"
  },
  {
    "id": "Q23",
    "no": 23,
    "section": "komitmen",
    "title": "Apakah usaha Anda sejalan dengan prinsip-prinsip keberlanjutan/usaha lestari/Green Business?"
  },
  {
    "id": "Q24",
    "no": 24,
    "section": "komitmen",
    "title": "Apakah usaha Anda sudah menerapkan Green SOP pada operasional dan proses produksi?"
  },
  {
    "id": "Q25",
    "no": 25,
    "section": "komitmen",
    "title": "Apakah usaha Anda sudah memiliki laporan keuangan?"
  },
  {
    "id": "Q26",
    "no": 26,
    "section": "komitmen",
    "title": "Apakah sudah memisahkan keuangan pribadi dan usaha?"
  },
  {
    "id": "Q27",
    "no": 27,
    "section": "komitmen",
    "title": "Apakah Anda mendokumentasikan dampak kegiatan usaha terhadap lingkungan, sosial, atau ekonomi?"
  },
  {
    "id": "Q28",
    "no": 28,
    "section": "komitmen",
    "title": "Apakah informasi dokumentasi dampak usaha Anda dapat diakses oleh publik melalui website, media sosial, atau laporan?"
  },
  {
    "id": "Q29",
    "no": 29,
    "section": "komitmen",
    "title": "Apakah usaha Anda memiliki laporan keberlanjutan (Sustainability Report)?"
  },
  {
    "id": "Q30",
    "no": 30,
    "section": "proses",
    "title": "Apakah usaha Anda menggunakan Sumber Energi Baru dan Terbarukan (EBT) (misalnya: panel surya, biogas), meskipun hanya sebagai sumber energi tambahan?"
  },
  {
    "id": "Q31",
    "no": 31,
    "section": "proses",
    "title": "Jenis kegiatan energi bersih apa yang pernah atau sedang dikembangkan pada usaha Anda?"
  },
  {
    "id": "Q32",
    "no": 32,
    "section": "proses",
    "title": "Berapa proporsi atau persentase Sumber Energi Baru dan Terbarukan (EBT) yang digunakan pada usaha Anda?"
  },
  {
    "id": "Q33",
    "no": 33,
    "section": "proses",
    "title": "Apakah Anda menerapkan praktik hemat energi (misalnya, penggantian peralatan efisien, optimalisasi waktu produksi)?"
  },
  {
    "id": "Q34",
    "no": 34,
    "section": "proses",
    "title": "Apakah usaha Anda sudah menerapkan sistem pengelolaan limbah/sampah melalui konsep 3R: Reduce, Reuse, Recycle?"
  },
  {
    "id": "Q35",
    "no": 35,
    "section": "proses",
    "title": "Apakah limbah dari proses produksi Anda diolah/dimanfaatkan kembali menjadi produk turunan atau produk yang memiliki nilai tambah?"
  },
  {
    "id": "Q36",
    "no": 36,
    "section": "proses",
    "title": "Apakah minimal 50% dari total bahan baku produk Anda sudah berlabel ramah lingkungan (Eco label, organik, non-pestisida, bersertifikasi legal, dll.)?"
  },
  {
    "id": "Q37",
    "no": 37,
    "section": "proses",
    "title": "Apakah usaha Anda menerapkan upaya pengurangan dampak negatif terhadap sumber daya alam?"
  },
  {
    "id": "Q38",
    "no": 38,
    "section": "proses",
    "title": "Apakah usaha Anda mengukur jejak karbon (carbon footprint)?"
  },
  {
    "id": "Q39",
    "no": 39,
    "section": "proses",
    "title": "Berapa total konsumsi air usaha Anda per bulan? (m³)"
  },
  {
    "id": "Q40",
    "no": 40,
    "section": "proses",
    "title": "Apakah ada program penghematan air?"
  },
  {
    "id": "Q41",
    "no": 41,
    "section": "keuangan",
    "title": "Apakah Anda sudah mengalokasikan biaya lingkungan dalam perencanaan keuangan usaha Anda?"
  },
  {
    "id": "Q42",
    "no": 42,
    "section": "keuangan",
    "title": "Dalam menetapkan harga produk, apakah Anda telah memperhitungkan biaya lingkungan dan nilai keberlanjutan?"
  },
  {
    "id": "Q43",
    "no": 43,
    "section": "keuangan",
    "title": "Mengapa demikian?"
  },
  {
    "id": "Q44",
    "no": 44,
    "section": "keuangan",
    "title": "Apakah Anda pernah/sedang mencari/mendapatkan pembiayaan hijau dari lembaga keuangan?"
  },
  {
    "id": "Q45",
    "no": 45,
    "section": "keuangan",
    "title": "Jika sedang menerima atau mencari pembiayaan hijau, lembaga apa yang memberikannya?"
  },
  {
    "id": "Q46",
    "no": 46,
    "section": "keuangan",
    "title": "Apakah Anda memiliki rencana investasi hijau pada R&D/teknologi/inovasi dalam 1-2 tahun ke depan?"
  },
  {
    "id": "Q47",
    "no": 47,
    "section": "rantai",
    "title": "Berapa mitra kolega pemasok bahan baku yang berinteraksi dengan Anda saat ini?"
  },
  {
    "id": "Q48",
    "no": 48,
    "section": "rantai",
    "title": "Apakah Anda sudah menggunakan kriteria keberlanjutan dalam memilih pemasok utama pada usaha Anda?"
  },
  {
    "id": "Q49",
    "no": 49,
    "section": "rantai",
    "title": "Apakah usaha Anda sudah mempertimbangkan jenis kemasan ramah lingkungan?"
  },
  {
    "id": "Q50",
    "no": 50,
    "section": "rantai",
    "title": "Apakah Anda memiliki kontak dan hubungan baik dengan lebih dari 15 mitra/kolega pemasok kemasan?"
  },
  {
    "id": "Q51",
    "no": 51,
    "section": "rantai",
    "title": "Pemberdayaan masyarakat lokal atau kelompok rentan dalam rantai pasok."
  },
  {
    "id": "Q52",
    "no": 52,
    "section": "rantai",
    "title": "Berapa lama cadangan kas yang ada saat ini untuk menutupi biaya rutin usaha Anda?"
  },
  {
    "id": "Q53",
    "no": 53,
    "section": "rantai",
    "title": "Dengan aset yang Anda miliki saat ini, berapa lama usaha Anda dapat bertahan jika digunakan untuk menutupi biaya rutin usaha Anda?"
  },
  {
    "id": "Q54",
    "no": 54,
    "section": "rantai",
    "title": "Siapakah mitra strategis dalam pengembangan usaha lestari Anda?"
  },
  {
    "id": "Q55",
    "no": 55,
    "section": "digital",
    "title": "Apakah usaha Anda telah menggunakan metode pembayaran digital (seperti transfer bank, QRIS, atau mesin EDC) dalam transaksi usaha?"
  },
  {
    "id": "Q56",
    "no": 56,
    "section": "digital",
    "title": "Apakah usaha Anda sudah aktif menggunakan saluran digital untuk mempromosikan inisiatif hijau Anda?"
  },
  {
    "id": "Q57",
    "no": 57,
    "section": "digital",
    "title": "Apakah Anda menggunakan aplikasi digital untuk membuat laporan keuangan dan mencatat aset?"
  },
  {
    "id": "Q58",
    "no": 58,
    "section": "sosial",
    "title": "Apakah usaha Anda menyediakan pelatihan atau pendidikan kepada karyawan tentang literasi keberlanjutan dan praktik hijau?"
  },
  {
    "id": "Q59",
    "no": 59,
    "section": "sosial",
    "title": "Apakah ada mekanisme formal bagi tim internal untuk berpendapat, menyampaikan komplain, atau mengajukan gagasan perbaikan?"
  },
  {
    "id": "Q60",
    "no": 60,
    "section": "sosial",
    "title": "Apakah tersedia APD (Alat Pelindung Diri) lengkap untuk karyawan?"
  },
  {
    "id": "Q61",
    "no": 61,
    "section": "sosial",
    "title": "Berapa jam kerja rata-rata karyawan per minggu?"
  },
  {
    "id": "Q62",
    "no": 62,
    "section": "sosial",
    "title": "Apakah ada kebijakan anti-diskriminasi tertulis?"
  },
  {
    "id": "Q63",
    "no": 63,
    "section": "sosial",
    "title": "Apakah Anda memiliki informasi dan masukan tambahan?"
  },
  {
    "id": "Q64",
    "no": 64,
    "section": "asesor",
    "title": "Pertanyaan untuk asesor: Berikan komentar/penilaian asesor selama wawancara berlangsung terkait inisiatif yang dilakukan oleh pelaku usaha."
  }
];

const ADMIN_MAX_POINTS = {
  "Q9": 20,
  "Q19": 10,
  "Q21": 10,
  "Q22": 10,
  "Q23": 30,
  "Q24": 30,
  "Q25": 15,
  "Q26": 15,
  "Q27": 20,
  "Q28": 15,
  "Q29": 25,
  "Q30": 15,
  "Q31": 25,
  "Q32": 25,
  "Q33": 20,
  "Q34": 30,
  "Q35": 25,
  "Q36": 30,
  "Q37": 25,
  "Q38": 20,
  "Q40": 35,
  "Q41": 35,
  "Q42": 25,
  "Q44": 40,
  "Q46": 50,
  "Q47": 15,
  "Q48": 35,
  "Q49": 30,
  "Q50": 10,
  "Q51": 25,
  "Q52": 25,
  "Q53": 25,
  "Q54": 35,
  "Q55": 30,
  "Q56": 40,
  "Q57": 30,
  "Q58": 20,
  "Q59": 15,
  "Q60": 25,
  "Q61": 20,
  "Q62": 20
};

const ADMIN_SECTION_NAMES = {
  "data_awal": "Data Awal",
  "identitas_usaha": "Identitas Usaha",
  "profil": "Profil Usaha & SDM Dasar",
  "komitmen": "Dokumentasi, Komitmen & Tata Kelola",
  "proses": "Proses & Produksi Hijau",
  "keuangan": "Keuangan & Inovasi",
  "rantai": "Rantai Pasok & Ketahanan",
  "digital": "Digitalisasi & Promosi",
  "sosial": "Aspek Sosial & Kemitraan",
  "asesor": "Catatan asesor"
};

function adminQuestionById(qid) {
  return ADMIN_QUESTIONS.find(q => q.id === qid) || null;
}

function adminMainQuestions() {
  return ADMIN_QUESTIONS.filter(q => !["Q1", "Q2", "Q64"].includes(q.id));
}

function parseJsonSafe(value, fallback = {}) {
  if (!value) return fallback;
  if (typeof value === "object") return value;

  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}

function getAssessmentAnswers(assessment) {
  return parseJsonSafe(assessment.answersJson || assessment.answers || assessment.answerJson, assessment.answers || {});
}

function getAssessmentScores(assessment) {
  return parseJsonSafe(assessment.scoresJson || assessment.scores || assessment.scoreJson, assessment.scores || {});
}

function getAssistanceRecommendationsFromScores(scores) {
  const source = scores || {};
  return Array.isArray(source.assistanceRecommendations)
    ? source.assistanceRecommendations
    : [];
}

function getSectorAssessmentFromScores(scores) {
  const source = scores || {};
  return source.sectorAssessment || null;
}

function buildAssistanceSummaryFromAssessments(assessments) {
  const map = new Map();

  (assessments || []).forEach(assessment => {
    const scores = getAssessmentScores(assessment);
    const recommendations = getAssistanceRecommendationsFromScores(scores);

    recommendations.forEach(item => {
      const links = Array.isArray(item.institutionLinks) && item.institutionLinks.length
        ? item.institutionLinks
        : getInstitutionLinks(item.institution);

      links.forEach(link => {
        const name = link.name || "";
        if (!name) return;

        const current = map.get(name) || {
          label: name,
          value: 0,
          url: link.url || ""
        };

        current.value += 1;
        current.url = current.url || link.url || "";

        map.set(name, current);
      });
    });
  });

  return Array.from(map.values())
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function buildOfficialSectorSummaryFromAssessments(assessments, users) {
  const map = new Map();

  (assessments || []).forEach(assessment => {
    const scores = getAssessmentScores(assessment);
    const sectorAssessment = getSectorAssessmentFromScores(scores);
    const label = sectorAssessment?.sector || assessment.sector || assessment.businessSector || "Tidak diisi";
    map.set(label, (map.get(label) || 0) + 1);
  });

  if (map.size === 0) {
    (users || []).forEach(user => {
      const label = user.sector || "Tidak diisi";
      map.set(label, (map.get(label) || 0) + 1);
    });
  }

  return Array.from(map.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function answerToLabel(value) {
  if (Array.isArray(value)) {
    return value.length ? value.map(answerToLabel).join(", ") : "Tidak diisi";
  }

  if (value === null || typeof value === "undefined" || String(value).trim() === "") {
    return "Tidak diisi";
  }

  return String(value);
}

function getQuestionDistributionFromAssessments(assessments, qid) {
  const map = new Map();

  (assessments || []).forEach(assessment => {
    const answers = getAssessmentAnswers(assessment);
    const raw = answers[qid];
    const labels = Array.isArray(raw) ? (raw.length ? raw.map(answerToLabel) : ["Tidak diisi"]) : [answerToLabel(raw)];

    labels.forEach(label => {
      const clean = String(label || "Tidak diisi").trim() || "Tidak diisi";
      map.set(clean, (map.get(clean) || 0) + 1);
    });
  });

  const total = Array.from(map.values()).reduce((sum, value) => sum + value, 0) || 1;

  return Array.from(map.entries())
    .map(([label, value]) => ({
      label,
      value,
      percent: Math.round((value / total) * 100)
    }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function renderQuestionDistributionTableHtml(rows) {
  const total = (rows || []).reduce((sum, row) => sum + Number(row.value || 0), 0);

  if (!rows || !rows.length) {
    return `<div class="empty">Belum ada data jawaban.</div>`;
  }

  return `
    <div class="table-scroll">
      <table class="admin-table question-distribution-table">
        <thead>
          <tr>
            <th>Jawaban</th>
            <th>Jumlah</th>
            <th>Persentase</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${escapeHtml(row.label)}</td>
              <td><strong>${formatNumber(row.value)}</strong></td>
              <td>${total ? Math.round(Number(row.value || 0) / total * 100) : 0}%</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function normalizeScoreSectionsForIndexLook(scores) {
  const source = scores?.sections || {};

  if (Array.isArray(source)) {
    return source.map(section => ({
      title: section.title || section.name || section.label || "-",
      score: toNumber(section.score || section.value),
      max: toNumber(section.max || section.maximum || section.totalMax, 1)
    }));
  }

  if (source && typeof source === "object") {
    return Object.entries(source).map(([key, section]) => ({
      title: section.title || section.name || section.label || ADMIN_SECTION_NAMES[key] || key,
      score: toNumber(section.score || section.value),
      max: toNumber(section.max || section.maximum || section.totalMax, 1)
    }));
  }

  return [];
}

function getQuestionScoreRowsFromScores(scores) {
  const qScores = scores?.qScores || scores?.questionScores || {};

  return Object.entries(ADMIN_MAX_POINTS).map(([qid, max]) => {
    const q = adminQuestionById(qid);
    return {
      qid,
      no: q ? q.no : Number(qid.replace("Q", "")),
      title: q ? q.title : qid,
      score: toNumber(qScores[qid]),
      max: toNumber(max, 1)
    };
  }).filter(row => row.max > 0);
}

function getLowestSections(sections) {
  return (sections || [])
    .slice()
    .filter(item => Number(item.max || 0) > 0)
    .sort((a, b) => (toNumber(a.score) / toNumber(a.max, 1)) - (toNumber(b.score) / toNumber(b.max, 1)))
    .slice(0, 2);
}

function getDetailESG(scores) {
  return [
    { code: "E", name: "Environmental", score: toNumber(scores?.eScore), max: 370 },
    { code: "S", name: "Social", score: toNumber(scores?.sScore), max: 160 },
    { code: "G", name: "Governance", score: toNumber(scores?.gScore), max: 470 }
  ];
}
