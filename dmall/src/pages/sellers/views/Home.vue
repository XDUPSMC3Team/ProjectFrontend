<template>
  <div class="home">
    <div class="home-shop">
      <seller-info :name = shopInfo.name :createTime = shopInfo.createTime :description = shopInfo.description :id = shopInfo.id />
    </div>
    <div class="home-product">
      <el-row>
        <el-col :xs="24" :md="12" :lg="8" :xl="6" v-for="item in product">
            <seller-product :name = item.name :pic = item.pic :price = item.price :description = item.description :updateTime = item.updateTime :categoryId = item.categoryId :attributeList = item.attributeList />
        </el-col>
      </el-row>
    </div>
    <div class="home-btn">
      <el-button type="primary" round @click="addProduct">add product</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sellerInfo from '../components/sellerInfo.vue'
import sellerProduct from '../components/sellerProduct.vue'

export default {
  name: 'home',
  components: {
    sellerInfo,sellerProduct
  },
  data(){
    return{
      product:[
        {
          name: 'name1', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price1', // 价格
          description: 'description1', // 描述
          updateTime: 'updateTime1', // 更新时间
          categoryId: 'categoryId1', // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['props.attributeList.*1', 'props.attributeList.*2'] }, // 分类tag
        },
        {
          name: 'name2', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price2', // 价格
          description: 'description2', // 描述
          updateTime: 'updateTime2', // 更新时间
          categoryId: 'categoryId2', // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['props.attributeList.*1', 'props.attributeList.*2'] }, // 分类tag
        },
        {
          name: 'name3', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price3', // 价格
          description: 'description3', // 描述
          updateTime: 'updateTime3', // 更新时间
          categoryId: 'categoryId3', // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['props.attributeList.*1', 'props.attributeList.*2'] }, // 分类tag
        },
        {
          name: 'name4', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price4', // 价格
          description: 'description4', // 描述
          updateTime: 'updateTime4', // 更新时间
          categoryId: 'categoryId4', // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['props.attributeList.*1', 'props.attributeList.*2'] }, // 分类tag
        },
      ],
      shopInfo: {
        name:'sellerName', // 店名
        createTime:'createTime', // 开店时间
        description: 'sellerDescription', // 店描述
        id: 'sellerId', // 店铺id
      }
    }
  },
  methods:{
    addProduct(){
      this.$router.push('/editProduct');
    }
  }
};
</script>
