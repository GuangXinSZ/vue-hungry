<!--  -->
<template>
  <div class="view-list" v-if="this.$store.state.flag" >
     <div class="content-item">
       <div class="close" @click="close">X</div>
          <ul class="head-mian">
          <li class="list-item" >  
              <div class="list-inter"  >
                <div class="list-left">
                    <div class="img">
                      <img :src="list.image"/>
                    </div>
                </div>
                <div class="list-right" >
                    <p class="list-title">{{ list.name }}</p>
                    <p class="list-money"><span class="one">￥{{list.price * num}}</span><span class="two">￥2</span></p>
                    <div class="addcar">
                      <span class="buffer" @click="reduce">-</span> 
                      <span>{{ num }}</span>
                      <span class="buffer" @click="add">+</span> 
                    </div>
                    </div>  
                 <mt-button class="btns" size="large" type="danger" @click="fistshop(list)">购买</mt-button>
              </div>
          </li>
      </ul>
     </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
     list: '',
     num: 1
    }
  },
  created(){

  },
  components: {},
  mounted(){
   
  },
  updated(){
    this.list = this.$store.state.aloneshop
  },
  computed: {},

  methods: {
    close(){
      this.$store.dispatch('close')
    },
    fistshop(res){
      this.close
      //添加购物车
      var num = this.num
      this.$store.dispatch('addcar',res,)
      this.$store.dispatch('close',num)
      this.num = 1
    },
    add(){
      if(this.num >= 5){
        Toast('库存量不足')
        return false
      }
      this.num++
    },
    reduce(){
      if(this.num < 2){
        this.num = 1
      }
      this.num--
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl'
@import '~styles/varibes.styl' 

 .btns
  width: 96%
  height: 0.6rem
  margin: 0 auto


.view-list
 position: fixed
 top: 0
 left: 0
 width: 100%
 height: 100%
 background:rgba(7,17,27,0.2)
 z-index: 1000
 color: red
 .content-item
  position: relative
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: $colo
  width: 4.5rem
  height: 4.5rem
  margin: auto
  border-radius: 5%
  .close
   position: absolute
   right: 0.02rem
   top: 0.02rem
   border: 1px solid red
   width: 0.3rem
   height: 0.3rem
   text-align: center
   border-radius: 50%
  .head-mian
   width: 100%
  .list-item
   h1
    font-size: 0.3rem
    padding: 0.15rem
    color:rgb(147,153,153)
    background: #f3f5f7 
    border-left:0.1rem solid #d9dde1
    exprose()
   .list-inter
    .list-left
     margin: 0.3rem 0.2rem auto 0.3rem
     .img
      display: flex
      justify-content: center
      width: 96%
      height: 2rem
      background: #ccc
      img 
       width: 100%
       height: 100%
    .list-right
     position: relative
     width: 100%
     margin-left: 0.2rem
     .list-title
      exprose()
      font-size: 0.3rem
      color: rgb(7,17,27)
      line-height: 0.3rem
      margin-top: 0.3rem
     .list-fish
      font-size: 0.21rem
      color: rgb(147,153,159)
      line-height: 0.21rem
      margin-top: 0.16rem
      exprose()
     .list-sell
      font-size: 0.26rem
      color: rgb(147,153,159)
      margin-top: 0.16rem
      exprose()
     .list-money
      .one
       font-size: 0.4rem
       color: red
       font-weight: 700
       line-height: 40px
       exprose()
      .two
       font-size: 0.3rem
       color: rgb(147,153,159)
       font-weight: 700
       line-height: 40px
       exprose()
     .addcar
      position: absolute
      right: 0.5rem
      bottom: 0.2rem
      color: red
      font-size: 0.34rem
      .buffer
       display: inline-block
       width: 0.3rem
       height: 0.3rem
       line-height: 0.3rem
       text-align: center
       border:1px solid red
       border-radius: 50px 50px
</style>