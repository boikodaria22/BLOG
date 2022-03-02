<template>
  <div class="snack-bar">
    <v-snackbar
      :timeout="2000"
      :value="true"
      absolute
      centered
      rounded="pill"
      color="red accent-2"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "Snackbar",
  props: ["text"],
};
</script>
<style scoped lang="scss">
.snack-bar {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 5;
}
</style>
