<script>
import lines from '@/components/lines.vue';

export default {
  name: 'order',
  components: {lines},
  data() {
    return {

    };
  },
  props: {
    detail: {
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
  },
  computed: {},
  created() {
    console.log(this.detail);
  },
  mounted() {},
  methods: {

  },
};
</script>

<template>
<div class="p10">
  <!-- 详细信息 -->
  <el-row :gutter="40">
    <el-col :xs="24" :sm="24" :lg="12" :md="24">
      <lines :type="8" title="Receiver Info" class="mb20 mt20"></lines>
      <div class="infoBox p20">
        <p class="t3 l1 c1 border mb15 ">Name: <span class="l1 pl20 name">{{detail.receiverName}}</span></p>
        <p class="t3 l1 c1 border mb15">Address: <span class="l1 pl20">{{detail.address}}</span></p>
        <p class="t3 l1 c1 border mb15">Total: <span class="l1 pl20 c_like">$ {{detail.money}}</span></p>
        <p class="t3 l1 c1 border mb15">Create Time: <span class="l1 pl20">{{detail.createTime}}</span></p>
        <p class="t3 l1 c1 border mb15">Update Time: <span class="l1 pl20">{{detail.updateTime}}</span></p>
        <p class="t3 l1 c1 border mb15">Order Code: <span class="l1 pl20">{{detail.id}}</span></p>
        <p class="t3 l1 c1 border mb15" v-if="detail.receiveTime">Receive Time: <span class="l1 pl20">{{detail.receiveTime}}</span></p>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="12" :md="24">
      <lines :type="4" title="Product Info" class="mb20 mt20"></lines>
      <div class="infoBox p20">
        <p class="t3 l1 c1 border mb15">Shop Name: <span class="l1 pl20 shop">{{detail.shopName}}</span></p>
        <el-row>
          <el-col :span="24" v-for="i in detail.orderDetailDataList" :key="i.productId">
            <p class="t2 l1 c1 border mb15 rowBox">
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
</div>
</template>

<style lang="scss" scoped>
.p10 {
  text-align: left;
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
