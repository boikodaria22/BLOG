<template>
  <div class="main-admin-info">
    <v-container>
      <h1 class="main-admin-info-title">statistics</h1>
      <v-row class="main-statistic">
        <v-col class="main-statistic-posts">
          <h3>Posts</h3>
          <p>{{ posts.length }}</p>
        </v-col>
        <v-col class="main-statistic-users">
          <h3>Users</h3>
          <p>{{ users.length }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["posts", "users"]),
  },
  methods: {
    ...mapActions(["getPosts", "getUsers"]),
  },
  created() {
    this.getPosts();
    this.getUsers();
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/layuots/index.scss";
.main-admin-info {
  color: $baseTextLight;
  text-transform: uppercase;
  text-align: center;
  &-title {
    font-size: 30px;
    padding-bottom: 20px;
  }
  .main-statistic {
    h3 {
      font-size: 20px;
      padding-bottom: 10px;
    }
    p {
      font: italic bold 30px "Fira Sans", serif;
      border: 1px solid $baseTextLight;
      background: inherit;
      padding: 50px 20px;
      border-radius: 20px;
    }
    &-posts,
    &-users {
      background: $cardBackground;
      padding: 50px 50px;
      border-top: 1px solid $baseTextLight;
      border-bottom: 1px solid $baseTextLight;
      border-radius: 20px;
    }
    &-posts {
      margin-right: 10px;
    }
  }
}
</style>
