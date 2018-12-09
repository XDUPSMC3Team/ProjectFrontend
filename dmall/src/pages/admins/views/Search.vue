<script>
// import  shop from '@pages/sellers/components/sellerInfo.vue'
export default {
    name: 'search',
    components: {
        // shop
    },
    props: {
        search: {
            type: String,
            default: '111'
        }
    },
    data() {
        return {}
    },
    methods: {
        searchShop() {

        this.$successN('成功！', '搜索到了！');
        }
    }
}
</script>

<template>
    <div class="search mt15 mb15 ml10 mr10">
        <el-input placeholder="请输入内容" v-model="search" class="search-input">
            <el-button slot="append" icon="el-icon-search" @click="searchShop"></el-button>
        </el-input>
        <div class="search-result">
            <!-- <shop></shop> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
