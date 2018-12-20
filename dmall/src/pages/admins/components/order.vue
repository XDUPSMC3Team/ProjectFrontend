<script>
export default {
  name: 'order',
  components: {},
  data() {
    return {

    };
  },
  props: {
    info: {
      username: 'cw',
      email: '845202636@qq.com',
    },
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {

  },
};
</script>

<template>
<div class="order">
  <!--  -->
  <p class="order-name t1 c1 l2 mb10">
    <span>{{info.username}}</span>
  </p>
  <!--  -->
  <p class="order-email t5 c3 l3 mb10">{{info.email}}</p>
</div>
</template>

<style lang="scss" scoped>
  .order {
    text-align: left;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px $c5;
  }
</style>
