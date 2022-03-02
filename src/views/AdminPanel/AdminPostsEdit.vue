<template>
  <div class="create-or-edit-post">
    <h1 class="create-or-edit-post-title">Edit Article</h1>
    <v-container class="create-or-edit-post-container">
      <PostEditForm
        :savePost="savePost"
        :post="post"
        buttonText="Save Post"
        :labelsForShow="labelsForShow"
      />
      <SnackBar v-if="snackbar.length" :text="snackbar" />
    </v-container>
  </div>
</template>
<script>
import PostEditForm from "../../components/PostEditForm.vue";
import SnackBar from "../../components/SnackBar.vue";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    snackbar: "",
    labelsForShow: [],
  }),
  components: {
    PostEditForm,
    SnackBar,
  },
  computed: {
    ...mapState(["posts"]),
    post() {
      return this.posts.find((item) => item.id == this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(["getPosts"]),
    getPostInfo() {
      this.post.lablesList.forEach((label) => {
        if (this.post.lablesList.length) {
          this.labelsForShow.push(label);
        }
      });
    },
    async savePost() {
      if (this.labelsForShow.length) {
        await this.$store.dispatch("editPost", this.post);
        this.$router.push("/");
        return;
      }
      this.snackbar = "Please,fill in all the fields";
    },
  },
  created() {},
  mounted() {
    this.getPostInfo();
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/layuots/index.scss";
.create-or-edit-post {
  background-image: url("../../assets/images/background-blog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
