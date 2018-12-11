<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      shopInfo: {
       email: '', //商家邮箱
       phone: '',
       shopId: 0,
      },
    };
  },
  computed: {},
  created() {
    this.shopInfo.shopId = this.$route.params.id;
  },
  mounted() {},
  methods: {
    editShop() {
      this.$successN("成功","店铺详细已经更改");
      this.$router.push('/');
    },
  },
};
</script>

<template>
<div class="shop">
  <el-form label-position="right" label-width="80px" :model="shopInfo">
    <div class="shop-title t1 c1 l1 mt20 mb20">editShop</div>
    <el-form-item label="email">
      <el-input v-model="shopInfo.email" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="phone">
      <el-input v-model="shopInfo.phone" class="mb20"></el-input>
    </el-form-item>
  </el-form>
  <div class="shop-btn">
    <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="editShop"></el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.shop{
    padding: 20px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
}
</style>
