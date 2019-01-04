<template>
<div>
  <el-row>
    <el-col :span="24">
      <div class="myFooter">

        <div class="myFooter-main">
          <div class="myFooter-main-cont">
            <div class="userInfo">
              <p class="title">{{blogName.toUpperCase()}}</p>
              <p class="intro">{{blogIntro}}</p>
            </div>
            <div class="copyRight">Copyright © 2019.{{userName}} All rights reserved.</div>
          </div>
        </div>

      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'foot',
  components: {},
  data() {
    return {};
  },
  props: {
    blogName: {
      default: 'PARKNSHOP',
    },
    blogIntro: {
      default: 'More Than New iPhone, Camera, TV, Computer ...',
    },
    userName: {
      default: 'PARKNSHOP',
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

.title {
  @include fontSizeColor(20px, darken($fontClr, 10%))
}

.intro {
  @include fontSizeColor(12px, lighten($fontClr, 30%))
}

.myFooter {
  height: 160px;
  overflow: hidden;
  padding-top: 10px;
  @include allMidBox();
  background-color: #ffffff;

  &-main {
    height: 80%;
    width: 90%;
    border: 1px solid $fontClr;
    padding: 0 0 0 20px;
    box-sizing: border-box;

    /*background-color: #42b983;*/
    &-cont {
      width: 100%;
      height: 100%;

      .userInfo {
        @include allMidBox();
        @include wh(100%, 60%)
      }

      .copyRight {
        @include fontSizeColor(14px, $fontClr);
        @include allMidBox();
        @include wh(100%, 20%)
      }
    }
  }
}
</style>
