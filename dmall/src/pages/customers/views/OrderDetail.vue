<script>
import lines from '@/components/lines.vue';

export default {
  name: 'OrderDetail',
  components: {
    lines,
  },
  props: {},
  data() {
    return {
      // 发货中：确认收货，收货完成：评价，退货
    };
  },
  methods: {
    sendback() {},
    comment() {},
    confirm() {
      this.$store.dispatch('orderConfirm', this.detail.id)
        .then(() => {
          this.$store.dispatch('orderGetOrderDetail', this.$route.query.id);
          this.$success('Confirm Recevied Success');
        });
    },
    goShop() {
      this.$router.push({
        name: 'shop',
        query: {
          id: this.detail.shopId,
        },
      });
    },
    goMy() {
      this.$router.push('/my');
    },
    goProduct(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id,
        },
      });
    },
  },
  created() {
    this.$store.dispatch('orderGetOrderDetail', this.$route.query.id);
  },
  mounted() {},
  computed: {
    detail() {
      return this.$store.state.order.showOrderDetail;
    },
  },
};
</script>
<template>
<div class="p10">
  <!-- -1 -->
  <div class="allMidBox cancelIcon c_error" v-if="detail.stepNum === 0">
    <i class="icon el-icon-error"></i>
    <p class="mt10 c2 t2 l3">Order Canceled</p>
  </div>
  <!-- 步骤条 -->
  <div class="p30 stepBox">
    <el-row type="flex" justify="center">
      <!-- 0~3 -->
      <el-col :span="24" v-if="detail.stepNum >= 1 && detail.stepNum < 4 ">
        <el-steps :align-center="true" :active="detail.stepNum" finish-status="success">
          <el-step title="Preparing"></el-step>
          <el-step title="Shipped"></el-step>
          <el-step title="Sending"></el-step>
          <el-step title="Complete"></el-step>
        </el-steps>
      </el-col>
      <!-- 3~4 -->
      <el-col :span="24" v-if="detail.stepNum >= 4 && detail.stepNum <= 5">
        <el-steps :align-center="true" :active="detail.stepNum - 3" finish-status="success">
          <el-step title="Complete"></el-step>
          <el-step title="Comment"></el-step>
        </el-steps>
      </el-col>
      <!-- 5~6 -->
      <el-col :span="24" v-if="detail.stepNum >= 6 && detail.stepNum <= 7 ">
        <el-steps :align-center="true" :active="detail.stepNum - 5" finish-status="success">
          <el-step title="Return"></el-step>
          <el-step title="Return Complete"></el-step>
        </el-steps>
      </el-col>
    </el-row>
  </div>

  <!-- 详细信息 -->
  <el-row :gutter="40">
    <el-col :xs="24" :sm="24" :lg="12" :md="24">
      <lines :type="8" title="Receiver Info" class="mb20 mt20"></lines>
      <div class="infoBox p20">
        <p class="t3 l3 c1 border mb15 " @click="goMy">Name: <span class="l2 pl20 name">{{detail.receiverName}}</span></p>
        <p class="t3 l3 c1 border mb15">Address: <span class="l2 pl20">{{detail.address}}</span></p>
        <p class="t3 l3 c1 border mb15">Total: <span class="l2 pl20 c_like">$ {{detail.money}}</span></p>
        <p class="t3 l3 c1 border mb15">Create Time: <span class="l2 pl20">{{detail.createTime}}</span></p>
        <p class="t3 l3 c1 border mb15">Update Time: <span class="l2 pl20">{{detail.updateTime}}</span></p>
        <p class="t3 l3 c1 border mb15">Order Code: <span class="l2 pl20">{{detail.id}}</span></p>
        <p class="t3 l3 c1 border mb15" v-if="detail.receiveTime">Receive Time: <span class="l2 pl20">{{detail.receiveTime}}</span></p>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="12" :md="24">
      <lines :type="4" title="Product Info" class="mb20 mt20"></lines>
      <div class="infoBox p20">
        <p class="t3 l3 c1 border mb15" @click="goShop">Shop Name: <span class="l2 pl20 shop">{{detail.shopName}}</span></p>
        <el-row>
          <el-col :span="24" v-for="i in detail.orderDetailList" :key="i.productId">
            <p @click="goProduct(i.productId)" class="t2 l1 c1 border mb15 rowBox">
              {{i.productName}}
              <span class="pl20 pr40">*</span>
              <span class="pr40">{{i.amount}}</span>
              <span class="l2 c_like t_end">$ {{i.price}}</span>
            </p>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>

  <!-- 操作 -->
  <div class="allMidBox">
    <el-row :gutter="40" type="flex" justify="center" class="mt20">
      <el-col :span="24" v-if="detail.status === 1">
        <el-button type="primary" @click="confirm">Confirm Received</el-button>
      </el-col>
      <el-col :span="12" v-if="detail.status === 3">
        <el-button type="primary" @click="comment">Comment</el-button>
      </el-col>
      <el-col :span="12" v-if="detail.status === 3 || detail.status === 4">
        <el-button type="warning" @click="sendback">SendBack</el-button>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<style lang="scss" scoped>
.cancelIcon {
  font-size: 66px;
}

.stepBox {
  box-shadow: 1px 4px 18px #dfdfdf;
}

.infoBox {
  border: 1px solid $placeHolder;
  border-radius: 6px;
}

.border {
  padding-bottom: 4px;
  border-bottom: 1px solid $placeHolder;
}

.name {
  cursor: pointer;
  color: $info;
}

.shop {
  cursor: pointer;
  color: $orange;
}
</style>
