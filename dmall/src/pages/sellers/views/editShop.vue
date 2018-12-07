<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      shopInfo: {
        name:'', // 店名
        description:'', // 店描述
        createTime: '', // 开店时间
        id: '', // 店铺id
      }
    };
  },
  computed: {},
  created() {
    this.shopInfo = this.$route.params;
  },
  mounted() {},
  methods: {},
};
</script>

<template>
<div class="shop">
  <el-form label-position="right" label-width="80px" :model="shopInfo">
    <el-form-item label="name">
      <el-input v-model="shopInfo.name" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="description">
      <el-input v-model="shopInfo.description" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="createTime">
      <el-input v-model="shopInfo.createTime" class="mb20"></el-input>
    </el-form-item>
  </el-form>
  <div class="shop-btn">
    <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-check" circle></el-button>
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
