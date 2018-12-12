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
    loginSuccess(res) {
      // console.log(res);
      this.$successN('Login Success', res.msg);
      this.$store.commit('cusUpdateUserInfo', { username: res.username });
      switch (this.$store.state.login.role) {
        case 'customer': this.$router.push('/'); break;
        case 'seller': window.location.href = `${this.$baseURL.replace('/api', '')}/seller.html`; break;
        case 'admin': window.location.href = `${this.$baseURL.replace('/api', '')}/admin.html`; break;
        default: this.$router.push('/'); break;
      }
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
