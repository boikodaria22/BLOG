<template>
  <div class="admin-panel">
    <v-container>
      <v-row>
        <v-col cols="2" sm="3" md="3" class="pt-10 mt-10">
          <aside>
            <div>
              <v-btn text to="/admin-panel/main" class="admin-menu-link"
                >Main
              </v-btn>
            </div>
            <div>
              <v-btn text class="admin-menu-link" to="/admin-panel/posts"
                >Posts
              </v-btn>
            </div>
            <div>
              <v-btn
                text
                class="admin-menu-link"
                to="/admin-panel/edit-author-info"
              >
                Edit author info
              </v-btn>
            </div>
            <div>
              <v-btn
                text
                class="admin-menu-link"
                to="/admin-panel/posts/add-post"
              >
                Add new Post</v-btn
              >
            </div>
          </aside>
        </v-col>
        <v-col cols="10" sm="9" md="9">
          <v-main>
            <router-view></router-view>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      activeLink: "",
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/layuots/index.scss";
.admin-panel {
  background-image: url("../../assets/images/background-admin-panel-and-about-author.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  .admin-menu-link {
    color: $baseTextLight;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px;
  }
}
</style>
