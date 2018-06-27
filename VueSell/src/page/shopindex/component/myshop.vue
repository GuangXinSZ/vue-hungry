<!--  -->
<template>
  <div class="myshop">
     <div class="car">
         购物车
         <div class="num">
             1
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
  </div>
</template>

<script>
export default {
  data () {
    return {
        num: 0
    };
  },

  components: {},

  computed: {},

  methods: {}
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
 line-height: 1rem
 display: flex
 background: $footercolor
 .car
  width: 1.16rem
  height: 1.16rem
  color: $bgcolor
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
 .poor
  flex:1
  color: $bgcolor
  font-weight: 7rem
  height: 0.2rem
  margin-left: 0.4rem
 .start
  font-size: 0.24rem
  color: $bgcolor
  width: 1.6rem
  text-align: center
  font-weight: 6rem
  background: #7a7a7c
</style>