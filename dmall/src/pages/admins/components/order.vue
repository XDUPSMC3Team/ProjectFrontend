<script>
export default {
  name: 'order',
  components: {},
  data() {
    return {

    };
  },
  props: {
    info: {
      id: 1,
      buyerId: 4,
      receiverName: "wxj",
      money: 24000,
      status: 0,
      payStatus: 1,
      receiveTime: null,
      createTime: "2018-12-20 13:57:25",
      updateTime: "2018-12-20 13:57:25",
      orderDetailDataList: [
        {
          productId: 25,
          productName: "iPhone 8",
          amount: 3,
          price: 8000,
        }
      ]
    },
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {

  },
};
</script>

<template>
<div class="order">
  <!--  -->
  <p class="order-name t2 c3 l2 mb10">
    <span>{{info.id}}</span>
    <span>{{info.receiverName}}</span>
    <span>{{info.money}}</span>
  </p>
  <!--  -->
  <p class="order-email t2 c3 l2 mb10">
    <span v-for="(item, key) in info.orderDetailDataList" :key="key">{{item.productName}}</span>
  </p>
</div>
</template>

<style lang="scss" scoped>
  .order {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-name {
      display: flex;
      justify-content: space-between;
    }
    &-email {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
