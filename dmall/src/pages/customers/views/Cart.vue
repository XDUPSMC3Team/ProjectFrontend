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
</style>
