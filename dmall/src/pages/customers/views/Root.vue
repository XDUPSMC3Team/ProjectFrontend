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
    };
  },
  props: {},
  computed: {
    ...mapState({
      bannerProducts: state => state.root.bannerProducts,
    }),
  },
  created() {
    this.$store.dispatch('rootGetBannerProducts');
  },
  mounted() {},
  methods: {
    clickMenu(index) {
      console.log(index);
    },
    goProductInfo(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id,
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
      <div class="allMidBox logo">
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
        <el-menu-item @click="clickMenu('3')" class="aside-menu-item" index="4">
          Office / Home / Car Electronics >
        </el-menu-item>
        <el-menu-item @click="clickMenu('4')" class="aside-menu-item" index="3">
          Audio / Video / Games >
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- banner 主体 -->
    <el-main class="main">
      <!-- 菜单走马灯 -->
      <el-carousel :interval="6000" height="300px">
        <el-carousel-item v-for="item in bannerProducts" :key="item.id">
          <div class="main-item" :style="'background-image:url('+item.pic+');'"
            @click="goProductInfo(item.id)">
            <div class="main-item-cont allMidBox">
                <p class="name">{{item.name}}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
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
  <lines :type="1" title="Cell Phones" class="mt30"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product-card :title="i.name"
        :id="i.id"
        :picUrl="i.pic" :intro="i.description"
        :time="i.updateTime"
        type="bg"
      />
    </el-col>
  </el-row>
  <!-- 电脑区 -->
  <lines :type="2" title="Computers"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product-card :title="i.name"
        :id="i.id"
        :picUrl="i.pic" :intro="i.description"
        :time="i.updateTime"
        type="big"
      />
    </el-col>
  </el-row>
  <!-- 平板区 -->
  <lines :type="3" title="Tablets "></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product-card :title="i.name"
        :id="i.id"
        :picUrl="i.pic" :intro="i.description"
        :time="i.updateTime"
        type="big"
      />
    </el-col>
  </el-row>
  <!-- 相机区 -->
  <lines :type="4" title="Cameras"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product-card :title="i.name"
        :id="i.id"
        :picUrl="i.pic" :intro="i.description"
        :time="i.updateTime"
        type="top"
      />
    </el-col>
  </el-row>
  <!-- 游戏区 -->
  <lines :type="5" title="Games"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product :name="i.name" :shopId="i.shopId"
      :productId="i.id"
      :pic="i.pic" :description="i.description"
      :updateTime="i.updateTime"
      :attributeList="JSON.parse(i.attributeList)" />
    </el-col>
  </el-row>
  <!-- TV区 -->
  <lines :type="6" title="TV"></lines>
  <el-row :gutter="20">
    <!-- TODO: 增加store action 更新数据 -->
    <el-col :xs="24" :sm="24" :lg="6" :xl="6" :md="6" v-for="i in bannerProducts" :key="i.id">
      <product :name="i.name" :shopId="i.shopId"
      :productId="i.id"
      :pic="i.pic" :description="i.description"
      :updateTime="i.updateTime"
      :attributeList="JSON.parse(i.attributeList)" />
    </el-col>
  </el-row>
  <DFooter/>
</div>
</template>

<style lang="scss" scoped>
.root {
  .logo-img {
    height: 100px;
    width: 100%;
    object-fit: contain;
  }
  &-banner {
    box-shadow: 0 2px 20px 0 rgba(7, 17, 27, 0.3);
    border-radius: 8px;
    .footer{
      .product-img{
        background: lighten($fontClr, 30%);
        border-radius: 6px;
        cursor: pointer;
        @include wh(120px, 120px);
        object-fit: cover;
      }
    }
    .main{
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
    .aside{
      background: $fontClr;
      border-radius: 8px 0 0 8px;
      &-menu {
        border: 0;
        background: transparent;
        &-item {
          background: transparent;
          color: $txt_white;
        }
        &-item:hover {
          background: darken($fontClr, 20%);
        }
      }
    }
  }
}
</style>
