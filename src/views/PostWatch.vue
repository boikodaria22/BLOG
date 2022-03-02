<template>
  <div class="one-post">
    <v-container class="text-center">
      <div class="content">
        <v-btn
          text
          v-if="currentUser.logIn === admin.login"
          :to="{ name: 'AdminPostsEdit', params: { id: post.id } }"
          class="admin-edit-post-btn"
        >
          <img src="../assets/images/edit.svg"
        /></v-btn>
        <h1 class="pb-10 text-uppercase article-title">{{ post.title }}</h1>
        <p class="text-justify">{{ post.body }}</p>

        <div class="text-left">
          <span
            class="post-label"
            v-for="(item, index) of post.lablesList"
            :key="index"
          >
            <router-link
              :to="{ name: 'Label', params: { label: item.toLowerCase() } }"
            >
              <v-btn elevation="0" class="mr-5" large
                >{{ getLabels(item) }}
              </v-btn>
            </router-link>
          </span>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  components: {},
  computed: {
    ...mapState(["posts", "labels", "currentUser", "admin"]),
    post() {
      return this.posts.find(
        (post) => post.id === Number(this.$route.params.id)
      );
    },
  },
  methods: {
    getLabels(item) {
      return this.labels.find((label) => label == item);
    },
  },
  created() {},
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.admin-edit-post-btn {
  background: $baseButtonBackground;
  position: absolute;
  top: 20px;
  right: 20px;
}
.v-btn.admin-edit-post-btn {
  padding: 0;
  height: 50px;
}
.content {
  position: relative;
}
.article-title {
  margin-top: 50px;
}
.one-post {
  padding-top: 50px;
  background-image: url("../assets/images/background-blog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
