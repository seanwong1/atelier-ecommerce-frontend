const { copyPublicAssets, resetDistDir, runWebpack } = require('./lib/client-build');

(async () => {
  try {
    resetDistDir();
    await runWebpack({
      mode: process.env.WEBPACK_MODE || 'production',
      env: process.env,
    });
    copyPublicAssets();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
