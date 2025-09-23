<template>
  <div v-for="item in posts" :key="item.id" class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${item.userImage})` }"
      ></div>
      <span class="profile-name">{{ item.name }}</span>
    </div>

    <div
      :class="['post-body', filtered, { liked: isLiked(item.id) }]"
      :style="{ backgroundImage: `url(${item.postImage})` }"
      @click="toggle(item.id)"
    ></div>

    <div class="post-content">
      <p>いいね {{ likeCount(item.id) }}</p>
      <p>
        <strong>{{ item.name }}</strong> {{ item.content }}
      </p>
      <p class="date">{{ item.date || "May 15" }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "PostPage",
  computed: {
    ...mapState(["filtered"]),
    ...mapGetters(["posts", "isLiked", "likeCount"]),
  },
  methods: {
    ...mapMutations(["toggleLike"]),
    toggle(id) {
      this.toggleLike(id);
    },
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.post-content {
  padding: 0 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
.liked {
  outline: 2px solid hotpink;
}
</style>
