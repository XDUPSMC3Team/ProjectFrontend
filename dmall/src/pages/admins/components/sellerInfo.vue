<script>
import { CloseShop } from '@/api/admin';

export default {
  name: '',
  components: {},
  data() {
    return {

    };
  },
  props: {
    info: {
      createTime: '2018-4-5',
      email: '123@qq.com',
      id: 1,
      phone: '123456',
      shopName: 'shop_name',
      sellerId: 1,
      shopDesc: 'xxxxx',
      status: '0',
      updateTime: '2018-5-9',
    },
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    joinShop() {
      this.$router.push({
        path: 'shopProduct',
        query: {
          shopId: this.info.id,
        },
      });
    },
    closeShop(shopId) {
      CloseShop(shopId).then((res) => {
        if (res.data.code === 0) {
          this.$successN('ok', 'shop closed');
        }
      });
    },
  },
};
</script>

<template>
<div class="shop">
  <div @click="joinShop">
    <!-- 店铺 -->
    <p class="shop-name t1 c1 l2 mb10">
      <span>{{info.shopName}}</span>
      <span v-if="info.status == 0" class="shop-status t5 c3 l3 ml10">accepting</span>
      <span v-if="info.status == 1" class="shop-status t5 c3 l3 ml10">accept success</span>
      <span v-if="info.status == 2" class="shop-status t5 c3 l3 ml10">accept fail</span>
      <span v-if="info.status == 3" class="shop-status t5 c3 l3 ml10">has been blocked</span>
    </p>
    <!-- 店铺介绍 -->
    <p class="shop-intro t4 c2 l3 mb10 ml15">{{info.shopDesc}}</p>
    <!-- 商店创建时间 -->
    <p class="shop-time t5 c3 l3 mb10">{{info.createTime}}</p>
  </div>
  <div class="shop-btn" v-if="info.status !== 3">
    <!-- 按钮  -->
    <el-button class="shop-btn-delete" type="danger"
      icon="el-icon-close" circle @click="closeShop(info.id)">
    </el-button>
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
  }
</style>
