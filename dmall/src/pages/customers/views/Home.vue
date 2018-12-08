<script>
import product from '@/components/productItem.vue';

export default {
  name: '',
  components: {
    product,
  },
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<template>
<el-row >
  <el-col v-for="i in 6" :key="i" :xs="24" :sm="24" :lg="4" :xl="4" :md="6">
    <product/>
  </el-col>
</el-row>
</template>

<style lang="scss">
</style>
