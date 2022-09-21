import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Row, Input,Col } from "element-ui";
Vue.use(Input);
Vue.use(Col);
Vue.use(Button);
Vue.use(Row);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
