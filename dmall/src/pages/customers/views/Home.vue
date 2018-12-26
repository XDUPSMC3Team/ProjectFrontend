<script>
import { mapGetters } from 'vuex';
import product from '@/components/productItem.vue';


export default {
  name: '',
  components: {
    product,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    products() {
      return this.$store.state.home.products;
    },
    ...mapGetters([
      'isSearchResultEmpty',
    ]),
  },
  created() {
    if (this.$route.query.keyword) {
      this.$store.dispatch('productSearch', this.$route.query.keyword);
    }
    if (this.$route.query.categoryId) {
      this.$store.dispatch('productSearchByCategory', this.$route.query.categoryId);
    }
  },
  mounted() {
    // this.$store.dispatch('productGetAll');
  },
  methods: {},
};
</script>

<template>
<div>
  <div class="empty allMidBox  mt60" v-if="isSearchResultEmpty">
    <i class="el-icon-goods empty-icon"></i>
    <p class="c3">Result Is Empty, Try Other Word?</p>
  </div>
  <el-row>
    <el-col v-for="i in products" :key="i.id" :xs="24" :sm="24" :lg="6" :xl="6" :md="6">
      <product :name="i.name" :shopId="i.shopId"
      :productId="i.id"
      :pic="i.pic" :description="i.description"
      :updateTime="i.updateTime"
      :attributeList="i.attributeList" />
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
</style>
