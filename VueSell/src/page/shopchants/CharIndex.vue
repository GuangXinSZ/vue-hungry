<!--  -->
<template>
  <div class="wechat">
    <div class="evaluation">
      <div class="evleft">
        <ul>
          <li class="title">3.9</li>
          <li class="evrang">综合评分</li>
          <li class="mynear">高于周边商家69.2%</li>
        </ul>
      </div>
      <div class="evright">
        <start-item></start-item>
      </div>
    </div>
    <div class="line">

    </div>
    <section class="sellof">
      <header class="sell-el">
        <mt-button class="item" type="primary">全部</mt-button>
        <mt-button class="item"  type="default">满意</mt-button>
        <mt-button class="item" type="danger">不满意</mt-button>
      </header>
    </section>
    <section class="seelook">
      <article class="see-item">
          只看内容的评价
      </article>
    </section>
  </div>
</template>

<script>
import StartItem from './component/start'
export default {
  data () {
    return {
    };
  },

  components: {
    StartItem
  },

  computed: {},

  methods: {
    handleClick(){
      this.$toast("123")
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
@import '~styles/varibes.styl';
.evaluation
 margin-top: 0.2rem
 display: flex
 flex-direction: row
 div
 .evright
  flex: 2
 .evleft
  display: flex
  flex: 1.4
  justify-content: center
  text-align: center
  padding-top: 0.2rem
  box-sizing: border-box
  border-right: 1px solid #ccc
  ul
   li+li
    margin-top: 0.15rem
   .title
    font-size: 0.7rem
    color: $evcolor
   .evrang
    font-size: 0.3rem
    color: $evrang
   .mynear
    font-size: 0.26rem
    color: $mynear
.line
 width: 100%
 height: 0.4rem
 margin: 0.36rem 0
 background: #f2f2f2
.sellof
 width: 90%
 margin: 0 auto
 border-bottom: 1px solid #ccc
 padding-bottom: 0.36rem
 .sell-el
  .item
   margin-left: 0.1rem
.seelook
 width: 100%
 .see-item
  font-size: 0.35rem
  font-weight: 3rem
  color: rgb(147,153,159)
  padding: 0.36rem
  border-bottom: 1px solid #ccc
</style>