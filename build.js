const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Static root files to copy
const files = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'frame1.jpg',
  'frame2.jpg',
  'frame3.jpg'
];

files.forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
  }
});

// Directories to copy
const dirs = ['css', 'js', 'assets', 'images'];

dirs.forEach(dir => {
  const src = path.join(__dirname, dir);
  if (fs.existsSync(src)) {
    fs.cpSync(src, path.join(distDir, dir), { recursive: true });
  }
});

console.log('Build completed successfully: all static files and directories copied to dist/');
