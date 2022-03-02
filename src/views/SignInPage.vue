<template>
  <div class="sign-in-container">
    <div class="sign-in-container-opacity">
      <v-container>
        <v-form v-model="valid" class="form">
          <h1>Sign In</h1>
          <v-text-field
            v-model="userInfo.logIn"
            label="Login"
            :rules="[required('login'), minLength('login', 8), loginFormat()]"
          />
          <v-text-field
            counter
            v-model="userInfo.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="[
              required('password'),
              minLength('password', 8),
              passwordFormat(),
            ]"
          />

          <v-btn class="btn-edit" @click="checkLogin()" :disabled="!valid">
            Sign In
          </v-btn>
          <span
            ><p>
              Not registered yet?
              <v-btn to="/sign-up" text class="link-to-sign-up"
                >Register now
              </v-btn>
            </p>
          </span>
        </v-form>
        <Snackbar v-if="errorMessage.length" :text="errorMessage" />
        <Snackbar
          v-if="warningMessage.length && !errorMessage.length"
          :text="warningMessage"
        />
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import validations from "../utils/validations";
import Snackbar from "../components/SnackBar.vue";

export default {
  components: {
    Snackbar,
  },

  data() {
    return {
      userInfo: {
        logIn: "",
        password: "",
      },
      showPassword: false,
      ...validations,
      errorMessage: "",
      warningMessage: "",
      valid: false,
    };
  },
  computed: {
    ...mapState(["users", "admin"]),
  },
  methods: {
    ...mapActions(["getUsers", "loginUser", "getAdminLoginInfo"]),
    check() {
      let user = this.users.find((user) => user.logIn === this.userInfo.logIn);
      if (user) {
        if (user.password === this.userInfo.password) {
          this.loginUser(this.userInfo);
          console.log("great");
          this.$router.push({ path: "/" });
          return;
        }
        this.warningMessage = "This password doesn't exist!";
        return;
      }
      if (this.admin.login === this.userInfo.logIn) {
        if (this.admin.password === this.userInfo.password) {
          console.log("great");
          this.loginUser(this.userInfo);
          this.$router.push({ path: "/" });
          return;
        }
        this.warningMessage = "This password doesn't exist!";
        return;
      }
      if (!user && this.admin.login !== this.userInfo.logIn) {
        this.errorMessage = "This login doesn't exist!";
        return;
      }
    },
    async checkLogin() {
      await this.getUsers(), await this.getAdminLoginInfo(), await this.check();
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.sign-in-container {
  background: url("../assets/images/background-sign-in.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.sign-in-container-opacity {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: $opacityDark;
  min-height: 100vh;
  margin: 0;
}
.form {
  align-items: center;
  text-align: center;
  background-color: $baseTextLight;
  padding: 5vh;
  border-radius: 30px;
  box-shadow: 0 0 8px 0 $baseTextLight;
  height: 500px;
  width: 800px;
  text-align: center;
  background-color: $opacityLight;
  margin: 0 auto;
  h1 {
    font-size: 40px;
    padding-bottom: 10px;
    text-transform: uppercase;
    font-weight: 700;
    color:$baseTextDark;
  }
}
.v-btn {
  margin: 20px 0;
  &.link-to-sign-up {
    color: $baseButtonBackground;
    letter-spacing: 0;
    padding: 0 0 3px 0;
  }
}
</style>
