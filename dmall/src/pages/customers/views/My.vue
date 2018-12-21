<script>
import user from '@/components/user.vue';

export default {
  name: 'My',
  components: {
    user,
  },
  props: {},
  data() {
    return {
      bgURL: 'http://cdn.helloyzy.cn/my.jpeg',
    };
  },
  methods: {},
  created() {},
  mounted() {},
};

</script>
<template>
<div class="my" :style="'background:url('+bgURL+') center no-repeat;'">
  <el-row>
    <el-col :md="24" :xs="24" :lg="8" :xl="8">
      <user/>
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
  .my{
    padding: 20px;
    min-height: calc(100vh - 61px);
    width: 100%;
  }
</style>
