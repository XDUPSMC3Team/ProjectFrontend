<script>
// import { mapActions, mapState } from 'vuex';
import Product from '@/components/productItem.vue';
import DLine from '@/components/line.vue';
import DFooter from '@/components/footer.vue';
import Card from '@/components/productCard.vue';
import SignInput from '@/components/signInput.vue';

export default {
  name: '',
  components: {
    Product,
    DLine,
    DFooter,
    Card,
    SignInput,
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
<div>
  <!-- 产品详情 -->
  <!-- <Product
  name="iphoneX"
  pic="http://cdn.helloyzy.cn/iphone.jpg"
  price="8999"
  description="New Generation iPhone X, Face ID support, Full Screen Design."
  updateTime="2018-09-20 12:32:22"
  categoryId="2"
  :attributeList="{memory: ['8G', '12G']}"
  >
  </Product> -->

  <Product/>

  <!-- 分割线 -->
  <DLine words="props.words"/>

  <!-- 卡片 -->
  <Card type="big"/>
  <Card type="bg"/>
  <Card type="top"/>

  <!-- input -->
  <sign-input/>
  <!-- footer -->
  <DFooter/>
</div>
</template>

<style lang="scss">
</style>
