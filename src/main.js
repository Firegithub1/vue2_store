import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//全局函数和变量
import Global from "./Global";
Vue.use(Global);
// import { Button, Row, Input,Col } from "element-ui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// Vue.use(Input);
// Vue.use(Col);
// Vue.use(Button);
// Vue.use(Row);
import Axios from "axios";
Vue.prototype.$axios = Axios;
// 全局请求拦截器
Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 跳转error页面
    router.push({ path: "/error" });
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (res) => {
    if (res.data.code === "401") {
      // 401未登录
      // 提示没有登录
      Vue.prototype.notifyError(res.data.msg);
      store.dispatch("setShowLogin", true);
    }
    if (res.data.code === "500") {
      // 500服务器异常
      // 跳转error页面
      router.push({ path: "/error" });
    }
    return res;
  },
  (error) => {
    router.push({ path: "/error" });
    return Promise.reject(error);
  }
);
// 全局拦截器，在进入需要用户权限的页面前22校验是否已经登录
router.beforeResolve((to, from, next) => {
  const loginUser = store.state.user.user;
  // 判断路由是否设置相应校验用户权限
  if (to.meta.requireAuth) {
    if (!loginUser) {
      // 没有登录，显示登录组件
      store.dispatch("setShowLogin", true);
      if (from.name == null) {
        // 此时是在页面没有加载，直接在地址栏输入连接，进入需要登录验证的页面
        next("/");
        return;
      }
      // 中止导航
      next(false);
      return;
    }
  }
  next();
});

// 相对时间过滤器，把时间戳转换成时间
// 格式：2022-08-08 22:22:22
Vue.filter("dataFormat", (dataStr) => {
  let time = new Data(dataStr);
  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }
  let y = time.getFullYear();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  let h = time.getHours();
  let mm = time.getMinutes();
  let s = time.getSeconds();
  return (
    y +
    "-" +
    timeAdd0(m) +
    "-" +
    timeAdd0(d) +
    " " +
    timeAdd0(h) +
    ":" +
    timeAdd0(mm) +
    ":" +
    timeAdd0(s)
  );
});

//全局组件
import MyList from "./components/MyList.vue";
Vue.component(MyList.name, MyList);
import MyMenu from "./components/MyMenu.vue";
Vue.component(MyMenu.name, MyMenu);
import MyLogin from "./components/MyLogin.vue";
Vue.component(MyLogin.name, MyLogin);
import MyRegister from "./components/MyRegister.vue";
Vue.component(MyRegister.name, MyRegister);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
