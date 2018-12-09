<script>
import {CheckNewShop, ApproveShopById, RejectShopById} from '@/api/admin.js'
export default {
  name: 'shopApplication',
  components: {
  },
  props: {
  },
  data() {
    return {
      shop :[
        {
          shop_name: 'shop_name',
          seller_id: 1,
        },
        {
          shop_name: 'shop_name',
          seller_id: 2,
        },
        {
          shop_name: 'shop_name',
          seller_id: 3,
        },
        {
          shop_name: 'shop_name',
          seller_id: 4,
        },
      ],
    };
  },
  methods: {
    agree(shopId) {
      ApproveShopById(shopId).then( (res) => {
        if(res.code == 0){
          this.$successN('成功！', '同意开店！');
          getCheckShop();
        }
      });
    },
    reject(shopId) {
      RejectShopById(shopId).then( (res) => {
        if(res.code == 0){
          this.$successN('成功！', '拒绝开店！');
          getCheckShop();
        }
      });
    },
    getCheckShop(){
      CheckNewShop().then( (res) => {
        if( res.code == 0){
          this.shop = res.data;
        }
      });
    }
  },
  created() {
    getCheckShop();
  }
};
</script>

<template>
    <div class="shopApplication mt10 mb10">
        <ul class="shopApplication-ul">
            <p class="t1 c1 l2 mb10">Shop application </p>
            <li v-for="(item,key) in shop" class="shopApplication-ul-li mb10" :key="key">
                <div class="t2 c2 l3 mb10 allMidBox">{{item.shop_name}}</div>
                <div class="shop-btn">
                    <el-button type="success" circle
                      icon="el-icon-check" @click="agree(item.seller_id)">
                    </el-button>
                    <el-button type="danger" circle
                      icon="el-icon-close" @click="reject(item.seller_id)">
                    </el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
 .shopApplication{
    &-ul {
      padding: 0px;
      &-li {
      padding: 10px 20px;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px $c5;
      list-style: none;
      display: flex;
      justify-content: space-around;
      }
    }
 }
</style>
