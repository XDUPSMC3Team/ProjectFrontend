<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  props: {
    onSuccess: Function,
    onFail: {
      type: Function,
      default: (err) => {
        window.console.log(err.msg);
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
        return this.$store.state.register.username;
      },
      set(value) {
        this.$store.commit('RegisterUpdateUsername', value);
      },
    },
    email: {
      get() {
        return this.$store.state.register.email;
      },
      set(value) {
        this.$store.commit('RegisterUpdateEmail', value);
      },
    },
    password1: {
      get() {
        return this.$store.state.register.password1;
      },
      set(value) {
        this.$store.commit('RegisterUpdatePassword1', value);
      },
    },
    password2: {
      get() {
        return this.$store.state.register.password2;
      },
      set(value) {
        this.$store.commit('RegisterUpdatePassword2', value);
      },
    },
    role: {
      get() {
        return this.$store.state.register.role;
      },
      set(value) {
        this.$store.commit('RegisterUpdateRole', value);
      },
    },
    address: {
      get() {
        return this.$store.state.register.address;
      },
      set(value) {
        this.$store.commit('RegisterUpdateAddress', value);
      },
    },
    realName: {
      get() {
        return this.$store.state.register.realName;
      },
      set(value) {
        this.$store.commit('RegisterUpdateRealName', value);
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    chooseRole(val) {
      this.$info(val);
    },
    clickRegister() {
      // Vuex here
      this.$store.dispatch('registerClick')
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
<div class="registerComponent p30">
    <el-radio-group v-model="role" @change="chooseRole" class="mb20">
      <el-radio label="customer">customer</el-radio>
      <el-radio label="seller">seller</el-radio>
      <el-radio label="admin">admin</el-radio>
    </el-radio-group>
    <div class="rowMidBox">

      <span class="t2 l3 c1 mb5">Username</span>
      <el-input :disabled="!btnCanInput" placeholder="username" class="mb10"
      suffix-icon="el-icon-goods" v-model="username">
      </el-input>

      <span class="t2 l3 c1 mb5" v-if="role === 'seller' ">Real Name</span>
      <el-input :disabled="!btnCanInput"
      placeholder="real name" class="mb10" v-if="role === 'seller' "
      suffix-icon="el-icon-goods" v-model="realName">
      </el-input>

      <span class="t2 l3 c1 mb5" v-if="role === 'seller' ">Address</span>
      <el-input :disabled="!btnCanInput"
      placeholder="address" class="mb10"  v-if="role === 'seller' "
      suffix-icon="el-icon-goods" v-model="address">
      </el-input>

      <span class="t2 l3 c1 mb5">Email</span>
      <el-input :disabled="!btnCanInput" placeholder="email" class="mb10"
      suffix-icon="el-icon-message" v-model="email">
      </el-input>

      <span class="t2 l3 c1 mb5">Password</span>
      <el-input :disabled="!btnCanInput" type="password" placeholder="password" class="mb10"
      suffix-icon="el-icon-star-on" v-model="password1">
      </el-input>

      <span class="t2 l3 c1 mb5">Confirm Password</span>
      <el-input :disabled="!btnCanInput"
      type="password" placeholder="typein password again" class="mb10"
      suffix-icon="el-icon-star-on" v-model="password2">
      </el-input>
    </div>
    <div class="allMidBox mt30">
      <el-button class="login-btn" type="primary" size="medium"
      @click="clickRegister">Register</el-button>
    </div>
</div>
</template>

<style lang="scss" scoped>
  .registerComponent {
    background: rgba(255,255,255, .85);
    border-radius: 10px;
    &-btn {
      height: 30px;
      width: 160px;
    }
  }
</style>
