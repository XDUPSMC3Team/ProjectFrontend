<template>
  <div class="home">
    <div class="home-shop" v-if="shopOk">
      <seller-info :name = shopInfo.name :createTime = shopInfo.createTime
        :description = shopInfo.description :id = shopInfo.id />
    </div>
    <div class="home-product" v-if="shopOk">
      <el-row>
        <el-col :xs="24" :md="12" :lg="8" :xl="6" v-for="(item,key) in product" :key="key">
            <seller-product :name = item.name :pic = item.pic :price = item.price
              :description = item.description :shopId = item.shopId
              :categoryId = item.categoryId :attributeList = item.attributeList />
        </el-col>
      </el-row>
    </div>
    <div class="home-btn" v-if="shopOk">
      <el-button type="primary" round @click="addProduct">add product</el-button>
    </div>
    <div class="home-warn" v-if="!shopOk">
      <div class="home-warn-word t1 c1 l1 mt20 mb20">Please regist shop</div>
      <el-button type="primary" round class="home-warn-button" @click="registShop">regist shop</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sellerInfo from '../components/sellerInfo.vue';
import sellerProduct from '../components/sellerProduct.vue';

export default {
  name: 'home',
  components: {
    sellerInfo, sellerProduct,
  },
  data() {
    return {
      product: [
        {
          shopId: 2,
          name: 'name1', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price1', // 价格
          description: 'description1', // 描述
          categoryId: 1, // 分类id TODO:后面做枚举映射
          attributeList: { memory: '4G', color: 'red'  }, // 分类tag
        },
        {
          shopId: 2,
          name: 'name2', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price2', // 价格
          description: 'description2', // 描述
          categoryId: 2, // 分类id TODO:后面做枚举映射
          attributeList: {memory: '4G', color: 'red'  }, // 分类tag
        },
        {
          shopId: 2,
          name: 'name3', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price3', // 价格
          description: 'description3', // 描述
          categoryId: 3, // 分类id TODO:后面做枚举映射
          attributeList: { memory: '4G', color:'red' }, // 分类tag
        },
        {
          shopId: 2,
          name: 'name4', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          price: 'price4', // 价格
          description: 'description4', // 描述
          categoryId: 4, // 分类id TODO:后面做枚举映射
          attributeList: { memory: '4G', color: 'red'  }, // 分类tag
        },
      ],
      shopInfo: {
        name: 'sengMa', // 店名
        createTime: '2018!', // 开店时间
        description: 'this is sengMa store!', // 店描述
        id: 2, // 店铺id
      },
      shopOk:true,
      sellerId: 1,
    };
  },
  methods: {
    addProduct() {
      this.$router.push({
        name: 'addProduct',
        params: {
          shopId: this.shopInfo.id,
        },
      });
    },
    registShop() {
      this.$router.push({
        name: 'registShop',
        params: {
          sellerId: this.sellerId,
        },
      });
    },
  },
  created() {
    this.sellerId = this.$route.params.sellerId;
    // 获取店铺信息和商品信息两个api,如果店铺信息被通过，shopOk变成true
  }
};
</script>

<style lang="scss" scoped>
</style>

