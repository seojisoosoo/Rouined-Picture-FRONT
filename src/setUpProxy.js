const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/todo",
    createProxyMiddleware({
      target: "https://rouined-photo-exhibition.herokuapp.com",
      changeOrigin: true,
    })
  );
};
