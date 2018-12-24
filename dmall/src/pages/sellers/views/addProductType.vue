<script>
import {findCategories, findAttributeKey, uploadImg, AddProduct} from '@/api/seller'
import navList from '../components/navList.vue';
export default {
  name: '',
  components: { navList, },
  data() {
    return {
      productInfo: {
        shopId: 0,
        categoryId: '',
        name: '',
        pic: '',
        description: '',
        attributeList: '',
      },
      options: [],
      attributeKeyList: [],
      attributeValueList: [],
    };
  },
  computed: {
    attribute() {
      let str = {};
       for(var key in this.attributeKeyList) {
         str[this.attributeKeyList[key].attributeKey] = this.attributeValueList[key].attributeValue.split(',');
       }
      str = JSON.stringify(str);
      return str;
    },
  },
  created() {
    this.productInfo.shopId = this.$route.params.shopId;
    findCategories().then( (res) => {
      if(res.data.code === 0){
        this.options = res.data.data;
      } else {
        this.$successN("error","error");
      }
    })
  },
  mounted() {},
  methods: {
    saveInfo() {
      this.productInfo.attributeList = this.attribute;
      AddProduct(this.productInfo).then( (res) => {
        if(res.data.code === 0){
          this.$successN("ok","add product");
          this.$router.push('/');
        } else {
          this.$successN("err","add product error");
        }
      })
    },
    getAttr() {
      findAttributeKey(this.productInfo.categoryId).then( (res) => {
        if(res.data.code === 0){
          this.attributeKeyList = res.data.data;
          for(var key in this.attributeKeyList) {
            this.$set(this.attributeValueList,key,{
              attributeKeyId: this.attributeKeyList[key].id,
              attributeValue: '',
            })
          }
        } else {
          this.$successN('error','error');
        }
      })
    },
    upload() {
      let formData = new FormData();
      formData.append('file',this.$refs.inputPic.files[0]);
      uploadImg(formData).then( (res) => {
        if(res.data.code === 0) {
          this.$successN("ok","upload img ok")
          this.productInfo.pic = res.data.data;
        } else {
          this.$successN("error","error");
        }
      })
      //上传图片，拿到返回的url，赋值给productInfo.pic
    },
  },
};
</script>

<template>
<div class="home">
  <nav-list :shopId = productInfo.shopId></nav-list>
  <div class="product">
    <el-form label-position="right" label-width="80px" :model="productInfo">
      <el-form-item label="category">
        <el-select v-model="productInfo.categoryId" placeholder="select categories" @change="getAttr">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="productInfo.name" class="mb20"></el-input>
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="productInfo.description" class="mb20"></el-input>
      </el-form-item>
      <el-form-item v-for="(item,key) in attributeKeyList" :key="key" :label="item.attributeKey">
        <el-input v-model="attributeValueList[key].attributeValue" class="mb20"></el-input>
      </el-form-item>
      <el-form-item label="pic">
        <input class="mb20" type="file" accept="image/png,image/gif,image/jpeg" ref="inputPic" @change="upload"/>
      </el-form-item>
    </el-form>
    <div class="shop-btn">
      <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="saveInfo"></el-button>
    </div>
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
