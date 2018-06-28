<!--  -->
<template>
<div>
  <div class="myshop">
     <div class="car" v-on:click="show = !show">
         购物车
         <div class="num">
             {{ this.$store.state.goodslist.length }}
         </div>
     </div>
     <div class="money">
         ￥{{ num }}
     </div>
     <div class="poor">
         配送费￥4起步
     </div>
     <div class="start">
         ￥20元起送
    </div>
    <transition name="fade">
        <div class="view" ref="cookie" v-if="show">
            <div class="title">
                <span class="name">购物车</span>
                <span class="clear" @click="clearall">清空</span>
            </div>
            <div class="shoplist">
                <ul>
                    <li v-for="(item,index) of list" :key="index">
                       <div class="listmain" >
                           <p  class="shopname">{{ item.name }} <span ref="shopprice" >￥{{ item.price }}</span> </p>
                       </div>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
  </div>
<div class="viewtow"  v-if="show">

</div>
</div>
</template>

<script>
export default {
  data () {
    return {
        num: 0,
        show: false,
        nothing: '',
        list: '',
        totalprice: 0
    };
  },
  created() {
      //获取length值
      let that = this
      this.nothing = this.$store.state.goodslist.length
      this.list = this.$store.state.goodslist
      
  },
  mounted () {
       let allmoney = this.$refs.shopprice
      
  },
  components: {},

    updated(){
        this.count()
    },
  methods: {
      ShowView(e){
          let view = this.$refs.cookie
      },
      clearall () {
         
          this.$store.dispatch('clearall')
      },
      //计算价格
      count () {
          let totalprice = 0
          let best = 0
          this.list.forEach( (item,index) => {
              totalprice +=item.price
          })
          this.num = totalprice
      }
  }
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
@import '~styles/varibes.styl';
.myshop
 position: fixed
 bottom: 0
 left: 0
 width: 100%
 height: 1rem
 display: flex
 background: $footercolor
 z-index:100
 .view
  position: fixed
  bottom: 1rem
  color:red
  width: 100%
  background: white
  z-index: -1
  padding-bottom: 1rem
  .title
   display: flex
   justify-content: space-between
   height: 0.8rem
   width: 100%
   background: #f3f5f7
   border-bottom: 1px solid  #ccc
   .name
    margin: 0.3rem
    color: rgb(7,17,27)
   .clear
    margin: 0.3rem
    color: rgb(0,160,220)
  .shoplist
   width: 100%
   ul
    display: flex
    flex-direction: column
    li
     display: flex
     border-bottom: 1px solid #ccc
     margin: 0.2rem
     padding-bottom: 0.2rem
     .listmain
      font-size: 0.33rem
      color: rgb(7,17,27)
 .car
  width: 1.16rem
  height: 1.16rem
  color: $bgcolor
  line-height: 1rem
  font-size: 0.25rem
  margin-left: 0.36rem
  background-color:  rgb(0,0,0,0.2)
  text-align: center
  position: absolute
  top: -0.2rem
  border-radius: 50px 50px
  position:relative
  .num
   position: absolute
   color: white !important
   background: red
   top:-0.1rem
   right:-0.1rem
   width: 0.5rem
   height:0.5rem
   border-radius: 100%
   line-height: 0.5rem
   exprose()
 .money
  color: white
  margin-left: 0.2rem
  font-size: 0.4rem
  line-height: 1rem
 .poor
  flex:1
  color: $bgcolor
  font-weight: 7rem
  height: 0.2rem
  margin-left: 0.4rem
  line-height: 1rem  
 .start
  font-size: 0.24rem
  color: $bgcolor
  width: 1.6rem
  text-align: center
  font-weight: 6rem
  background: #7a7a7c
  line-height: 1rem
.fade-enter-active, .fade-leave-active {
  color: red
}
.fade-enter, .fade-leave-active {
  color: blue
}
 .viewtow
  position: fixed
  top:0
  left: 0
  width: 100%
  height: 100%
  background: rgb(7,17,28,0.6)
  z-index: 0
  opacity: 0.6
</style>