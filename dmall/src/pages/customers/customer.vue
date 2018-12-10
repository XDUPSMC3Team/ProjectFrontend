<script>
import { mapState } from 'vuex';

export default {
  name: '',
  components: {
  },
  data() {
    return {};
  },
  props: {},
  computed: mapState([
    'isLogin',
    'userInfo',
  ]),
  created() {
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<template>
<div>
  <el-menu default-active="/lab"
   class="menu" mode="horizontal" router>
    <el-menu-item index='/'>
      <div class="allMidBox logo">
        <img class="logo-img" src="@/assets/logo.png" alt="">
      </div>
    </el-menu-item>
    <el-menu-item index="/lab">Lab</el-menu-item>
    <el-submenu index="2" v-if="isLogin">
        <template slot="title">{{userInfo && userInfo.username || 'Dmall Guy'}}</template>
        <el-menu-item index="/cart">My Cart</el-menu-item>
        <el-menu-item index="/favorite">My Favorite</el-menu-item>
        <el-menu-item index="nio" @click="logout">Logout</el-menu-item>
    </el-submenu>
    <el-menu-item v-if="!isLogin" index="/login">Sign In</el-menu-item>
    <el-menu-item v-if="!isLogin" index="/register">Sign Up</el-menu-item>
  </el-menu>
  <router-view></router-view>
  <!-- 导航栏 -->
  <!-- <Product
  name="iphoneX"
  pic="http://cdn.helloyzy.cn/dmall.jpg"
  price="8999"
  description="New Generation iPhone X, Face ID support, Full Screen Design."
  updateTime="2018-09-20 12:32:22"
  categoryId="2"
  :attributeList="{memory: ['8G', '12G']}"
  >
  </Product> -->
</div>
</template>

<style lang="scss" scoped>
  .logo {
    height: 60px;
    width: 120px;
    &-img {
      @include wh(60px, 60px);
      object-fit: contain;
    }
  }
</style>
