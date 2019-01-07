<template>
  <div class="home">
    <nav-list :shopId = shopInfo.id></nav-list>
    <div class="home-shop" v-if="shopOk">
      <seller-info :shopName = shopInfo.shopName :createTime = shopInfo.createTime
        :shopDesc = shopInfo.shopDesc :id = shopInfo.id :status = shopInfo.status 
        :telephone = shopInfo.phone :email = shopInfo.email
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
    <div class="home-btn" v-if="shopOk && shopInfo.status == 1">
      <el-button type="primary" round @click="addProductType">add productType</el-button>
    </div>
    <div class="home-warn" v-if="!shopOk">
      <div class="home-warn-word t1 c1 l1 mt20 mb20">Please register shop</div>
      <el-button type="primary" round class="home-warn-button" @click="registShop">register shop</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sellerInfo from '../components/sellerInfo.vue';
import sellerProductType from '../components/sellerProductType.vue';
import navList from '../components/navList.vue';
import {findSellerShop, findProductType} from '@/api/seller'
export default {
  name: 'home',
  components: {
    sellerInfo, sellerProductType, navList,
  },
  data() {
    return {
      product: [
        
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
      shopOk:false,
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
    const info = JSON.parse(window.localStorage.getItem('userInfo'));
    this.sellerId = info.id;
    findSellerShop(this.sellerId).then( (res) => {
      if(res.data.code === 0){
        this.shopInfo = res.data.data;
        this.shopOk = true;
        findProductType(this.shopInfo.id).then( (res) => {
        if(res.data.code === 0){
          const data = res.data.data;
          data.forEach( (item) => {
            item.attributeList = JSON.parse(item.attributeList);
          })
          this.product = data;
          } else {
            this.$successN("error", "error");
          }
        })
      } else {
        this.$successN("error", "error");
      }
    })
    // 获取店铺信息和商品信息两个api,如果店铺信息被通过，shopOk变成true
  }
};
</script>

<style lang="scss" scoped>
</style>

