<script>
import { Logout } from '@/api/public';
export default {
  name:'navList',
  props:{
    shopId:0
  },
  methods: {
    loginOut() {
      Logout().then( (res) => {
        if(res.data.code === 0) {
          localStorage.removeItem('userInfo');
          window.location.href = '/customer.html';
        } else {
          this.$successN("error","logout error!");
        }
      })
    }
  }
}
</script>

<template>
  <div class="navList">
    <div class="navList-index">
      <router-link to="/">
      <el-button type="primary">Index</el-button>
      </router-link>
    </div>
     <div class="navList-index">
      <router-link :to="{name:'order',query:{shopId:shopId}}">
      <el-button type="primary">Order</el-button>
      </router-link>
    </div>
    <div class="navList-loginOut">
      <el-button type="primary" @click="loginOut">logout</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navList {
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
}
</style>


