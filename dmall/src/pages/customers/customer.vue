<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: mapState({
    count: state => state.example.num,
  }),
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
    this.getNumUp();
  },
  mounted() {},
  methods: {
    ...mapActions({
      getNumUp: 'getNumUp',
    }),
  },
};

</script>

<template>
<div id="app">
  <div id="nav" class="mt30">
    <p>{{count}}</p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <el-button @click="getNumUp">el-button</el-button>
    <p class="t1 c1 l1">大写的懵逼</p>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">

#app {

}
</style>
