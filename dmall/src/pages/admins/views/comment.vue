

<script>
import {GetProductById} from '@/api/buyer'

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      id:'',
      productComment:[],
    }
  },
  props: {
  },
  methods: {
  },
  created() {
    this.id = this.$route.query.productId;
    GetProductById(this.id).then( (res) => {
      if(res.data.code === 0) {
        this.productComment = res.data.data.commentList;
      }
    })
  }
}
</script>

<template>
  <div class="home">
    <p class="mt20 mb20 t1 l1 c1">COMMENT</p>
    <div class="comment mt20">
      <div class="comment-item p10" v-for="(i,key) in productComment" :key="key">
        <img src="http://cdn.helloyzy.cn/images/avatar2.svg" alt="">
        <div class="ml20 colBox">
          <span class="t1 l3 c1">{{i.username}}</span>
          <span class="t2 l4 c2">{{i.commentContent}}</span>
          <span class="time t3 l3 c2">{{i.createTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  padding: 10px 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px $c5;
}
p{
  text-align: left;
}
.comment {
    text-align: left;
    border-top: 1px solid $placeHolder;
    &-item {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-bottom: 1px solid $placeHolder;
      .time{
        position: absolute;
        right: 0;
        bottom: 0;
      }
      img {
        height: 60px;
        width: 60px;
        object-fit: contain;
      }
    }
  }
</style>
