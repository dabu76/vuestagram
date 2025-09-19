<template>
  <div
    :class="`filter-item ${filter}`"
    :style="`background-image:url(${file})`"
    @click="fire(filter)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire(filtered) {
      this.emitter.emit("filtered", filtered);
    },
  },
  data() {
    return {
      text: "",
    };
  },
  props: {
    file: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
