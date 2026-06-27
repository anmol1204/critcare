// Build script: copies web assets to www/ (excludes PDFs, node_modules, etc.)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SRC = path.resolve(__dirname, '..');
const DEST = path.resolve(__dirname, '../www');

const INCLUDE_EXTS = new Set(['.html', '.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.xml', '.txt', '.ico']);
const SKIP_DIRS = new Set(['node_modules', 'www', '.git', 'scripts', 'android', 'ios']);
const ONLY_JSON_DIRS = new Set(['dnb']);  // copy only .json from these (skip PDFs)
const INCLUDE_DIRS = new Set(['dnb', 'api', 'marino_chapters', 'files']);

function copyFiltered(src, dest, allowedExts) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFiltered(srcPath, destPath, allowedExts);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (allowedExts.has(ext)) fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyAll(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyAll(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (INCLUDE_EXTS.has(ext)) fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clear www/
if (fs.existsSync(DEST)) fs.rmSync(DEST, { recursive: true });
fs.mkdirSync(DEST);

for (const entry of fs.readdirSync(SRC, { withFileTypes: true })) {
  const srcPath = path.join(SRC, entry.name);
  const destPath = path.join(DEST, entry.name);
  const nameLower = entry.name.toLowerCase();

  if (entry.isDirectory()) {
    if (SKIP_DIRS.has(entry.name)) continue;
    if (!INCLUDE_DIRS.has(nameLower)) continue;
    if (ONLY_JSON_DIRS.has(nameLower)) {
      copyFiltered(srcPath, destPath, new Set(['.json']));
    } else {
      copyAll(srcPath, destPath);
    }
  } else {
    const ext = path.extname(entry.name).toLowerCase();
    if (INCLUDE_EXTS.has(ext)) fs.copyFileSync(srcPath, destPath);
  }
}

console.log('✅ Build complete — web assets copied to www/');
console.log('   Size:', execSync('du -sh www/').toString().trim());
