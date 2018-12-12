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
        attributeList: {},
      },
      options: [{
        id: '1',
        name: '黄金糕'
      }, {
        id: '2',
        name: '双皮奶'
      }, {
        id: '3',
        name: '蚵仔煎'
      }, {
        id: '4',
        name: '龙须面'
      }, {
        id: '5',
        name: '北京烤鸭'
      }],
    };
  },
  computed: {
    productData() {
      let data = {}; 
      Object.assign(data,this.productInfo);
      data.attributeList = JSON.stringify(data.attributeList);
      return data;
    }
  },
  created() {
    this.productInfo = this.$route.params;
  },
  mounted() {},
  methods: {
    saveInfo() {
      console.log(this.productData);
      this.$successN('成功','商品信息修改成功');
      // this.$router.push('/');
    },
    uploadImg() {
      let formData = new FormData();
      formData.append('pic',this.$refs.inputPic.files[0]);
      //上传图片，拿到返回的url，赋值给productInfo.pic
    },
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
    <div v-for="(value, key) in productInfo.attributeList" :key="key">
      <el-form-item :label="key">
        <el-input v-model="productInfo.attributeList[key]" class="mb20"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="price">
      <el-input v-model="productInfo.price" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="pic">
      <el-input v-model="productInfo.pic" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="changePic">
      <input class="mb20" type="file" accept="image/png,image/gif,image/jpeg" ref="inputPic" @change="uploadImg"/>
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
