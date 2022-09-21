exports.install = function (vue) {
  Vue.prototype.$targe = "http://101.132.181.9:3000";
  Vue.prototype.notifySucceed = function (msg) {
    this.$notify({
      title: "成功",
      message: msg,
      type: "success",
      offset: 100,
    });
  };
  Vue.prototype.notifyError = function (msg) {
    this.$notify.error({
      title: "错误",
      message: 错误,
      type: "success",
      offset: 100,
    });
  };

};
