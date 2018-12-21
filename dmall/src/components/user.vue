<script>
/*eslint-disable*/
// import { mapState } from 'vuex';
import lines from '@/components/lines.vue';

export default {
  components: {
    lines,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    realname: {
      get () { return this.$store.state.user.info.realName },
      set (val) { this.$store.commit('userUpdateName', val) }
    },
    address: {
      get () { return this.$store.state.user.info.address },
      set (val) { this.$store.commit('userUpdateAddress', val) }
    },
    phone: {
      get () { return this.$store.state.user.info.phone },
      set (val) { this.$store.commit('userUpdatePhone', val) }
    },
    editIndex: {
      get () { return this.$store.state.user.editIndex },
      set (val) { this.$store.commit('userChangeEditIndex', val) }
    }
  },
  methods: {
    edit(index) {
      this.$store.commit('userChangeEditIndex', index);
    },
    confirm(index) {
      // 触发action 发请求 then
      // switch (index) {
      //   case 1: this.$store.dispatch('userEditInfo', 0);
      // }
      this.$store.dispatch('userEditInfo')
      .then(msg => {
        this.$success(msg);
        this.$store.commit('userChangeEditIndex', 0);
      })
      .catch(err => {
        this.$error(err);
      })
    }
  },
  created() {
    this.$store.dispatch('userGetInfo');
  },
  mounted() {},
};

</script>

<template>

<div class="usercard pl40 pr40  pt20 pb20  colBox">
  <!-- 头像 -->
  <div class="allMidBox">
    <i class="iconfont icon-kuaidiyuan icon c_info mt10"></i>
    <lines :type="3" title="USER CENTER" class="mb20"></lines>
  </div>

  <div class="item rowBox mb10">
    <span class="mr10 c1 l2 t2">Real Name: </span>
    <span v-if="editIndex !== 1" class="c1 l1 t1">{{realname}}</span>
    <el-input class="input" size="small" v-if="editIndex === 1" v-model="realname" placeholder="realname"></el-input>
    <i v-if="editIndex !== 1" @click="edit(1)" class="ml10 el-icon-edit edit c_info t1"></i>
    <i v-if="editIndex === 1" @click="confirm(1)" class="ml10 el-icon-circle-check c_info edit t1"></i>
  </div>

  <div class="item rowBox mb10">
    <span class="mr10 c1 l2 t2">Phone: </span>
    <span v-if="editIndex !== 2" class="c1 l2 t2">{{phone}}</span>
    <el-input class="input" size="small" v-if="editIndex === 2" v-model="phone" placeholder="phone"></el-input>
    <i v-if="editIndex !== 2" @click="edit(2)" class="ml10 el-icon-edit edit c_info t1"></i>
    <i v-if="editIndex === 2" @click="confirm(2)" class="ml10 el-icon-circle-check c_info edit t1"></i>
  </div>

  <div class="item rowBox mb10">
    <span class="mr10 c3 l3 t3">Address: </span>
    <span v-if="editIndex !== 3" class="c3 l3 t3">{{address}}</span>
    <el-input class="input" size="small" v-if="editIndex === 3" v-model="address" placeholder="address"></el-input>
    <i v-if="editIndex !== 3" @click="edit(3)" class="ml10 el-icon-edit edit c_info t1"></i>
    <i v-if="editIndex === 3" @click="confirm(3)" class="ml10 el-icon-circle-check c_info edit t1"></i>
  </div>
</div>

</template>

<style lang="scss" scoped>
.el-input__inner{
  border: 0;
}
  .usercard{
    background: $txt_white;
    border-radius: 6px;
    box-shadow: 0 10px 16px rgba(10,10,10,.3);
    .icon {
      font-size: 60px;
    }
    .edit {
      cursor: pointer;
    }
    .input {
      border: 0;
    }
    .item{
      align-items: center;
    }
  }
</style>
