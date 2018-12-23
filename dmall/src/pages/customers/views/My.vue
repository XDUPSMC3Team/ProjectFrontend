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
    };
  },
  methods: {
    pay(index, orderList){
      const orderId = orderList[index].id;
      console.log(orderId)
    },
    cancel(index, orderList){
      const orderId = orderList[index].id;
      console.log(orderId)
    }
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
<div class="my" :style="'background:url('+bgURL+') center no-repeat;'">
  <el-row :gutter="40">
    <el-col :md="12" :xs="24" :lg="8" :xl="8">
      <user />
    </el-col>
    <el-col :xs="24" :md="12" :lg="16" :xl="16">
      <div class="p10 orderBox mt20">
        <lines :type="5" title="Unpay Order" class="mb20"></lines>
        <el-table :data="unPaidOrder" stripe style="width: 100%"
        >
          <el-table-column
          prop="shopName" label="Shop Name" width="180">
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
          <el-table-column
              fixed="right"
              label="Operations"
              width="190">
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
          <el-table-column prop="createTime" label="Create Time" width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
.my {
  padding: 20px;
  min-height: calc(100vh - 61px);
  width: 100%;
}
.orderBox {
  border-radius: 6px;
  background: #ffd9ca;
}
</style>
