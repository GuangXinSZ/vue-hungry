<template>
  <div class="headrig" ref="wrapper" >
      <ul class="head-mian">
          <li class="list-item" v-for="(item,index) of goodsList" :key="index" :ref="index">
              <h1 >{{ item.name }}</h1>
              <div class="list-inter" v-for="(item,index) of item.foods" :key="index" >
                <div class="list-left">
                    <div class="img">
                        <img :src="item.image" />
                    </div>
                </div>
                <div class="list-right" >
                    <p class="list-title">{{ item.name }}</p>
                    <p class="list-fish">{{ item.description }}</p>
                    <p class="list-sell">月售{{ item.rating }}份<span>好评100%</span></p>
                    <p class="list-money"><span class="one">￥{{ item.price }}</span><span class="two" v-show="item.oldPrice">￥{{item.oldPrice}}</span></p>
                </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
 props: {
     goodsList: [Object,Array,String],
     letter: [String,Number]
 },
  data () {
    return {
    };
  },
  mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
  },
  components: {},

  computed: {},

  methods: {},
  watch: {
      letter() {
          if(this.letter){
              const element = this.$refs[this.letter][0]
              this.scroll.scrollToElement(element)
          }
      }
  }
}

</script>
<style lang='stylus' scoped>
.headrig
 overflow: hidden
 position: absolute
 left: 24%
 top: 3.5rem
 width: 76%
 height: 10rem  
 .head-mian
  width: 100%
  .list-item
   h1
    font-size: 0.3rem
    padding: 0.15rem
    color:rgb(147,153,153)
    background: #f3f5f7 
    border-left:0.1rem solid #d9dde1
   .list-inter
    display: flex
    .list-left
     margin: 0.3rem 0.2rem auto 0.3rem
     .img
      width: 1.6rem
      height: 1.6rem
      background: #ccc
      img 
       width: 100%
       height: 100%
    .list-right
     .list-title
      font-size: 0.3rem
      color: rgb(7,17,27)
      line-height: 0.3rem
      margin-top: 0.3rem
     .list-fish
      font-size: 0.21rem
      color: rgb(147,153,159)
      line-height: 0.21rem
      margin-top: 0.16rem
     .list-sell
      font-size: 0.26rem
      color: rgb(147,153,159)
      margin-top: 0.16rem
     .list-money
      .one
       font-size: 0.4rem
       color: red
       font-weight: 700
       line-height: 40px
      .two
       font-size: 0.3rem
       color: rgb(147,153,159)
       font-weight: 700
       line-height: 40px
</style>