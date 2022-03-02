<template>
  <div class="not-found-page">
    <div class="not-found-text">
      <img src="../assets/images/404.svg" />
      <h1 class="not-found-page__title">Not Found Page</h1>
      <p class="not-found-page__decription">
        The page you're looking for doesn't exist
      </p>
      <router-link class="not-found-page__link" to="/">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>
<style lang="scss" scoped>
@import "../assets/layuots/index.scss";
.not-found-page {
  background-image: url("../assets/images/background-sign-in.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.not-found-text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: $opacityLight;
  min-height: 100vh;
  margin: 0;
  color: rgba(69, 62, 62, 0.875);
}
img {
  width: 400px;
  height: 400px;
}
h1 {
  margin-top: -50px;
}
p {
  margin-top: 20px;
}
a {
  background: $baseButtonBackground;
  border-radius: 50px;
  padding: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 8px 0 $opacityDark;
  margin-top: 30px;
  &:hover {
    background: $opacityDark;
  }
}
</style>
