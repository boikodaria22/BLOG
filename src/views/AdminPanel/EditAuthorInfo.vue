<template>
  <div class="edit-about-author">
    <v-container>
      <h1 class="edit-title">Edit information about author</h1>
      <v-form class="edit-about-author-form">
        <v-row>
          <v-text-field
            class="input"
            v-model.trim="authorInfo.name"
            label="Name"
            :disabled="selectInput !== 'name'"
            :rules="[required('name'), maxLength('Name', 20)]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('name')">Edit</v-btn>
        </v-row>
        <v-row>
          <v-text-field
            class="input"
            v-model.trim="authorInfo.surname"
            label="Surname"
            :disabled="selectInput !== 'surname'"
            :rules="[required('surname'), maxLength('Surname', 20)]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('surname')"
            >Edit</v-btn
          >
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.phone"
            type="number"
            label="Phone"
            :disabled="selectInput !== 'phone'"
            :rules="[required('phone'), minLength('phone', 10), phoneFormat()]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('phone')"
            >Edit</v-btn
          >
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.email"
            type="email"
            label="Email"
            :disabled="selectInput !== 'email'"
            :rules="[required('email'), emailFormat()]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('email')"
            >Edit</v-btn
          >
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.gitHubUserName"
            type="text"
            label="GitHub link"
            :disabled="selectInput !== 'github'"
            :rules="[required('GitHub link')]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('github')"
            >Edit</v-btn
          >
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.telegramUserName"
            type="text"
            label="Telegram name"
            :disabled="selectInput !== 'telegram'"
            :rules="[required('telegram name')]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('telegram')"
            >Edit</v-btn
          >
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.linkedinLink"
            type="text"
            label="LinkedIn link"
            :disabled="selectInput !== 'linkedin'"
            :rules="[required('linkedIn link')]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('linkedin')"
            >Edit</v-btn
          >
        </v-row>
        <!-- <v-row>
          <v-text-field
            v-model.trim="authorInfo.location"
            type="text"
            label="Location"
            :disabled="selectInput !== 'location'"
            :rules="[required('location')]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('location')">Edit</v-btn>
        </v-row>
        <v-row>
          <v-text-field
            v-model.trim="authorInfo.bio"
            type="text"
            label="About you"
            :disabled="selectInput !== 'about'"
            :rules="[required('about you')]"
          />
          <v-btn small class="btn-edit" @click="isDisabled('about')">Edit</v-btn>
        </v-row> -->
        <div>
          <h3 class="edit-item-title">Languages</h3>
          <div class="slills-from-info">
            <span v-for="language in languagesArray" :key="language.name">
              <v-btn
                small
                class="slills-from-info-item"
                @click="editLanguageLevel(language.name)"
              >
                {{ language.name }}: "{{ language.level }}"
              </v-btn>
            </span>
          </div>
          <v-row v-if="editbleLanguageLevel">
            <v-col>
              <v-text-field v-model.trim="editbleLanguageLevel" />
            </v-col>
            <v-col>
              <v-select
                class="input"
                v-model="levelsFromSelect"
                :items="levels"
                label="Choose level"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-btn
                class="btn-edit"
                large
                @click="updateLanguageInformation(editbleLanguageLevel)"
              >
                Update level
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-show="selectInput === 'languages'">
            <v-col>
              <v-text-field
                v-model.trim="newLanguage"
                label="Create new label"
              />
            </v-col>
            <v-col>
              <v-select
                class="input"
                v-model="levelsFromSelect"
                :items="levels"
                label="Choose level"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-btn large class="btn-edit" @click="createNewLanguage()">
                Add new label
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-btn small class="btn-edit" @click="isDisabled('languages')">
              Edit
            </v-btn>
          </div>
        </div>
        <div>
          <h3 class="edit-item-title">Skills</h3>
          <div class="slills-from-info">
            <span v-for="skill in skillsArray" :key="skill.name">
              <v-btn
                small
                class="slills-from-info-item"
                @click="editSkillLevel(skill.name)"
                >{{ skill.name }}: "{{ skill.level }}"
              </v-btn>
            </span>
          </div>
          <v-row v-if="editbleSkillLevel">
            <v-col>
              <v-text-field v-model.trim="editbleSkillLevel" />
            </v-col>
            <v-col>
              <v-select
                class="input"
                v-model="levelsFromSelect"
                :items="levels"
                label="Choose level"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-btn
                large
                small
                class="btn-edit"
                @click="updateSkillInformation(editbleSkillLevel)"
              >
                Update level
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-show="selectInput === 'skills'">
            <v-col>
              <v-text-field v-model.trim="newSkill" label="Create new skill" />
            </v-col>
            <v-col>
              <v-select
                class="input"
                v-model="levelsFromSelect"
                :items="levels"
                label="Choose level"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-btn large class="btn-edit" @click="createNewSkill()">
                Add new label
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-btn small class="btn-edit" @click="isDisabled('skills')">
              Edit
            </v-btn>
          </div>
        </div>
        <div class="save-changes-btn">
          <v-btn class="btn-edit" large @click="saveInfoAboutAuthor()"
            >Save all changes</v-btn
          >
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import validations from "../../utils/validations";

