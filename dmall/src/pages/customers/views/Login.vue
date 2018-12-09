<script>
import login from '@/components/login.vue';

export default {
  name: 'loginPage',
  components: {
    login,
  },
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/login.jpeg',
    };
  },
  props: {},
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    loginSuccess() {
      // console.log(res);
    },
    loginFail() {
      // console.log(err);
    },
  },
};

</script>

<template>
<div class="login" :style="'background:url('+bgURL+') center no-repeat;'">
  <el-row class="allMidBox">
    <el-col :lg="8" :sm="24" :xs="24" :md="18" >
      <login class="login-input"
        :onSuccess="loginSuccess"
        :onFail="loginFail"
      />
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
  .login{
    height: calc(100vh - 61px);
    width: 100vw;
    &-input {
      margin-top: 20vh;
    }
  }
</style>
