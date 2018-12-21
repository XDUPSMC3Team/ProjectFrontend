<script>
import product from '@/components/collectProductItem.vue';

export default {
  name: 'Favorite',
  components: {
    product,
  },
  props: {},
  data() {
    return {
      // bgURL: 'http://cdn.helloyzy.cn/favorite.jpeg',
    };
  },
  methods: {},
  created() {
    this.$store.dispatch('collectGetProducts');
  },
  mounted() {},
  computed: {
    products() {
      return this.$store.state.favorite.collectProducts;
    },
  },
};
</script>
<template>
<!-- <div class="fav" :style="'background:url('+bgURL+') center no-repeat;'"> -->
<div class="fav">
  <product
  v-for="item in products"
  :key="item.id"
  :collectId="item.id"
  :name="item.name"
  :description="item.description"
  :pic="item.pic"
  >
  </product>
</div>
</template>

<style lang="scss" scoped>
.fav {
  padding: 20px;
  min-height: calc(100vh - 61px);
  width: 100%;
}
</style>
