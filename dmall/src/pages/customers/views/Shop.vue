<script>
import product from '@/components/productItem.vue';

import {
  mapState,
  mapGetters,
} from 'vuex';

export default {
  name: 'Shop',
  components: {
    product,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    clickLike() {
      this.$store.dispatch('collectShop', this.$route.query.id)
        .then(() => {
          this.$store.dispatch('shopGetInfo', this.$route.query.id);
          this.$success('Mark Shop Successfully!');
        });
    },
    cancelLike() {
      this.$store.dispatch('collectCancelShop', {
        collectId: this.info.collectId,
        shopId: this.info.id,
      })
        .then(() => {
          this.$store.dispatch('shopGetInfo', this.$route.query.id);
          this.$success('Unmark Shop Successfully!');
        });
    },
  },
  created() {
    const shopId = this.$route.query.id;
    this.$store.dispatch('shopGetInfo', shopId);
  },
  mounted() {},
  computed: {
    ...mapState({
      info: state => state.shop.info,
      statusMap: state => state.shop.statusEnums,
    }),
    ...mapGetters([
      'shopIsCollected',
      'shopProducts',
      'isShopProductsEmpty',
    ]),
  },
};
</script>
<template>
<div>
  <!-- 店铺信息 -->
  <div class="shop mb20 mt20 p20">
    <div class="rowBox box">
      <p class="l1 c1 name">{{info.shopName}}
        <span class="l2 t3" :class="info.status === 3 ? 'c_error' : 'c_success'">{{statusMap[info.status]}}</span>
      </p>
      <el-button class="btn-like ml10" v-if="!shopIsCollected" type="info" icon="el-icon-star-on" @click="clickLike">MARK</el-button>
      <el-button class="btn-cancel ml10" v-if="shopIsCollected" type="info" icon="el-icon-star-on" @click="cancelLike">UNMARK</el-button>
    </div>
    <p class="desc c3 t3 l3">{{info.shopDesc}}</p>
      <div class="rowBox infoBox mt10">
        <p><span class="c1 t2 l2">Email: </span><span class="c2 t3 l3">{{info.email}}</span></p>
        <p><span class="c1 t2 l2">Phone: </span><span class="c2 t3 l3">{{info.phone}}</span></p>
      </div>
  </div>
  <!-- 兜底 -->
  <div class="empty allMidBox  mt60" v-if="isShopProductsEmpty">
    <i class="iconfont icon-bumanyi empty-icon"></i>
    <p class="c3">Shop Owner Is Lazy.</p>
  </div>
  <!-- 商品信息 -->
  <el-row>
    <el-col v-for="i in shopProducts" :key="i.id" :xs="24" :sm="24" :lg="6" :xl="6" :md="6">
      <product :name="i.name" :shopId="i.shopId" :productId="i.id" :pic="i.pic" :description="i.description" :updateTime="i.updateTime" :attributeList="i.attributeList" />
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
.empty{
    height: calc(100vh - 61px);
  &-icon {
    color: $placeHolder;
    font-size: 160px;
  }
}
  .shop {
    border-bottom: 1px solid #dddcdc;
    .box{
      justify-content: space-between;
      .el-icon-star-on{
        align-content: flex-end;
      }
    }
    .name{
      font-size: 32px;
    }
    .infoBox {
      justify-content: space-between;
      p {
        // align-content: flex-end;
      }
    }
  }
    .btn {
    &-like {
      background: $btn_like;
      border: none;
    }

    &-cancel {
      background: $c3;
      border: none;
    }
  }
</style>
