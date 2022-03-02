<template>
  <v-form class="form" v-model="valid">
    <v-text-field
      class="input"
      v-model="post.title"
      label="Article title"
      counter="100"
      :rules="[
        required('title'),
        minLength('Title', 10),
        maxLength('Title', 100),
      ]"
    />
    <v-textarea
      class="input"
      v-model="post.body"
      label="Article text"
      counter="true"
      :rules="[required('text'), minLength('Article text', 100)]"
    />

    <div class="artical-labels-show">
      <h5>Artical labels</h5>
      <span class="post-label mr-2" v-for="label in labelsForShow" :key="label"
        ><v-btn>{{ label }}</v-btn
        ><span class="close-btn" @click="removeLabel(label)">x</span></span
      >
    </div>

    <v-row :class="[error ? 'messageError' : '']" class="add-label-box">
      <v-col cols="4">
        <v-select
          class="input"
          @focus="checkLabels()"
          v-model="labelFromSelect"
          :items="labels"
          label="Choose label from existing"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4" class="text-center">
        <v-text-field
          class="input"
          v-model="newLabel"
          label="Create new label"
          @focus="checkLabels()"
        />
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn large class="add-label-btn" @click="addLabel()"
          >Add new label</v-btn
        >
      </v-col>
    </v-row>
    <v-btn
      large
      :disabled="!valid"
      @click="savePost()"
      class="go-to-post-btn ready-to-post"
    >
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import validations from "../utils/validations";
export default {
  data() {
    return {
      error: false,
      labelFromSelect: "",
      newLabel: "",
      valid: false,
      ...validations,
    };
  },
  computed: {
    ...mapState(["posts", "labels"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    checkLabels() {
      if (!this.labelsForShow.length) {
        this.error = true;
        return;
      }
      this.error = false;
      return;
    },
    addLabel() {
      this.post.lablesList = this.labelsForShow;
      if (
        this.newLabel.length &&
        this.labelsForShow.indexOf(this.newLabel) < 0
      ) {
        this.labelsForShow.push(this.newLabel);
        this.newLabel = "";
      }
      if (
        this.labelsForShow.indexOf(this.labelFromSelect) < 0 &&
        this.labelFromSelect.length
      ) {
        this.labelsForShow.push(this.labelFromSelect);
      }
      this.checkLabels();
    },
    removeLabel(label) {
      this.labelsForShow.splice(this.labelsForShow.indexOf(label), 1);
      this.post.lablesList.splice(this.post.lablesList.indexOf(label), 1);
    },
  },
  props: ["post", "savePost", "buttonText", "labelsForShow"],
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.add-label-box {
  margin: 120px 0;
}
.form {
  padding: 20px;
}
.messageError {
  border: 1px solid red;
  border-radius: 5px;
  &::before {
    content: "Choose label";
    color: red;
    width: 100%;
    font-size: 12px;
    font-weight: 300;
    padding: 5px;
  }
}
</style>
