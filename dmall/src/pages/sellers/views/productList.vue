

<script>
import sellerProductType from '../components/sellerProductType';
import sellerProduct from '../components/sellerProduct';
import navList from '../components/navList.vue';
import {findAllProductSpecs, addProductSpecs, editProductSpec} from '@/api/seller'
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
      editProduct:{},
      attr:{
        payment: '',
      },
      showAdd: false,
      showEdit:false,
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
          this.$successN("ok","add product");
          this.getAllProductSpecs();
          this.showAdd = false;
        } else {
          this.$successN("error","error");
        }
      })
    },
    cancelProduct() {
      this.showAdd = false;
    },
    editInfo(item) {
      this.editProduct = item;
      this.showEdit = true;
    },
    submitEdit() {
      this.editProduct.detail =  JSON.stringify(this.editProduct.detail);
      const data = {
        id: this.editProduct.id,
        productId: this.editProduct.productId,
        detail: this.editProduct.detail,
        stock: this.editProduct.stock,
        price: this.editProduct.price,
      };
      editProductSpec(data).then( (res) => {
        if (res.data.code === 0) {
          this.$successN("ok", "edit ok");
          this.cancelEdit();
          this.getAllProductSpecs();
        }
      });
    },
    cancelEdit() {
      this.showEdit = false;
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
          this.$successN("error","error");
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
        <el-col :lg="6" :sm="12" :xs="12" :md="8" v-for="(item,key) in productInfo" :key="key" class="productList-info-pro">
          <seller-product :productInfo = item />
          <!-- 按钮  -->
          <div class="productList-info-pro-btn">
            <el-button class="shop-btn-edit" type="primary"
            icon="el-icon-edit" circle @click="editInfo(item)">
            </el-button>
          </div>
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
      <el-form-item v-for="(value, key) in productType.attributeList" :key="key" :label="key">
        <el-radio v-model = attr[key] v-for="(item) in value" :label="item">{{item}}</el-radio>
      </el-form-item>
      <el-form-item label="Payment">
        <el-radio v-model="attr.payment" label="Wechat">Wechat</el-radio>
        <el-radio v-model="attr.payment" label="Alipay">Alipay</el-radio>
      </el-form-item>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="submitProduct"></el-button>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-close" circle @click="cancelProduct"></el-button>
    </el-form>

    <el-form label-position="right" label-width="80px" :model="editProduct" v-if="showEdit" class="productList-addProduct">
      <el-form-item label="stock">
        <el-input v-model="editProduct.stock" ></el-input>
      </el-form-item>
      <el-form-item label="price">
        <el-input v-model="editProduct.price" ></el-input>
      </el-form-item>
      <el-form-item v-for="(value, key) in productType.attributeList" :key="key" :label="key">
        <el-radio v-model = editProduct.detail[key] v-for="(item) in value" :label="item">{{item}}</el-radio>
      </el-form-item>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="submitEdit()"></el-button>
      <el-button class="product-btn-edit mt10" type="primary" icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.productList-info-pro{
  position: relative;
}
.productList-info-pro-btn{
  position:absolute;
  right: 0;
  top: 0;
}
.productList-addProduct{
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
  position: fixed;
  background-color: white;
  bottom: 0%;
}
</style>
