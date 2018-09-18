<template>
  <div class="app">
   <commit-header :seller="seller"></commit-header>
    <div class="content">
      <ul class="conItem">
        <li class="itemList"><router-link to="/index">商品</router-link></li>
        <li class="itemList"><router-link to="/char">评论</router-link></li>
        <li class="itemList"><router-link to="main">商家</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <my-shop></my-shop>
  </div>
</template>

<script>
// import axios from 'axios'
import CommitHeader from 'temp/top/Header'
import MyShop from 'temp/shopindex/component/myshop'
import restful from '../server/restful.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      seller: {},
      goods: {}
    }
  },
  components: {
    CommitHeader,
    MyShop
  },
  async created () {
    // 捕获异常
    let resful = await restful.getShopFull().then(res => {
        this.seller = res.seller
        this.goods = res.goods
    }).catch((err) => {
      this.$message({
          type: 'info',
          message: '失败'
        })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
      .router-link-exact-active
       color: rgb(254,20,20) !important
  .content
   width: 100%
   height: .8rem 
   line-height: 0.8rem
   border-bottom: 0.1px solid #ccc
   .conItem
    display: flex
    .itemList
     flex: 1
     display: block
     font-size: 0.2rem
     text-align: center
     & > a
      display: block
      width: 100%
      height: 100%
      color: rgb(77,85,93)
     
</style>
