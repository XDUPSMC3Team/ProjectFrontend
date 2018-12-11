<script>
import register from '@/components/register.vue';

export default {
  name: '',
  components: {
    register,
  },
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/register.jpeg',
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 做页面相关处理
    onRegisterSuccess(res) {
      this.$successN('Register Success!', `${res.msg}, Let's Go to Login Page!`);
      setTimeout(() => {
        this.$router.push('/login');
      }, 2000);
    },
  },
};
</script>

<template>
<div class="register" :style="'background:url('+bgURL+') center no-repeat;'">
  <el-row class="allMidBox">
    <el-col :lg="8" :sm="24" :xs="24" :md="18">
      <register class="register-input"
        :onSuccess="onRegisterSuccess"
      />
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss">
.register {
  height: calc(100vh - 61px);
  width: 100vw;

  &-input {
    margin-top: 10vh;
  }
}
</style>
