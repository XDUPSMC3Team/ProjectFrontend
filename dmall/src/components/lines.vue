<template>
  <div>
    <!-- type 1 ~ 8 -->
    <div class="lines">
      <p>
        <span class="tit-icon tit-icon-l " :class="`icon-${type}-l`"></span>
        <span class="title c1 t2 l2">{{title}}</span>
        <span class="tit-icon tit-icon-r" :class="`icon-${type}-r`"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'null', // 文字
    },
    type: Number,
  },
};

</script>

<style lang="scss" scoped>
  .lines{
    p{
      text-align: center;
      width: 100%;
    }
  }
  .title {
    line-height: 36px;
  }
</style>
