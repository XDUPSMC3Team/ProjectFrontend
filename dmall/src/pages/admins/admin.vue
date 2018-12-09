<script>
export default {
  name: 'app',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
  },
};
</script>

<template>
  <div id="app" class="app">
    <el-menu default-active="/" class="menu" mode="horizontal" router>
      <el-menu-item index="/">Shop</el-menu-item>
      <el-menu-item index="/search">Search</el-menu-item>
    </el-menu>
    <div class="app-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
li{
  padding: 0 20px;
}
</style>
