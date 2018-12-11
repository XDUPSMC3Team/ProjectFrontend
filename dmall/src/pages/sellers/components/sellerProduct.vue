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
    shopId: 0,
    name: { type: String, default: 'props.name' }, // 商品名
    pic: { type: String, default: 'http://cdn.helloyzy.cn/dmall.jpg' }, // 商品头图
    price: { type: String, default: 'props.price' }, // 价格
    description: { type: String, default: 'props.description' }, // 描述
    categoryId: { type: Number, default: 0 }, // 分类id TODO:后面做枚举映射
    attributeList: { type: Object, default: () => ({ memory: '4G', color: 'red' }) }, // 分类tag
  },
  computed: {},
  created() {
    // Object.keys(this.attributeList).forEach((key) => {  
    //   this.tags.push(this.attributeList[key]);
    // });
    for(let key in this.attributeList){
       this.tags.push(this.attributeList[key]);
    }
  },
  mounted() {},
  methods: {
    editInfo() {
      this.$router.push({
        name: 'editProduct',
        params: {
          shopId: this.shopId,
          name: this.name,
          pic: this.pic,
          price: this.price,
          description: this.description,
          categoryId: this.categoryId,
          attributeList: this.attributeList,
        },
      });
    },
    deletePro() {

      this.$successN('成功','商品已删除');
    }
  },
};
</script>

<template>
<div class="product">
  <!-- 商品头图 -->
  <div class="product-banner mb10" :style="'background:url('+pic+') center no-repeat;'"></div>

  <!-- 商品价格 -->
  <p class="product-price"><span class="t1 c_like l1 dolla mr10">$</span>{{price}}</p>
  <!-- 商品名 -->
  <p class="product-name t1 c1 l2 mb10">{{name}}</p>
  <!-- 商品介绍 -->
  <p class="product-intro t4 c2 l3 mb10">{{description}}</p>

  <!-- 标签 -->
    <ul class="tag rowBox">
      <el-tag type="info" class="tag-item pl10 pr10 mr10 mb20"
      v-for="tag of tags" :key="tag">{{tag}}</el-tag>
    </ul>

  <!-- 按钮  -->
  <div class="product-btn">
    <el-button class="product-btn-cart" type="primary"
     icon="el-icon-edit" circle @click="editInfo">
    </el-button>
    <el-button class="product-btn-like" type="info"
     icon="el-icon-delete" circle @click="deletePro"> 
    </el-button>
  </div>

</div>
</template>

<style lang="scss" scoped>
  .product {
    text-align: left;
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
