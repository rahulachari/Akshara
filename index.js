const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Parse URL path
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
  };

  const contentType = mimeTypes[ext] || 'text/html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Fallback to index.html
      fs.readFile(path.join(__dirname, 'index.html'), (err2, mainContent) => {
        if (err2) {
          res.statusCode = 404;
          res.end('404 Not Found');
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.end(mainContent);
        }
      });
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(content);
    }
  });
};
