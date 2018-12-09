<script>
export default {
    name: 'shopApplication',
    components: {
    },
    props: {
        shopList: {
            type: Array,
            default: () => {
                return [
                {
                    name: 'shopName',
                    id: 'shopId'
                },
                {
                    name: 'shopName',
                    id: 'shopId'
                },
                {
                    name: 'shopName',
                    id: 'shopId'
                }
            ]
            }
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        agree() {
        this.$successN('成功！', '同意开店！');
        },
        reject() {
        this.$successN('成功！', '拒绝开店！');
        }
    }
}
</script>

<template>
    <div class="shopApplication mt10 mb10">
        <ul class="shopApplication-ul">
            <p class="t1 c1 l2 mb10">Shop application </p>
            <li v-for="(item,key) in shopList" class="shopApplication-ul-li mb10" :key="key">
                <div class="t2 c2 l3 mb10">{{item.name}}</div>
                <div class="shop-btn">
                    <el-button type="success" circle icon="el-icon-check" @click="agree"></el-button>
                    <el-button type="danger" circle icon="el-icon-close" @click="reject"></el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
 .shopApplication{
    &-ul {
        &-li {
        padding: 10px 20px;
        margin: 10px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px $c5;
        list-style: none;
        display: flex;
        justify-content: space-around;
        }
      }
 }
</style>

