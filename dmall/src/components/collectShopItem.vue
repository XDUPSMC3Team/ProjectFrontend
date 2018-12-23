<script>
export default {
  components: {},
  props: {
    name: String,
    shopDesc: String,
    status: Number,
    shopId: Number,
    email: String,
    collectId: Number,
  },
  data() {
    return {};
  },
  methods: {
    goShop() {
      this.$router.push({
        name: 'shop',
        query: {
          id: this.shopId,
        },
      });
    },
    cancel() {
      this.$store.dispatch('collectCancelShop', {
        collectId: this.collectId,
        shopId: this.shopId,
      })
        .then(() => {
          this.$store.dispatch('collectGetShop');
          this.$success('Unmark Shop Successfully!');
        });
    },
  },
  created() {},
  mounted() {},
  computed: {
    statusMap() {
      return this.$store.state.shop.statusEnums;
    },
  },
};
</script>
<template>
<div class="p20 shop m10">
  <div class="rowBox box pb5 pt5 mb10">
    <p class="name c1 l1">{{name}}</p>
    <el-button class="ml10 btn" type="success" size="small" icon="el-icon-star-on" @click="goShop">Enter Shop</el-button>
  </div>
  <p class="c2 l3 t2 mb10">{{shopDesc}}</p>
  <p class="c3 l3 t3 mb20">{{email}}</p>
  <div class="allMidBox">
    <el-button class="c_error" type="error" size="small" icon="el-icon-delete" @click="cancel">Remove</el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.shop {
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 1px 4px 10px 2px #dddcdc;

  .box {
    border-bottom: 1px solid $placeHolder;
    justify-content: space-between;

    .name {
      font-size: 26px;
    }

    .btn {
      height: 40px;
      align-content: flex-end;
    }
  }
}
</style>
