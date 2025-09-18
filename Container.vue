<template>
  <div>
    <Post v-if="step === 0" :insData="insData" />
    <div v-if="step === 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${file})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filterName in filters"
          :key="filterName"
          :file="file"
          :filter="filterName"
        >
          <span>{{ filterName }}</span>
        </FilterBox>
      </div>
    </div>
    <div v-if="step === 2">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${file})` }"
      ></div>
      <div class="write">
        <textarea v-model="text" @input="$emit('send', text)" class="write-box">
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "ContainerPage",
  data() {
    return {
      text: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  methods: {
    send() {
      this.$emit("send", this.text);
    },
  },
  props: {
    insData: Array,
    step: Number,
    file: String,
  },
  components: {
    FilterBox,
    Post,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
