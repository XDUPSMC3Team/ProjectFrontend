<script>
/* eslint-disable */
export default {
  components: {},
  props: {
    specsId: { type: Number, default: 1, },
    cartId: {type: Number, default: 1},
    price: {type: Number, default: 100},
    stock: {type: Number, default: 100},
    name: {type: String, default: 'iPhone X'},
    amount: {type: Number, default: 1},
    detail: {type: String, default: "{\"Color\":\"Black\",\"Memory\":\"512GB\",\"Payment\":\"Alipay\"}"},
    pic: {type: String, default: 'http://cdn.helloyzy.cn/iphone.jpg'},
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      this.$emit('removeFromCart', this.cartId)
    }
  },
  created() {},
  mounted() {},
  computed: {
    attr: (self) => {
      let detail = JSON.parse(self.detail) || {};
      let attr = '';
      Object.keys(detail).forEach(key => {
          attr += detail[key] + ', ';
        });
      return attr.substr(0, attr.lastIndexOf(','))
    },
    realAmount: {
      get () { return this.amount },
      set (val) {
        // this.$store.dispatch('cartChangeAmount', {
        //   cartId: this.cartId,
        //   amount: data
        // })
        this.$emit('changeAmount', {
          cartId: this.cartId,
          amount: val
        });
      }
    }
  }
};

</script>
<template>
<el-row type="flex" :gutter="20" justify="center" class="cartItem mt10">

  <el-col :lg="4" :sm="4" :xs="4" :md="4" class="allMidBox hidden-md-and-down">
    <img class="pic" :src="pic" alt="">
  </el-col>

  <el-col :lg="5" :sm="8" :xs="8" :md="4" class="allMidBox">
    <p class="c1 t1 l1">{{name}}</p>
    <p class="c3 t3 l3 mt5">{{attr}}</p>
  </el-col>

  <el-col :lg="4" :sm="4" :xs="4" :md="4" class="allMidBox">
    <el-input-number v-model="realAmount" :min="1" :max="stock" label="amount"></el-input-number>
  </el-col>

  <el-col :lg="4" :sm="6" :xs="6" :md="4" class="allMidBox">
    <p class="c_info price t1 l1">$ {{price * realAmount}}</p>
  </el-col>

  <el-col :lg="4" :sm="6" :xs="6" :md="4" class="allMidBox">
    <el-button type="danger" icon="el-icon-delete delete t1 l1" @click="remove" circle></el-button>
  </el-col>
</el-row>
</template>

<style lang="scss" scoped>
  .cartItem {
    border: 1px solid lighten($placeHolder, 10%);
    height: 140px;
    .pic{
      height: 80px;
      width: 80px;
      object-fit: contain;
    }
    .price {
      font-weight: 700;
    }
    .delete {
      cursor: pointer;
    }
  }
</style>
