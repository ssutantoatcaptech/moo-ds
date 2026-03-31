#!/usr/bin/env node
import { readdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

const iconsDir = join(process.cwd(), 'src/icons')
const outFile = join(process.cwd(), 'docs/iconography.html')

const figmaNodes = {
  Accessibility: '6001-9981', Arrows: '6001-10163', AudioVideo: '6002-296',
  Business: '6002-1210', Chess: '6002-2360', Code: '6002-3015',
  Communication: '6002-3634', Computers: '6002-3413', Currency: '6003-69',
  DateTime: '6003-1111', Design: '6003-1597', Editors: '6012-525',
  Files: '6003-1484', Genders: '6002-2759', HandsGestures: '6005-168',
  Health: '6003-485', Interfaces: '6016-1962', Logistics: '6002-2536',
  Maps: '6015-1504', Objects: '6016-2271', PaymentsShopping: '6012-1170',
  Spinners: '6003-1197', Sports: '6011-350', Status: '6012-910',
  UsersPeople: '6003-841', Vehicles: '6003-605', Writing: '6003-1300'
}

const displayNames = {
  AudioVideo: 'Audio &amp; Video', DateTime: 'Date &amp; Time',
  HandsGestures: 'Hands &amp; Gestures', PaymentsShopping: 'Payments &amp; Shopping',
  UsersPeople: 'Users &amp; People'
}

const descriptions = {
  Accessibility: 'Icons representing accessibility standards',
  Arrows: 'Icons indicating direction and navigation',
  AudioVideo: 'Icons for interacting with audio and video',
  Business: 'Icons for business and workplace tasks',
  Chess: 'Icons for chess pieces and games',
  Code: 'Icons for coding and development',
  Communication: 'Icons for messaging and communication',
  Computers: 'Icons for devices and hardware',
  Currency: 'Icons for monetary symbols',
  DateTime: 'Icons for calendars, clocks, and time',
  Design: 'Icons for design tools and visual editing',
  Editors: 'Icons for text editing and formatting',
  Files: 'Icons for file types and documents',
  Genders: 'Icons representing gender symbols',
  HandsGestures: 'Icons for hand gestures and signals',
  Health: 'Icons for medical and health topics',
  Interfaces: 'Icons for UI elements and interactions',
  Logistics: 'Icons for shipping and warehousing',
  Maps: 'Icons for locations, maps, and places',
  Objects: 'Icons for everyday objects',
  PaymentsShopping: 'Icons for payments, shopping, and commerce',
  Spinners: 'Icons for loading indicators',
  Sports: 'Icons for sports and athletics',
  Status: 'Icons for status indicators and toggles',
  UsersPeople: 'Icons for users, people, and profiles',
  Vehicles: 'Icons for vehicles and transportation',
  Writing: 'Icons for writing and editing'
}

// Map kebab names to FA5 class names where they differ
const fa5Map = {
  'arrows-alternate': 'arrows-alt',
  'arrows-alternate-horizontal': 'arrows-alt-h',
  'arrows-alternate-vertical': 'arrows-alt-v',
  'bars-alt': 'bars',
  'close-icon': 'times',
  'x-icon': 'times',
  'expand-arrows-alternate': 'expand-arrows-alt',
  'external-alternate': 'external-link-alt',
  'external-square-alternate': 'external-link-square-alt',
  'level-down-alternate': 'level-down-alt',
  'level-up-alternate': 'level-up-alt',
  'long-arrow-alternate-left': 'long-arrow-alt-left',
  'long-arrow-alternate-left-alt': 'long-arrow-alt-left',
  'long-arrow-alternate-right': 'long-arrow-alt-right',
  'long-arrow-alternate-up': 'long-arrow-alt-up',
  'redo-alternate': 'redo-alt',
  'sign-in-alternate': 'sign-in-alt',
  'sign-out-alternate': 'sign-out-alt',
  'sync-alternate': 'sync-alt',
  'undo-alternate': 'undo-alt',
  'share-square-outline': 'share-square',
  'share-alternate-square': 'share-alt-square',
  'cloud-download': 'cloud-download-alt',
  'cloud-upload': 'cloud-upload-alt',
  'trash-alternate': 'trash-alt',
  'ellipsis-horizontal': 'ellipsis-h',
  'ellipsis-vertical': 'ellipsis-v',
  'exchange': 'exchange-alt',
  'sign-in': 'sign-in-alt',
  'sign-out': 'sign-out-alt',
  'sort-alphabet-down': 'sort-alpha-down',
  'sort-alphabet-up': 'sort-alpha-up',
  'sort-amount-down': 'sort-amount-down',
  'sort-amount-up': 'sort-amount-up',
  'sort-numeric-down': 'sort-numeric-down',
  'sort-numeric-up': 'sort-numeric-up',
  'calendar-alternate': 'calendar-alt',
  'calendar-alternate-outline': 'calendar-alt',
  'file-alternate': 'file-alt',
  'file-alternate-outline': 'file-alt',
  'pencil-alternate': 'pencil-alt',
  'ticket-alternate': 'ticket-alt',
  'unlock-alternate': 'unlock-alt',
  'shield-alternate': 'shield-alt',
  'tachometer-alternate': 'tachometer-alt',
  'tablet-alternate': 'tablet-alt',
  'mobile-alternate': 'mobile-alt',
  'list-alternate': 'list-alt',
  'list-alternate-outline': 'list-alt',
  'map-marker-alternate': 'map-marker-alt',
  'clipboard-outline': 'clipboard',
  'compass-outline': 'compass',
  'dolly-flatbed': 'dolly-flatbed',
  'football-ball': 'football-ball',
  'double-mars': 'mars-double',
  'transgender-alternate': 'transgender-alt',
  'comment-alternate': 'comment-alt',
  'comment-alternate-outline': 'comment-alt',
  'comment-pen': 'pen',
  'sliders-horizontal': 'sliders-h',
  'chess-bishop': 'chess-bishop',
  'chess-knight': 'chess-knight',
  'chess-pawn': 'chess-pawn',
  'chess-queen': 'chess-queen',
  'chess-rook': 'chess-rook',
  'stopwatch': 'stopwatch',
  'fire-extinguisher': 'fire-extinguisher',
}

function kebabToFaClass(kebab) {
  const isOutline = kebab.endsWith('-outline')
  const base = isOutline ? kebab.replace(/-outline$/, '') : kebab
  const mapped = fa5Map[kebab] || fa5Map[base] || base
  const prefix = isOutline && !fa5Map[kebab] ? 'far' : 'fas'
  return `${prefix} fa-${mapped}`
}

function pascalToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase()
}

