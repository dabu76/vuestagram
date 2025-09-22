import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      like: 0,
      likeCheck: false,
    };
  },
  mutations: {
    nameChange(state) {
      state.name = "park";
    },
    ageChange(state) {
      state.age++;
    },
    likePlus(state) {
      if (state.likeCheck === false) {
        state.like++;
        state.likeCheck = true;
      } else if (state.likeCheck === true) {
        state.like--;
        state.likeCheck = false;
      }
    },
  },
});

export default store;
