<script>
export default {
  components: {},
  data() {
    return {
      role: 'customer',
      username: '',
      email: '',
      password1: '',
      password2: '',
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
      this.$successN('欢迎', '注册成功！');
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
      <el-input placeholder="username" class="mb10"
      suffix-icon="el-icon-goods" v-model="username">
      </el-input>

      <span class="t2 l3 c1 mb5">Email</span>
      <el-input placeholder="email" class="mb10"
      suffix-icon="el-icon-message" v-model="email">
      </el-input>

      <span class="t2 l3 c1 mb5">Password</span>
      <el-input type="password" placeholder="password" class="mb10"
      suffix-icon="el-icon-star-on" v-model="password1">
      </el-input>

      <span class="t2 l3 c1 mb5">Confirm Password</span>
      <el-input type="password" placeholder="typein password again" class="mb10"
      suffix-icon="el-icon-star-on" v-model="password2">
      </el-input>
    </div>
    <div class="allMidBox mt30">
      <el-button class="login-btn" type="primary" size="medium"
      @click="clickLogin">Register</el-button>
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
