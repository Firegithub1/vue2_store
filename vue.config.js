const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  publicPath: "./",
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://101.132.181.9:3000/",
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },

  },
});
