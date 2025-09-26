<template>
  <div style="padding: 10px">
    <h4>follower</h4>
    <input placeholder="?" />
    <div v-for="follower in follower" :key="follower.id" class="post-header">
      <div
        :style="{ backgroundImage: `url(${follower.image})` }"
        class="profile"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
};
</script>

<style></style>
