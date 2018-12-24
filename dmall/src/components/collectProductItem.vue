<script>
export default {
  components: {},
  props: {
    collectId: Number,
    name: String,
    description: String,
    pic: String,
    productId: Number,
  },
  data() {
    return {};
  },
  methods: {
    cancel() {
      this.$store.dispatch('collectCancelProduct', this.collectId)
        .then(() => {
          this.$success('Cancel Collect Success!');
          this.$store.dispatch('collectGetProducts');
        });
    },
    more() {
      this.$router.push({
        name: 'detail',
        query: {
          id: this.productId,
        },
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<template>
<div class="favItem allMidBox m20">
  <div class="allMixBox more" @click="more">
    <img class="pic" :src="pic" alt="">
    <p class=" center c_info t1 l2 mt20 mb10">{{name}}</p>
    <p class=" center c2 t2 l3">{{description}}</p>
  </div>
  <i class="el-icon-circle-close c_error mt30 mb30" @click="cancel"></i>
</div>
</template>

<style lang="scss" scoped>
.el-icon-circle-close {
  cursor: pointer;
  font-size: 40px;
}

.favItem {
  padding: 10px 20px;
  box-shadow: 1px 4px 10px 2px #dddcdc;
  // border: 1px solid lighten($placeHolder, 10%);
  background: #ffffff;
  border-radius: 6px;

  .pic {
    object-fit: contain;
    height: 120px;
  }
  .center {
    text-align: center;
  }
  .more {
    cursor: pointer;
  }
}
</style>
