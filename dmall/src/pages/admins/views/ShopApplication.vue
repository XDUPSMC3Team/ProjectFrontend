<script>
import { CheckNewShop, ApproveShopById, RejectShopById } from '@/api/admin';

export default {
  name: 'shopApplication',
  components: {
  },
  props: {
  },
  data() {
    return {
      shop: [
        {
          createTime: '2018-4-5',
          email: '123@qq.com',
          id: 1,
          phone: '123456',
          shopName: 'shop_name',
          sellerId: 1,
          shopDesc: 'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
        {
          createTime: '2018-4-5',
          email: '123@qq.com',
          id: 1,
          phone: '123456',
          shopName: 'shop_name',
          sellerId: 1,
          shopDesc: 'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
        {
          createTime: '2018-4-5',
          email: '123@qq.com',
          id: 1,
          phone: '123456',
          shopName: 'shop_name',
          sellerId: 1,
          shopDesc: 'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
        {
          createTime: '2018-4-5',
          email: '123@qq.com',
          id: 1,
          phone: '123456',
          shopName: 'shop_name',
          sellerId: 1,
          shopDesc: 'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
      ],
    };
  },
  methods: {
    agree(shopId) {
      ApproveShopById(shopId).then((res) => {
        if (res.data.code === 0) {
          this.$successN('ok', 'approve shop');
          this.getCheckShop();
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
    },
    reject(shopId) {
      RejectShopById(shopId).then((res) => {
        if (res.data.code === 0) {
          this.$successN('ok', 'reject shop');
          this.getCheckShop();
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
    },
    getCheckShop() {
      CheckNewShop().then((res) => {
        if (res.data.code === 0) {
          console.log(res.data.data);
          this.shop = res.data.data;
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
    },
  },
  created() {
    this.getCheckShop();
  },
};
</script>

<template>
    <div class="shopApplication mt10 mb10">
        <ul class="shopApplication-ul">
            <p class="t1 c1 l2 mb10">Shop application </p>
            <li v-for="(item,key) in shop" class="shopApplication-ul-li mb10" :key="key">
                <div class="t2 c2 l3 mb10 allMidBox">{{item.shopName}}</div>
                <div class="shop-btn">
                    <el-button type="success" circle
                      icon="el-icon-check" @click="agree(item.id)">
                    </el-button>
                    <el-button type="danger" circle
                      icon="el-icon-close" @click="reject(item.id)">
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
