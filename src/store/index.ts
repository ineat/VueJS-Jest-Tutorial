import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import plugins from "./plugins";
import getters from "./getters";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    heroesTeam: [],
    wickedTeam: []
  },
  getters,
  actions,
  mutations,
  plugins
});
