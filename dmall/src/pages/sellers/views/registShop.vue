<script>
import {registerShop} from '@/api/seller'
export default {
  name: '',
  components: {},
  data() {
    return {
      shopInfo: {
        shopName: '', // 店名
        shopDesc: '', // 店描述
        sellerId: '', //卖家id
        phone: '', //手机号  
        email: '', //邮箱
      },
    };
  },
  computed: {},
  created() {
    this.shopInfo.sellerId = this.$route.params.sellerId;
  },
  mounted() {},
  methods: {
    applyShop() {
      registerShop(this.shopInfo).then( (res) => {
        if(res.data.code === 0){
          this.$successN("ok","shop apply");
          this.$router.push('/');
        } else {
          this.$successN("失败",res.data.msg);
        }
      })
    },
  },
};
</script>

<template>
<div class="shop">
  <el-form label-position="right" label-width="80px" :model="shopInfo">
    <div class="shop-title t1 c1 l1 mt20 mb20">registShop</div>
    <el-form-item label="shopName">
      <el-input v-model="shopInfo.shopName" class="mb20"></el-input>
    </el-form-item>
    <el-form-item label="shopDesc">
      <el-input v-model="shopInfo.shopDesc" class="mb20"></el-input>
    </el-form-item>
     <el-form-item label="phone">
      <el-input v-model="shopInfo.phone" class="mb20"></el-input>
    </el-form-item>
     <el-form-item label="email">
      <el-input v-model="shopInfo.email" class="mb20"></el-input>
    </el-form-item>
  </el-form>
  <div class="shop-btn">
    <el-button class="shop-btn-edit mt10" type="primary" icon="el-icon-check" circle @click="applyShop"></el-button>
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
