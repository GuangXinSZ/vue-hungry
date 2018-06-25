<template>
  <div class="app">
   <commit-header></commit-header>
    <div class="content">
      <ul class="conItem">
        <li class="itemList">商品</li>
        <li class="itemList">评价</li>
        <li class="itemList">商家</li>
      </ul>
    </div>
    <div class="footer">
        商品显示
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import CommitHeader from 'temp/top/Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CommitHeader
  },
  mounted() {
    this.$http.get('/api/data.json')
    .then( (res) => {
      console.log(res)
    } )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
   width: 100%
   height: 1.5rem
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
</style>
