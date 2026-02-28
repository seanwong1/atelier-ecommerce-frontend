const path = require('path');
const net = require('net');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const webpackBin = path.join(rootDir, 'node_modules', '.bin', 'webpack');
const serverEntry = path.join(rootDir, 'src', 'server', 'index.js');
const port = process.env.PORT || '3000';
const host = process.env.HOST || '127.0.0.1';

const children = [];
const baseEnv = {
  ...process.env,
  DEMO_MODE: 'true',
  PORT: port,
  HOST: host,
};

const spawnChild = (name, command, args, extraEnv = {}) => {
  const child = spawn(command, args, {
    cwd: rootDir,
    env: {
      ...baseEnv,
      ...extraEnv,
    },
    stdio: 'inherit',
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      return;
    }

    if (code !== 0) {
      console.error(`${name} exited with code ${code}`);
      shutdown(code);
    }
  });

  child.on('error', (err) => {
    console.error(`${name} failed to start`, err);
    shutdown(1);
  });

  children.push(child);
  return child;
};

const shutdown = (exitCode = 0) => {
  while (children.length) {
    const child = children.pop();
    if (!child.killed) {
      child.kill('SIGINT');
    }
  }

  process.exit(exitCode);
};

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

const ensurePortAvailable = () => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error(`Port ${port} is already in use. Stop the existing process or run PORT=3001 npm run client-dev.`));
        return;
      }

      reject(err);
    });

    server.once('listening', () => {
      server.close(() => resolve());
    });

    server.listen(Number(port), host);
  });
};

const runInitialBuild = () => {
  return new Promise((resolve, reject) => {
    const build = spawn(webpackBin, ['--mode', 'development'], {
      cwd: rootDir,
      env: baseEnv,
      stdio: 'inherit',
    });

    build.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Initial webpack build exited with code ${code}`));
    });

    build.on('error', reject);
  });
};

(async () => {
  try {
    await ensurePortAvailable();
    console.log(`Building demo frontend for http://${host}:${port}`);
    await runInitialBuild();
    console.log(`Starting demo frontend on http://${host}:${port}`);

    spawnChild('webpack', webpackBin, ['--mode', 'development', '--watch']);
    spawnChild('server', process.execPath, [serverEntry]);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
