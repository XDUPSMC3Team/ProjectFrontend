<script>
export default {
  components: {},
  props: {
    name: String,
    shopDesc: String,
    status: Number,
    shopId: Number,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};

</script>
<template>
<div>
  {{name}}
  {{shopDesc}}
  {{status}}
  {{shopId}}
</div>
</template>

<style lang="scss" scoped>
</style>
