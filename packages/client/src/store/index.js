import Vue from "vue";
import Vuex from "vuex";
import { FETCH_POSTS } from "./action_types";
import { UPDATE_LOADING, UPDATE_POSTS, UPDATE_FAIL } from "./mutation_types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    fail: false,
    posts: [],
  },
  getters: {
    getPost: (state) => (id) => state.posts.find((post) => post.id === id),
    hasPosts: (state) => state.posts.length !== 0,
  },
  mutations: {
    [UPDATE_POSTS](state, posts) {
      state.posts = posts;
    },
    [UPDATE_FAIL](state, fail) {
      state.fail = fail;
    },
    [UPDATE_LOADING](state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    [FETCH_POSTS]({ commit }) {
      commit(UPDATE_LOADING, true);
      commit(UPDATE_FAIL, false);

      fetch(process.env.VUE_APP_POSTS_URL, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then(
          (posts) => {
            commit(UPDATE_LOADING, false);
            commit(UPDATE_POSTS, posts);
          },
          () => {
            commit(UPDATE_LOADING, false);
            commit(UPDATE_FAIL, true);
          }
        );
    },
  },
  modules: {},
});
