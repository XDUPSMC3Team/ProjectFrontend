<script>
/*eslint-disable */
import user from '@/components/user.vue';
import lines from '@/components/lines.vue';

import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  name: 'My',
  components: {
    user,
    lines,
  },
  props: {},
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/my.jpeg',
      activeName: 'paid'
    };
  },
  methods: {
    pay(index, orderList){
      const orderId = orderList[index].id;
      this.$store.dispatch('orderPay', orderId)
        .then(() => {
          this.$store.dispatch('orderGetOrders');
          this.$successN('Paid!', 'Waiting For The Seller Post The Product')
        })
    },
    cancel(index, orderList){
      const orderId = orderList[index].id;
      this.$store.dispatch('orderCancel', orderId)
        .then(() => {
          this.$store.dispatch('orderGetOrders');
          this.$success('Cancel!');
        })
    },
    goShop(index,orderList) {
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
        <el-table :data="unPaidOrder" stripe style="width: 100%"
        >
          <el-table-column
          prop="shopName" label="Shop Name">
          </el-table-column>
          <el-table-column prop="productDesc" label="Product"
          class-name="l1"
          >
          </el-table-column>
          <el-table-column 
          class-name="c_like l1" 
          label-class-name="c_font"
          prop="money" label="Price($)">
          </el-table-column>
          <el-table-column prop="receiverName" label="Receive Name">
          </el-table-column>
          <el-table-column prop="address" label="Receive Address">
          </el-table-column>
          <el-table-column prop="createTime" label="Create Time" width="180">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="Operations"
              width="160">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="pay(scope.$index, unPaidOrder)"
                  type="success"
                  round
                  size="small">
                  pay
                </el-button>
                <el-button
                  @click.native.prevent="cancel(scope.$index, unPaidOrder)"
                  type="danger"
                  round
                  size="small">
                  cancel
                </el-button>
              </template>
          </el-table-column>
          <el-table-column
              label="Shop"
              width="160">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="goShop(scope.$index, unPaidOrder)"
                  type="primary"
                  round
                  size="small">
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
    <!-- processing order, preparing for Shipment, shipped ， complete, comment, return, return complete -->
    <el-tabs v-model="activeName"  class="orders mt30 p20">
      <el-tab-pane label="sent" name="sent">用户管理</el-tab-pane>
      <el-tab-pane label="received" name="received">配置管理</el-tab-pane>
      <el-tab-pane label="comment" name="comment">角色管理
        <div class="test"></div>
      </el-tab-pane>
      <el-tab-pane label="rejecting" name="rejecting">定时任务补偿</el-tab-pane>
      <el-tab-pane label="rejected" name="rejected">定时s任务补偿</el-tab-pane>
    </el-tabs>
  </el-row>
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
.orders{
  border-radius: 6px;
  background: #ffffff;
}
.test {
  height: 1000px;
}
</style>
