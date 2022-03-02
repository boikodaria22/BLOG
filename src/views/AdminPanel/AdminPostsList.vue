<template>
  <div class="admin-posts-list">
    <v-container>
      <h1 class="text-center admin-posts-list-title">Article List</h1>
      <div class="title-bg-main" v-for="post in posts" :key="post.id">
        <v-row class="title-bg">
          <v-col cols="8" class="title-bg-child">
            <h6 class="title">{{ post.title | preview }}</h6>
          </v-col>
          <v-col cols="4" class="text-right d-flex align-center">
            <div>
              <router-link
                :to="{ name: 'AdminPostsEdit', params: { id: post.id } }"
              >
                <v-btn small class="btn-edit"> Edit </v-btn>
              </router-link>
              <v-btn small class="btn-delete" @click="deletePost(post)">
                Delete
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AdminPostsList",
  computed: {
    ...mapState(["posts"]),
  },
  filters: {
    preview(text) {
      return text && text.slice(0, 50) + "...";
    },
  },
  methods: {
    ...mapActions(["getPosts"]),
    deletePost(post) {
      let response = confirm(
        `Are you sure you want to delete article: "${post.title}"`
      );
      if (response) {
        this.$store
          .dispatch("deletePost", post)
          .catch(() => console.log("Warning"));
      }
      return;
    },
  },
  created() {
    if (!this.posts.length) {
      this.getPosts();
    }
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/layuots/index.scss";
.admin-posts-list {
  color: white;
  &-title {
    text-transform: uppercase;
    padding-bottom: 20px;
  }
}
.title {
  padding: 0 10px;
  margin-top: 10px;
}
.title-bg-main:nth-child(even) {
  .title-bg {
    .title-bg-child {
      .title {
        background: $cardBackground;
        border-radius: 5px;
      }
    }
  }
}
</style>
