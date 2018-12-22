<script>
/*eslint-disable */
export default {
  components: {},
  props: {},
  data() {
    return {
      payStatus: Number,
      status: Number,
      
    };
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {
    statusMap() {
       return this.$store.state.order.statusEnum;
    },
    payStatusMap() {
      return this.$store.state.order.payStatusEnum;
    }
  },
};

</script>
<template>
<div></div>
</template>

<style lang="scss" scoped>
</style>
