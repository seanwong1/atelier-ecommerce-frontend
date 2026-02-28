const path = require('path');
const express = require('express');

const app = express();
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'src', 'client', 'dist');
const port = process.env.PORT || '4173';
const host = process.env.HOST || '127.0.0.1';

app.use(express.static(distDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Previewing GitHub Pages build at http://${host}:${port}`);
});
