import { createStore } from "vuex";
import raw from "@/assets/data.js";
import axios from "axios";

const withIds = raw.map((it, idx) => ({
  ...it,
  id: idx + 1,
  liked: !!it.liked,
}));

export default createStore({
  state() {
    return {
      posts: withIds,
      filtered: "",
      more: {},
    };
  },
  getters: {
    posts: (s) => s.posts,
    isLiked: (s) => (id) => s.posts.find((p) => p.id === id)?.liked ?? false,
    likeCount: (s) => (id) => {
      const p = s.posts.find((p) => p.id === id);
      return p ? p.likes : 0;
    },
  },
  mutations: {
    setMore(state, data) {
      state.more = { data };
    },
    setFilter(s, f) {
      s.filtered = f;
    },
    toggleLike(s, id) {
      s.posts = s.posts.map((p) => {
        if (p.id !== id) return p;
        const nextLiked = !p.liked;
        const delta = nextLiked ? 1 : -1;
        return { ...p, liked: nextLiked, likes: p.likes + delta };
      });
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        context.commit("setMore", a.data);
      });
    },
  },
});
