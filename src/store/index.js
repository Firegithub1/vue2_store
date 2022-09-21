import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const user = {
  namespaced:true,
  actions: {
    add(content, value) {
      console.log("add Action!");
      content.commit("ADD", value);
    },
  },
  mutations: {
    ADD(state, value) {
      state.userList.unshift(value);
    },
  },
  state: {
    userList: [
      { name: "admin", id: "admin01", pwd: "admin", isAuth: 666 },
      { name: "张三", id: "user001", pwd: "123456" },
    ],
  },
  getters: {},
};
export default new Vuex.Store({
  modules: { user },
});
