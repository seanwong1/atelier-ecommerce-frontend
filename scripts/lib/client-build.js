const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '../..');
const publicDir = path.join(rootDir, 'src', 'client', 'public');
const distDir = path.join(rootDir, 'src', 'client', 'dist');
const webpackBin = path.join(rootDir, 'node_modules', '.bin', 'webpack');

const resetDistDir = () => {
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(distDir, { recursive: true });
};

const copyPublicAssets = () => {
  fs.mkdirSync(distDir, { recursive: true });
  fs.cpSync(publicDir, distDir, { recursive: true });
};

const runWebpack = ({ mode, env, watch = false }) => {
  const args = ['--mode', mode];

  if (watch) {
    args.push('--watch');
  }

  return new Promise((resolve, reject) => {
    const child = spawn(webpackBin, args, {
      cwd: rootDir,
      env,
      stdio: 'inherit',
    });

    child.on('error', reject);

    if (watch) {
      resolve(child);
      return;
    }

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Webpack exited with code ${code}`));
    });
  });
};

const writePagesArtifacts = () => {
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
};

module.exports = {
  copyPublicAssets,
  distDir,
  resetDistDir,
  rootDir,
  runWebpack,
  writePagesArtifacts,
};
