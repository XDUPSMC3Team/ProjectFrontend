<script>
import { deleteProduct } from '@/api/admin';
export default {
  // 这是商品大类组件
  name: '',
  components: {},
  data() {
    return {
      tags: [],
    };
  },
  props: {
    info: {
      id:  { type: Number, default: 1 },
      shopId: { type: Number, default: 0 },
      name: { type: String, default: 'props.name' }, // 商品名
      pic: { type: String, default: 'http://cdn.helloyzy.cn/dmall.jpg' }, // 商品头图
      description: { type: String, default: 'props.description' }, // 描述
      categoryId: { type: Number, default: 0 }, // 分类id TODO:后面做枚举映射
      attributeList: { type: Object, default: () => ({ memory: ['4G','6G'], color: ['red','blue','green'] }) }, // 分类tag
    },
  },
  computed: {},
  created() {
    Object.keys(this.info.attributeList).forEach((key) => {
      this.info.attributeList[key].forEach((tag) => {
        this.tags.push(tag);
      });
    });
  },
  mounted() {},
  methods: {
    deleteProType(productId) {
      deleteProduct(productId).then( (res) => {
        if(res.data.code === 0) {
          this.$successN("ok","delete ok");
          window.location.reload();
        }
      })
    }
  },
};
</script>

<template>
<div class="product">
  <div class="home">
    <!-- 商品头图 -->
    <div class="product-banner mb10" :style="'background:url('+info.pic+') center no-repeat;'"></div>
    <!-- 商品名 -->
    <p class="product-name t1 c1 l2 mb10">{{info.name}}</p>
    <!-- 商品介绍 -->
    <p class="product-intro t4 c2 l3 mb10">{{info.description}}</p>
    <!-- 标签 -->
    <ul class="tag rowBox">
      <el-tag type="info" class="tag-item pl10 pr10 mr10 mb20"
      v-for="tag of tags" :key="tag">{{tag}}</el-tag>
    </ul>
  </div>
  <el-button type="danger" icon="el-icon-delete" circle @click="deleteProType(info.id)"></el-button>
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
      display: flex;
      flex-wrap: wrap;
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