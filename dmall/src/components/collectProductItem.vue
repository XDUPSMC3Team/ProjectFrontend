<script>
export default {
  components: {},
  props: {
    collectId: Number,
    name: String,
    description: String,
    pic: String,
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
  },
  created() {},
  mounted() {},
};

</script>
<template>
<div class="favItem allMidBox m20">
  <img class="pic" :src="pic" alt="">
  <p class="c_info t1 l2 mt20 mb10">{{name}}</p>
  <p class="c2 t2 l3">{{description}}</p>
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
    border-radius: 6px;
    .pic{
      object-fit: contain;
      height: 120px;
    }
  }
</style>
