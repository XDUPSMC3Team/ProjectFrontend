<script>
// import { mapActions, mapState } from 'vuex';
import Product from '@/components/productItem.vue';

export default {
  name: '',
  components: {
    Product,
  },
  data() {
    return {};
  },
  props: {},
  // computed: mapState({
  //   count: state => state.example.num,
  // }),
  created() {
    // console.log(this.$_.chunk(['a', 'b', 'c', 'd'], 2)); // config lodash
    // this.$successN('成功！', '你是个人才');
    // this.$get('/test/t', {
    //   name: 'ddd',
    //   pass: 's',
    // });
    // this.$error('失败！');
    // this.$warn('警告！');
    // this.$info('提示！');
    // this.getNumUp();
  },
  mounted() {},
  methods: {
    // ...mapActions({
    //   getNumUp: 'getNumUp',
    // }),
  },
};

</script>

<template>
<div id="app">
  <!-- 导航栏 -->
  <Product
  name="iphoneX"
  pic="http://cdn.helloyzy.cn/dmall.jpg"
  price="8999"
  description="New Generation iPhone X, Face ID support, Full Screen Design."
  updateTime="2018-09-20 12:32:22"
  categoryId="2"
  :attributeList="{memory: ['8G', '12G']}"
  >
  </Product>
  <!-- 分类banner -->
  <!-- 精选banner -->
  <!-- footer -->
</div>
</template>

<style lang="scss">

#app {

}
</style>
