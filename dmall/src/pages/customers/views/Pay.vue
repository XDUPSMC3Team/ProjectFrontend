<script>
import lines from '@/components/lines.vue';

export default {
  name: 'Pay',
  components: {
    lines,
  },
  props: {},
  data() {
    return {
      info: {},
      status: 0,
    };
  },
  methods: {
    pay() {
      this.$store.dispatch('orderPay', this.$route.query.id)
        .then(() => {
          this.$successN('Paid!', 'Waiting For The Seller Post The Product');
          this.status = 1;
          // setTimeout(() => {
          //   this.$router.push('/my');
          // }, 2000);
        });
    },
  },
  created() {
    // 从URL参数获取金额， 点击按钮支付，跳转到订单详情页
    const orderId = this.$route.query.id;
    this.$store.dispatch('orderGetOrderDetail', orderId);
  },
  mounted() {},
  computed: {
    orderDetail() {
      return this.$store.state.order.showOrderDetail;
    },
  },
};
</script>
<template>
<div class="pay" >
  <el-row v-if="status === 0">
    <el-col :span="24">
      <div class="banner">
        <div class="musk">
          <p class="t_center title pt40">Checkout Center</p>
        </div>
      </div>
    </el-col>
  </el-row>

  <lines v-if="status === 0" :type="8" title="Receiver Info" class="mb20 mt20"></lines>

  <!-- 收件人信息 -->
  <div v-if="status === 0" class="pl20 pr20">
    <p class="t3 l3 c1 border mb10">Name: <span class="l2 pl20">{{orderDetail.receiverName}}</span></p>
    <p class="t3 l3 c1 border mb10">Address: <span class="l2 pl20">{{orderDetail.address}}</span></p>
    <p class="t3 l3 c1 border mb10">Create Time: <span class="t3 l2 pl20">{{orderDetail.createTime}}</span></p>
  </div>

  <lines v-if="status === 0" :type="6" :title="'Shop: ' + orderDetail.shopName" class="mb20 mt20"></lines>
  <!-- 商品信息 -->
  <el-table v-if="status === 0" :data="orderDetail.orderDetailList" style="width: 100%">
    <el-table-column prop="productName" label="Name">
    </el-table-column>
    <el-table-column prop="amount" label="Amount">
    </el-table-column>
    <el-table-column prop="price" label="Price">
    </el-table-column>
  </el-table>

  <lines v-if="status === 0" :type="5" title="Total" class="mb20 mt20"></lines>
  <!-- 总金额 -->
  <div v-if="status === 0" class="pr20 pl20 mt10">
    <p class="t1 l3 c1 border mb10">Total Price: <span class="l2 pl20">$ {{orderDetail.money}}</span></p>
  </div>
  <div v-if="status === 0" class="allMidBox mt30">
    <el-button class="buyBtn" type="success" size="medium" @click="pay"> BUY </el-button>
  </div>
  <div v-if="status === 1" class="success allMidBox">
    <i class="el-icon-success iconx"></i>
    <p class="mt30 text">Pay Success!</p>
    <p class="t3 l3 c2 mt10">Please Refresh Your Page</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.pay {
  .banner {
    height: 130px;
    background-image: url('http://cdn.helloyzy.cn/checkout.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    .musk {
      height: 130px;
      width: 100%;
      background: rgba(0, 0, 0, .4);

      .title {
        color: #ffffff;
        font-size: 36px;
        font-weight: bold;
      }
    }
  }

  .border {
    padding-bottom: 4px;
    border-bottom: 1px solid $placeHolder;
  }

  .buyBtn {
    font-size: 24px;
    height: 50px;
    width: 160px;
  }
}
.success {
  height: 90vh;
  .iconx {
    color: $green;
    font-size: 100px;
  }
  .text {
    font-size: 42px;
  }
}
</style>
