<script>
/*eslint-disable */
import user from '@/components/user.vue';
import lines from '@/components/lines.vue';
import order from '@/components/orderItem.vue';

import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  name: 'My',
  components: {
    user,
    lines,
    order
  },
  props: {},
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/my.jpeg',
      activeName: 'paid',
      dialogVisible: false,
      paymentValue: '',
    };
  },
  methods: {
    // 取消支付
    cancelPay() {
      this.dialogVisible = false;
    },
    showDialog(index, orderList) {
      const orderId = orderList[index].id;
      this.paymentValue = `${this.$baseURL}/customer.html#/pay?id=${orderId}`.replace('/api', '');
      this.dialogVisible = true;

    },
    pay(index, orderList) {
      const orderId = orderList[index].id;
      this.$store.dispatch('orderPay', orderId)
        .then(() => {
          this.$store.dispatch('orderGetOrders');
          this.$successN('Paid!', 'Waiting For The Seller Post The Product')
        })
    },
    cancel(index, orderList) {
      const orderId = orderList[index].id;
      this.$store.dispatch('orderCancel', orderId)
        .then(() => {
          this.$store.dispatch('orderGetOrders');
          this.$success('Cancel!');
        })
    },
    goShop(index, orderList) {
      this.$router.push({
        name: 'shop',
        query: {
          id: orderList[index].shopId
        },
      });
    },
  },
  created() {
    this.$store.dispatch('userGetInfo'); // 获取用户信息
    this.$store.dispatch('orderGetOrders'); // 获取所有订单
  },
  mounted() {},
  computed: {
    ...mapGetters([
      'unPaidOrder',
      'paidOrder',
      'sentOrder',
      'sendingOrder',
      'receivedOrder',
      'commentedOrder',
      'returningOrder',
      'returnedOrder',
      'canceledOrder',
    ]),
    ...mapState({
      'statusMap': state => state.order.statusEnum,
      'payStatusMap': state => state.order.payStatusEnum,
    }),
  },
};
</script>
<template>
<div class="my" :style="'background-image:url('+bgURL+')'">
  <el-row :gutter="40">
    <el-col :md="12" :xs="24" :lg="8" :xl="8">
      <!-- 用户卡片 -->
      <user />
    </el-col>
    <el-col :xs="24" :md="12" :lg="16" :xl="16">
      <!-- 未支付订单 -->
      <div class="p10 orderBox mt20">
        <lines :type="5" title="Processing Order (Unpaied)" class="mb20"></lines>
        <el-table :data="unPaidOrder" stripe style="width: 100%">
          <el-table-column prop="shopName" label="Shop Name">
          </el-table-column>
          <el-table-column prop="productDesc" label="Product" class-name="l1">
          </el-table-column>
          <el-table-column class-name="c_like l1" label-class-name="c_font" prop="money" label="Price($)">
          </el-table-column>
          <el-table-column prop="receiverName" label="Receive Name">
          </el-table-column>
          <el-table-column prop="address" label="Receive Address">
          </el-table-column>
          <el-table-column prop="createTime" label="Create Time" width="180">
          </el-table-column>
          <el-table-column fixed="right" label="Operations" width="160">
            <template slot-scope="scope">
              <el-button @click.native.prevent="showDialog(scope.$index, unPaidOrder)" type="success" round size="small">
                pay
              </el-button>
              <el-button @click.native.prevent="cancel(scope.$index, unPaidOrder)" type="danger" round size="small">
                cancel
              </el-button>
            </template>
          </el-table-column>
          <el-table-column label="Shop" width="160">
            <template slot-scope="scope">
              <el-button @click.native.prevent="goShop(scope.$index, unPaidOrder)" type="primary" round size="small">
                Enter Shop
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <!-- 支付后订单：已支付paid，已发货sent，已收货received，已评价comment，退货中rejecting，退货成功rejected -->
    <!-- processing order, preparing for Shipment, shipped ，sending,  complete, comment, return, return complete -->
    <el-tabs v-model="activeName" class="orders mt30 p20">
      <!-- 已付款 -->
      <el-tab-pane label="Preparing For Shipment" name="paid">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in paidOrder" :key="i.id">
            <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc">
            </order>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!-- 已发货 -->
      <el-tab-pane label="Shipped" name="sent">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in sentOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 已发货 -->
      <el-tab-pane label="Sending" name="sending">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in sendingOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 已收货 -->
      <el-tab-pane label="Complete" name="received">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in receivedOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 已评论 -->
      <el-tab-pane label="Comment" name="comment">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in commentedOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 退货中 -->
      <el-tab-pane label="Return" name="rejecting">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in returningOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 已退货 -->
      <el-tab-pane label="Return Complete" name="rejected">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in returnedOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
      <!-- 已取消订单 -->
      <el-tab-pane label="Canceled" name="canceld">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in canceledOrder" :key="i.id">
          <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </el-row>

  <!-- 弹窗 -->
  <el-dialog title="Info" :visible.sync="dialogVisible" width="80%">
    <div class="allMidBox m20">
      <span class="t1 l1 c1 mb20">Payment QR Code</span>
      <qriously :value="paymentValue" :size="200" />
      <a :href="paymentValue" class="mt20 t2 l2 c_info">Payment Link</a>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelPay">cancel</el-button>
    </span>
  </el-dialog>
</div>
</template>

<style lang="scss" scoped>
.my {
  padding: 20px;
  min-height: calc(100vh - 61px);
  width: 100%;
  background-color: #4b4444;
  background-repeat: no-repeat;
}

.orderBox {
  border-radius: 6px;
  background: #ffd9ca;
}

.orders {
  border-radius: 6px;
  background: #ffffff;
}
</style>
