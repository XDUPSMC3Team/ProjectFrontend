<script>
import product from '@/components/collectProductItem.vue';
import shop from '@/components/collectShopItem.vue';

export default {
  name: 'Favorite',
  components: {
    product,
    shop,
  },
  props: {},
  data() {
    return {
      // bgURL: 'http://cdn.helloyzy.cn/favorite.jpeg',
      activeName: 'product',
    };
  },
  methods: {},
  created() {
    this.$store.dispatch('collectGetProducts');
  },
  mounted() {},
  computed: {
    products() {
      return this.$store.state.favorite.collectProducts;
    },
  },
};
</script>
<template>
<!-- <div class="fav" :style="'background:url('+bgURL+') center no-repeat;'"> -->
<div class="fav">
  <div class="fav-banner">
    <div class="main  allMidBox">
      <i class="iconfont icon-xihuan c_like mb20"></i>
      <p class="collection">My Collection</p>
    </div>
  </div>
  <el-tabs v-model="activeName" type="card" class="allMidBox pt10 pb10 tabs">
    <el-tab-pane label="Products" name="product">
      <!-- 收藏商品 -->
      <div class="fav-box">
        <el-row>
          <el-col v-for="item in products" :key="item.id" :md="12" :xs="24" :sm="24" :lg="6">
            <product :collectId="item.collectId || 0"
            :name="item.name" :description="item.description" :pic="item.pic" :productId="item.id"></product>
          </el-col>
        </el-row>
      </div>

    </el-tab-pane>
    <el-tab-pane label="Shops" name="shop">
      <!-- 收藏店铺 -->
      <div class="fav-box">
        <el-row>
          <el-col v-for="item in products" :key="item.id" :md="12" :xs="24" :sm="24" :lg="6">
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<style lang="scss" scoped>
.icon-xihuan {
  font-size: 80px;
}

.fav {
  min-height: calc(100vh - 61px);
  width: 100%;
  background: $bgClr;

  &-banner {
    width: 100%;
    height: 200px;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    background: url('http://cdn.helloyzy.cn/images/material-8.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    .main {
      height: 200px;
      width: 100%;
      background: rgba(0, 0, 0, .3)
    }
  }

  &-box {
    padding: 20px;
  }

  .collection {
    font-size: 32px;
    font-weight: bolder;
    color: #fff;
  }

  .tabs {}

  // .tabItem{

  // }
  //  is-top is-active
}
</style>
