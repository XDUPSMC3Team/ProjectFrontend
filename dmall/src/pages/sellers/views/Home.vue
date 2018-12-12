<template>
  <div class="home">
    <div class="home-shop" v-if="shopOk">
      <seller-info :shopName = shopInfo.shopName :createTime = shopInfo.createTime
        :shopDesc = shopInfo.shopDesc :id = shopInfo.id :status = shopInfo.status 
        :phone = shopInfo.phone :email = shopInfo.email
         />
    </div>
    <div class="home-product" v-if="shopOk">
      <el-row>
        <el-col :xs="24" :md="12" :lg="8" :xl="6" v-for="(item,key) in product" :key="key">
            <seller-product-type :name = item.name :pic = item.pic :product_id = item.id 
              :description = item.description :shopId = item.shopId
              :categoryId = item.categoryId :attributeList = item.attributeList />
        </el-col>
      </el-row>
    </div>
    <div class="home-btn" v-if="shopOk">
      <el-button type="primary" round @click="addProductType">add productType</el-button>
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
import sellerProductType from '../components/sellerProductType.vue';
import {findSellerShop, findProductType} from '@/api/seller'
export default {
  name: 'home',
  components: {
    sellerInfo, sellerProductType,
  },
  data() {
    return {
      product: [
        {
          shopId: 2,
          id: 1,
          name: 'name1', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          description: 'description1', // 描述
          categoryId: 1, // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['4G','6G'], color: ['red','blue','green'] }, // 分类tag
        },
        {
          shopId: 2,
          id: 1,
          name: 'name2', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          description: 'description2', // 描述
          categoryId: 2, // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['4G','6G'], color: ['red','blue','green'] }, // 分类tag
        },
        {
          shopId: 2,
          id: 1,
          name: 'name3', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          description: 'description3', // 描述
          categoryId: 3, // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['4G','6G'], color: ['red','blue','green'] }, // 分类tag
        },
        {
          shopId: 2,
          id: 1,
          name: 'name4', // 商品名
          pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
          description: 'description4', // 描述
          categoryId: 4, // 分类id TODO:后面做枚举映射
          attributeList: { memory: ['4G','6G'], color: ['red','blue','green'] }, // 分类tag
        },
      ],
      shopInfo: {
        shopName: 'sengMa', // 店名
        createTime: '2018!', // 开店时间
        shopDesc: 'this is sengMa store!', // 店描述
        id: 2, // 店铺id
        status: 0,  //店铺状态
        phone: "123123132",
        email: "1187@qq.com",
      },
      shopOk:true,
      sellerId: '1',
    };
  },
  methods: {
    addProductType() {
      this.$router.push({
        name: 'addProductType',
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
    // this.sellerId = this.$route.params.sellerId;
    findSellerShop(this.sellerId).then( (res) => {
      if(res.data.code === 0){
        this.shopInfo = res.data.data;
      } else {
        this.$successN("失败", "获取店铺信息失败");
      }
    })
    findProductType(this.shopInfo.id).then( (res) => {
      if(res.data.code === 0){
        this.product = res.data.data;
      } else {
        this.$successN("失败", "获取商品信息失败");
      }
    })
    // 获取店铺信息和商品信息两个api,如果店铺信息被通过，shopOk变成true
  }
};
</script>

<style lang="scss" scoped>
</style>