export default {
  name: "EditAuthorInfo",
  data() {
    return {
      ...validations,
      selectInput: "",
      levels: [
        "Beginer",
        "Elementary",
        "Pre-intermidiate",
        "Intermidiate",
        "Upper-intermidiate",
        "Advanced",
        "Native",
      ],
      levelsFromSelect: "",
      newSkill: "",
      newLanguage: "",
      languagesArray: [],
      skillsArray: [],
      editbleLanguageLevel: "",
      editbleSkillLevel: "",
    };
  },
  computed: {
    ...mapState(["authorInfo", "authorInfoGitHub"]),
  },
  methods: {
    ...mapActions(["getAuthorInfo", "getInfoAboutAuthorFromGithub"]),
    async saveInfoAboutAuthor() {
      this.authorInfo.languages = this.languagesArray;
      this.authorInfo.skils = this.skillsArray;
      await this.$store.dispatch("editInfoAboutAuthor", this.authorInfo);
      this.$router.push("/about-author");
    },
    createNewLanguage() {
      let dublicateLanguage = this.languagesArray.find(
        (language) =>
          language.name.toLowerCase() === this.newLanguage.toLowerCase()
      );
      if (!dublicateLanguage) {
        this.languagesArray.push({
          name: this.newLanguage,
          level: this.levelsFromSelect,
        });
        return;
      }
    },
    createNewSkill() {
      let dublicateSkill = this.skillsArray.find(
        (skill) => skill.name.toLowerCase() === this.newSkill.toLowerCase()
      );
      if (!dublicateSkill) {
        this.skillsArray.push({
          name: this.newSkill,
          level: this.levelsFromSelect,
        });
      }
    },
    updateLanguageInformation(editbleLanguageLevel) {
      this.languagesArray.map((language) => {
        if (language.name === editbleLanguageLevel) {
          language.level = this.levelsFromSelect;
        }
        this.editbleLanguageLevel = "";
      });
    },
    updateSkillInformation(editbleSkillLevel) {
      this.skillsArray.map((skill) => {
        if (skill.name === editbleSkillLevel) {
          skill.level = this.levelsFromSelect;
        }
        this.editbleSkillLevel = "";
      });
    },
    editLanguageLevel(languageName) {
      if (this.editbleLanguageLevel === languageName) {
        this.editbleLanguageLevel = "";
        return;
      }
      this.editbleLanguageLevel = languageName;
      return;
    },
    editSkillLevel(skillName) {
      if (this.editbleSkillLevel === skillName) {
        this.editbleSkillLevel = "";
        return;
      }
      this.editbleSkillLevel = skillName;
      return;
    },
    isDisabled(text) {
      if (this.selectInput === text) {
        this.selectInput = "";
        return;
      }
      this.selectInput = text;
      return;
    },
    filterSkillsWithArray() {
      if (!this.authorInfo.length) {
        this.getAuthorInfo();
      }

      this.authorInfo.languages.map((language) =>
        this.languagesArray.push(language)
      );
      this.authorInfo.skils.map((skill) => this.skillsArray.push(skill));
    },
  },
  created() {
    this.getAuthorInfo(), this.getInfoAboutAuthorFromGithub();
  },
  mounted() {
    this.filterSkillsWithArray();
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/layuots/index.scss";
.edit-about-author {
  color: $baseTextLight;
  text-transform: uppercase;
  .edit-title {
    font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
  }
  &-form {
    background: $opacityLight;
    padding: 50px;
    border-top: 1px solid $baseTextLight;
    border-bottom: 1px solid $baseTextLight;
    border-radius: 20px;
  }
}
.edit-item-title {
  margin: 10px 0;
  color: #3c3c3c;
}
.slills-from-info {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0;
  &-item {
    margin: 5px 5px 10px 0;
    color: $baseTextLight;
  }
  .v-btn {
    background: $baseTextDark;
  }
}
.save-changes-btn {
  text-align: center;
  margin-top: 10px;
}
</style>
