<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      productInfo: {
        shopId: 0,
        name: '',
        pic: '',
        price: '',
        description: '',
        categoryId: 0,
        attributeList: '',
      },
    };
  },
  computed: {},
  created() {
    this.productInfo = this.$route.params;
  },
  mounted() {},
  methods: {
    saveInfo() {
      this.$successN('成功','商品信息修改成功');
      this.$router.push('/');
    }
  },
};
</script>

<template>
<div class="product">
  <el-form label-position="right" label-width="80px" :model="productInfo">
    <el-form-item label="name">
      <el-input v-model="productInfo.name" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="description">
      <el-input v-model="productInfo.description" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="price">
      <el-input v-model="productInfo.price" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="pic">
      <el-input v-model="productInfo.pic" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="attributeList">
      <el-input v-model="productInfo.attributeList" class="mb20"></el-input>
    </el-form-item>
  </el-form>
  <div class="shop-btn">
    <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="saveInfo"></el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .product {
   padding: 20px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
}
</style>
