<script>
import order from '@/components/orderItem.vue';

export default {
  name: 'Order',
  components: {
    order,
  },
  props: {},
  data() {
    return {
      dateTime: '',
      type: '0',
      key: '',
      searchType: 0, // 0:按照时间 1: 按照关键字
    };
  },
  methods: {
    searchByKey() {
      if (!this.key) {
        return this.$warn('Keywords can not be empty！');
      }
      this.$store.dispatch('orderSearchByKey', this.key);
      return false;
    },
    search(type) {
      if (!this.dateTime) {
        this.type = '0';
        return this.$warn('Please Choose Bench Date First');
      }
      this.$store.dispatch('orderSearchByDays', {
        date: this.dateTime,
        type,
      });
      return false;
    },
    chooseDate(dateTime) {
      this.type = '0';
      this.dateTime = dateTime;
      this.$store.commit('orderClearPageItem'); // 清空
    },
  },
  created() {},
  mounted() {},
  computed: {
    orderList() {
      return this.$store.state.order.orderPageItemList;
    },
  },
};
</script>
<template>
<div class="allMidBox p20">
  <p class="title">Order Center</p>
  <p class="t3 c3 l3 mb40">All Order Will Show Below</p>
  <div v-if="searchType === 0" class="allMidBox">
    <el-date-picker v-model="dateTime" value-format="yyyy-MM-dd" type="date" placeholder="Choose Bench Date" @change="chooseDate"></el-date-picker>
    <el-radio-group v-model="type" @change="search" class="mt10">
      <!-- 1-当日，2-当周，3-当月，4-当年 -->
      <el-radio-button label="1">Daily</el-radio-button>
      <el-radio-button label="2">Weekly</el-radio-button>
      <el-radio-button label="3">Monthly</el-radio-button>
      <el-radio-button label="4">Yearly</el-radio-button>
    </el-radio-group>
    <p class="mt10 link t3 l2 c_info" @click="searchType = 1;$store.commit('orderClearPageItem');key='';type='0';dateTime=''">Use Keyword -></p>
  </div>
  <div v-if="searchType === 1" class="allMidBox">
    <el-input v-model="key" placeholder="Input Keywords"></el-input>
    <el-button type="primary" @click="searchByKey" class="mt10">Search</el-button>
    <p class="mt10 link t3 l2 c_info" @click="searchType = 0;$store.commit('orderClearPageItem');key='';type='0';dateTime=''">Use Timeline -></p>

  </div>
  <div class="mt30 p20">
    <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="i in orderList" :key="i.id">
      <order :payStatus="i.payStatus" :status="i.status" :orderId="i.id" :shopName="i.shopName" :money="i.money" :createTime="i.createTime" :productDesc="i.productDesc"></order>
    </el-col>
  </div>
</div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 36px;
  font-weight: 600;
  color: #000;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>
