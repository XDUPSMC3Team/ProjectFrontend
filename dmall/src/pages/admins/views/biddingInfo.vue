<script>
import { FindBidding,FindSaleHistory,FindRate,ChangeRate,FindProfit, } from '@/api/admin';
import ProductType from '../components/productType.vue';

export default {
  name: 'bidding',
  components:{ProductType},
  data() {
    return {
      activeName: 'first',
      biddingInfo: {
        shops:[],
        products:[],
      },
      productInfo:{
        id: 1 ,
        shopId: 0 ,
        name: 'props.name', // 商品名
        pic: 'http://cdn.helloyzy.cn/dmall.jpg', // 商品头图
        description: 'props.description', // 描述
        categoryId: 0 , // 分类id TODO:后面做枚举映射
        attributeList: { memory: ['4G', '6G'], color: ['red', 'blue', 'green']}, // 分类tag
      },
      tags: [],
      rate:'2%',
      date:'',
      profit: {
        daily: '1000',
        weekly: '2000',
        monthly: '3000',
        yearly: '4000',
        all: '18000',
      },
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
      accountBalance:'47300',
      withdrawal:'',
      account:'',
      showBox:false,
      showProduct: false,
      showTX:false,
      newRate:'',
    };
  },
  computed: {
    dailyProfit:function(){
      return parseFloat(this.rate) * parseFloat(this.profit.daily.split('%')[0])/100;
    },
    weeklyProfit:function(){
     return parseFloat(this.rate) * parseFloat(this.profit.weekly.split('%')[0])/100;
    },
    monthlyProfit:function(){
      return parseFloat(this.rate) * parseFloat(this.profit.monthly.split('%')[0])/100;
    },
    yearlyProfit:function(){
      return parseFloat(this.rate) * parseFloat(this.profit.yearly.split('%')[0])/100;
    },
    allProfit:function(){
      return parseFloat(this.rate) * parseFloat(this.profit.all.split('%')[0])/100;
    },
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitEdit(newRate) {
     ChangeRate(newRate).then( (res) => {
       if(res.data.code === 0){
        this.showBox = false;
        FindRate().then( (res) => {
          if(res.data.code === 0) {
            console.log(res.data.data);
          }
        });
       }
     })
    },
    cancelEdit() {
      this.showBox = false;
    },
    editRate() {
      this.showBox = true;
    },
    tiXian() {
      this.showTX = true;
    },
    submitTX(account,withdrawal) {
      
    },
    cancelTX() {
      this.showTX = false;
    },
    pushOrderDetail(item) {
      const data = JSON.stringify(item);
      this.$router.push({
        name: 'order',
        query: {
          info: data,
        },
      })
    },
    pushShop(id) {
      this.$router.push({
        path: 'shopProduct',
        query: {
          shopId: id,
        },
      });
    },
    pushProduct(item) {
      this.showProduct = true;
      this.tags = [];
      let attr = JSON.parse(item.attributeList);
      Object.keys(attr).forEach((key) => {
        attr[key].forEach((tag) => {
          this.tags.push(tag);
        });
      });
      this.productInfo = item;
    },
    getNewProfit() {
      FindProfit(this.date).then( (res) => {
        if(res.data.code === 0) {
          let data = res.data.data;
          Object.keys(data).forEach((key) =>{
            data[key] = data[key].toString();
          })
          this.profit = data;
        }
      });
    },
  },
  created() {
    FindBidding().then( (res) => {
      if( res.data.code === 0) {
        this.biddingInfo = res.data.data;
      }
    });
    FindSaleHistory().then( (res) => {
      if(res.data.code === 0) {
        this.CompletedInfo = res.data.data;
      }
    });
    FindRate().then( (res) => {
      if(res.data.code === 0) {
        this.rate = res.data.data;
      }
    });
    FindProfit(this.date).then( (res) => {
      if(res.data.code === 0) {
        let data = res.data.data;
          Object.keys(data).forEach((key) =>{
            data[key] = data[key].toString();
          })
          this.profit = data;
      }
    });
  },
}
</script>

