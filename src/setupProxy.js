const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/settings/api/v2',
    createProxyMiddleware({
      target: 'http://purple-job-papis.dev.onkakao.net',
      changeOrigin: true,
      logLevel: 'debug',
      onError(err) {
        console.error('Suppressing WDS proxy upgrade error:', err);
      },
    }),
  );
};
