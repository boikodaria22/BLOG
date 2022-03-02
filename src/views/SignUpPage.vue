<template>
  <div class="sign-up-container">
    <div class="sign-up-container-opacity">
      <v-container class="sign-up-page">
        <v-form v-model="valid" class="form text-center">
          <h1>Sign Up</h1>
          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="userRegistrInfo.name"
                label="Name"
                type="text"
                :rules="[required('name')]"
              />

              <v-text-field
                v-model.trim="userRegistrInfo.email"
                type="email"
                label="Email"
                :rules="[required('email'), emailFormat()]"
              />
              <v-text-field
                v-model.trim="userRegistrInfo.birthday"
                label="Birthday"
                :rules="[birthdayFormat()]"
              />
              <v-text-field
                v-model.trim="userRegistrInfo.logIn"
                type="text"
                label="Login"
                :rules="[
                  required('login'),
                  minLength('login', 8),
                  loginFormat(),
                ]"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model.trim="userRegistrInfo.surname"
                label="Surname"
                type="text"
                :rules="[required('surname')]"
              />
              <v-text-field
                v-model.trim="userRegistrInfo.phone"
                type="number"
                label="Phone"
                :rules="[
                  required('phone'),
                  minLength('phone', 10),
                  phoneFormat(),
                ]"
              />
              <v-text-field
                v-model.trim="userRegistrInfo.gender"
                label="Gender"
                type="text"
                :rules="[required('gender'), genderFormat()]"
              />
              <v-text-field
                counter
                v-model.trim="userRegistrInfo.password"
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
            </v-col>
          </v-row>
          <v-btn class="btn-edit" @click="addUser" :disabled="!valid">
            Sign Up
          </v-btn>
        </v-form>
        <Snackbar v-if="errorMessage.length" :text="errorMessage" />
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
      userRegistrInfo: {
        name: "",
        surname: "",
        email: "",
        phone: null,
        birthday: null,
        gender: "",
        logIn: "",
        password: "",
      },
      showPassword: false,
      ...validations,
      errorMessage: "",
      valid: false,
    };
  },
  computed: {
    ...mapState(["users", "admin"]),
  },
  methods: {
    ...mapActions(["getUsers", "registrUser", "getAdminLoginInfo"]),
    addUser() {
      let user = this.users.find(
        (user) => user.logIn === this.userRegistrInfo.logIn
      );
      if (!user && this.admin.login !== this.userRegistrInfo.logIn) {
        this.registrUser(this.userRegistrInfo).catch(() =>
          console.log("Warning")
        );
        this.$router.push({ path: "/" });
        return;
      }
      this.errorMessage = "This login exist!";
    },
  },
  created() {
    this.getUsers();
    this.getAdminLoginInfo();
  },
};
</script>
<style scoped lang="scss">
@import "../assets/layuots/index.scss";
.sign-up-container {
  background: url("../assets/images/background-sign-in.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.sign-up-container-opacity {
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
  height: 600px;
  width: 900px;
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
  .btn-edit{
    margin-top:50px ;
  }
}
</style>
