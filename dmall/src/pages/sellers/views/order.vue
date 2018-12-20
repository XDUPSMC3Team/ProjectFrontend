<script>
import navList from '../components/navList.vue';
export default {
  name: 'order',
  components:{ navList, },
  data() {
    return {
      PaymentedInfo: [{
          id: 1,
          buyerId: 4,
          receiverName: "wxj",
          money: 24000,
          status: 0, //（0已下单/1已发货/2运输中/3已收货/4已评价/5退货中/6退货成功）
          payStatus: 1,
          receiveTime: null,
          createTim: "2018-12-20 13:57:25",
          updateTime: "2018-12-20 13:57:25",
          orderDetailDataList: [
            {
              productId: 25,
              productName: "iPhone 8",
              amount: 3,
              price: 8000,
            }
          ]
        },{
          id: 1,
          buyerId: 4,
          orderNumber:'1288958464659',
          receiverName: "wxj",
          money: 24000,
          status: 0,
          payStatus: 1,
          receiveTime: null,
          createTim: "2018-12-20 13:57:25",
          updateTime: "2018-12-20 13:57:25",
          orderDetailDataList: [
            {
              productId: 25,
              productName: "iPhone 8",
              amount: 3,
              price: 8000,
            }
          ]
      }],
      CompletedInfo: [{
          id: 1,
          buyerId: 4,
          receiverName: "wxj",
          money: 24000,
          status: 0, //（0已下单/1已发货/2运输中/3已收货/4已评价/5退货中/6退货成功）
          payStatus: 1,
          receiveTime: null,
          createTim: "2018-12-20 13:57:25",
          updateTime: "2018-12-20 13:57:25",
          orderDetailDataList: [
            {
              productId: 25,
              productName: "iPhone 8",
              amount: 3,
              price: 8000,
            }
          ]
        },{
          id: 1,
          buyerId: 4,
          orderNumber:'1288958464659',
          receiverName: "wxj",
          money: 24000,
          status: 0,
          payStatus: 1,
          receiveTime: null,
          createTim: "2018-12-20 13:57:25",
          updateTime: "2018-12-20 13:57:25",
          orderDetailDataList: [
            {
              productId: 25,
              productName: "iPhone 8",
              amount: 3,
              price: 8000,
            }
          ]
      }],
      status: null,
      totalMoney: '8888888',
      showBox: false,
    };
  },
 methods: {
   editStatus(masterId, status) {
     this.showBox = true;
   },
   submitEdit(status) {
     this.$successN('ok', 'order status has been change!');
     window.location.reload();
   },
   cancelEdit() {
     this.showBox = false;
   }
 },
 created() {
 },  
}
</script>

<template>
  <div class="order">
    <nav-list></nav-list>
    <div class="t1 c2 l1 mt20 mb20">
      <span>Amount of profit: </span>
      <span>{{totalMoney}}</span>
    </div>
    <p class="t1 c1 l1 mt20 mb20">Paymented order</p>
    <ul>
      <li class="order-li" v-for="(item, key) in PaymentedInfo" :key="key">
        <span>{{item.id}}</span>
        <span>{{item.receiverName}}</span>
        <span v-if="item.status === 0">has been placed</span>
        <span v-if="item.status === 1">Shipped</span>
        <span v-if="item.status === 2">transportation</span>
        <span v-if="item.status === 3">received</span>
        <el-button class="order-btn" type="primary"
          icon="el-icon-edit" circle @click="editStatus(item.id,status)">
        </el-button>
      </li>
    </ul>
    <div class="box" v-if="showBox">
      <el-select v-model="status" clearable placeholder="select">
        <el-option value="1" label="Shipped">Shipped</el-option>
        <el-option value="2" label="transportation">transportation</el-option>
        <el-option value="3" label="received">received</el-option>
      </el-select>
      <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitEdit(status)"></el-button>
      <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </div>
    <p class="t1 c1 l1 mt20 mb20">Completed order</p>   
    <ul>
      <li class="order-li" v-for="(item, key) in CompletedInfo" :key="key">
        <span>{{item.id}}</span>
        <span>{{item.receiverName}}</span>
        <span>{{item.money}}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.order{
  ul{
    padding: 0;
  }
  &-li{
    padding: 10px 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
  }
  .box{
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>


