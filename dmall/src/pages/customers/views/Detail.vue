<script>
import {
  mapState,
  mapGetters,
} from 'vuex';

export default {
  name: 'detail',
  components: {},
  data() {
    return {
      paymentValue: '',
      dialogVisible: false,
    };
  },
  props: {},
  created() {
    const productId = this.$route.query.id;
    this.$store.dispatch('productDetailInit', productId)
      .then((data) => {});
  },
  mounted() {},
  beforeDestroy() {
    this.$store.dispatch('productClearAll');
  },
  methods: {
    // 确认下订单
    confirmOrder() {
      this.$message.confirm('Are You Sure To Order It？')
        .then(() => {
          this.makeOrder();
        });
    },
    // 取消支付
    cancelPay() {
      this.dialogVisible = false;
      this.$success('Order has sent to your page');
    },
    // 下单
    makeOrder() {
      this.$store.dispatch('orderMake', {
        specsId: this.$store.state.product.detail.id,
        amount: this.$store.state.product.buyNum,
      })
        .then((data) => {
          this.dialogVisible = true;
          this.paymentValue = `${this.$baseURL}/customer.html#/pay?id=${data}`.replace('/api', '');
        });
    },
    // 收藏商品
    clickLike() {
      this.$store.dispatch('productDetailAddLike')
        .then(() => {
          this.$successN('Add Success!', 'Product Added To Your Favorites!');
        });
    },
    // // 收藏店铺
    // collectShop() {
    //   this.$store.dispatch('collectShop', this.$store.state.product.detail.shopId)
    //     .then(() => {
    //       this.$successN('Add Success!', 'Shop Added To Your Favorites!');
    //     });
    // },
    // 进入店铺
    goShop() {
      this.$router.push({
        name: 'shop',
        query: {
          id: this.$store.state.product.detail.shopId,
        },
      });
    },
    cancelLike() {
      this.$store.dispatch('productDetailCancelLike')
        .then(() => {
          this.$successN('Cancel Success!', 'Removed From Your Favorites!');
        });
    },
    clickAdd() {
      this.$store.dispatch('productDetailAddCart')
        .then(() => {
          this.$success('Add Successfuly! Your Products Are Waiting For You ~');
        });
    },
    changeTab() {
      this.$store.dispatch('productDetailUpdate');
    },
  },
  computed: {
    ...mapState({
      detail: state => state.product.detail,
      attrMap: state => state.product.attributeMap,
      isCollected: state => state.product.isCollected,
    }),
    ...mapGetters([
      'isCollected',
    ]),
    buyNum: {
      set(val) {
        this.$store.commit('productDetailChangeBuyNumber', val);
      },
      get() {
        return this.$store.state.product.buyNum;
      },
    },
  },
};
</script>

<template>
<div class="detail">
  <!-- 店铺信息 -->
  <div class="shop mb20">
    <div class="rowBox box">
      <p class="l1 c1 name">{{detail.shopName}}</p>
      <el-button class="ml10" type="success" icon="el-icon-star-on" @click="goShop">Enter Shop</el-button>
    </div>
    <p class="desc c3 t3 l3">{{detail.shopDesc}}</p>
  </div>
  <!-- 商品信息 -->
  <el-row :gutter="40">
    <el-col :lg="12" :sm="24" :md="24">
      <div class="detail-img">
        <img :src="detail.pic" alt="">
      </div>
    </el-col>
    <el-col :lg="12" :sm="24" :md="24">
      <div class="detail-main">
        <p class="detail-main-name  l1 c1">{{detail.name}}</p>
        <p class="detail-main-desc mb20 t2 l3 c3">{{detail.description}}</p>
        <p class="detail-main-price mb30"><span>$ {{detail.stock !== 0 &&  detail.price || '--'}}</span></p>
        <div class="detail-main-tabs mb20" v-for="name in Object.keys(detail.attributeList)" :key="name">
          <p class="mb10 l2 c2 t2">{{ name }}</p>
          <div class="rowBox">
            <el-radio @change="changeTab" v-model="attrMap[name]" v-for="value in detail.attributeList[name]" :key="value" :label="value">{{value}}</el-radio>
          </div>
        </div>
        <p class="detail-main-stock l3 t3 c3 mb20">Stock： {{detail.stock || 0}}</p>
        <div class="rowBox mb20">
          <el-input-number class="ml10" v-model="buyNum" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="rowBox">
          <el-button class="ml10" type="primary" round size="medium" @click="clickAdd" :disabled="detail.stock === 0">ADD TO CART</el-button>
          <el-button class="ml10 order" type="primary" icon="el-icon-sold-out" size="medium" @click="confirmOrder" :disabled="detail.stock === 0">ORDER NOW</el-button>
          <el-button class="btn-like ml10" v-if="!isCollected" type="info" icon="el-icon-star-on" @click="clickLike">MARK</el-button>
          <el-button class="btn-cancel ml10" v-if="isCollected" type="info" icon="el-icon-star-on" @click="cancelLike">UNMARK</el-button>
        </div>

      </div>
    </el-col>
  </el-row>
  <p class="mt20 mb20 t1 l1 c1">COMMENT</p>
  <div class="comment mt20">
    <div class="comment-item p10" v-for="i in detail.commentList" :key="i">
      <img src="http://cdn.helloyzy.cn/images/avatar2.svg" alt="">
      <div class="ml20 colBox">
        <span class="t2 l3 c1">{{i.username}}</span>
        <span class="t3 l3 c2">{{i.commentContent}}</span>
      </div>
    </div>
  </div>
  <el-dialog title="Info" :visible.sync="dialogVisible" width="80%">
    <div class="allMidBox m20">
      <span class="t1 l1 c1 mb20">Payment QR Code</span>
      <qriously :value="paymentValue" :size="200" />
      <a :href="paymentValue" class="mt20 t2 l2 c_info">Payment Link</a>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelPay">Cancel</el-button>
    </span>
  </el-dialog>
</div>
</template>

<style lang="scss">
.detail {
  padding: 20px 20px;
  .comment {
    border-top: 1px solid $placeHolder;
    &-item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
       border-bottom: 1px solid $placeHolder;
      img {
        height: 60px;
        width: 60px;
        object-fit: contain;
      }
    }
  }

  &-img {
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &-main {
    &-name {
      font-size: 36px;
    }

    &-price {
      span {
        font-size: 60px;
        color: $info;
      }
    }

    &-stock {}

    .order {
      background: $orange;
      border: 0;
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

  .shop {
    border-bottom: 1px solid #dddcdc;

    .box {
      justify-content: space-between;

      .el-icon-star-on {
        align-content: flex-end;
      }
    }

    .name {
      font-size: 32px;
    }

    .desc {}
  }
}
</style>
