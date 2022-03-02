<template>
  <div class="label-list">
    <div class="post-block">
      <v-container fluid>
        <v-row>
          <v-col cols="2" sm="3" md="3">
            <aside class="aside topics-nav">
              <h3 class="aside-title">Topics</h3>
              <router-link to="/">
                <div class="aside-topics"><v-btn text>All</v-btn></div>
              </router-link>
              <div class="post-label" v-for="label in labels" :key="label">
                <router-link
                  :to="{
                    name: 'Label',
                    params: { label: label.toLowerCase() },
                  }"
                >
                  <div class="aside-topics">
                    <v-btn text>{{ label }}</v-btn>
                  </div>
                </router-link>
              </div>
            </aside>
          </v-col>
          <v-col>
            <main>
              <div v-for="post in postOnLabel" :key="post.id">
                <PostsListPost :post="post" :labels="labels" />
              </div>
            </main>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import PostsListPost from "../components/PostsListPost.vue";

export default {
  data: () => ({
    labelName: "",
  }),
  components: {
    PostsListPost,
  },
  computed: {
    ...mapState(["posts", "labels"]),
    getLabel() {
      let label = this.$route.params.label;
      return this.labels.find((item) => item.toLowerCase() === label);
    },
    postOnLabel() {
      return this.posts.filter((post) =>
        post.lablesList.includes(this.getLabel)
      );
    },
  },
  methods: {
    ...mapActions(["getPosts"]),
    getActiveClass(label) {
      return (this.labelName = label);
    },
  },
  created() {
    this.getPosts().catch(() => console.log("Warning"));
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.label-list {
  padding-top: 50px;
  padding-top: 50px;
  background-image: url("../assets/images/background-blog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
.v-btn {
  color: $baseTextLight;
}
</style>
