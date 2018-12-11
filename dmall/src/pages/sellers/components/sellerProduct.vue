<script>
export default {
  // 这是商品大类组件
  name: 'product',
  components: {},
  data() {
    return {
      tags: [],
    };
  },
  props: {
    productInfo: {
      product_id:  { type: Number, default: 1 },
      stock: { type: Number, default: 125 }, // 商品库存
      price: { type: Number, default: 8888 }, // 价格
      attributeList: { type: Object, default: () => ({ memory: '4G', color: 'green' }) }, // 分类tag
    },
  },
  computed: {},
  created() {
    Object.keys(this.productInfo.attributeList).forEach((key) => {
      this.tags.push(this.productInfo.attributeList[key]);
    });
  },
  mounted() {},
  methods: {
  },
};
</script>

<template>
<div class="product">
  <!-- 商品库存 -->
  <p class="product-stock t1 c1 l1 mb10">stock: {{productInfo.stock}}</p>
  <!-- 商品价格 -->
  <p class="product-price t1 c1 l1 mb10">$ {{productInfo.price}}</p>
  <!-- 标签 -->
  <ul class="tag rowBox">
    <el-tag type="info" class="tag-item pl10 pr10 mr10 mb20"
    v-for="tag of tags" :key="tag">{{tag}}</el-tag>
  </ul>
</div>
</template>

<style lang="scss" scoped>
  .product {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-price {
      color: $like;
    }
    &-btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .tag {
      max-width: 300px;
      padding: 0;
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