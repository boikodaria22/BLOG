<template>
  <div>
    <aside class="aside topics-nav">
      <h3 class="aside-title">{{ nameMenu }}</h3>
      <router-link to="/">
        <div class="aside-topics"><v-btn text>All</v-btn></div>
      </router-link>
      <div v-for="label in labels" :key="label">
        <router-link
          :to="{ name: 'Label', params: { label: label.toLowerCase() } }"
        >
          <div class="aside-topics">
            <v-btn text>{{ label }}</v-btn>
          </div>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      labelName: "",
    };
  },
  props: ["labels", "nameMenu"],
  methods: {
    getActiveClass(label) {
      this.labelName = label;
    },
  },
};
</script>
<style scoped>
.v-btn {
  color: #fff;
}
</style>
