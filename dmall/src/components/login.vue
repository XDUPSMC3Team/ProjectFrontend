<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    onSuccess: Function,
    onFail: {
      type: Function,
      default: (err) => {
        window.console.log(err);
      },
    },
  },
  computed: {
    btnCanInput: {
      get() {
        return this.$store.state.login.btnCanInput;
      },
    },
    username: {
      get() {
        return this.$store.state.login.username;
      },
      set(value) {
        this.$store.commit('LoginUpdateUsername', value);
      },
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(value) {
        this.$store.commit('LoginUpdatePassword', value);
      },
    },
    role: {
      get() {
        return this.$store.state.login.role;
      },
      set(value) {
        this.$store.commit('LoginUpdateRole', value);
      },
    },
  },
  created() {
  },
  mounted() {},
  methods: {
    chooseRole(val) {
      this.$info(val);
    },
    forgetPwd() {
      this.$infoN('COMMING SOON!', 'Will Be Released Next Time!');
    },
    clickLogin() {
      // Vuex here
      this.$store.dispatch('loginClick')
        .then((data) => {
          this.onSuccess(data);
        })
        .catch((err) => { // err: {msg, code}
          this.onFail(err);
        });
    },
  },
};
</script>

<template>
<div class="loginComponent p30">
  <el-radio-group v-model="role" @change="chooseRole" class="mb20">
    <el-radio label="customer">customer</el-radio>
    <el-radio label="seller">seller</el-radio>
    <el-radio label="admin">admin</el-radio>
  </el-radio-group>
  <div class="rowMidBox">
    <span class="t2 l3 c1 mb5">User</span>
    <el-input :disabled="!btnCanInput" placeholder="username/email"
    class="mb10" suffix-icon="el-icon-message" v-model="username">
    </el-input>

    <span class="t2 l3 c1 mb5">Password</span>
    <el-input :disabled="!btnCanInput" type="password" placeholder="password"
    class="mb10" suffix-icon="el-icon-star-on" v-model="password">
    </el-input>
  </div>
  <p class="t3 c3 l3 forget" @click="forgetPwd">forget?</p>
  <div class="allMidBox mt30">
    <el-button class="login-btn" type="primary" size="medium" @click="clickLogin">Login</el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.loginComponent {
  background: rgba(255, 255, 255, .85);
  border-radius: 10px;

  &-btn {
    height: 30px;
    width: 160px;
  }
  .forget{
    text-align: end;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
