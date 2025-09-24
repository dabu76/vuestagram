<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">発行</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <h4>Hi {{ name }} {{ $store.state.age }}</h4>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">もっと見る</button>

  <button @click="$store.commit('nameChange')">change</button>
  <button @click="$store.commit('ageChange')">change</button>

  <Container
    :insData="insData"
    :step="step"
    :file="file"
    :filtered="filtered"
    @send="postText = $event"
  />
  <button @click="more">詳しく見る</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <!-- <div v-if="step == 1">内容</div>

  <div v-if="step == 2">内容2</div>
  <div v-if="step == 3">内容3</div>
  <button @click="show(1)">ボタン1</button>
  <button @click="show(2)">ボタン2</button>
  <button @click="show(3)">ボタン3</button> -->
  <!-- <p>{{ now2 }}{{ counter }}</p>
  <button @click="counter++">ボタン</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/data";
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      insData: data,
      count: 0,
      step: 0,
      file: "",
      postText: "",
      filtered: "",
      counter: 0,
    };
  },
  components: {
    Container,
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(["name", "age", "likes"]),
    ...mapState({ 作名: "name" }),
  },
  mounted() {
    this.emitter.on("filtered", (filtered) => {
      this.filtered = filtered;
    });
  },
  methods: {
    ...mapMutations(["setMore", "いいね"]),
    now() {
      return new Date();
    },
    // show(a) {
    //   this.step = a;
    // },
    upload(e) {
      const files = e.target.files;
      if (!files || !files.length) return;
      const blob = files[0];
      this.file = URL.createObjectURL(blob);
      this.step++;
    },
    more() {
      if (this.count < 1) {
        axios
          .get("https://codingapple1.github.io/vue/more0.json")
          .then((result) => {
            this.insData.push(result.data);
            this.count = 1;
          });
      } else {
        axios
          .get("https://codingapple1.github.io/vue/more1.json")
          .then((result) => {
            this.insData.push(result.data);
            this.count = 1;
          });
      }
    },
    publish() {
      const content = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.file,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.postText,
        filter: "",
      };
      this.insData.unshift(content);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.block {
  display: none;
}
.show {
  display: block;
}
</style>
