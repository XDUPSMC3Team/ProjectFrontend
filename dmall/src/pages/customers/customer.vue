<template>
  <div id="app">
    <div id="nav" class="mt20">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <el-button>el-button</el-button>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
  @import url('~/styles/reset.scss'); // 重置浏览器样式 ~ 代表 src目录
  @import url('~/styles/common.scss');
   #app {
     background: $test;
   }
</style>
