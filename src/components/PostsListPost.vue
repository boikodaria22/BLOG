<template>
  <v-row>
    <v-card
      elevation="3"
      outlined
      shaped
      class="post-list mr-10 mb-10 ml-10 pt-10 pl-10 pr-10 pb-10"
    >
      <div class="content">
        <h2 class="post-title mb-3 text-center">{{ post.title }}</h2>
        <p class="post-text text-justify">{{ post.body | preview }}</p>
      </div>
      <span
        class="post-label mr-2"
        v-for="(item, index) of post.lablesList"
        :key="index"
      >
        <router-link
          :to="{ name: 'Label', params: { label: item.toLowerCase() } }"
        >
          <v-btn elevation="0" small>{{ getLabels(item) }} </v-btn>
        </router-link>
      </span>
      <div class="btn-read-more mt-7">
        <router-link :to="{ name: 'PostWatch', params: { id: post.id } }">
          <v-btn elevation="5" large>Read More</v-btn>
        </router-link>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PostsListPost",
  data() {
    return {};
  },
  components: {},
  filters: {
    preview(text) {
      return text && text.split(" ").slice(0, 60).join(" ").concat("...");
    },
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    posts: {
      type: Array,
      default: () => [],
    },
    labels: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    ...mapActions(["getAdminLoginInfo"]),
    getLabels(item) {
      return this.labels.find((label) => label === item);
    },
  },

  created() {
    this.getAdminLoginInfo();
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.post-title {
  padding-top: 30px;
}
</style>
