<script>
/*eslint-disable */
export default {
  components: {},
  props: {
      payStatus: Number,
      status: Number,
      orderId: Number,
      shopName: String,
      money: Number,
      createTime: String,
      productDesc: String,
  },
  data() {
    return {
    };
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: 'orderDetail',
        query: {
          id: this.orderId,
        },
      });
    }
  },
  created() {},
  mounted() {},
  computed: {
    statusMap() {
      return this.$store.state.order.statusEnum;
    },
    payStatusMap() {
      return this.$store.state.order.payStatusEnum;
    },
  },
};
</script>
<template>
<div class="orderItem colBox m10 p10" @click="goDetail">
  <p class="l1 t1 shopName pb5">{{shopName}}</p>
  <div class="price mt10">
    <p class="l1 c_info product">{{productDesc}}</p>
    <p class="l1 t2 c_like">$ {{money}}</p>
  </div>

  <p :class="payStatus === 1 ? 'payStatus ':'payError'" class="center t2 l1 mt10">{{payStatusMap[payStatus]}}</p>

  <p class="l3 c3 t4 t_end mt10">{{createTime}}</p>

</div>
</template>

<style lang="scss" scoped>
  .orderItem {
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 1px 4px 18px #dfdfdf;
  .shopName {
      border-bottom:  1px solid $placeHolder;
    }
    .price {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      font-size: 22px;
      font-weight: bolder;
    }
    .payStatus {
      background: $success;
      color: $white;
    }
    .payError {
      background: $error;
      color: $white;
    }
  }
  .center {
    text-align: center;
  }
  .end {
    text-align: end;
  }
</style>
