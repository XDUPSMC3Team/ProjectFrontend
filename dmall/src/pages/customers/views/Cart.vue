<script>
import { mapState, mapGetters } from 'vuex';
import cartItem from '@/components/cartItem.vue';

export default {
  name: 'Cart',
  components: {
    cartItem,
  },
  props: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList,
    }),
    ...mapGetters([
      'isCartEmpty',
      'cartTotalPrice',
    ]),
  },
  methods: {
    changeAmount({ amount, cartId }) {
      this.$store.dispatch('cartChangeAmount', { amount, cartId });
    },
    // 从购物车中删除
    removeFromCart(cartId) {
      this.$store.dispatch('cartRemoveProduct', cartId)
        .then(() => {
          this.$success('Delete! You Have Removed Product');
        });
    },
    order() {
      this.$store.dispatch('cartOrder')
        .then(() => {
          this.$success('Success! You Have Order All Product');
          setTimeout(() => {
            this.$router.push('/my');
          }, 1000);
        });
    },
  },
  created() {
    this.$store.dispatch('cartGetProducts');
  },
  mounted() {},
};

</script>
<template>
<div >
  <cart-item
  v-for="cart in cartList"
  :key="cart.id"
  :specsId="cart.specsId"
  :cartId="cart.id"
  :price="cart.price"
  :stock="cart.stock"
  :name="cart.name"
  :amount="cart.amount"
  :detail="cart.detail"
  :pic="cart.pic"
  v-on:changeAmount="changeAmount"
  v-on:removeFromCart="removeFromCart"
  />
  <div class="total mt20 p30">
    <div class="colBox">
      <p><span class="l1 t1 c_info">Total: </span><span class="t1 l3 c1">${{cartTotalPrice}}</span></p>
      <el-button type="primary" size="medium" @click="order" class="mt10">Order</el-button>
    </div>
  </div>
  <div class="allMidBox empty" v-if="isCartEmpty">
    <i class="iconfont icon-chaibaoguoqujian-xianxing icon mb20"></i>
    <p class="c3 t1 l3">Your Cart Is Empty</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .empty{
    width: 100%;
    height: calc(100vh - 61px);
    .icon {
      font-size: 100px;
      color: $placeHolder;
    }
  }
  .total {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid $placeHolder;
  }
</style>
