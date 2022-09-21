const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
  },
});
