<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: '',
  components: {
  },
  data() {
    return {
      keywords: '',
    };
  },
  props: {},
  computed: {
    ...mapState([
      'userInfo',
    ]),
    ...mapGetters([
      'isLogin',
    ]),
  },
  created() {
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$success('logout success!');
        });
    },
    searchProduct() {
      this.$store.dispatch('productSearch', this.keywords);
    },
  },
};
</script>

<template>
<div>
  <el-menu default-active="/home"
   class="menu" mode="horizontal" router>
    <el-menu-item index='/home'>
      <div class="allMidBox logo">
        <img class="logo-img" src="@/assets/logo.png" alt="">
      </div>
    </el-menu-item>
    <el-menu-item index="/lab" class="nav-lg">Lab</el-menu-item>
    <div class="el-menu-item nav-lg nav-search" index='3'>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="keywords">
        <el-button slot="append" icon="el-icon-search" @click="searchProduct"></el-button>
      </el-input>
    </div>
    <div class="nav-right">
      <el-menu-item class="nav-lg" v-if="!isLogin" index="/login">Sign In</el-menu-item>
      <el-menu-item class="nav-lg" v-if="!isLogin" index="/register">Sign Up</el-menu-item>
      <el-submenu index="2" v-if="isLogin" class="nav-lg">
        <template slot="title"><span class="nav-user">
          {{userInfo && userInfo.username || 'Dmall Guy'}}
        </span></template>
        <el-menu-item index="/cart">My Cart</el-menu-item>
        <el-menu-item index="/favorite">My Favorite</el-menu-item>
        <div class="el-menu-item" @click="logout">Logout</div>
      </el-submenu>
    </div>
    <el-submenu index="3" class="nav-xs nav-menu">
      <template slot="title">Menu</template>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item v-if="!isLogin" index="/login">Sign In</el-menu-item>
      <el-menu-item v-if="!isLogin" index="/register">Sign Up</el-menu-item>
      <el-menu-item index="/my">My Page</el-menu-item>
    </el-submenu>
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
    &-img {
      @include wh(60px, 60px);
      object-fit: contain;
    }
  }
  .nav {
    &-search {
    }
    &-user {
      padding-right: 22px;
    }
    &-menu {
      float: right!important;
    }
    &-right {
      display: flex;
      justify-content: flex-end;
    }
    &-xs{
      display: none;
    }
    &-lg{
      display: block;
    }
  }

  @media screen and (max-width: 400px) {
    .nav-xs {
      display: block;
    }
    .nav-lg {
      display: none;
    }
  }
</style>
