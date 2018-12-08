<script>
import register from '@/components/register.vue';

export default {
  name: '',
  components: {
    register,
  },
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/register.jpeg',
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<template>
<div class="register" :style="'background:url('+bgURL+') center no-repeat;'">
  <el-row class="allMidBox">
    <el-col :lg="8" :sm="24" :xs="24" :md="18">
      <register class="register-input" />
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss">
.register {
  height: calc(100vh - 61px);
  width: 100vw;

  &-input {
    margin-top: 20vh;
  }
}
</style>
