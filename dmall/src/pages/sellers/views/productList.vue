

<script>
import sellerProductType from '../components/sellerProductType';
import sellerProduct from '../components/sellerProduct';
import navList from '../components/navList.vue';
import {findAllProductSpecs, addProductSpecs} from '@/api/seller'
export default {
  name: 'productList',
  components: {
    sellerProductType, sellerProduct, navList
  },
  data() {
    return {
      productType: {
        product_id: 1,
        shopId: 0,
        name: { type: String, default: 'props.name' }, // 商品名
        pic: { type: String, default: 'http://cdn.helloyzy.cn/dmall.jpg' }, // 商品头图
        description: { type: String, default: 'props.description' }, // 描述
        categoryId: { type: Number, default: 0 }, // 分类id TODO:后面做枚举映射
        attributeList: { type: Object, default: () => ({ memory: ['4G','6G'], color: ['red','blue','green'] }) }, // 分类tag
      },
      productInfo: [
      ],
      newProduct:{
        productId: 0,
        detail: '',
        stock: null,
        price: null,
      },
      attr:{},
      showAdd: false,
    }
  },
  props: {
    
  },
  methods: {
    addProduct() {
      this.showAdd = true;
    },
    submitProduct() {
      this.newProduct.detail = JSON.stringify(this.attr);
      this.newProduct.productId = this.productType.product_id;
      addProductSpecs(this.newProduct).then( (res) => {
        if(res.data.code === 0) {
          this.$successN("成功","添加单例商品成功");
          this.getAllProductSpecs();
          this.showAdd = false;
        } else {
          this.$successN("失败","添加单例商品失败");
        }
      })
    },
    cancelProduct() {
      this.showAdd = false;
    },
    getAllProductSpecs() {
       findAllProductSpecs(this.productType.product_id).then( (res) => {
        if( res.data.code === 0){
          const data = res.data.data;
          data.forEach( (item) => {
            item.detail = JSON.parse(item.detail)
          })
          this.productInfo = data;
        } else {
          this.$successN("失败","获取商品失败");
        }
      })
    },
  },
  created() {
    this.productType = this.$route.params;
    this.getAllProductSpecs();
    Object.keys(this.productType.attributeList).forEach((key) => {
        this.$set(this.attr,key,'');
    });
  }
}
</script>

<template>
  <div class="productList">
    <nav-list></nav-list>
    <div class="productList-type">
        <seller-product-type :name = productType.name :pic = productType.pic :product_id = productType.product_id
          :description = productType.description :shopId = productType.shopId
          :categoryId = productType.categoryId :attributeList = productType.attributeList />
    </div>
    <div class="productList-info">
      <el-row>
        <el-col :lg="6" :sm="12" :xs="12" :md="8" v-for="(item,key) in productInfo" :key="key">
          <seller-product :productInfo = item />
        </el-col>
      </el-row>
    </div>
    <el-button type="primary" round @click="addProduct">add Product</el-button>
    <el-form label-position="right" label-width="80px" :model="newProduct" v-if="showAdd" class="productList-addProduct">
      <el-form-item label="stock">
        <el-input v-model="newProduct.stock" ></el-input>
      </el-form-item>
      <el-form-item label="price">
        <el-input v-model="newProduct.price" ></el-input>
      </el-form-item>
      <el-form-item v-for="(val, key) in attr" :key="key" :label="key">
        <el-input v-model = attr[key] ></el-input>
      </el-form-item>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="submitProduct"></el-button>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-close" circle @click="cancelProduct"></el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.productList-addProduct{
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
  position: fixed;
  background-color: white;
  bottom: 0%;
}
</style>
