<template>
  <div class="card-box">
    <el-card class="card" :body-style="{ padding: '0px'}" v-if="type === 'top'">
      <div class="card-imgBox">
        <img v-lazy="picUrl">
      </div>
      <div class="card-txtBox">
        <div>
          <time class="card-txtBox-time">{{ time }}</time>
          <span class="card-txtBox-title">{{title}}</span>
          <span class="card-txtBox-intro">{{intro}}</span>
          <div class="card-txtBox-button">
            <el-button type="text" class="card-txtBox-button-text t1">READ MORE</el-button>
          </div>
          <div class="downArrow">
            <span class="iconfont icon-icon arrow"></span>
          </div>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}" v-if="type === 'bg' " class="card2">
      <div class="bgCard" :style="{background: 'url('+picUrl+')'}">
        <div class="bgCard-main">
          <p class="bgCard-main-title">{{title}}</p>
          <p class="bgCard-main-cont">{{intro}}</p>
          <p class="bgCard-main-time">{{time}}</p>
          <el-button type="primary" size="large" class="bgCard-main-btn">MORE</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}" v-if="type === 'big'" class="card3">
      <div class="bigCard">
        <div class="bigCard-img">
          <img v-lazy="picUrl" alt>
        </div>
        <p class="bigCard-title">{{title}}</p>
        <p class="bigCard-time">{{time}}</p>
        <div class="bigCard-btnBox">
          <el-button class="bigCard-btnBox-btn t1" type="primary" size="large">MORE</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  props: {
    picUrl: {
      default:
        'http://sjbz.fd.zol-img.com.cn/t_s540x960c/g5/M00/07/04/ChMkJ1jlsOKIUYUYAAQhvA87IyIAAbZHwKhfVgABCHU427.jpg',
    },
    title: {
      default: 'props.title',
    },
    intro: {
      default:
        'props.intro',
    },
    time: {
      default: 'props.time',
    },
    type: {
      // top 图片在上方 // bg 图片作为背景 // big 图片占3/4 只留时间和title
      default: 'big',
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.el-card {
  margin: 10px;
  box-shadow: none;
  border: none;
}

.downArrow {
  cursor: pointer;
  @include allMidBox();
  .arrow {
    @include fontSizeColor(1.4rem, $info);
  }
}

// .downArrow:hover {
//   /*transform: translateY(.4rem);*/
//   /*transition: all .8s;*/
// }

.card {
  height: 32rem;
  &-imgBox {
    width: 100%;
    height: 18rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-txtBox {
    padding: 1rem 2rem 0 2rem;
    &-title {
      cursor: default;
      @include allMidBox();
      @include wh(100%, 2rem);
      @include fontSizeColor(1.2rem, darken($fontClr, 20%));
      font-weight: 800;
    }
    &-time {
      cursor: default;
      height: 1rem;
      @include fontSizeColor(0.6rem, $fontClr);
    }
    &-button {
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
      height: 2rem;
      font-size: 16px;
      &-text {
        color: $info;
      }
    }
    &-intro {
      cursor: default;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 4.2rem;
      width: 100%;
      white-space: normal; /*强制不换行*/
      @include fontSizeColor(0.6rem, lighten($fontClr, 10%));
    }
  }
}

.bgCard {
  height: 32rem;
  /*background-color: #3b3b3b;*/
  background-size: cover !important;
  &-main {
    @include allMidBox();
    @include wh(100%, 100%);
    background-color: rgba(24, 24, 24, 0.76);
    box-sizing: border-box;
    color: #ffffff;
    &-title,
    &-cont,
    &-time {
      width: 80%;
      @include allMidBox();
    }
    &-title {
      @include fontSizeColor(1.4rem, #fff);
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    &-cont {
      height: 8rem;
      @include fontSizeColor(1.1rem, #fff);
      font-weight: 300;
      overflow: hidden;
    }
    &-time {
      @include fontSizeColor(1rem, #fff);
    }
    &-btn {
      background-color: $info;
      color: $txt_white;
      font-size: 36px;
      padding: 10px;
      margin-top: 4rem;
    }
  }
}

.bigCard {
  color: $fontClr;
  width: 100%;
  height: 32rem;
  &-img {
    @include wh(100%, 18rem);
    background-color: #2f3137;
    overflow: hidden;
    img {
      @include wh(100%, 150%);
    }
  }
  &-title {
    @include allMidBox();
    @include wh(100%, 4rem);
    font-size: 1.2rem;
  }
  &-time {
    @include fontSizeColor(0.8rem, lighten($fontClr, 20%));
    @include allMidBox();
    @include wh(100%, 2rem);
  }
  &-btnBox {
    @include allMidBox();
    @include wh(100%, 4rem);
    &-btn {
      @include allMidBox();
      @include wh(4.8rem, 2rem);
      @include fontSizeColor(16px, $info);
      border: $info 1px solid;
      background-color: #ffffff;
    }
  }
}

.card:hover,
.card2:hover,
.card3:hover {
  transform: translateY(-2%);
  box-shadow: 1px 4px 10px 2px #cccccc;
  -webkit-box-shadow: 1px 4px 10px 2px #cccccc;
  -moz-box-shadow: 1px 4px 10px 2px #cccccc;
  transition: all 0.3s;
}
</style>
