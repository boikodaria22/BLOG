<template>
  <div class="start-page">
    <div class="background-opacity">
      <div class="container">
        <div class="text">
          <h1>Welcome to <span class="text-accent">Daria's BLOG</span></h1>
          <h2>Here you can post your articles for other users</h2>
          <p>
            Please,
            <v-btn text to="/sign-in" class="link-to-sign-in">sign in</v-btn> to
            your account
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/layuots/index.scss";
.start-page {
  background-image: url("../assets/images/background-start-page.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.background-opacity {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: $opacityDark;
  min-height: 100vh;
  margin: 0;
}

.text {
  background: $opacityLight;
  box-shadow: 0 0 8px 0 $baseTextLight;
  padding: 50px;
  border-radius: 30px;
  color: $baseTextDark;
}
.text-accent {
  color: rgb(255, 149, 0);
  text-shadow: -2px -2px 3px $baseTextDark;
}
h1 {
  font-size: 40px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}
h2 {
  font-size: 30px;
  padding-bottom: 20px;
}
p {
  font-size: 20px;
  .v-btn {
    text-transform: lowercase;
    letter-spacing: 0;
    font-size: 20px;
    color: rgb(255, 149, 0);
    text-shadow: -1px 0px 1px $baseTextDark;
    &:not(.v-btn--round).v-size--default {
      padding: 0 0 3px 0;
    }
  }
}
</style>
