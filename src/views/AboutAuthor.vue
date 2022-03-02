<template>
  <div class="about-author">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <img :src="authorInfoGitHub.avatar_url" class="photo_author" />
        </v-col>
        <v-col class="contact-info text-left">
          <h2 class="author-name">
            {{ authorInfo.name }} {{ authorInfo.surname }}
          </h2>
          <p class="info-title">
            Phone:
            <a :href="`tel:${authorInfo.phone}`" target="_blank">{{
              authorInfo.phone
            }}</a>
          </p>
          <p class="info-title">
            Email:
            <a :href="`mailto:${authorInfo.email}`" target="_blank">{{
              authorInfo.email
            }}</a>
          </p>
          <p class="info-title">
            Telegram:
            <a
              :href="`https://t.me/${authorInfo.telegramUserName}`"
              target="_blank"
              >@{{ authorInfo.telegramUserName }}</a
            >
          </p>
          <p class="info-title">
            GitHub:
            <a
              :href="`https://github.com/${authorInfo.gitHubUserName}`"
              target="_blank"
              >{{ authorInfo.gitHubUserName }}</a
            >
          </p>
          <p class="info-title">
            LinkedIn:
            <a :href="authorInfo.linkedinLink" target="_blank">Dasha</a>
          </p>
          <p class="info-title">Location: {{ authorInfoGitHub.location }}</p>
        </v-col>
      </v-row>
      <div class="author-info">
        <div>
          <h3 class="author-info-title">About me</h3>
          <p class="author-info-bio">{{ authorInfoGitHub.bio }}</p>
        </div>
        <div>
          <h3 class="author-info-title">Languages</h3>
          <v-row>
            <v-col
              v-for="language in authorInfo.languages"
              :key="language.name"
            >
              <div class="author-info-card">
                <h4>{{ language.name }}</h4>
                <p>Level: {{ language.level }}</p>
              </div>
            </v-col>
          </v-row>
        </div>
        <div>
          <h3 class="author-info-title">Skills</h3>
          <v-row>
            <v-col v-for="skill in authorInfo.skils" :key="skill.name">
              <div class="author-info-card">
                <h4>{{ skill.name }}</h4>
                <p>Level: {{ skill.level }}</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["authorInfo", "authorInfoGitHub", "currentUser", "admin"]),
  },
  methods: {
    ...mapActions(["getAuthorInfo", "getInfoAboutAuthorFromGithub"]),
  },
  created() {
    this.getAuthorInfo(), this.getInfoAboutAuthorFromGithub();
  },
};
</script>
<style lang="scss">
@import "../assets/layuots/index.scss";
.about-author {
  background-image: url("../assets/images/background-admin-panel-and-about-author.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
