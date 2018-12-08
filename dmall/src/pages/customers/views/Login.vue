<script>
import login from '@/components/login.vue';

export default {
  name: '',
  components: {
    login,
  },
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
  },
};

</script>

<template>
<div class="login">
  <el-row>
    <el-col :span="12" :offset="6" >
      <login></login>
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
  .login{
  }
</style>
