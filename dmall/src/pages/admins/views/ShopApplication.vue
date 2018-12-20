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
      shopApplication: [
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
      shopApprove: [
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
      shopReject: [
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
      shopClosure: [
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
          this.getShopInfo();
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
    },
    reject(shopId) {
      RejectShopById(shopId).then((res) => {
        if (res.data.code === 0) {
          this.$successN('ok', 'reject shop');
          this.getShopInfo();
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
    },
    deleteShop(id) {
      // 封停店铺
      this.$successN('ok', 'shop delete');
    },
    getShopInfo() {
      CheckNewShop().then((res) => {
        if (res.data.code === 0) {
          this.shopApplication = res.data.data;
        } else {
          this.$errorN('error', res.data.msg);
        }
      });
      // 获取通过的店铺

      // 获取未通过店铺

      // 获取封停店铺
    },
  },
  created() {
    this.getShopInfo();
  },
};
</script>

<template>
    <div class="shopApplication mt10 mb10">
      <ul class="shopApplication-ul">
        <p class="t1 c1 l2 mb10">Shop application </p>
        <li v-for="(item,key) in shopApplication" class="shopApplication-ul-li mb10" :key="key">
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
      <ul class="shopApplication-ul">
        <p class="t1 c1 l2 mb10">Shop approve </p>
        <li v-for="(item,key) in shopApprove" class="shopApplication-ul-li mb10" :key="key">
          <div class="t2 c2 l3 mb10 allMidBox">{{item.shopName}}</div>
          <div class="shop-btn">
            <el-button type="danger" circle
              icon="el-icon-delete" @click="deleteShop(item.id)">
            </el-button>
          </div>
        </li>
      </ul>
      <ul class="shopApplication-ul">
      <p class="t1 c1 l2 mb10">Shop reject </p>
      <li v-for="(item,key) in shopReject" class="shopApplication-ul-li mb10" :key="key">
        <div class="t2 c2 l3 mb10 allMidBox">{{item.shopName}}</div>
      </li>
    </ul>
    <ul class="shopApplication-ul">
      <p class="t1 c1 l2 mb10">Shop close </p>
      <li v-for="(item,key) in shopClosure" class="shopApplication-ul-li mb10" :key="key">
        <div class="t2 c2 l3 mb10 allMidBox">{{item.shopName}}</div>
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
      justify-content: space-between;
      }
    }
 }
</style>
