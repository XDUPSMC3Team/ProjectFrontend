<script>
import navList from './components/navList';

export default {
  name: 'app',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    navList,
  },
};
</script>

<template>
  <div id="app" class="app">
    <nav-list></nav-list>
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
