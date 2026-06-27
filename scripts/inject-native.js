// Injects the Capacitor native bridge script tag into all HTML files
const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..');
const INJECT = '  <script src="app-native.js" defer></script>\n';
const MARKER = 'app-native.js';

let count = 0;
for (const file of fs.readdirSync(SRC)) {
  if (!file.endsWith('.html')) continue;
  const filePath = path.join(SRC, file);
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes(MARKER)) continue; // already injected
  // Inject before </head>
  if (html.includes('</head>')) {
    html = html.replace('</head>', INJECT + '</head>');
    fs.writeFileSync(filePath, html);
    count++;
    console.log('  Injected into:', file);
  }
}
console.log(`✅ Done — injected into ${count} files`);
