<template>
  <div>
    <Post :insData="insData" />
    <Post :insData="insData" />
    <Post :insData="insData" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "ContainerPage",
  props: {
    insData: Object,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
