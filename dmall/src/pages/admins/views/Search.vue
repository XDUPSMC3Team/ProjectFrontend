<script>
import Shop from '../components/sellerInfo.vue';
import { SearchShop } from '@/api/admin.js';

export default {
  name: 'search',
  components: { Shop },
  props: {
  },
  data() {
    return {
      shopInfo: {
        shop_name: 'sengMa', // 店名
        create_time: '2018-4-5', // 开店时间
        shop_desc: 'this is sengMa store!', // 店描述
        seller_id: '1', // 店铺id
        status: '0', // 店铺状态
        update_time: '2018-5-9',
      },
      showShop: false,
      search: '',
    };
  },
  methods: {
    searchShop(shopId) {
      SearchShop(shopId).then((res) => {
        if (res.data.code == 0) {
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
            <Shop :name = shopInfo.shop_name :createTime = shopInfo.create_time
              :description = shopInfo.shop_desc :id = shopInfo.seller_id :status= shopInfo.status />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
