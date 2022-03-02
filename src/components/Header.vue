<template>
  <v-app-bar app color="white" dark class="header">
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/images/logoHeader.svg"
          transition="scale-transition"
          width="150"
        />
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <div class="sign-in-logout-route">
      <div v-if="currentUser.logIn && currentUser.password">
        <span class="header-menu-item" v-if="currentUser.logIn === admin.login"
          ><v-btn text to="/admin-panel/main">Admin Panel </v-btn></span
        >
        <span>
          <v-btn text to="/about-author">About Author </v-btn>
        </span>
        <span class="header-menu-item">
          <v-btn
            text
            to="/sign-in"
            absoluteclass="ml-5"
            @click="logoutUserAction"
            >LogOut
          </v-btn>
        </span>
      </div>
      <div v-else>
        <v-btn text to="/sign-in">
          <span class="mr-2">Sign In</span>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["currentUser", "admin"]),
  },
  methods: {
    ...mapActions(["logoutUserAction", "getAdminLoginInfo"]),
  },
  created() {
    this.getAdminLoginInfo();
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.header {
  min-height: 80px;
  padding: 10px 20px;
}
.v-btn {
  font-weight: bold;
}
</style>
