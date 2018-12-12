<script>
import Shop from '../components/sellerInfo.vue';
import { SearchShop } from '@/api/admin';

export default {
  name: 'search',
  components: { Shop },
  props: {
  },
  data() {
    return {
      shopInfo: [{
          createTime: '2018-4-5',
          email: '123@qq.com',
          id: 1,
          phone: '123456',
          shopName: 'shop_name',
          sellerId: 1,
          shopDesc:'xxxxx',
          status: '0',
          updateTime: '2018-5-9',
        },
      ],
      showShop: false,
      search: '',
    };
  },
  methods: {
    searchShop(shopName) {
      SearchShop(shopName).then((res) => {
        if (res.data.code === 0) {
          this.shopInfo = res.data.data;
          this.$successN('成功!', '搜索到了!');
          this.showShop = true;
        } else {
          this.$errorN('错误', res.data.msg);
        }
      });
    },
  },
};
</script>

<template>
    <div class="search mt15 mb15 ml10 mr10">
        <el-input placeholder="请输入内容" v-model="search" class="search-input">
            <el-button slot="append" icon="el-icon-search" @click="searchShop(search)"></el-button>
        </el-input>
        <div class="search-result" v-if="showShop">
            <Shop :info = item v-for="(item,key) in shopInfo" :key="key"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
