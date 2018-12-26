<script>
import lines from '@/components/lines.vue';
import productCard from '@/components/productCard.vue';
import product from '@/components/productItem.vue';
import DFooter from '@/components/footer.vue';

import {
  mapState,
} from 'vuex';

export default {
  name: 'root',
  components: {
    lines,
    productCard,
    product,
    DFooter,
  },
  data() {
    return {
      isMenuOn: false,
      menuIndex: 0,
      menuMap: {
        1: [{
          id: 3,
          name: 'Cell Phones',
          // icon: 'icon-phone',
          icon: 'icon-phone',
        }, {
          id: 5,
          name: 'Computers',
          icon: 'icon-computer',
        }, {
          id: 6,
          name: 'Tablets',
          icon: 'icon-pingbandiannao',
        }],
        2: [{
          id: 4,
          name: 'Cameras',
          icon: 'icon-camera',
        }, {
          id: 1,
          name: 'TV',
          icon: 'icon-tv',
        }, {
          id: 2,
          name: 'Home Theater',
          icon: 'icon-video',
        }],
        3: [{
          id: 12,
          name: 'Office',
          icon: 'icon-office',
        }, {
          id: 11,
          name: 'Home',
          icon: 'icon-home',
        }, {
          id: 8,
          name: 'Car Electronics',
          icon: 'icon-car',
        }],
        4: [{
          id: 7,
          name: 'Audio',
          icon: 'icon-audio',
        }, {
          id: 9,
          name: 'Video',
          icon: 'icon-dianyingyuan',
        }, {
          id: 10,
          name: 'Games',
          icon: 'icon-videogames',
        }],
      },
    };
  },
  props: {},
  computed: {
    ...mapState({
      bannerProducts: state => state.root.bannerProducts,
      categoryProducts: state => state.root.categoryProducts,
    }),
  },
  created() {
    this.$store.dispatch('rootGetBannerProducts');
    this.$store.dispatch('rootGetCategories');
  },
  mounted() {},
  methods: {
    clickMenu(index) {
      this.isMenuOn = true;
      this.menuIndex = index;
    },
    goProductInfo(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id,
        },
      });
    },
    goCate(categoryId) {
      this.$router.push({
        name: 'search',
        query: {
          categoryId,
        },
      });
    },
  },
};
</script>

