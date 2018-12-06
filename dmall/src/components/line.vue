<template>
<div class="mt20">
  <el-row type="flex" justify="center">
    <el-col :lg="16" :xs="24" :sm="24">
      <div class="divide-line t1 c1 l3">
        {{words}}
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  props: {
    words: {
      type: String,
      default: 'null', // 文字
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};

</script>

<style lang="scss" scoped>

.divide-line {
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: solid $c5;
  border-width: 0 0 1px 0;
}
</style>
