const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const webpackBin = path.join(rootDir, 'node_modules', '.bin', 'webpack');
const distDir = path.join(rootDir, 'src', 'client', 'dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');
const noJekyll = path.join(distDir, '.nojekyll');

const env = {
  ...process.env,
  DEMO_MODE: 'true',
};

const runWebpack = () => {
  return new Promise((resolve, reject) => {
    const child = spawn(webpackBin, ['--mode', 'production'], {
      cwd: rootDir,
      env,
      stdio: 'inherit',
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Webpack exited with code ${code}`));
    });

    child.on('error', reject);
  });
};

const writePagesArtifacts = () => {
  fs.writeFileSync(noJekyll, '');
  fs.copyFileSync(indexHtml, notFoundHtml);
};

(async () => {
  try {
    await runWebpack();
    writePagesArtifacts();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
