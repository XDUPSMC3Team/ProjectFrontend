<script>
import { AdvShop } from '@/api/seller';

export default {
  name: '',
  components: {},
  data() {
    return {
      showBox: false,
      money:'',
    };
  },
  props: {
    shopName: { type: String, default: 'props.sellerName' }, // 店名
    createTime: { type: String, default: 'props.createTime' }, // 开店时间
    shopDesc: { type: String, default: 'props.sellerDescription' }, // 店描述
    id: { type: Number, default: 0 }, // 店铺id
    telephone: { type: String, default: 'props.phone' }, //店铺手机
    email: { type: String, default: 'props.email' }, //店铺邮箱
    status: { type: Number, default: 0 }, //店铺状态
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    editInfo() {
      this.$router.push({
        name: 'editShop',
        params: {
          shopId: this.id,
          telephone: this.telephone,
          email: this.email,
        },
      });
    },
    advShop() {
      this.showBox = true;
    },
    submitEdit(id,money) {
     AdvShop(id,money).then( (res) => {
        if ( res.data.code === 0) {
          this.$successN('ok', 'Your advertisement bid has been submitted!');
          this.showBox = false;
          this.money = '';
        }
     })
   },
   cancelEdit() {
     this.showBox = false;
   },
  },
};
</script>

<template>
<div class="shop">
  <!-- 店铺 -->
  <p class="shop-name t1 c1 l2 mb10">
    <span>{{shopName}}</span>
    <span v-if="status == 0" class="shop-status t5 c3 l3 ml10">accepting</span>
    <span v-if="status == 1" class="shop-status t5 c3 l3 ml10">accepted success</span>
    <span v-if="status == 2" class="shop-status t5 c3 l3 ml10">accepted fail</span>
  </p>
  <!-- 店铺介绍 -->
  <p class="shop-intro t4 c2 l3 mb10 ml15">{{shopDesc}}</p>
  <!-- 商店创建时间 -->
  <p class="shop-time t5 c3 l3 mb10">{{createTime}}</p>
  <!-- 按钮  -->
  <div class="shop-btn">
    <el-button class="shop-btn-edit" type="primary"
     icon="el-icon-message" circle @click="advShop()" title="Apply for AD positions to the administrator">
    </el-button>
    <el-button class="shop-btn-edit" type="primary"
     icon="el-icon-edit" circle @click="editInfo">
    </el-button>
  </div>
  <div class="box" v-if="showBox">
    <el-input type="text" placeholder="please enter money" v-model="money"></el-input>
    <el-button class="mt10" type="primary" icon="el-icon-check" circle @click="submitEdit(id,money)"></el-button>
    <el-button class="mt10" type="primary" icon="el-icon-close" circle @click="cancelEdit"></el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .shop {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-time {
      text-align: right;
    }
    &-btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &-edit {
        height: 40px;
        box-shadow: 0px 4px 10px lighten($info, 20%);
      }
      &-delete {
        font-size: 14px;
        background: $btn_like;
      }
      &-delete:hover {
        background: darken($btn_like, 10%);
      }
    }
    .box{
      text-align: center;
      padding: 20px 20px 10px;
      margin-top: 20px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px $c5;
    }
  }
</style>
