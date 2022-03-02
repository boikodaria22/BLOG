<template>
  <div class="create-or-edit-post">
    <h1 class="create-or-edit-post-title">Create new Article</h1>
    <v-container class="create-or-edit-post-container">
      <PostEditForm
        :post="post"
        :savePost="createPost"
        :labelsForShow="labelsForShow"
        buttonText="Create Post"
      />
      <SnackBar v-if="snackbar.length" :text="snackbar" />
    </v-container>
  </div>
</template>
<script>
import PostEditForm from "../../components/PostEditForm.vue";
import SnackBar from "../../components/SnackBar.vue";

import { mapState } from "vuex";
export default {
  data() {
    return {
      snackbar: "",
      post: {},
      labelFromSelect: "",
      newLabel: "",
      labelsForShow: [],
    };
  },
  components: {
    PostEditForm,
    SnackBar,
  },
  computed: {
    ...mapState(["posts", "labels"]),
  },
  methods: {
    async createPost() {
      if (this.labelsForShow.length) {
        await this.$store.dispatch("createPost", this.post);
        this.$router.push("/");
        return;
      }
      this.snackbar = "Please,fill in all the fields";
    },
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
