<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {
    // console.log(this.$_.chunk(['a', 'b', 'c', 'd'], 2)); // config lodash
    this.$successN('成功！', '你是个人才');
    this.$get('/test/t', {
      name: 'ddd',
      pass: 's',
    });
    // this.$error('失败！');
    // this.$warn('警告！');
    // this.$info('提示！');
  },
  mounted() {},
  methods: {},
};

</script>

<template>
<div id="app">
  <div id="nav" class="mt30">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <el-button>el-button</el-button>
    <p class="t1 c1 l1">大写的懵逼</p>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
@import url('~/styles/reset.scss'); // 重置浏览器样式 ~ 代表 src目录
@import url('~/styles/common.scss');

#app {
  background: $test;
}
</style>