const GITHUB_BASE = 'https://github.com/ssutantoatcaptech/moo-ds/blob/main/src/icons'
const FIGMA_BASE = 'https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography?node-id='

const categories = readdirSync(iconsDir)
  .filter(d => statSync(join(iconsDir, d)).isDirectory())
  .sort()

let totalIcons = 0
const sections = []

for (const cat of categories) {
  const dir = join(iconsDir, cat)
  const files = readdirSync(dir)
    .filter(f => f.endsWith('.tsx') && !f.includes('.figma.') && f !== 'index.ts')
  const icons = files.map(f => {
    const component = f.replace('Icon.tsx', '')
    const kebab = pascalToKebab(component)
    return { component, kebab, fileName: f }
  }).sort((a, b) => a.kebab.localeCompare(b.kebab))
  totalIcons += icons.length
  sections.push({ cat, icons, node: figmaNodes[cat] })
}

const catId = (cat) => 'cat-' + pascalToKebab(cat).replace(/&/g, '').replace(/\s+/g, '-')

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iconography - MoO Design System</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="shared.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
  <script src="figma-toolbar.js" defer></script>
  <style>
    .icon-section { margin-bottom: 48px; }
    .icon-section h2 { font-size: 24px; color: #003a70; margin-bottom: 4px; }
    .icon-section .section-desc { font-size: 14px; color: #838383; margin-bottom: 20px; }
    .icon-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 12px;
    }
    .icon-cell {
      background: #fff; border-radius: 8px; padding: 16px 8px 12px; text-align: center;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: box-shadow 0.15s, transform 0.15s;
      cursor: default; position: relative;
    }
    .icon-cell:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(-1px); }
    .icon-cell i { font-size: 24px; color: #222; display: block; margin-bottom: 8px; }
    .icon-cell .icon-name { font-size: 10px; color: #838383; word-break: break-word; line-height: 13px; }
    .icon-cell .icon-links { display: none; position: absolute; top: 4px; right: 4px; gap: 4px; }
    .icon-cell:hover .icon-links { display: flex; }
    .icon-cell .icon-links a {
      font-size: 9px; color: #105fa8; text-decoration: none; background: #f2f8fe;
      border-radius: 3px; padding: 2px 4px; font-weight: 600;
    }
    .icon-cell .icon-links a:hover { background: #dceefb; }
    .icon-search {
      width: 100%; max-width: 400px; padding: 10px 16px 10px 40px; border: 1px solid #bababa; border-radius: 8px;
      font-size: 14px; font-family: 'Source Sans Pro', sans-serif; margin-bottom: 32px; outline: none;
      background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23838383' viewBox='0 0 512 512'%3E%3Cpath d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E") 14px center no-repeat;
    }
    .icon-search:focus { border-color: #105fa8; }
    .icon-toc { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
    .icon-toc a {
      font-size: 13px; color: #105fa8; text-decoration: none; padding: 6px 12px;
      background: #fff; border: 1px solid #f0f0f0; border-radius: 4px;
      transition: all 0.15s;
    }
    .icon-toc a:hover { background: #f2f8fe; border-color: #105fa8; }
    .ext-link {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 12px; text-decoration: none; font-weight: 600;
      margin-left: 12px;
    }
    .ext-link:hover { text-decoration: underline; }
    .figma-link { color: #105fa8; }
    .github-link { color: #24292f; }
    .summary-bar {
      background: #fff; border-radius: 8px; padding: 20px 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      display: flex; gap: 32px; margin-bottom: 32px; flex-wrap: wrap;
    }
    .summary-stat { display: flex; flex-direction: column; }
    .summary-stat .num { font-size: 28px; font-weight: 700; color: #003a70; }
    .summary-stat .label { font-size: 12px; color: #838383; text-transform: uppercase; letter-spacing: 0.5px; }
  </style>
</head>
<body>
  <nav class="ds-nav">
    <div class="ds-nav-left">
      <span class="ds-brand">MoO Design System</span>
      <div class="ds-tabs">
        <a href="index.html" class="ds-tab">Overview</a>
        <a href="tokens.html" class="ds-tab">Design Tokens</a>
        <a href="iconography.html" class="ds-tab active">Iconography</a>
        <a href="components.html" class="ds-tab">Components</a>
        <a href="dashboard.html" class="ds-tab">Dashboard Preview</a>
        <a href="mobile-dashboard.html" class="ds-tab">Mobile Dashboard</a>
        <a href="login-registration.html" class="ds-tab">Login &amp; Registration</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <h1>Iconography</h1>
    <p>${totalIcons} icons across ${sections.length} categories from the Member Experience Icon Library.</p>
  </section>

  <div class="page-content">
    <!-- Summary -->
    <div class="summary-bar">
      <div class="summary-stat"><span class="num">${totalIcons}</span><span class="label">Total Icons</span></div>
      <div class="summary-stat"><span class="num">${sections.length}</span><span class="label">Categories</span></div>
      <div class="summary-stat"><span class="num">48px</span><span class="label">Base Size</span></div>
      <div class="summary-stat"><span class="num">FA5</span><span class="label">Icon Set</span></div>
    </div>

    <!-- Search -->
    <input type="text" class="icon-search" placeholder="Search icons..." id="iconSearch" oninput="filterIcons(this.value)">

    <!-- Table of Contents -->
    <div class="icon-toc" id="iconToc"></div>
`

for (let i = 0; i < sections.length; i++) {
  const { cat, icons, node } = sections[i]
  const display = displayNames[cat] || cat
  const desc = descriptions[cat] || ''
  const id = catId(cat)
  const figmaUrl = `${FIGMA_BASE}${node}&m=dev`
  const githubUrl = `${GITHUB_BASE}/${cat}`

  html += `
    <!-- ${i + 1}. ${display.replace(/&amp;/g, '&')} -->
    <div class="icon-section" id="${id}">
      <h2>${display}
        <a href="${figmaUrl}" class="ext-link figma-link" target="_blank">Figma &rarr;</a>
        <a href="${githubUrl}" class="ext-link github-link" target="_blank">GitHub &rarr;</a>
      </h2>
      <p class="section-desc">${desc} &middot; ${icons.length} icons</p>
      <div class="icon-grid">
`
  for (const icon of icons) {
    const faClass = kebabToFaClass(icon.kebab)
    const ghLink = `${githubUrl}/${icon.component}Icon.tsx`
    html += `        <div class="icon-cell"><i class="${faClass}"></i><div class="icon-name">${icon.kebab}</div><div class="icon-links"><a href="${ghLink}" target="_blank">src</a></div></div>\n`
  }
  html += `      </div>
    </div>
`
}

html += `
    <!-- Source links -->
    <div style="margin-top:48px;padding-top:24px;border-top:1px solid #f0f0f0;">
      <p style="font-size:14px;color:#838383;">
        Source: <a href="https://www.figma.com/design/PANnuPSeOJ5BkW3XDyt2RG/Member-Experience-Iconography" target="_blank" style="color:#105fa8;text-decoration:none;font-weight:600;">Figma Iconography</a>
        &middot; <a href="https://github.com/ssutantoatcaptech/moo-ds/tree/main/src/icons" target="_blank" style="color:#24292f;text-decoration:none;font-weight:600;">GitHub Icons</a>
      </p>
      <p style="font-size:12px;color:#bababa;margin-top:4px;">All icons are 48&times;48px base size. React SVG components exported from Figma.</p>
    </div>
  </div>

  <script>
    // Build table of contents
    const toc = document.getElementById('iconToc');
    document.querySelectorAll('.icon-section').forEach(section => {
      const h2 = section.querySelector('h2');
      const name = h2.childNodes[0].textContent.trim();
      const count = section.querySelectorAll('.icon-cell').length;
      const a = document.createElement('a');
      a.href = '#' + section.id;
      a.textContent = name + ' (' + count + ')';
      toc.appendChild(a);
    });

    // Search filter
    function filterIcons(query) {
      const q = query.toLowerCase().trim();
      document.querySelectorAll('.icon-section').forEach(section => {
        let anyVisible = false;
        section.querySelectorAll('.icon-cell').forEach(cell => {
          const name = cell.querySelector('.icon-name').textContent.toLowerCase();
          const match = !q || name.includes(q);
          cell.style.display = match ? '' : 'none';
          if (match) anyVisible = true;
        });
        section.style.display = anyVisible ? '' : 'none';
      });
    }
  </script>
</body>
</html>
`

writeFileSync(outFile, html)
console.log(`Generated iconography.html with ${totalIcons} icons across ${sections.length} categories`)
