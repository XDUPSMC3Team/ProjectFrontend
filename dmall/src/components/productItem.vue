<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      tags: [],
    };
  },
  props: {
    name: { type: String, default: 'props.name' }, // 商品名
    shopId: { type: Number, default: 10086 }, // 店铺ID
    productId: { type: Number, default: 10086 }, // 商品ID
    // collectId: { type: String, default: 'props.collectId' }, // 收藏ID 默认0
    pic: { type: String, default: 'http://cdn.helloyzy.cn/dmall.jpg' }, // 商品头图
    // price: { type: String, default: 'props.price' }, // 价格
    description: { type: String, default: 'props.description' }, // 描述
    updateTime: { type: String, default: 'props.updateTime' }, // 更新时间
    // categoryId: { type: String, default: 'props.categoryId' }, // 分类id TODO:后面做枚举映射
    attributeList: String, // 分类tag
  },
  computed: {},
  created() {
    const arrtObj = JSON.parse(this.attributeList) || {};
    Object.keys(arrtObj).forEach((key) => {
      arrtObj[key].forEach((tag) => {
        this.tags.push(tag);
      });
    });
    this.tags = this.tags.slice(0, 5);
  },
  mounted() {
  },
  methods: {
    // clickAddCart() {
    //   // Vuex Action Here
    //   this.$successN('添加购物车成功', '你的宝贝正在购物车等您~');
    // },
    // clickLike() {
    //   // Vuex Action Here
    //   this.$store.dispatch('productAddLike', this.productId).then(() => {
    //     // TODO: 更新收藏夹的store
    //     this.$successN('Like !', 'Please check in your Favorites');
    //   });
    // },
    more() {
      this.$router.push({
        name: 'detail',
        query: {
          id: this.productId,
        },
      });
    },
  },
};
</script>

<template>
<div class="product">
  <!-- 商品头图 -->
  <div class="product-banner mb10" :style="'background:url('+pic+') center no-repeat;'"></div>

  <!-- 商品价格 -->
  <!-- <p class="product-price"><span class="t1 c_like l1 dolla mr10">$</span>{{price}}</p> -->
  <!-- 商品名 -->
  <p class="product-name t1 c1 l2 mb10">{{name}}</p>
  <!-- 商品介绍 -->
  <p class="product-intro t4 c2 l3 mb10">{{description}}</p>
  <!-- 商品更新时间 -->
  <p class="product-intro t5 c3 l3 mb10">{{updateTime}}</p>

  <!-- 标签 -->
    <ul class="tag  mb20">
      <el-tag type="info" class="tag-item pl10 pr10 mr10 mb5"
      v-for="tag of tags" :key="tag">{{tag}}</el-tag>
    </ul>

  <!-- 按钮  -->
  <div class="product-btn">
    <el-button class="product-btn-cart" type="primary" round size="medium"
    @click="more">More Info</el-button>
    <!-- <el-button class="product-btn-like" type="info" icon="el-icon-star-on" circle
    @click="clickLike"></el-button> -->
  </div>

</div>
</template>

<style lang="scss" scoped>
  .product {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-banner {
      height: 100px;
      background-size: contain!important;
    }
    &-price {
      border-top: 1px solid $c5;
      text-align: right;
      font-size: 35px;
      color: $like;
    }
    &-btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &-cart {
        height: 40px;
        box-shadow: 0px 4px 10px lighten($info, 20%);
      }
      &-like {
        font-size: 14px;
        background: $btn_like;
        border: none;
      }
      &-like:hover {
        background: darken($btn_like, 10%);
      }
    }
    .tag {
      max-width: 300px;
      &-item {
        padding-top: 0;
        height: 22px;
        line-height: 22px;
        background: $info;
        color: $txt_white;
      }
    }
  }
</style>
