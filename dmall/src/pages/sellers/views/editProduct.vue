<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      productInfo: {
        name: '',
        pic: '',
        price: '',
        description: '',
        categoryId: '',
        attributeList: {}
      },
      title: '',
      attrName: 1,
      attrs:{
      }
    };
  },
  computed: {},
  created() {
    if(this.$route.params.title === 'addProduct'){
      this.title = this.$route.params.title;
    }else{
      this.productInfo = this.$route.params;
      this.title = 'editProduct';
    }
  },
  mounted() {},
  methods: {
    addAttr() {
      this.$set(this.attrs,this.attrName++,'');
      console.log(this.attrs);
    },
    saveInfo() {

    }
  },
};
</script>

<template>
<div class="product">
  <p>{{title}}</p>
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
    <div v-for = "(value,key) in productInfo.attributeList" v-if="title == 'editProduct'" :key="key">
      <el-form-item :label="key">
        <el-input v-model="productInfo.attributeList[key]" class="mb20"></el-input>
      </el-form-item>
    </div>
    <!-- <div v-if="title == 'addProduct'" v-for=" (value ,key) in attrs" :key="key">
      <el-form-item label="attrName">
        <el-input class="mb20" v-model="key"></el-input>
      </el-form-item>
      <el-form-item label="attrValue">
        <el-input class="mb20" v-model="value"></el-input>
      </el-form-item>
    </div> -->
  </el-form>
  <div class="shop-btn">
    <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-add" circle @click="addAttr">add attribute</el-button>
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
