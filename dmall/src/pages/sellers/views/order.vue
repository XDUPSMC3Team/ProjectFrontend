<script>
import navList from '../components/navList.vue';
import { findAllMoney,  findSaleHistory,  findPayOrder, editPayOrder, findAllSaleHistory, FindBalance, Withdraw, FindWH,} from '@/api/seller';
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
      CompletedInfo: {
        daily: [{
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
        weekly: [{
            id: 3,
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
            id: 4,
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
        monthly: [{
            id: 5,
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
            id: 6,
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
        yearly: [{
            id: 7,
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
            id: 8,
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
      },
      allOrder:[],
      status: '',
      masterId:0,
      showBox: false,
      shopId:0,
      activeName: 'first',
      activeName2: 'first',
      totalMoney: {
        daily: '1000',
        weekly: '2000',
        monthly: '3000',
        yearly: '4000',
      },
      accountBalance:'43255',
      withdrawal:'',
      account:'',
      withdrawalHistory:[],
      showTX:false,
      showWH:false,
      date:'',

    };
  },
 methods: {
   editStatus(masterId) {
     this.showBox = true;
     this.masterId = masterId;
   },
   submitEdit(masterId,status) {
     editPayOrder(masterId,status).then( (res) => {
        if ( res.data.code === 0) {
          this.$successN('ok', 'order status has been change!');
          window.location.reload();
        }
     })
   },
   cancelEdit() {
     this.showBox = false;
   },
   tiXian() {
     this.showTX = true;
     this.showWH = false;
   },
   cancelTX() {
     this.showTX = false;
   },
   submitTX(shopId,account,withdrawal) {
     Withdraw(shopId,account,withdrawal).then( (res) => {
       if(res.data.code === 0) {
         this.$successN('ok','withdraw');
         this.showTX = false;
         FindBalance(this.shopId).then( (res) => {
          if (res.data.code === 0) {
            this.accountBalance = res.data.data;
          }
        })
       }
     })
   },
   pushOrderDetail(item) {
     const data = {
       info:item,
       shopId: this.shopId,
     };
     this.$router.push({
       path: 'orderDetail',
       query: {
         info:JSON.stringify(data),
       },
     })
   },
   handleClick(tab, event) {
      console.log(tab, event);
    },
    checkDate(){
      findAllMoney(this.shopId,this.date).then( (res) => {
        if (res.data.code === 0) {
          this.totalMoney = res.data.data;
        }
      });
      findSaleHistory(this.shopId,this.date).then( (res) => {
        if (res.data.code === 0) {
          this.CompletedInfo = res.data.data;
        }
      });
    },
    showHistory() {
      this.showTX = false;
      FindWH(this.shopId).then( (res) => {
        if(res.data.code === 0) {
          this.withdrawalHistory = res.data.data;
          this.showWH = true;
        }
      })
    },
    closeWH() {
      this.showWH = false;
    },
 },
 created() {
   this.shopId = this.$route.query.shopId;
   findAllMoney(this.shopId,this.date).then( (res) => {
     if (res.data.code === 0) {
       this.totalMoney = res.data.data;
     }
   });
   findSaleHistory(this.shopId,this.date).then( (res) => {
     if (res.data.code === 0) {
       this.CompletedInfo = res.data.data;
     }
   });
   findAllSaleHistory(this.shopId).then( (res) => {
     if (res.data.code === 0) {
       this.allOrder = res.data.data;
     }
   });
   findPayOrder(this.shopId).then( (res) => {
     if (res.data.code === 0) {
       this.PaymentedInfo = res.data.data;
     }
   });
   FindBalance(this.shopId).then( (res) => {
     if (res.data.code === 0) {
       this.accountBalance = res.data.data;
     }
   })
 },  
}
</script>

<template>
  <div class="order">
    <nav-list :shop-id="shopId"></nav-list>
    <el-date-picker
      v-model="date"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      @change="checkDate()">
    </el-date-picker>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="daily" name="first">
         <div class="t1 c2 l1 mt20 mb20">
          <span>Amount of profit: </span>
          <span>{{totalMoney.daily}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="weekly" name="second">
         <div class="t1 c2 l1 mt20 mb20">
          <span>Amount of profit: </span>
          <span>{{totalMoney.weekly}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="monthly" name="third">
         <div class="t1 c2 l1 mt20 mb20">
          <span>Amount of profit: </span>
          <span>{{totalMoney.monthly}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="yearly" name="fourth">
         <div class="t1 c2 l1 mt20 mb20">
          <span>Amount of profit: </span>
          <span>{{totalMoney.yearly}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="all" name="fifth">
         <div class="t1 c2 l1 mt20 mb20">
          <span>Amount of profit: </span>
          <span>{{totalMoney.all}}</span>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="all2 t1 c1 l2 mb10">
      <span class="name t1 c1 l1">account balance:</span>
      <span class="t1 c1 l1 ml20">{{accountBalance}}</span>
      <el-button type="success" @click="tiXian()" class="ml20">withdraw</el-button>
      <el-button type="success" @click="showHistory()" class="ml20">history</el-button>
      <div class="box2 mt10" v-if="showTX">
        <el-input v-model="account" placeholder="account" class="mb10 boxInput"></el-input>
        <el-input v-model="withdrawal" placeholder="money" class="mb10 boxInput"></el-input>
        <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitTX(shopId,account,withdrawal)"></el-button>
        <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelTX()"></el-button>
      </div>
      <div class="history" v-if="showWH">
        <el-button type="primary" icon="el-icon-close" class="closeWH" circle @click="closeWH()"></el-button>
        <ul>
          <li v-for="(item,key) in withdrawalHistory" :key="key">
            <span>{{key+1}}</span>
            <span>{{item.name}}</span>
            <span>{{item.account}}</span>
            <span>{{item.money}}</span>
            <span>{{item.createTime}}</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="t1 c1 l1 mt20 mb20">Paid order</p>
    <ul>
      <li class="order-li" v-for="(item, key) in PaymentedInfo" :key="key">
        <span>{{item.id}}</span>
        <span>{{item.receiverName}}</span>
        <span v-if="item.status === 0">has been paid</span>
        <span v-if="item.status === 1">Shipped</span>
        <span v-if="item.status === 2">transportation</span>
        <span v-if="item.status === 3">received</span>
        <div>
          <el-button class="order-btn" type="primary"
            icon="el-icon-edit" circle @click="editStatus(item.id)">
          </el-button>
          <el-button class="order-btn" type="primary"
            icon="el-icon-view" circle @click="pushOrderDetail(item)">
          </el-button>
        </div>
      </li>
    </ul>
    <div class="box" v-if="showBox">
      <el-select v-model="status" clearable placeholder="select">
        <el-option value="1" label="Shipped">Shipped</el-option>
        <el-option value="2" label="transportation">transportation</el-option>
      </el-select>
      <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitEdit(masterId,status)"></el-button>
      <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelEdit"></el-button>
    </div>
    <p class="t1 c1 l1 mt20 mb20">Completed order</p>
    <el-tabs v-model="activeName2" @tab-click="handleClick">
      <el-tab-pane label="daily" name="first">
        <ul>
          <li class="order-li" v-for="(item, key) in CompletedInfo.daily" :key="key">
            <span>{{item.id}}</span>
            <span>{{item.receiverName}}</span>
            <span>{{item.money}}</span>
            <el-button class="order-btn" type="primary"
              icon="el-icon-view" circle @click="pushOrderDetail(item)">
            </el-button>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="weekly" name="second">
        <ul>
          <li class="order-li" v-for="(item, key) in CompletedInfo.weekly" :key="key">
            <span>{{item.id}}</span>
            <span>{{item.receiverName}}</span>
            <span>{{item.money}}</span>
            <el-button class="order-btn" type="primary"
              icon="el-icon-view" circle @click="pushOrderDetail(item)">
            </el-button>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="monthly" name="third">
        <ul>
          <li class="order-li" v-for="(item, key) in CompletedInfo.monthly" :key="key">
            <span>{{item.id}}</span>
            <span>{{item.receiverName}}</span>
            <span>{{item.money}}</span>
            <el-button class="order-btn" type="primary"
              icon="el-icon-view" circle @click="pushOrderDetail(item)">
            </el-button>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="yearly" name="fourth">
        <ul>
          <li class="order-li" v-for="(item, key) in CompletedInfo.yearly" :key="key">
            <span>{{item.id}}</span>
            <span>{{item.receiverName}}</span>
            <span>{{item.money}}</span>
            <el-button class="order-btn" type="primary"
              icon="el-icon-view" circle @click="pushOrderDetail(item)">
            </el-button>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="all" name="fifth">
        <ul>
          <li class="order-li" v-for="(item, key) in allOrder" :key="key">
            <span>{{item.id}}</span>
            <span>{{item.receiverName}}</span>
            <span>{{item.money}}</span>
            <el-button class="order-btn" type="primary"
              icon="el-icon-view" circle @click="pushOrderDetail(item)">
            </el-button>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>   
  </div>
</template>

<style lang="scss" scoped>
.order{
  .el-tabs, .all, .all2{
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
  }
  ul{
    padding: 0;
  }
  &-li, .history li{
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
  .boxInput{
    display: flex;
    align-items: center;
  }
  .history {
    position: relative;
  }
  .closeWH {
    position: absolute;
    right: 0;
    top: -20px;
  }
  .all2 {
    text-align: left;
    margin-top: 30px;
  }
  .el-tabs {
    text-align: left;
  }
}
</style>


