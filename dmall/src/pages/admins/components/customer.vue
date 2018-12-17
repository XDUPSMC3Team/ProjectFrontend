<script>
export default {
  name: 'customer',
  components: {},
  data() {
    return {

    };
  },
  props: {
    info: {
      username:'cw',
      email:'845202636@qq.com'
    },
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    deleteCustomer() {
      this.$successN('ok!', 'delete OK!');
    },
  },
};
</script>

<template>
<div class="customer">
  <!-- 顾客姓名 -->
  <p class="customer-name t1 c1 l2 mb10">
    <span>{{info.username}}</span>
  </p>
  <!-- 顾客邮箱 -->
  <p class="customer-email t5 c3 l3 mb10">{{info.email}}</p>
  <!-- 按钮  -->
  <div class="customer-btn">
    <el-button class="shop-btn-delete" type="danger"
      icon="el-icon-delete" circle @click="deleteCustomer">
    </el-button>
  </div>

</div>
</template>

<style lang="scss" scoped>
  .customer {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
    &-btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