<template>
  <div class="bidding">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="bidding Shop" name="first">
      <ul>
        <li v-for="(item,key) in biddingInfo.shops"  :key="key">
          <span>{{key+1}}</span>
          <span>{{item.shopName}}</span>
          <span>{{item.shopDesc}}</span>
          <span>{{item.adMoney}}</span>
          <el-button type="primary" icon="el-icon-view" circle @click="pushShop(item.id)"></el-button>
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="bidding Product" name="second">
      <ul>
        <li v-for="(item,key) in biddingInfo.products"  :key="key">
          <span>{{key+1}}</span>
          <span class="product-name mb10">{{item.name}}</span>
          <span class="product-intro mb10">{{item.description}}</span>
          <span class="product-intro mb10">{{item.adMoney}}</span>
          <el-button type="primary" icon="el-icon-view" circle @click="pushProduct(item)"></el-button>
        </li>
      </ul>
      <div class="home" v-if="showProduct">
        <!-- 商品头图 -->
        <div class="home-banner mb10" :style="'background:url('+productInfo.pic+') center no-repeat;'"></div>
        <!-- 商品名 -->
        <p class="home-name t1 c1 l2 mb10">{{productInfo.name}}</p>
        <!-- 商品介绍 -->
        <p class="home-intro t4 c2 l3 mb10">{{productInfo.description}}</p>
        <!-- 标签 -->
        <ul class="tag rowBox">
          <el-tag type="info" class="tag-item pl10 pr10 mr10 mb20"
          v-for="tag of tags" :key="tag">{{tag}}</el-tag>
        </ul>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Sales history" name="third">
      <ul>
      <li class="order-li" v-for="(item, key) in CompletedInfo" :key="key">
        <span>{{item.id}}</span>
        <span>{{item.receiverName}}</span>
        <span>{{item.money}}</span>
        <el-button class="order-btn" type="primary"
          icon="el-icon-view" circle @click="pushOrderDetail(item)">
        </el-button>
      </li>
    </ul>
    </el-tab-pane>
    <el-tab-pane label="profit" name="fourth">
      <div class="top t1 c1 l2 mb10">
        <span>exchange rate:</span>
        <span>{{rate}}</span>
        <el-button type="danger" icon="el-icon-edit" circle @click="editRate()" class="ml20"></el-button>
        <div class="box" v-if="showBox">
          <el-input v-model="newRate"></el-input>
          <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitEdit(newRate)"></el-button>
          <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelEdit"></el-button>
        </div>
      </div>
      <div class="block">
        <el-date-picker
          v-model="date"
          type="date"
          @change="getNewProfit()"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
      <div class="profit">
        <div class="daily t1 c1 l2 mb10">
          <span class="name">daily profit:</span>
          <span class="t2 c2 l3">{{profit.daily}} X {{rate}} = {{dailyProfit}}</span>
        </div>
        <div class="weekly t1 c1 l2 mb10">
          <span class="name">weekly profit:</span>
          <span class="t2 c2 l3">{{profit.weekly}} X {{rate}} = {{weeklyProfit}}</span>
        </div>
        <div class="monthly t1 c1 l2 mb10">
          <span class="name">monthly profit:</span>
          <span class="t2 c2 l3">{{profit.monthly}} X {{rate}} = {{monthlyProfit}}</span>
        </div>
        <div class="yearly t1 c1 l2 mb10">
          <span class="name">yearly profit:</span>
          <span class="t2 c2 l3">{{profit.yearly}} X {{rate}} = {{yearlyProfit}}</span>
        </div>
        <div class="all t1 c1 l2 mb10">
          <span class="name">all profit:</span>
          <span class="t2 c2 l3">{{profit.all}} X {{rate}} = {{allProfit}}</span>
        </div>
        <div class="all t1 c1 l2 mb10">
          <span class="name">account balance:</span>
          <span class="t2 c2 l3">{{accountBalance}}</span>
          <el-button type="success" @click="tiXian()" class="ml20">withdrawal</el-button>
          <div class="box" v-if="showTX">
            <el-input v-model="account" placeholder="account" class="mb10"></el-input>
            <el-input v-model="withdrawal" placeholder="money" class="mb10"></el-input>
            <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitTX(account,withdrawal)"></el-button>
            <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelTX()"></el-button>
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>  
</template>

<style lang="scss" scoped>
.bidding {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
}
.profit {
  text-align: left;
}
.name{
  width: 11rem;
  display: inline-block;
}
ul {
  padding: 0;
}
.order-li,li {
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
}
.home {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-banner {
      height: 100px;
      background-size: contain!important;
    }
    .tag {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      &-item {
        padding-top: 0;
        height: 22px;
        line-height: 22px;
        background: $info;
        color: $txt_white;
      }
    }
  }
  .box{
    margin-top: 10px;
    text-align: center;
  }
</style>


