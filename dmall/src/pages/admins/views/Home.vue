<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      shopList: [
        {
          name:'shopName',
          id:'shopId'
        },
         {
          name:'shopName',
          id:'shopId'
        },
         {
          name:'shopName',
          id:'shopId'
        }
      ],
      search:''
    }
  },
  methods: {
    agree() {

      this.$successN('成功！', '同意开店！');
    },
    reject() {

      this.$successN('成功！', '拒绝开店！');
    },
    searchShop() {

      this.$successN('成功！', '搜索到了！');
    }
  }
};
</script>

<template>
  <div class="home">
    <div class="home-header mt15 mb15 ml10 mr10">
      <el-input placeholder="请输入内容" v-model="search">
      <el-button slot="append" icon="el-icon-search" @click="searchShop"></el-button>
      </el-input>
    </div>
    <div class="home-content">
      <ul class="home-content-ul">
        <p class="t1 c1 l2 mb10">Shop application </p>
        <li v-for="item in shopList" class="home-content-ul-li mb10">
          <div class="t2 c2 l3 mb10">{{item.name}}</div>
          <div class="shop-btn">
            <el-button type="success" circle icon="el-icon-check" @click="agree"></el-button>
            <el-button type="danger" circle icon="el-icon-close" @click="reject"></el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    &-header{
    }
    &-content {
      &-ul {
        &-li {
          padding: 10px 20px;
          margin: 10px;
          border-radius: 8px;
          box-shadow: 0px 0px 10px $c5;
          list-style:none;
          display:flex;
          justify-content: space-around;
        }
      }
    }
  }
</style>

