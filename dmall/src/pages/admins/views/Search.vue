<script>
import Shop from '../components/sellerInfo.vue';
import Customer from '../components/customer.vue';
import Order from '../components/order.vue';
import { SearchShop, SearchOrder, SearchCustomer } from '@/api/admin';

export default {
  name: 'search',
  components: { Shop, Customer, Order },
  props: {
  },
  data() {
    return {
      shopInfo: [{
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
      customerInfo: {
        username: 'cw',
        email: '845202636@qq.com',
      },
      orderInfo: {
        id: 1,
        buyerId: 4,
        receiverName: 'wxj',
        money: 24000,
        status: 0,
        payStatus: 1,
        receiveTime: null,
        createTime: '2018-12-20 13:57:25',
        updateTime: '2018-12-20 13:57:25',
        orderDetailDataList: [
          {
            productId: 25,
            productName: 'iPhone 8',
            amount: 3,
            price: 8000,
          },
        ],
      },
      showShop: false,
      search: '',
      select: '',
    };
  },
  methods: {
    searchInfo(search) {
      switch (this.select) {
        case 'Shop':
          SearchShop(search).then((res) => {
            if (res.data.code === 0) {
              this.shopInfo = res.data.data;
              this.$successN('ok!', 'search shop ok');
              this.showShop = true;
            }
          });
          break;
        case 'Customer':
          SearchCustomer(search).then((res) => {
            if (res.data.code === 0) {
              this.customerInfo = res.data.data;
              this.$successN('ok!', 'search customer ok');
              this.showShop = true;
              console.log(ths.customerInfo);
            }
          });
          break;
        case 'Order':
          SearchOrder(search).then((res) => {
            if (res.data.code === 0) {
              this.orderInfo = res.data.data;
              this.$successN('ok!', 'search order ok');
              console.log(this.orderInfo);
              this.showShop = true;
            }
          });
          break;
      }
    },
    cancelShow() {
      this.showShop = false;
    },
  },
};
</script>

<template>
  <div class="search mt15 mb15 ml10 mr10">
    <div class="search mt15 mb15 ml10 mr10">
      <el-input placeholder="search" v-model="search" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="select" @change="cancelShow">
          <el-option label="Shop" value="Shop"></el-option>
          <el-option label="Customer" value="Customer"></el-option>
          <el-option label="Order" value="Order"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"  @click="searchInfo(search)"></el-button>
      </el-input>
    </div>
    <div class="search-result" v-if="showShop && select === 'Shop'">
        <Shop :info = item v-for="(item,key) in shopInfo" :key="key"/>
    </div>
    <div class="search-result" v-if="showShop && select === 'Customer'">
        <Customer :info = customerInfo />
    </div>
    <div class="search-result" v-if="showShop && select === 'Order'">
        <Order :detail = orderInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-select{
    width: 110px;
  }
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
