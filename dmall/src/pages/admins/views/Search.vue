<script>
import Shop from '../components/sellerInfo.vue';
import Customer from '../components/customer.vue';
import { SearchShop } from '@/api/admin';

export default {
  name: 'search',
  components: { Shop, Customer, },
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
          shopDesc:'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
      ],
      customerInfo: [{
        username: 'cw',
        email: '845202636@qq.com'
      }],
      showShop: false,
      search: '',
      select: '',
    };
  },
  methods: {
    searchInfo(search) {
      switch (this.select) {
        case "Shop":
          SearchShop(search).then((res) => {
            if (res.data.code === 0) {
              this.shopInfo = res.data.data;
              this.$successN('ok!', 'search shop ok');
              this.showShop = true;
            } else {
              this.$errorN('error', res.data.msg);
            }
          });
          break;
        case "Customer":
          this.$successN("ok","serach customer ok")
          this.showShop = true;
          break;
        case "Order": 
          this.$successN("ok","serach order ok")
          this.showShop = true;
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
        <Customer :info = item v-for="(item,key) in customerInfo" :key="key"/>
    </div>
    <div class="search-result" v-if="showShop && select === 'Order'">
        <Shop :info = item v-for="(item,key) in shopInfo" :key="key"/>
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
