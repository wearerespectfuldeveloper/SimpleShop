import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

const vueLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      userId: null,
      name: null,
    }
  },
  plugins: [vueLocal.plugin],
  getters: {
    getId: state => state.user.id,
    getUserId: state => state.user.userId,
    getName: state => state.user.name
  },
  mutations: {
    login(state, payload) {
      state.user.id = payload.id;
      state.user.userId = payload.userId;
      state.user.name = payload.name;
    }
  },
  actions: {

  }
})
