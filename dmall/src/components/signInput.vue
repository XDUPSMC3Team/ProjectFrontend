<template>
<div class="login">
  <el-row>
    <el-col :span="24">
      <div>
        <div class="login-icon">
          <img :src="iconUrl" alt="">
        </div>
          <div class="login-title">{{myTitle.toUpperCase()}}</div>
          <div class="login-inputs">
            <el-input size="large" class="login-inputs-item" placeholder="email/username"
            icon="edit" v-model="input2" :on-icon-click="handleIconClick">
            </el-input>
            <el-input type="password" size="large" class="login-inputs-item"
            placeholder="password" icon="edit" v-model="input2" :on-icon-click="handleIconClick">
            </el-input>
            <div class="login-inputs-button">
              <el-button type="primary" class="button" size="large">Sign In</el-button>
            </div>
          </div>
        </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
// TODO:改造：怎么适合三端用户
export default {
  name: '',
  components: {
  },
  data() {
    return {
      iconUrl: 'http://cdn.helloyzy.cn/iphone.jpg',
      myTitle: 'DMall',
      input2: '',
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleIconClick: (evt) => {
      console.log(evt);
    },
  },
};
</script>

<style lang="scss" scoped>

.login {
  margin: 10px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, .8);
  border-radius: 22px;
  box-shadow: 0 0 10px $c3;
  &-icon {
    padding-top: 1.8rem;
    @include allMidBox();
    @include wh(100%, 30%);

    image {
      @include wh(100%, 100%);
    }
  }

  &-title {
    @include fontSizeColor(1.6rem, lighten($fontClr, 10%));
    @include verMidBox();
    @include wh(100%, 10%);
    font-weight: 300;
    cursor: default;
  }

  &-inputs {
    @include verMidBox();
    @include wh(100%, 50%);

    &-item {
      width: 60%;
      margin-top: 5%;
    }

    &-button {
      margin-bottom: 1.2rem;
      margin-top: 4%;
      width: 30%;
      height: 4rem;

      .button {
        padding: 10px 30px;
        border: none;
        font-size: 22px;
        text-align: center;
        font-weight: 300;
        background-color: $info;
      }

      .button:hover {
        transform: translateY(-2%);
        box-shadow: 1px 4px 10px 2px #999999;
        -webkit-box-shadow: 1px 4px 10px 2px #999999;
        -moz-box-shadow: 1px 4px 10px 2px #999999;
        transition: all .3s;
      }

    }
  }
}
</style>
