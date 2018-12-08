<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      role: 'customer',
      username: '',
      password: '',
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    chooseRole(val) {
      this.$info(val);
    },
    clickLogin() {
      // Vuex here
      this.$successN('欢迎', '登录成功！');
    },
  },
};
</script>

<template>
<div class="login p10">
    <el-radio-group v-model="role" @change="chooseRole" class="mb20">
      <el-radio label="customer">customer</el-radio>
      <el-radio label="seller">seller</el-radio>
      <el-radio label="admin">admin</el-radio>
    </el-radio-group>
    <div class="rowMidBox">
      <span class="t2 l3 c1 mb5">User</span>
      <el-input placeholder="username/email" class="mb10"
      suffix-icon="el-icon-message" v-model="username">
      </el-input>

      <span class="t2 l3 c1 mb5">Password</span>
      <el-input type="password" placeholder="password" class="mb10"
      suffix-icon="el-icon-star-on" v-model="password">
      </el-input>
    </div>
    <div class="allMidBox mt30">
      <el-button class="login-btn" type="primary" size="medium"
      @click="clickLogin">Login</el-button>
    </div>
</div>
</template>

<style lang="scss" scoped>
  .login {
    &-btn {
      height: 30px;
      width: 160px;
    }
  }
</style>
