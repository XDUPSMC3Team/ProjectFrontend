<template>
  <div class="home">
    <div class="home-product">
      <el-row>
        <el-col :xs="24" :md="12" :lg="8" :xl="6" v-for="(item,key) in product" :key="key">
            <product-type :info = item />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductType from '../components/productType.vue';
import { findProductType } from '@/api/admin';

export default {
  name: 'home',
  components: {
    ProductType,
  },
  data() {
    return {
      product: [
      ],
    };
  },
  methods: {
  },
  created() {
    findProductType(this.$route.query.shopId).then((res) => {
      if (res.data.code === 0) {
        const data = res.data.data;
        data.forEach((item) => {
          item.attributeList = JSON.parse(item.attributeList);
        });
        this.product = data;
      } else {
        this.$successN('error', 'error');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
