import { createStore } from "vuex";
import data from "@/db/db.json";
const db = {
  namespaced: true,
  state: {
    data,
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getDataByID: (state, getters) => (father, child) => {
      return getters.getData[father]["children"][child];
    },
  },
};

let count = {
  namespaced: true,
  state: { fathers_children: {}, fathers_score: {} },
  getters: {},
  mutations: {
    SET_SCORE(state, data) {
      if (state.fathers_children[data.father_id] == null) {
        state.fathers_children[data.father_id] = {};
      }
      if (state.fathers_children[data.father_id][data.new_id] == null) {
        state.fathers_children[data.father_id][data.new_id] = {};
      }
      delete state.fathers_children[data.father_id][data.old_id];
      state.fathers_children[data.father_id][data.new_id] = data.score;
    },
    SET_SUM_SCORE(state, data) {
      let num = 0,
        prxy = state.fathers_children[data.father_id];
      for (let key in prxy) {
        num += prxy[key];
      }
      state.fathers_score[data.father_id] = num;
    },
  },
  actions: {
    setScore({ commit }, data) {
      commit("SET_SCORE", data);
      commit("SET_SUM_SCORE", data);
    },
  },
};

export default createStore({
  modules: {
    count,
    db,
  },
});
