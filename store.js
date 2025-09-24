import { createStore } from "vuex";
import axios from "axios";
import raw from "@/assets/data.js";

const withIds = (Array.isArray(raw) ? raw : []).map((it, idx) => ({
  ...it,
  id: idx + 1,
  liked: !!it.liked,
}));

export default createStore({
  state() {
    return {
      name: "kim",
      age: 20,

      posts: withIds,
      filtered: "",
      more: [],
    };
  },

  getters: {
    posts: (s) => s.posts,
    filtered: (s) => s.filtered,
    more: (s) => s.more,

    isLiked: (s) => (id) => s.posts.find((p) => p.id === id)?.liked ?? false,

    likeCount: (s) => (id) => s.posts.find((p) => p.id === id)?.likes ?? 0,
  },

  mutations: {
    nameChange(state) {
      state.name = "park";
    },
    ageChange(state) {
      state.age++;
    },

    setMore(state, payload) {
      state.more = Array.isArray(payload) ? payload : [payload];
    },

    setFilter(state, filter) {
      state.filtered = filter;
    },

    toggleLike(state, id) {
      state.posts = state.posts.map((p) => {
        if (p.id !== id) return p;
        const nextLiked = !p.liked;
        const delta = nextLiked ? 1 : -1;
        return { ...p, liked: nextLiked, likes: p.likes + delta };
      });
    },

    unshiftPost(state, post) {
      state.posts = [post, ...state.posts];
    },
  },

  actions: {
    async getData({ commit }) {
      const { data } = await axios.get(
        "https://codingapple1.github.io/vue/more0.json"
      );
      commit("setMore", data);
    },
  },
});
