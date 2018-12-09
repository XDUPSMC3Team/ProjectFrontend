<script>
import Shop from '../components/sellerInfo.vue';

export default {
  name: 'search',
  components: { Shop },
  props: {
    search: {
      type: String,
      default: '111',
    },
  },
  data() {
    return {
      shopInfo: {
        name: '森马', // 店名
        createTime: '2018-4-5', // 开店时间
        description: '这是一家卖森马衣服的店铺，价格优惠，应有尽有', // 店描述
        id: '1', // 店铺id
        status: '0', // 店铺状态
      },
      showShop: false,
    };
  },
  methods: {
    searchShop() {
      this.$successN('成功!', '搜索到了!');
      this.showShop = true;
    },
  },
};
</script>

<template>
    <div class="search mt15 mb15 ml10 mr10">
        <el-input placeholder="请输入内容" v-model="search" class="search-input">
            <el-button slot="append" icon="el-icon-search" @click="searchShop"></el-button>
        </el-input>
        <div class="search-result" v-if="showShop">
            <Shop :name = shopInfo.name :createTime = shopInfo.createTime
              :description = shopInfo.description :id = shopInfo.id :status= shopInfo.status />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
