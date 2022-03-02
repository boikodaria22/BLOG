<template>
  <div>
    <v-footer color="rgb(255, 149, 0)" dark>
      <v-card class="flex" flat tile color="orange">
        <v-card-title>
          <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              contain
              src="../assets/images/logoFooter.svg"
              transition="scale-transition"
              width="150"
              class="mr-10"
            />
          </router-link>
          <strong>Get connected with me on social networks!</strong>

          <v-spacer></v-spacer>
          <span class="align-end">
            <a
              :href="authorInfo.facebookLink"
              target="_blank"
              class="social-link"
            >
              <v-icon size="24px">
                {{ icons[0] }}
              </v-icon>
            </a>
            <a
              :href="`https://github.com/${authorInfo.gitHubUserName}`"
              target="_blank"
              class="social-link"
            >
              <v-icon size="24px">
                {{ icons[1] }}
              </v-icon>
            </a>
            <a
              :href="authorInfo.linkedinLink"
              target="_blank"
              class="social-link"
            >
              <v-icon size="24px">
                {{ icons[2] }}
              </v-icon>
            </a>
            <a
              :href="`https://t.me/${authorInfo.telegramUserName}`"
              target="_blank"
              class="social-link"
            >
              <img
                style="vertical-align: middle"
                src="../assets/images/telegram.svg"
              />
            </a>
          </span>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Boiko Daria</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-github", "mdi-linkedin"],
  }),
  computed: {
    ...mapState(["authorInfo"]),
  },
  methods: {
    ...mapActions(["getAuthorInfo"]),
  },
  created() {
    this.getAuthorInfo();
  },
};
</script>
<style scoped>
.social-link {
  margin-left: 5px;
}
</style>
