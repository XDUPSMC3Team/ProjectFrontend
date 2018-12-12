<script>
import {
  mapState,
} from 'vuex';
import product from '@/components/productItem.vue';
// import {
//   Waterfall,
//   WaterfallSlot,
// } from 'vue-waterfall';

export default {
  name: '',
  components: {
    product,
    // Waterfall,
    // WaterfallSlot,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    products() {
      return this.$store.state.home.products;
    },
  },
  created() {
  },
  mounted() {
    this.$store.dispatch('productGetAll');
  },
  methods: {},
};
</script>

<template>
<div>
  <!-- <waterfall :line-gap="200" :watch="products"> -->
    <!-- each component is wrapped by a waterfall slot -->
    <!-- <waterfall-slot v-for="(i, index) in products" :width="1700" :height="1800" :order="index" :key="i.index"> -->

      <!-- <product :name="i.name" :shopId="i.shopId.toString()|| '0'" :productId="i.id.toString()|| '0'" :collectId="i.collectId && i.collectId.toString() || '0'" :pic="i.pic" :description="i.description" :updateTime="i.updateTime" :categoryId="i.categoryId.toString()" :attributeList="JSON.parse(i.attributeList)" /> -->

    <!-- </waterfall-slot> -->
  <!-- </waterfall> -->
  <el-row>
    <el-col v-for="i in products" :key="i.id" :xs="24" :sm="24" :lg="6" :xl="6" :md="6">
      <product :name="i.name" :shopId="i.shopId.toString()|| '0'"
      :productId="i.id.toString()|| '0'" :collectId="i.collectId && i.collectId.toString() || '0'"
      :pic="i.pic" :description="i.description"
      :updateTime="i.updateTime" :categoryId="i.categoryId.toString()"
      :attributeList="JSON.parse(i.attributeList)" />
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss">
</style>