<template>
<div class="p20 root">
  <el-container class="root-banner hidden-md-and-down">
    <!-- 侧栏 -->
    <el-aside class="aside p10">
      <!-- LOGO -->
      <div class="allMidBox logo" @click="isMenuOn=false">
        <img class="logo-img" src="@/assets/logo.png" alt="">
      </div>
        <!-- 侧栏菜单 -->
        <el-menu default-active="1" class="aside-menu">
          <el-menu-item @click="clickMenu('1')" class="aside-menu-item" index="1">
            Cell Phones / Computers / Tablets >
          </el-menu-item>
          <el-menu-item @click="clickMenu('2')" class="aside-menu-item" index="2">
            Cameras / TV / Home Theater >
          </el-menu-item>
          <el-menu-item @click="clickMenu('3')" class="aside-menu-item" index="3">
            Office / Home / Car Electronics >
          </el-menu-item>
          <el-menu-item @click="clickMenu('4')" class="aside-menu-item" index="4">
            Audio / Video / Games >
          </el-menu-item>
        </el-menu>
    </el-aside>

    <!-- banner 主体 -->
    <el-main class="main">
      <!-- 菜单走马灯 -->
      <el-carousel :interval="6000" height="300px" v-if="!isMenuOn">
        <el-carousel-item v-for="item in bannerProducts" :key="item.id">
          <div class="main-item" :style="'background-image:url('+item.pic+');'" @click="goProductInfo(item.id)">
            <div class="main-item-cont allMidBox">
              <p class="name">{{item.name}}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="subMenu p20" v-if="isMenuOn">
        <el-row :gutter="30">
          <el-col :span="8" v-for="i in menuMap[menuIndex]" :key="i.id">
            <div class="subMenu-item allMidBox p10" @click="goCate(i.id)" >
              <i class="iconfont menuIcon" :class="i.icon"></i>
              <p class="t1 l2 c2">{{i.name}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- footer -->
      <el-footer class="footer">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in bannerProducts" :key="item.id">
            <div class="allMidBox m10" @click="goProductInfo(item.id)">
              <img class="product-img" :src="item.pic" alt="">
              <p class="t2 c2 l2">{{item.name}}</p>
              <p class="t4 c3 l3">
                {{
                  item.description > 20 ?
                  item.description.substr(0, 20) + '...' :
                  item.description
                }}
              </p>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-main>
  </el-container>
  <!-- 手机区 -->
  <lines :type="1" title="Cell Phones" class="mt30 mb30"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['CellPhones'] || []" :key="i.id">
      <product-card :title="i.name" :id="i.id" :picUrl="i.pic" :intro="i.description" :time="i.updateTime" type="bg" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['CellPhones'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <!-- 电脑区 -->
  <lines :type="2" title="Computers"></lines>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['Computers'] || []" :key="i.id">
      <product-card :title="i.name" :id="i.id" :picUrl="i.pic" :intro="i.description" :time="i.updateTime" type="big" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['Computers'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <!-- 平板区 -->
  <lines :type="3" title="Tablets " class="mt30 mb30"></lines>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['Tablets'] || []" :key="i.id">
      <product-card :title="i.name" :id="i.id" :picUrl="i.pic" :intro="i.description" :time="i.updateTime" type="big" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['Tablets'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <!-- 相机区 -->
  <lines :type="4" title="Cameras" class="mt30 mb30"></lines>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['Cameras'] || []" :key="i.id">
      <product-card :title="i.name" :id="i.id" :picUrl="i.pic" :intro="i.description" :time="i.updateTime" type="top" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['Cameras'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <!-- 游戏区 -->
  <lines :type="5" title="Games" class="mt30 mb30"></lines>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['Games'] || []" :key="i.id">
      <product :name="i.name" :shopId="i.shopId" :productId="i.id" :pic="i.pic" :description="i.description" :updateTime="i.updateTime" :attributeList="JSON.parse(i.attributeList)" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['Games'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <!-- TV区 -->
  <lines :type="6" title="TV" class="mt30 mb30"></lines>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in categoryProducts['TV'] || []" :key="i.id">
      <product :name="i.name" :shopId="i.shopId" :productId="i.id" :pic="i.pic" :description="i.description" :updateTime="i.updateTime" :attributeList="JSON.parse(i.attributeList)" />
    </el-col>
    <el-col class="allMidBox" :span="24" v-if="categoryProducts['TV'].length === 0">
      <i class="iconfont icon-baoguofahuo-xianxing mt10 mb20 c3 t1"></i>
      <p class="l3 c3 t2">Empty Category</p>
    </el-col>
  </el-row>
  <DFooter />
</div>
</template>

<style lang="scss" scoped>
.icon-baoguofahuo-xianxing {
  font-size: 60px;
}

.root {
  .logo-img {
    height: 100px;
    width: 100%;
    object-fit: contain;
  }

  &-banner {
    box-shadow: 0 2px 20px 0 rgba(7, 17, 27, 0.3);
    border-radius: 8px;

    .footer {
      .product-img {
        background: lighten($fontClr, 30%);
        border-radius: 6px;
        cursor: pointer;
        @include wh(120px, 120px);
        object-fit: cover;
      }
    }

    .main {
      padding: 0;
      border-radius: 0 8px 8px 0;

      &-item {
        height: 300px;
        background-size: contain;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;

        &-cont {
          height: 100%;
          width: 100%;
          background: rgba(42, 42, 58, 0.5);

          .name {
            font-size: 46px;
            font-weight: 700;
            word-spacing: 1.2;
            color: #ffffff;
          }
        }
      }
    }

    .aside {
      background: $banner;
      border-radius: 8px 0 0 8px;

      &-menu {
        border: 0;
        background: transparent;

        &-item {
          background: transparent;
          color: $txt_white;
        }

        &-item:hover {
          background: darken($banner, 20%);
        }
      }
    }

    .subMenu {
      padding-top: 80px;
      height: 300px;
      background: #ffffff;

      &-item {
        box-shadow: 0 2px 20px 0 rgba(7, 17, 27, 0.3);
        border-radius: 8px;
        cursor: pointer;
      }
      .menuIcon {
        font-size: 88px;
        color: $userHolder;
      }
    }
  }
}
</style>
