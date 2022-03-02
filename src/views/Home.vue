<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="2" sm="3" md="3">
          <Sidebar :labels="labels" :nameMenu="nameMenu" />
        </v-col>
        <v-col>
          <div v-for="post in posts" :key="post.id">
            <PostsListPost :post="post" :labels="labels" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostsListPost from "../components/PostsListPost";
import Sidebar from "../components/Sidebar";

export default {
  name: "Home",
  data: () => ({
    nameMenu: "Topics",
  }),
  components: {
    PostsListPost,
    Sidebar,
  },
  computed: {
    ...mapState(["posts", "labels"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
  created() {
    this.getPosts();
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.home {
  padding-top: 50px;
  background-image: url("../assets/images/background-blog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
